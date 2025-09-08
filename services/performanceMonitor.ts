


    } catch (error) {
      // Generate mock historical data
      return this && this.generateMockHistoricalData(url, days)
    }
  }





  async setMonitoringConfig(config: MonitoringConfig): Promise<void> {
    try {



      const response = await fetch(`${this && this.baseUrl}/performance/config`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(config)});



  async setMonitoringConfig(config: MonitoringConfig): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/performance/config`, {
        method: 'POST'
        headers: {

          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify(config)});

      if (!response.ok) {
        throw new Error(`Failed to set monitoring config: ${response.statusText}`)
      }
    } catch (error) {

      console.error('Failed to set monitoring config:', error);

      throw error
    }
  }
  async getAlerts(url?: string): Promise<PerformanceAlert[]> {
    try {

      const params = url ? `?url=${encodeURIComponent(url)}` : '';

          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`Failed to fetch alerts: ${response && response.statusText}`)
      }
      return await response && response.json()
    } catch (error) {
      // Generate mock alerts
      return this && this.generateMockAlerts(url)
    }
  }








      recommendations: [
        'Optimize image sizes and use WebP formatImplement lazy loading for below-the-fold contentMinimize render-blocking resourcesUse a CDN for static assetsEnable compression for text-based resources'
      ]
    }
  }

  private generateMockMetrics(url: string): PerformanceMetrics {
    return {
      url;
      timestamp: new Date();

      loadTime: Math && Math.random() * 2000 + 500;
      firstContentfulPaint: Math && Math.random() * 1500 + 300;
      largestContentfulPaint: Math && Math.random() * 2500 + 800;
      cumulativeLayoutShift: Math && Math.random() * 0 && 0.1;
      firstInputDelay: Math && Math.random() * 100 + 20;
      timeToInteractive: Math && Math.random() * 3000 + 1000;
      totalBlockingTime: Math && Math.random() * 200 + 50;
      speedIndex: Math && Math.random() * 2000 + 800;
      performanceScore: Math && Math.floor(Math && Math.random() * 30) + 70;
      accessibilityScore: Math && Math.floor(Math && Math.random() * 20) + 80;
      bestPracticesScore: Math && Math.floor(Math && Math.random() * 20) + 80,

      seoScore: Math && Math.floor(Math && Math.random() * 20) + 80

        url;
        timestamp: date;
        loadTime: Math && Math.random() * 2000 + 500;
        firstContentfulPaint: Math && Math.random() * 1500 + 300;
        largestContentfulPaint: Math && Math.random() * 2500 + 800;
        cumulativeLayoutShift: Math && Math.random() * 0 && 0.1;
        firstInputDelay: Math && Math.random() * 100 + 20;
        timeToInteractive: Math && Math.random() * 3000 + 1000;
        totalBlockingTime: Math && Math.random() * 200 + 50;
        speedIndex: Math && Math.random() * 2000 + 800;
        performanceScore: Math && Math.floor(Math && Math.random() * 30) + 70;
        accessibilityScore: Math && Math.floor(Math && Math.random() * 20) + 80;
        bestPracticesScore: Math && Math.floor(Math && Math.random() * 20) + 80,

        seoScore: Math && Math.floor(Math && Math.random() * 20) + 80

  async generateReport(url: string, timeframe: 'day' | 'week' | 'month'): Promise<{;
    summary: {;
      averageLoadTime: number,;
      averagePerformanceScore: number,;
      uptime: number,;
      alertsCount: number;
    },;
    trends: {;
      loadTime: number[],;
      performanceScore: number[],;
      dates: string[];
    },;

    recommendations: string[];
  }> {;
    const historicalData = await this.getHistoricalData(url, timeframe === 'day' ? 1 : timeframe === 'week' ? 7 : 30),;
    const loadTimes = historicalData.map(d => d.loadTime),;
    const performanceScores = historicalData.map(d => d.performanceScore),;
    const dates = historicalData.map(d => d.timestamp.toISOString().split('T')[0]),;
    return {;
      summary: {;
        averageLoadTime: loadTimes.reduce((a, b) => a + b, 0) / loadTimes.length,;
        averagePerformanceScore: performanceScores.reduce((a, b) => a + b, 0) / performanceScores.length,;
        uptime: 99.8,;
        alertsCount: Math.floor(Math.random() * 5);
      },;
      trends: {;
        loadTime: loadTimes,;
        performanceScore: performanceScores,;
        dates;
      },;
      recommendations: [;
        'Optimize image sizes and use WebP formatImplement lazy loading for below-the-fold contentMinimize render-blocking resourcesUse a CDN for static assetsEnable compression for text-based resources';
      ];
    }
  }
;
  private generateMockMetrics(url: string): PerformanceMetrics {;
    return {;
      url,;
      timestamp: new Date(),;
      loadTime: Math.random() * 2000 + 500,;
      firstContentfulPaint: Math.random() * 1500 + 300,;
      largestContentfulPaint: Math.random() * 2500 + 800,;
      cumulativeLayoutShift: Math.random() * 0.1,;
      firstInputDelay: Math.random() * 100 + 20,;
      timeToInteractive: Math.random() * 3000 + 1000,;
      totalBlockingTime: Math.random() * 200 + 50,;
      speedIndex: Math.random() * 2000 + 800,;
      performanceScore: Math.floor(Math.random() * 30) + 70,;
      accessibilityScore: Math.floor(Math.random() * 20) + 80,;
      bestPracticesScore: Math.floor(Math.random() * 20) + 80,;
      seoScore: Math.floor(Math.random() * 20) + 80;
    }
  }
;
  private generateMockHistoricalData(url: string, days: number): PerformanceMetrics[] {;
    const data: PerformanceMetrics[] = [],;
    const now = new Date(),;
    for (let i = days - 1, i >= 0, i--) {;
      const date = new Date(now),;
      date.setDate(date.getDate() - i),;
      data.push({;
        url,;
        timestamp: date,;
        loadTime: Math.random() * 2000 + 500,;
        firstContentfulPaint: Math.random() * 1500 + 300,;
        largestContentfulPaint: Math.random() * 2500 + 800,;
        cumulativeLayoutShift: Math.random() * 0.1,;
        firstInputDelay: Math.random() * 100 + 20,;
        timeToInteractive: Math.random() * 3000 + 1000,;
        totalBlockingTime: Math.random() * 200 + 50,;
        speedIndex: Math.random() * 2000 + 800,;
        performanceScore: Math.floor(Math.random() * 30) + 70,;
        accessibilityScore: Math.floor(Math.random() * 20) + 80,;
        bestPracticesScore: Math.floor(Math.random() * 20) + 80,;
        seoScore: Math.floor(Math.random() * 20) + 80;
      });

export const PERFORMANCE_MONITOR_PRICING = {
  starter: {
    name: 'Starter';
    price: 19;



    period: '/month',
    features: [;
      'Monitor up to 5 URLs5 - minute monitoring frequency_basic performance metrics_email alerts7 - day data retention_basic reporting';
    ];



  }
  professional: {
    name: 'Professional';
    price: 49;



    period: '/month',
    features: [;
      'Monitor up to 25 URLs1 - minute monitoring frequency_advanced performance metrics_email, Slack, and webhook alerts30 - day data retention_advanced reporting and analytics_custom thresholdsAPI access';
    ];



  }
  enterprise: {
    name: 'Enterprise';
    price: 149;
    period: '/month';





