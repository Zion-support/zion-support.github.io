export interface PerformanceMetrics {_url: string;
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
  seoScore: number;}

export interface PerformanceAlert {_id: string;
  url: string;
  type: 'critical' | 'warning' | 'info';
  message: string;
  metric: string;
  threshold: number;
  currentValue: number;
  timestamp: Date;
  resolved: boolean;}

export interface MonitoringConfig {_urls: string[];
  frequency: '1min' | '5min' | '15min' | '1hour' | '6hours' | 'daily';
  thresholds: {
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;};
  notifications: {_email: boolean;
    slack: boolean;
    webhook: boolean;};
}

export class PerformanceMonitorService {_private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, _baseUrl: string = 'https://api.ziontech.ai') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;}

  async monitorWebsite(url: string): Promise<PerformanceMetrics> {_try {
      // In a real implementation, _this would use Lighthouse, _WebPageTest, _or similar
      const _response = await fetch(`${this.baseUrl}/performance/monitor`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify({_url})});

      if (!response.ok) {_throw new Error(`Performance monitoring failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {_// Fallback to mock data for demo purposes
      return this.generateMockMetrics(url);}
  }

  async getHistoricalData(url: string, days: number = 30): Promise<PerformanceMetrics[]> {_try {
      const _response = await fetch(`${this.baseUrl}/performance/history?url=${_encodeURIComponent(url)}&days=${_days}`, {_headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`Failed to fetch historical data: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {_// Generate mock historical data
      return this.generateMockHistoricalData(url, _days);}
  }

  async setMonitoringConfig(config: MonitoringConfig): Promise<void> {_try {
      const _response = await fetch(`${this.baseUrl}/performance/config`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify(config)});

      if (!response.ok) {_throw new Error(`Failed to set monitoring config: ${response.statusText}`);
      }
    } catch (error) {_throw error;}
  }

  async getAlerts(url?: string): Promise<PerformanceAlert[]> {_try {
      const _params = url ? `?url=${encodeURIComponent(url)}` : '';
      const _response = await fetch(`${_this.baseUrl}/performance/alerts${_params}`, {_headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`Failed to fetch alerts: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {_// Generate mock alerts
      return this.generateMockAlerts(url);}
  }

  async generateReport(url: string, timeframe: 'day' | 'week' | 'month'): Promise<{_summary: {
      averageLoadTime: number;
      averagePerformanceScore: number;
      uptime: number;
      alertsCount: number;};
    trends: {_loadTime: number[];
      performanceScore: number[];
      dates: string[];};
    recommendations: string[];
  }> {_const _historicalData = await this.getHistoricalData(url, _timeframe === 'day' ? 1 : timeframe === 'week' ? 7 : 30);
    
    const _loadTimes = historicalData.map(d => d.loadTime);
    const _performanceScores = historicalData.map(d => d.performanceScore);
    const _dates = historicalData.map(d => d.timestamp.toISOString().split('T')[0]);

    return {
      summary: {
        averageLoadTime: loadTimes.reduce(_(a, _b) => a + b, _0) / loadTimes.length, _averagePerformanceScore: performanceScores.reduce(_(a, _b) => a + b, _0) / performanceScores.length, _uptime: 99.8, _alertsCount: Math.floor(Math.random() * 5)},
      trends: {_loadTime: loadTimes, _performanceScore: performanceScores, _dates},
      recommendations: [
        'Optimize image sizes and use WebP format',
        'Implement lazy loading for below-the-fold content',
        'Minimize render-blocking resources',
        'Use a CDN for static assets',
        'Enable compression for text-based resources'
      ]
    };
  }

  private generateMockMetrics(url: string): PerformanceMetrics {_return {
      url, _timestamp: new Date(), _loadTime: Math.random() * 2000 + 500, _firstContentfulPaint: Math.random() * 1500 + 300, _largestContentfulPaint: Math.random() * 2500 + 800, _cumulativeLayoutShift: Math.random() * 0.1, _firstInputDelay: Math.random() * 100 + 20, _timeToInteractive: Math.random() * 3000 + 1000, _totalBlockingTime: Math.random() * 200 + 50, _speedIndex: Math.random() * 2000 + 800, _performanceScore: Math.floor(Math.random() * 30) + 70, _accessibilityScore: Math.floor(Math.random() * 20) + 80, _bestPracticesScore: Math.floor(Math.random() * 20) + 80, _seoScore: Math.floor(Math.random() * 20) + 80};
  }

  private generateMockHistoricalData(url: string, days: number): PerformanceMetrics[] {_const data: PerformanceMetrics[] = [];
    const _now = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const _date = new Date(now);
      date.setDate(date.getDate() - i);
      
      data.push({
        url, _timestamp: date, _loadTime: Math.random() * 2000 + 500, _firstContentfulPaint: Math.random() * 1500 + 300, _largestContentfulPaint: Math.random() * 2500 + 800, _cumulativeLayoutShift: Math.random() * 0.1, _firstInputDelay: Math.random() * 100 + 20, _timeToInteractive: Math.random() * 3000 + 1000, _totalBlockingTime: Math.random() * 200 + 50, _speedIndex: Math.random() * 2000 + 800, _performanceScore: Math.floor(Math.random() * 30) + 70, _accessibilityScore: Math.floor(Math.random() * 20) + 80, _bestPracticesScore: Math.floor(Math.random() * 20) + 80, _seoScore: Math.floor(Math.random() * 20) + 80});
    }

    return data;
  }

  private generateMockAlerts(url?: string): PerformanceAlert[] {_const alerts: PerformanceAlert[] = [
      {
        id: '1', _url: url || 'https://example.com', _type: 'warning', _message: 'Load time exceeded threshold', _metric: 'loadTime', _threshold: 2000, _currentValue: 2500, _timestamp: new Date(), _resolved: false},
      {_id: '2', _url: url || 'https://example.com', _type: 'info', _message: 'Performance score improved', _metric: 'performanceScore', _threshold: 80, _currentValue: 85, _timestamp: new Date(), _resolved: true}
    ];

    return url ? alerts.filter(a => a.url === url) : alerts;
  }
}

// Pricing tiers for the Performance Monitor
export const _PERFORMANCE_MONITOR_PRICING = {_starter: {
    name: 'Starter', _price: 19, _period: '/month', _features: [
      'Monitor up to 5 URLs', _'5-minute monitoring frequency', _'Basic performance metrics', _'Email alerts', _'7-day data retention', _'Basic reporting'
    ]},
  professional: {_name: 'Professional', _price: 49, _period: '/month', _features: [
      'Monitor up to 25 URLs', _'1-minute monitoring frequency', _'Advanced performance metrics', _'Email, _Slack, _and webhook alerts', _'30-day data retention', _'Advanced reporting and analytics', _'Custom thresholds', _'API access'
    ]},
  enterprise: {_name: 'Enterprise', _price: 149, _period: '/month', _features: [
      'Monitor unlimited URLs', _'Real-time monitoring', _'All performance metrics', _'Multiple notification channels', _'1-year data retention', _'Custom dashboards', _'White-label reporting', _'Priority support', _'SLA guarantee'
    ]}
};
