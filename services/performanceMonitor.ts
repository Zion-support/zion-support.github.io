<<<<<<< HEAD
export interface PerformanceMetrics {
  url: string,
  timestamp: Date,
  loadTime: number,
  firstContentfulPaint: number,
  largestContentfulPaint: number,
  cumulativeLayoutShift: number,
  firstInputDelay: number,
  timeToInteractive: number,
  totalBlockingTime: number,
  speedIndex: number,
  performanceScore: number,
  accessibilityScore: number,
  bestPracticesScore: number,
  seoScore: number
}

export interface PerformanceAlert {
  id: string,
  url: string,
  type: 'critical' | 'warning' | 'info',
  message: string,
  metric: string,
  threshold: number,
  currentValue: number,
  timestamp: Date,
  resolved: boolean
}

export interface MonitoringConfig {
  urls: string[],
  frequency: '1min' | '5min' | '15min' | '1hour' | '6hours' | 'daily',
  thresholds: {
    loadTime: number,
    firstContentfulPaint: number,
    largestContentfulPaint: number,
    cumulativeLayoutShift: number
  },
  notifications: {
    email: boolean,
    slack: boolean,
    webhook: boolean
  }
}

export class PerformanceMonitorService {
  private apiKey: string,
  private baseUrl: string,

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontech.ai') {
    this.apiKey = apiKey,
    this.baseUrl = baseUrl
  }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  async monitorWebsite(url: string): Promise<PerformanceMetrics> {_try {
      // In a real implementation, _this would use Lighthouse, _WebPageTest, _or similar
      const _response = await fetch(`${this.baseUrl}/performance/monitor`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
<<<<<<< HEAD
        body: JSON.stringify({ url })}),

      if (!response.ok) {
        throw new Error(`Performance monitoring failed: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Fallback to mock data for demo purposes
      return this.generateMockMetrics(url)
    }
  }

  async getHistoricalData(url: string, days: number = 30): Promise<PerformanceMetrics[]> {
    try {
      const response = await fetch(`${this.baseUrl}/performance/history?url=${encodeURIComponent(url)}&days=${days}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}}),

      if (!response.ok) {
        throw new Error(`Failed to fetch historical data: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Generate mock historical data
      return this.generateMockHistoricalData(url, days)
    }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  async setMonitoringConfig(config: MonitoringConfig): Promise<void> {_try {
      const _response = await fetch(`${this.baseUrl}/performance/config`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify(config)}),

<<<<<<< HEAD
      if (!response.ok) {
        throw new Error(`Failed to set monitoring config: ${response.statusText}`)
      }
    } catch (error) {
      console.error('Failed to set monitoring config:', error),
      throw error
    }
  }

  async getAlerts(url?: string): Promise<PerformanceAlert[]> {
    try {
      const params = url ? `?url=${encodeURIComponent(url)}` : '',
      const response = await fetch(`${this.baseUrl}/performance/alerts${params}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}}),

      if (!response.ok) {
        throw new Error(`Failed to fetch alerts: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Generate mock alerts
      return this.generateMockAlerts(url)
    }
  }

  async generateReport(url: string, timeframe: 'day' | 'week' | 'month'): Promise<{
    summary: {
      averageLoadTime: number,
      averagePerformanceScore: number,
      uptime: number,
      alertsCount: number
    },
    trends: {
      loadTime: number[],
      performanceScore: number[],
      dates: string[]
    },
    recommendations: string[]
  }> {
    const historicalData = await this.getHistoricalData(url, timeframe === 'day' ? 1 : timeframe === 'week' ? 7 : 30),
    
    const loadTimes = historicalData.map(d => d.loadTime),
    const performanceScores = historicalData.map(d => d.performanceScore),
    const dates = historicalData.map(d => d.timestamp.toISOString().split('T')[0]),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return {
      summary: {
        averageLoadTime: loadTimes.reduce(_(a, _b) => a + b, _0) / loadTimes.length, _averagePerformanceScore: performanceScores.reduce(_(a, _b) => a + b, _0) / performanceScores.length, _uptime: 99.8, _alertsCount: Math.floor(Math.random() * 5)},
      trends: {_loadTime: loadTimes, _performanceScore: performanceScores, _dates},
      recommendations: [
        'Optimize image sizes and use WebP formatImplement lazy loading for below-the-fold contentMinimize render-blocking resourcesUse a CDN for static assetsEnable compression for text-based resources'
      ]
    }
  }

<<<<<<< HEAD
  private generateMockMetrics(url: string): PerformanceMetrics {
    return {
      url,
      timestamp: new Date(),
      loadTime: Math.random() * 2000 + 500,
      firstContentfulPaint: Math.random() * 1500 + 300,
      largestContentfulPaint: Math.random() * 2500 + 800,
      cumulativeLayoutShift: Math.random() * 0.1,
      firstInputDelay: Math.random() * 100 + 20,
      timeToInteractive: Math.random() * 3000 + 1000,
      totalBlockingTime: Math.random() * 200 + 50,
      speedIndex: Math.random() * 2000 + 800,
      performanceScore: Math.floor(Math.random() * 30) + 70,
      accessibilityScore: Math.floor(Math.random() * 20) + 80,
      bestPracticesScore: Math.floor(Math.random() * 20) + 80,
      seoScore: Math.floor(Math.random() * 20) + 80
    }
  }

  private generateMockHistoricalData(url: string, days: number): PerformanceMetrics[] {
    const data: PerformanceMetrics[] = [],
    const now = new Date(),

    for (let i = days - 1, i >= 0, i--) {
      const date = new Date(now),
      date.setDate(date.getDate() - i),
      
      data.push({
        url,
        timestamp: date,
        loadTime: Math.random() * 2000 + 500,
        firstContentfulPaint: Math.random() * 1500 + 300,
        largestContentfulPaint: Math.random() * 2500 + 800,
        cumulativeLayoutShift: Math.random() * 0.1,
        firstInputDelay: Math.random() * 100 + 20,
        timeToInteractive: Math.random() * 3000 + 1000,
        totalBlockingTime: Math.random() * 200 + 50,
        speedIndex: Math.random() * 2000 + 800,
        performanceScore: Math.floor(Math.random() * 30) + 70,
        accessibilityScore: Math.floor(Math.random() * 20) + 80,
        bestPracticesScore: Math.floor(Math.random() * 20) + 80,
        seoScore: Math.floor(Math.random() * 20) + 80
      })
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    return data
  }

  private generateMockAlerts(url?: string): PerformanceAlert[] {_const alerts: PerformanceAlert[] = [
      {
<<<<<<< HEAD
        id: '1',
        url: url || 'https://example.com',
        type: 'warning',
        message: 'Load time exceeded threshold',
        metric: 'loadTime',
        threshold: 2000,
        currentValue: 2500,
        timestamp: new Date(),
        resolved: false
      },
      {
        id: '2',
        url: url || 'https://example.com',
        type: 'info',
        message: 'Performance score improved',
        metric: 'performanceScore',
        threshold: 80,
        currentValue: 85,
        timestamp: new Date(),
        resolved: true
      }
    ],
=======
        id: '1', _url: url || 'https://example.com', _type: 'warning', _message: 'Load time exceeded threshold', _metric: 'loadTime', _threshold: 2000, _currentValue: 2500, _timestamp: new Date(), _resolved: false},
      {_id: '2', _url: url || 'https://example.com', _type: 'info', _message: 'Performance score improved', _metric: 'performanceScore', _threshold: 80, _currentValue: 85, _timestamp: new Date(), _resolved: true}
    ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return url ? alerts.filter(a => a.url === url) : alerts
  }
}

// Pricing tiers for the Performance Monitor
<<<<<<< HEAD
export const PERFORMANCE_MONITOR_PRICING = {
  starter: {
    name: 'Starter',
    price: 19,
    period: '/month',
    features: [
      'Monitor up to 5 URLs5-minute monitoring frequencyBasic performance metricsEmail alerts7-day data retentionBasic reporting'
    ]
  },
  professional: {
    name: 'Professional',
    price: 49,
    period: '/month',
    features: [
      'Monitor up to 25 URLs1-minute monitoring frequencyAdvanced performance metricsEmail, Slack, and webhook alerts30-day data retentionAdvanced reporting and analyticsCustom thresholdsAPI access'
    ]
  },
  enterprise: {
    name: 'Enterprise',
    price: 149,
    period: '/month',
    features: [
      'Monitor unlimited URLsReal-time monitoringAll performance metricsMultiple notification channels1-year data retentionCustom dashboardsWhite-label reportingPriority support',
      'SLA guarantee'
    ]
  }
},
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
