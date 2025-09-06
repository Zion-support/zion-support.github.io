export interface PerformanceMetrics {
  url: string;
  timestamp: Date;
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  totalBlockingTime: number;
  speedIndex: number;
  performanceScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  seoScore: number
}

export interface PerformanceAlert {
  id: string;
  url: string;
  type: 'critical' | 'warning' | 'info';
  message: string;
  metric: string;
  threshold: number;
  currentValue: number;
  timestamp: Date;
  resolved: boolean
}

export interface MonitoringConfig {
  urls: string[];
  frequency: '1min' | '5min' | '15min' | '1hour' | '6hours' | 'daily';
  thresholds: {
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number
  },
  notifications: {
    email: boolean;
    slack: boolean;
    webhook: boolean
  }
}

export class PerformanceMonitorService {
  private apiKey: string;
  private baseUrl: string;
  constructor(apiKey: string, baseUrl: string;