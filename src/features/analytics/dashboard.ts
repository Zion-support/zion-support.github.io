import { useState, useEffect, useCallback } from 'react';

interface AnalyticsMetric {
  id: string;
  name: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
  format: 'number' | 'percentage' | 'currency' | 'duration';
  category: string;
  timestamp: Date;
}

interface AnalyticsChart {
  id: string;
  title: string;
  type: 'line' | 'bar' | 'pie' | 'area' | 'scatter';
  data: any[];
  xAxis?: string;
  yAxis?: string;
  colors?: string[];
}

interface AnalyticsDashboard {
  metrics: AnalyticsMetric[];
  charts: AnalyticsChart[];
  realTimeData: boolean;
  autoRefresh: boolean;
  refreshInterval: number;
}

interface UserBehaviorEvent {
  userId: string;
  eventType: string;
  eventData: any;
  timestamp: Date;
  sessionId: string;
  pageUrl: string;
  userAgent: string;
}

export class AdvancedAnalyticsDashboard {
  private metrics: Map<string, AnalyticsMetric> = new Map();
  private charts: Map<string, AnalyticsChart> = new Map();
  private userEvents: UserBehaviorEvent[] = [];
  private realTimeConnection: WebSocket | null = null;
  private refreshInterval: NodeJS.Timeout | null = null;
  private listeners: Array<(dashboard: AnalyticsDashboard) => void> = [];
  
  constructor() {
    this.initializeDashboard();
    this.connectRealTimeData();
    this.startAutoRefresh();
  }
  
  private async initializeDashboard(): Promise<void> {
    try {
      // Load initial metrics
      await this.loadMetrics();
      
      // Load initial charts
      await this.loadCharts();
      
      // Load user behavior events
      await this.loadUserEvents();
      
      this.notifyListeners();
    } catch (error) {
      console.error('Failed to initialize analytics dashboard:', error);
    }
  }
  
  private async loadMetrics(): Promise<void> {
    try {
      const response = await fetch('/api/analytics/metrics');
      if (response.ok) {
        const metricsData = await response.json();
        metricsData.forEach((metric: any) => {
          this.metrics.set(metric.id, {
            ...metric,
            timestamp: new Date(metric.timestamp)
          });
        });
      }
    } catch (error) {
      console.error('Failed to load metrics:', error);
    }
  }
  
  private async loadCharts(): Promise<void> {
    try {
      const response = await fetch('/api/analytics/charts');
      if (response.ok) {
        const chartsData = await response.json();
        chartsData.forEach((chart: any) => {
          this.charts.set(chart.id, chart);
        });
      }
    } catch (error) {
      console.error('Failed to load charts:', error);
    }
  }
  
  private async loadUserEvents(): Promise<void> {
    try {
      const response = await fetch('/api/analytics/user-events');
      if (response.ok) {
        const eventsData = await response.json();
        this.userEvents = eventsData.map((event: any) => ({
          ...event,
          timestamp: new Date(event.timestamp)
        }));
      }
    } catch (error) {
      console.error('Failed to load user events:', error);
    }
  }
  
  private connectRealTimeData(): void {
    try {
      this.realTimeConnection = new WebSocket('wss://api.ziontechgroup.com/analytics/realtime');
      
      this.realTimeConnection.onopen = () => {
        console.log('📊 Connected to analytics real-time data');
      };
      
      this.realTimeConnection.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          this.handleRealTimeUpdate(data);
        } catch (error) {
          console.error('Failed to parse real-time analytics data:', error);
        }
      };
      
      this.realTimeConnection.onclose = () => {
        console.log('📊 Analytics real-time connection closed');
        setTimeout(() => this.connectRealTimeData(), 5000);
      };
      
