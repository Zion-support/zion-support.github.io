import React, { useState, useEffect } from 'react';
import PerformanceMonitor from '../utils/performance-monitor';
import SEOOptimizer from '../utils/seo-optimizer';
import ErrorHandler from '../utils/error-handler';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  topPages: Array<{
    path: string;
    views: number;
    title: string;
  }>;
  trafficSources: Array<{
    source: string;
    visitors: number;
    percentage: number;
  }>;
  deviceBreakdown: Array<{
    device: string;
    percentage: number;
  }>;
}

const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0,
    topPages: [],
    trafficSources: [],
    deviceBreakdown: []
  });

  useEffect(() => {
    // Initialize analytics
    const initializeAnalytics = async () => {
      try {
        // Simulate data loading
        setData({
          pageViews: 125000,
          uniqueVisitors: 45000,
          bounceRate: 35.2,
          avgSessionDuration: 180,
          conversionRate: 2.8,
          topPages: [
            { path: '/', views: 25000, title: 'Home' },
            { path: '/services', views: 18000, title: 'Services' },
            { path: '/about', views: 12000, title: 'About' }
          ],
          trafficSources: [
            { source: 'Organic Search', visitors: 25000, percentage: 55.6 },
            { source: 'Direct', visitors: 15000, percentage: 33.3 },
            { source: 'Social Media', visitors: 5000, percentage: 11.1 }
          ],
          deviceBreakdown: [
            { device: 'Desktop', percentage: 60 },
            { device: 'Mobile', percentage: 35 },
            { device: 'Tablet', percentage: 5 }
          ]
        });
      } catch (error) {
        ErrorHandler.handleError(error);
      }
    };

    initializeAnalytics();
  }, []);

  return (
    <div className="analytics-dashboard">
      <h1>Analytics Dashboard</h1>
      
      <div className="metrics-overview">
        <div className="metric-card">
          <h3>Page Views</h3>
          <p className="metric-value">{data.pageViews.toLocaleString()}</p>
        </div>
        <div className="metric-card">
          <h3>Unique Visitors</h3>
          <p className="metric-value">{data.uniqueVisitors.toLocaleString()}</p>
        </div>
        <div className="metric-card">
          <h3>Bounce Rate</h3>
          <p className="metric-value">{data.bounceRate}%</p>
        </div>
        <div className="metric-card">
          <h3>Avg Session Duration</h3>
          <p className="metric-value">{data.avgSessionDuration}s</p>
        </div>
        <div className="metric-card">
          <h3>Conversion Rate</h3>
          <p className="metric-value">{data.conversionRate}%</p>
        </div>
      </div>

      <div className="analytics-sections">
        <div className="section">
          <h2>Top Pages</h2>
          <ul>
            {data.topPages.map((page, index) => (
              <li key={index}>
                {page.title} - {page.views.toLocaleString()} views
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2>Traffic Sources</h2>
          <ul>
            {data.trafficSources.map((source, index) => (
              <li key={index}>
                {source.source} - {source.visitors.toLocaleString()} visitors ({source.percentage}%)
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2>Device Breakdown</h2>
          <ul>
            {data.deviceBreakdown.map((device, index) => (
              <li key={index}>
                {device.device} - {device.percentage}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;