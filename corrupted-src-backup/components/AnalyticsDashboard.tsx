import React, { useState, useEffect } from 'react';
:corrupted-src-backup/components/AnalyticsDashboard.tsx

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  topPages: Array<{
    path: string;
    views: number;
  }>;
  trafficSources: Array<{
    source: string;
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
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock data
        const mockData: AnalyticsData = {
          pageViews: 12543,
          uniqueVisitors: 8921,
          bounceRate: 34.2,
          avgSessionDuration: 245,
          conversionRate: 2.8,
          topPages: [
            { path: '/', views: 3421 },
            { path: '/services', views: 2156 },
            { path: '/about', views: 1892 },
            { path: '/contact', views: 1234 },
          ],
          trafficSources: [
            { source: 'Organic Search', percentage: 45.2 },
            { source: 'Direct', percentage: 28.7 },
            { source: 'Social Media', percentage: 15.3 },
            { source: 'Referral', percentage: 10.8 },
          ],
        };

        setData(mockData);
      } catch (err) {
        setError('Failed to load analytics data');
:corrupted-src-backup/components/AnalyticsDashboard.tsx
        console.error('Analytics error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalyticsData();
  }, []);

  if (isLoading) {
    return (
      <div className='analytics-dashboard'>
        <div className='loading'>Loading analytics data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='analytics-dashboard'>
        <div className='error'>Error: {error}</div>
      </div>
    );
  }

  return (
    <div className='analytics-dashboard'>
      <h2>Analytics Dashboard</h2>

      <div className='metrics-grid'>
        <div className='metric-card'>
          <h3>Page Views</h3>
          <div className='metric-value'>{data.pageViews.toLocaleString()}</div>
        </div>

        <div className='metric-card'>
          <h3>Unique Visitors</h3>
          <div className='metric-value'>
            {data.uniqueVisitors.toLocaleString()}
          </div>
        </div>

        <div className='metric-card'>
          <h3>Bounce Rate</h3>
          <div className='metric-value'>{data.bounceRate}%</div>
        </div>

        <div className='metric-card'>
          <h3>Avg Session Duration</h3>
          <div className='metric-value'>{data.avgSessionDuration}s</div>
        </div>

        <div className='metric-card'>
          <h3>Conversion Rate</h3>
          <div className='metric-value'>{data.conversionRate}%</div>
        </div>
      </div>

      <div className='charts-section'>
        <div className='chart'>
          <h3>Top Pages</h3>
          <ul>
            {data.topPages.map((page, index) => (
              <li key={index}>
                {page.path} - {page.views.toLocaleString()} views
              </li>
            ))}
          </ul>
        </div>

        <div className='chart'>
          <h3>Traffic Sources</h3>
          <ul>
            {data.trafficSources.map((source, index) => (
              <li key={index}>
                {source.source} - {source.percentage}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
