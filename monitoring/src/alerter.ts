import { exec } from 'child_process';
import axios from 'axios';
// Stub logger
const logger = {
  error: (message: string, error?: any) => console.error(message, error),
  info: (message: string) => console.log(message),
};
import { EndpointTestResult } from './latencyTester';
import * as fs from 'fs';
import * as path from 'path';

// Define the structure of the configuration file
interface MonitoringConfig {
  alertThresholdMs: number;
  consecutiveChecksLimit: number;
  alertChannels: string[];
  endpoints: string[];
}

// Define the structure of the alert state file
interface AlertState {
  lastAlertTime: number;
  consecutiveFailures: number;
  isAlerting: boolean;
}

export class Alerter {
  private config: MonitoringConfig;
  private alertStateFile: string;

  constructor(configPath: string) {
    this.config = this.loadConfig(configPath);
    this.alertStateFile = path.join(path.dirname(configPath), 'alert-state.json');
  }

  private loadConfig(configPath: string): MonitoringConfig {
    try {
      const configData = fs.readFileSync(configPath, 'utf8');
      return JSON.parse(configData);
    } catch (error) {
      logger.error('Failed to load monitoring config:', error);
      throw error;
    }
  }

  private loadAlertState(): AlertState {
    try {
      if (fs.existsSync(this.alertStateFile)) {
        const stateData = fs.readFileSync(this.alertStateFile, 'utf8');
        return JSON.parse(stateData);
      }
    } catch (error) {
      logger.error('Failed to load alert state:', error);
    }
    return {
      lastAlertTime: 0,
      consecutiveFailures: 0,
      isAlerting: false
    };
  }

  private saveAlertState(state: AlertState): void {
    try {
      fs.writeFileSync(this.alertStateFile, JSON.stringify(state, null, 2));
    } catch (error) {
      logger.error('Failed to save alert state:', error);
    }
  }

  public async checkAndAlert(results: EndpointTestResult[]): Promise<void> {
    const state = this.loadAlertState();
    const now = Date.now();

    // Check if any endpoint failed
    const failedEndpoints = results.filter(result => result.error || (result.latencyMs && result.latencyMs > this.config.alertThresholdMs));

    if (failedEndpoints.length > 0) {
      state.consecutiveFailures++;
      
      if (state.consecutiveFailures >= this.config.consecutiveChecksLimit) {
        if (!state.isAlerting || (now - state.lastAlertTime) > 300000) { // 5 minutes
          await this.sendAlert(failedEndpoints);
          state.lastAlertTime = now;
          state.isAlerting = true;
        }
      }
    } else {
      state.consecutiveFailures = 0;
      state.isAlerting = false;
    }

    this.saveAlertState(state);
  }

  private async sendAlert(failedEndpoints: EndpointTestResult[]): Promise<void> {
    const message = this.formatAlertMessage(failedEndpoints);
    
    for (const channel of this.config.alertChannels) {
      try {
        await this.sendToChannel(channel, message);
      } catch (error) {
        logger.error(`Failed to send alert to ${channel}:`, error);
      }
    }
  }

  private formatAlertMessage(failedEndpoints: EndpointTestResult[]): string {
    let message = '🚨 Monitoring Alert: Endpoint failures detected\n\n';
    
    failedEndpoints.forEach(endpoint => {
      message += `• ${endpoint.name}: ${endpoint.error ? 'Failed' : 'High latency'} (${endpoint.latencyMs || 0}ms)\n`;
    });
    
    message += `\nTime: ${new Date().toISOString()}`;
    return message;
  }

  private async sendToChannel(channel: string, message: string): Promise<void> {
    // Implement channel-specific sending logic
    logger.info(`Sending alert to ${channel}: ${message}`);
  }
}