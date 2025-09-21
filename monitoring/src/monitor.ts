import { measureLatency, Endpoint, EndpointTestResult } from './latencyTester';
import { Alerter } from './alerter';
import * as fs from 'fs';
import * as path from 'path';

// Define the structure of the configuration file
interface MonitoringConfig {
  alertThresholdMs: number;
  consecutiveChecksLimit: number;
  alertChannels: string[];
  endpoints: Endpoint[];
  checkIntervalMs: number;
}

// Stub logger
const logger = {
  error: (message: string, error?: any) => console.error(message, error),
  info: (message: string) => console.log(message),
};

export class Monitor {
  private config: MonitoringConfig;
  private alerter: Alerter;
  private isRunning: boolean = false;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(configPath: string) {
    this.config = this.loadConfig(configPath);
    this.alerter = new Alerter(configPath);
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

  public async start(): Promise<void> {
    if (this.isRunning) {
      logger.info('Monitor is already running');
      return;
    }

    this.isRunning = true;
    logger.info('Starting monitoring...');

    // Run initial check
    await this.runCheck();

    // Set up interval for periodic checks
    this.intervalId = setInterval(async () => {
      await this.runCheck();
    }, this.config.checkIntervalMs);
  }

  public stop(): void {
    if (!this.isRunning) {
      return;
    }

    this.isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    logger.info('Monitoring stopped');
  }

  private async runCheck(): Promise<void> {
    try {
      logger.info('Running endpoint checks...');
      
      const results: EndpointTestResult[] = [];
      
      for (const endpoint of this.config.endpoints) {
        try {
          const result = await measureLatency(endpoint);
          results.push(result);
          
          if (result.error) {
            logger.error(`Endpoint ${endpoint.name} failed: ${result.error}`);
          } else {
            logger.info(`Endpoint ${endpoint.name}: ${result.latencyMs}ms`);
          }
        } catch (error) {
          logger.error(`Error testing endpoint ${endpoint.name}:`, error);
        }
      }
      
      // Check for alerts
      await this.alerter.checkAndAlert(results);
      
    } catch (error) {
      logger.error('Error during monitoring check:', error);
    }
  }

  public getStatus(): { isRunning: boolean; endpoints: number } {
    return {
      isRunning: this.isRunning,
      endpoints: this.config.endpoints.length,
    };
  }
}

// Export function for backward compatibility
export async function triggerAlerts(results: EndpointTestResult[]): Promise<void> {
  // This function is kept for backward compatibility
  logger.info(`Triggering alerts for ${results.length} results`);
}