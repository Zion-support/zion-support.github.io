// Utility file: performanceMonitoring

export interface MonitoringConfig {
  enabled: boolean;
  sampleRate: number;
  endpoint?: string;
}

export class PerformanceMonitoring {
  private config: MonitoringConfig;
  private observer?: PerformanceObserver;

  constructor(config: MonitoringConfig = { enabled: true, sampleRate: 1.0 }) {
    this.config = config;
  }

  startMonitoring(): void {
    if (!this.config.enabled || typeof window === 'undefined') return;

    try {
      this.observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (Math.random() <= this.config.sampleRate) {
            this.recordEntry(entry);
          }
        });
      });

      this.observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }

  stopMonitoring(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }

  private recordEntry(entry: PerformanceEntry): void {
    const data = {
      name: entry.name,
      type: entry.entryType,
      startTime: entry.startTime,
      duration: entry.duration,
      timestamp: Date.now()
    };

    if (this.config.endpoint) {
      this.sendData(data);
    }
  }

  private async sendData(data: unknown): Promise<void> {
    try {
      if (this.config.endpoint) {
        await fetch(this.config.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      }
    } catch (error) {
      console.error('Failed to send performance data:', error);
    }
  }
}

export const performanceMonitoring = new PerformanceMonitoring();