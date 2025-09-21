import { exec } from 'child_process';
import axios from 'axios';
<<<<<<< HEAD
import logger from './logger';
=======
// Stub logger
const logger = {
  error: (message: string, error?: any) => console.error(message, error),
  info: (message: string) => console.log(message),
};
>>>>>>> 82689a4cb07645633bb2f61079b0d20275046e16
import { EndpointTestResult } from './latencyTester';
import * as fs from 'fs';
import * as path from 'path';

// Define the structure of the configuration file
interface MonitoringConfig {
  alertThresholdMs: number;
  consecutiveChecksLimit: number;
<<<<<<< HEAD
  // We don't need the full endpoints array structure here, just the thresholds
}

// Function to read and parse the configuration file for alert thresholds
function loadAlertConfig(): { alertThresholdMs: number, consecutiveChecksLimit: number } {
  const configPath = path.join(__dirname, '../../monitoring-config.json'); // Adjust path as necessary
  try {
    const configFile = fs.readFileSync(configPath, 'utf-8');
    const parsedConfig = JSON.parse(configFile) as MonitoringConfig;
    return {
      alertThresholdMs: parsedConfig.alertThresholdMs,
      consecutiveChecksLimit: parsedConfig.consecutiveChecksLimit
    };
  } catch (error) {
    logger.error('Error reading or parsing monitoring-config.json in alerter.ts: ' + error);
    // Return default values if config loading fails
    return {
      alertThresholdMs: 1000, // Default threshold
      consecutiveChecksLimit: 3 // Default limit
    };
  }
}

const { alertThresholdMs: ALERT_THRESHOLD_MS, consecutiveChecksLimit: CONSECUTIVE_CHECKS_LIMIT } = loadAlertConfig();
const ALERT_WEBHOOK_URL = process.env.ALERT_WEBHOOK_URL;
// Map to store consecutive high latency counts for each endpoint
const alertConsecutiveCounts: Map<string, number> = new Map();

// sendWebhookNotification remains unchanged from the previous version
async function sendWebhookNotification(result: EndpointTestResult, messageSuffix: string = "Attempting service remediation... (if applicable)"): Promise<void> {
  if (!ALERT_WEBHOOK_URL) {
    logger.warn('ALERT_WEBHOOK_URL is not set. Skipping notification.');
    return;
  }

  // Ensure serviceName is included in the webhook if available
  const serviceNameText = result.serviceName ? `\nService: \`${result.serviceName}\`` : "";
  const payload = {
    text: `🚨 High Latency Alert 🚨
Endpoint: \`${result.name}\` (\`${result.url}\`)
Method: \`${result.method}\`
Latency: \`${result.latencyMs}ms\` (Threshold: \`${ALERT_THRESHOLD_MS}ms\`)
Status: \`${result.status}\`
Timestamp: \`${result.timestamp}\`${serviceNameText}
${messageSuffix}`, // Use the dynamic message suffix
    // Add more structured data if your webhook receiver supports it (e.g., Slack blocks)
  };

  try {
    logger.info(`Sending webhook notification for ${result.name} (Service: ${result.serviceName || 'N/A'}) to ${ALERT_WEBHOOK_URL}`);
    await axios.post(ALERT_WEBHOOK_URL, payload, { timeout: 10000 });
    logger.info(`Webhook notification sent successfully for ${result.name} (Service: ${result.serviceName || 'N/A'}).`);
  } catch (error) {
    let errorMessage = 'Unknown error';
    if (axios.isAxiosError(error)) {
      errorMessage = error.message;
      if (error.response) {
        logger.error('Notification failed with response: ' + JSON.stringify({
          status: error.response.status, data: error.response.data
        }));
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    logger.error(`Failed to send notification. Error: ${errorMessage}`);
  }
}

export async function triggerAlerts(result: EndpointTestResult): Promise<void> {
  // If the test resulted in an error or latency couldn't be measured, reset consecutive count and do nothing.
  if (result.error || typeof result.latencyMs === 'undefined') {
    logger.debug(`Test for ${result.name} resulted in error or no latency. Resetting consecutive count.`);
    alertConsecutiveCounts.set(result.name, 0);
    return;
  }

  if (result.latencyMs > ALERT_THRESHOLD_MS) {
    const currentCount = (alertConsecutiveCounts.get(result.name) || 0) + 1;
    alertConsecutiveCounts.set(result.name, currentCount);
    if (currentCount >= CONSECUTIVE_CHECKS_LIMIT) {
      logger.warn(`High latency ALERT for ${result.name} (${result.url}): ${result.latencyMs}ms. Consecutive count: ${currentCount}/${CONSECUTIVE_CHECKS_LIMIT}. Threshold met.`);
      const serviceName = result.serviceName;
      let webhookMessageSuffix: string = "Attempting service remediation..."; // Default suffix

      if (serviceName) {
        // Remediation will be attempted
        logger.info(`High latency alert for ${result.name}. ${webhookMessageSuffix}`);
        await sendWebhookNotification(result, webhookMessageSuffix);
        // Construct path to the remediation script
        const remediationScriptPath = path.join(__dirname, '../remediate.sh');
        // Ensure arguments are quoted to handle spaces or special characters
        const command = `bash "${remediationScriptPath}" "${serviceName}" "${result.url}" "${result.latencyMs || 0}"`;

        logger.info(`Attempting to execute remediation script for ${serviceName}: ${command}`);
        exec(command, (error, stdout, stderr) => {
          if (error) {
            logger.error(`Remediation script error for ${serviceName} ('${result.name}'): ${error.message} - ${JSON.stringify({ command, stdout, stderr })}`);
            // Optionally send another webhook if remediation script fails
            return;
          }
          if (stderr) {
            logger.warn(`Remediation script for ${serviceName} ('${result.name}') produced stderr: ${stderr} - ${JSON.stringify({ command, stdout })}`);
          }
          logger.info(`Remediation script for ${serviceName} ('${result.name}') executed. Output: ${stdout}`);
        });
      } else {
        // No serviceName, so no remediation script to call.
        webhookMessageSuffix = "No specific serviceName defined for remediation.";
        logger.warn(`High latency alert for ${result.name}. ${webhookMessageSuffix} No remediation attempted.`);
        await sendWebhookNotification(result, webhookMessageSuffix);
=======
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
>>>>>>> 82689a4cb07645633bb2f61079b0d20275046e16
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

<<<<<<< HEAD
      // Reset count after alert and remediation attempt (or decision not to attempt)
      alertConsecutiveCounts.set(result.name, 0);
    } else {
      logger.warn(`High latency detected for ${result.name} (${result.url}): ${result.latencyMs}ms. Consecutive count: ${currentCount}/${CONSECUTIVE_CHECKS_LIMIT}. No alert triggered yet.`);
    }
  } else {
    // Latency is fine, reset consecutive count for this endpoint.
    if (alertConsecutiveCounts.get(result.name) !== 0) { // Only log if it was previously not 0
        logger.info(`Latency for ${result.name} is normal (${result.latencyMs}ms). Resetting consecutive count.`);
    }
    alertConsecutiveCounts.set(result.name, 0);
=======
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
>>>>>>> 82689a4cb07645633bb2f61079b0d20275046e16
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