      this.realTimeConnection.onerror = (error) => {
        console.error('Analytics WebSocket error:', error);
      };
    } catch (error) {
      console.error('Failed to connect to analytics real-time data:', error);
    }
  }
  
  private handleRealTimeUpdate(data: any): void {
    switch (data.type) {
      case 'metric_update':
        this.updateMetric(data.metric);
        break;
      case 'chart_update':
        this.updateChart(data.chart);
        break;
      case 'user_event':
        this.addUserEvent(data.event);
        break;
    }
    
    this.notifyListeners();
  }
  
  private updateMetric(metricData: any): void {
    const metric: AnalyticsMetric = {
      ...metricData,
      timestamp: new Date()
    };
    this.metrics.set(metric.id, metric);
  }
  
  private updateChart(chartData: any): void {
    this.charts.set(chartData.id, chartData);
  }
  
  public addUserEvent(event: Omit<UserBehaviorEvent, 'timestamp'>): void {
    const userEvent: UserBehaviorEvent = {
      ...event,
      timestamp: new Date()
    };
    
    this.userEvents.unshift(userEvent);
    
    // Keep only last 1000 events
    if (this.userEvents.length > 1000) {
      this.userEvents = this.userEvents.slice(0, 1000);
    }
    
    // Send to server
    this.sendUserEventToServer(userEvent);
  }
  
  private async sendUserEventToServer(event: UserBehaviorEvent): Promise<void> {
    try {
      await fetch('/api/analytics/user-events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.error('Failed to send user event to server:', error);
    }
  }
  
  private startAutoRefresh(): void {
    this.refreshInterval = setInterval(() => {
      this.loadMetrics();
      this.loadCharts();
    }, 30000); // Refresh every 30 seconds
  }
  
  public stopAutoRefresh(): void {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
      this.refreshInterval = null;
    }
  }
  
  public getDashboard(): AnalyticsDashboard {
    return {
      metrics: Array.from(this.metrics.values()),
      charts: Array.from(this.charts.values()),
      realTimeData: this.realTimeConnection?.readyState === WebSocket.OPEN,
      autoRefresh: this.refreshInterval !== null,
      refreshInterval: 30000
    };
  }
  
  public getMetricsByCategory(category: string): AnalyticsMetric[] {
    return Array.from(this.metrics.values()).filter(metric => metric.category === category);
  }
  
  public getUserEventsByType(eventType: string): UserBehaviorEvent[] {
    return this.userEvents.filter(event => event.eventType === eventType);
  }
  
  public getRecentUserEvents(limit: number = 50): UserBehaviorEvent[] {
    return this.userEvents.slice(0, limit);
  }
  
  public generateInsights(): string[] {
    const insights: string[] = [];
    const metrics = Array.from(this.metrics.values());
    
    // Analyze metric trends
    metrics.forEach(metric => {
      if (metric.change > 10) {
        insights.push(`${metric.name} has increased by ${metric.change}% in the last period`);
      } else if (metric.change < -10) {
        insights.push(`${metric.name} has decreased by ${Math.abs(metric.change)}% in the last period`);
      }
    });
    
    // Analyze user behavior
    const recentEvents = this.getRecentUserEvents(100);
    const eventTypes = recentEvents.reduce((acc, event) => {
      acc[event.eventType] = (acc[event.eventType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const topEventType = Object.entries(eventTypes).reduce((a, b) => eventTypes[a[0]] > eventTypes[b[0]] ? a : b);
    if (topEventType) {
      insights.push(`Most common user action: ${topEventType[0]} (${topEventType[1]} times)`);
    }
    
    return insights;
  }
  
  public exportData(format: 'json' | 'csv' = 'json'): string {
    const dashboard = this.getDashboard();
    
    if (format === 'csv') {
      // Convert to CSV format
      const csvLines = ['Metric Name,Value,Change,Category'];
      dashboard.metrics.forEach(metric => {
        csvLines.push(`${metric.name},${metric.value},${metric.change},${metric.category}`);
      });
      return csvLines.join('\n');
    } else {
      return JSON.stringify(dashboard, null, 2);
    }
  }
  
  public addListener(listener: (dashboard: AnalyticsDashboard) => void): void {
    this.listeners.push(listener);
  }
  
  public removeListener(listener: (dashboard: AnalyticsDashboard) => void): void {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }
  
  private notifyListeners(): void {
    const dashboard = this.getDashboard();
    this.listeners.forEach(listener => {
      try {
        listener(dashboard);
      } catch (error) {
        console.error('Error in analytics dashboard listener:', error);
      }
    });
  }
  
  public disconnect(): void {
    this.stopAutoRefresh();
    if (this.realTimeConnection) {
      this.realTimeConnection.close();
      this.realTimeConnection = null;
    }
  }
}

// React Hook for Advanced Analytics Dashboard
export const useAdvancedAnalytics = () => {
  const [dashboard] = useState(() => new AdvancedAnalyticsDashboard());
  const [dashboardData, setDashboardData] = useState<AnalyticsDashboard>(dashboard.getDashboard());
  const [insights, setInsights] = useState<string[]>([]);
  
  useEffect(() => {
    const updateDashboard = (newDashboard: AnalyticsDashboard) => {
      setDashboardData(newDashboard);
      setInsights(dashboard.generateInsights());
    };
    
    dashboard.addListener(updateDashboard);
    
    // Initial load
    updateDashboard(dashboard.getDashboard());
    
    return () => {
      dashboard.removeListener(updateDashboard);
    };
  }, [dashboard]);
  
  const addUserEvent = useCallback((event: Omit<UserBehaviorEvent, 'timestamp'>) => {
    dashboard.addUserEvent(event);
  }, [dashboard]);
  
  const getMetricsByCategory = useCallback((category: string) => {
    return dashboard.getMetricsByCategory(category);
  }, [dashboard]);
  
  const getUserEventsByType = useCallback((eventType: string) => {
    return dashboard.getUserEventsByType(eventType);
  }, [dashboard]);
  
  const exportData = useCallback((format: 'json' | 'csv' = 'json') => {
    return dashboard.exportData(format);
  }, [dashboard]);
  
  useEffect(() => {
    return () => {
      dashboard.disconnect();
    };
  }, [dashboard]);
  
  return {
    dashboard,
    dashboardData,
    insights,
    addUserEvent,
    getMetricsByCategory,
    getUserEventsByType,
    exportData,
  };
};
