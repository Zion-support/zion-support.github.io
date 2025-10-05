import React, { useEffect, useState } from 'react';

interface AnalyticsConfig {
  enableConversionTracking?: boolean;
  enablePerformanceTracking?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
  enableCustomEvents?: boolean;
}

interface AnalyticsEvent {
  event: string;
  timestamp: number;
  properties?: Record<string, any>;
  userId?: string;
  sessionId?: string;
}

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  averageSessionDuration: number;
  conversionRate: number;
  topPages: Array<{
    path: string;
    views: number;
    uniqueViews: number;
  }>;
  events: AnalyticsEvent[];
  userFlow: Array<{
    step: string;
    users: number;
    dropoff: number;
  }>;
}

const AdvancedAnalytics: React.FC<{ config?: AnalyticsConfig }> = ({ 
  config = {
    enableConversionTracking: true,
    enablePerformanceTracking: true,
    enableErrorTracking: true,
    enableUserBehaviorTracking: true,
    enableCustomEvents: true
  }
}) => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAnalytics = async () => {
      try {
        // Initialize analytics tracking
        if (config.enablePerformanceTracking) {
          // Track Core Web Vitals
          const trackWebVitals = () => {
            // Track LCP
            new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              trackEvent('web_vital', {
                metric: 'LCP',
                value: lastEntry.startTime,
                rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs_improvement' : 'poor'
              });
            }).observe({ entryTypes: ['largest-contentful-paint'] });

            // Track FID
            new PerformanceObserver((list) => {
              const entries = list.getEntries();
              entries.forEach((entry) => {
                trackEvent('web_vital', {
                  metric: 'FID',
                  value: (entry as any).processingStart - entry.startTime,
                  rating: (entry as any).processingStart - entry.startTime < 100 ? 'good' : (entry as any).processingStart - entry.startTime < 300 ? 'needs_improvement' : 'poor'
                });
              });
            }).observe({ entryTypes: ['first-input'] });

            // Track CLS
            let clsValue = 0;
            new PerformanceObserver((list) => {
              const entries = list.getEntries();
              entries.forEach((entry) => {
                if (!(entry as any).hadRecentInput) {
                  clsValue += (entry as any).value;
                }
              });
              trackEvent('web_vital', {
                metric: 'CLS',
                value: clsValue,
                rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs_improvement' : 'poor'
              });
            }).observe({ entryTypes: ['layout-shift'] });
          };

          trackWebVitals();
        }

        if (config.enableErrorTracking) {
          // Track JavaScript errors
          window.addEventListener('error', (event) => {
            trackEvent('error', {
              message: event.message,
              filename: event.filename,
              lineno: event.lineno,
              colno: event.colno,
              stack: event.error?.stack
            });
          });

          // Track unhandled promise rejections
          window.addEventListener('unhandledrejection', (event) => {
            trackEvent('unhandled_promise_rejection', {
              reason: event.reason,
              stack: event.reason?.stack
            });
          });
        }

        // Load analytics data
        await loadAnalyticsData();
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to initialize analytics:', error);
        setIsLoading(false);
      }
    };

    initializeAnalytics();
  }, [config]);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!config.enableCustomEvents) return;

    const event: AnalyticsEvent = {
      event: eventName,
      timestamp: Date.now(),
      properties,
      userId: getUserId(),
      sessionId: getSessionId()
    };

    // Send event to analytics service
    sendEventToAnalytics(event);
  };

  const getUserId = (): string => {
    let userId = localStorage.getItem('analytics_user_id');
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('analytics_user_id', userId);
    }
    return userId;
  };

  const getSessionId = (): string => {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  };

  const sendEventToAnalytics = (event: AnalyticsEvent) => {
    // In a real implementation, this would send to your analytics service
    console.log('Analytics event:', event);
    
    // For demo purposes, store in localStorage
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    events.push(event);
    localStorage.setItem('analytics_events', JSON.stringify(events.slice(-1000))); // Keep last 1000 events
  };

  const loadAnalyticsData = async (): Promise<void> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Load events from localStorage
      const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      
      // Calculate analytics data
      const pageViews = events.filter(e => e.event === 'page_view').length;
      const uniqueVisitors = new Set(events.map(e => e.userId)).size;
      const bounceRate = Math.random() * 0.3 + 0.2; // Simulated bounce rate
      const averageSessionDuration = Math.random() * 300 + 120; // Simulated session duration
      const conversionRate = Math.random() * 0.1 + 0.02; // Simulated conversion rate

      // Top pages
      const pageViewsByPath = events
        .filter(e => e.event === 'page_view')
        .reduce((acc, e) => {
          const path = e.properties?.path || '/';
          acc[path] = (acc[path] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

      const topPages = Object.entries(pageViewsByPath)
        .map(([path, views]) => ({
          path,
          views,
          uniqueViews: Math.floor(views * 0.7) // Simulated unique views
        }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 10);

      // User flow
      const userFlow = [
        { step: 'Home', users: 1000, dropoff: 0 },
        { step: 'Products', users: 600, dropoff: 40 },
        { step: 'Product Details', users: 300, dropoff: 50 },
        { step: 'Add to Cart', users: 150, dropoff: 50 },
        { step: 'Checkout', users: 75, dropoff: 50 },
        { step: 'Purchase', users: 30, dropoff: 60 }
      ];

      setData({
        pageViews,
        uniqueVisitors,
        bounceRate,
        averageSessionDuration,
        conversionRate,
        topPages,
        events: events.slice(-100), // Last 100 events
        userFlow
      });
    } catch (error) {
      console.error('Failed to load analytics data:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading analytics...</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center p-8 text-gray-500">
        No analytics data available
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Page Views</h3>
          <p className="text-2xl font-bold text-blue-600">{data.pageViews.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Unique Visitors</h3>
          <p className="text-2xl font-bold text-green-600">{data.uniqueVisitors.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Bounce Rate</h3>
          <p className="text-2xl font-bold text-red-600">{(data.bounceRate * 100).toFixed(1)}%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
          <p className="text-2xl font-bold text-purple-600">{(data.conversionRate * 100).toFixed(2)}%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
          <div className="space-y-2">
            {data.topPages.map((page, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{page.path}</span>
                <span className="text-sm font-medium">{page.views} views</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">User Flow</h3>
          <div className="space-y-2">
            {data.userFlow.map((step, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{step.step}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{step.users} users</span>
                  {step.dropoff > 0 && (
                    <span className="text-xs text-red-500">-{step.dropoff}%</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;