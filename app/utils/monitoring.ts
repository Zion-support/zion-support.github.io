// Utility file: monitoring

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  unit?: string;
}

export interface MonitoringConfig {
  enabled: boolean;
  sampleRate: number;
  endpoint?: string;
}

export class Monitoring {
  private config: MonitoringConfig;
  private metrics: PerformanceMetric[] = [];

  constructor(config: MonitoringConfig = { enabled: true, sampleRate: 1.0 }) {
    this.config = config;
  }

  recordMetric(name: string, value: number, unit?: string): void {
    if (!this.config.enabled || Math.random() > this.config.sampleRate) {
      return;
    }

    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now(),
      unit
    };

    this.metrics.push(metric);

    // Send to monitoring service if endpoint is configured
    if (this.config.endpoint) {
      this.sendMetric(metric);
    }
  }

  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  clearMetrics(): void {
    this.metrics = [];
  }

  private async sendMetric(metric: PerformanceMetric): Promise<void> {
    try {
      if (this.config.endpoint) {
        await fetch(this.config.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(metric),
        });
      }
    } catch (error) {
      console.error('Failed to send metric:', error);
    }
  }
}

export const monitoring = new Monitoring();