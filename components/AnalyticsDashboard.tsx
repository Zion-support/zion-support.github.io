import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  totalViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  topPages: {
    path: string;
    views: number;
  }[];
  performance: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  };
}

const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setData({
        totalViews: 12345,
        uniqueVisitors: 8765,
        bounceRate: 45.2,
        topPages: [
          { path: '/', views: 5000 },
          { path: '/services', views: 3000 },
          { path: '/about', views: 2000 }
        ],
        performance: {
          fcp: 1.2,
          lcp: 2.5,
          fid: 100,
          cls: 0.1
        }
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading analytics...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="analytics-dashboard">
      <h2>Analytics Dashboard</h2>
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Views</h3>
          <p className="metric-value">{data.totalViews.toLocaleString()}</p>
        </div>
        <div className="metric-card">
          <h3>Unique Visitors</h3>
          <p className="metric-value">{data.uniqueVisitors.toLocaleString()}</p>
        </div>
        <div className="metric-card">
          <h3>Bounce Rate</h3>
          <p className="metric-value">{data.bounceRate}%</p>
        </div>
      </div>
      
      <div className="top-pages">
        <h3>Top Pages</h3>
        <ul>
          {data.topPages.map((page, index) => (
            <li key={index}>
              {page.path} - {page.views} views
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;