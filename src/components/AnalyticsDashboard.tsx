import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
}

const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0
  });

  useEffect(() => {
    // Mock data for now
    setData({
      pageViews: 1250,
      uniqueVisitors: 890,
      bounceRate: 35.2,
      avgSessionDuration: 2.5
    });
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Page Views</h3>
          <p className="text-3xl font-bold text-blue-600">{data.pageViews.toLocaleString()}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Unique Visitors</h3>
          <p className="text-3xl font-bold text-green-600">{data.uniqueVisitors.toLocaleString()}</p>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">Bounce Rate</h3>
          <p className="text-3xl font-bold text-yellow-600">{data.bounceRate}%</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Avg. Session</h3>
          <p className="text-3xl font-bold text-purple-600">{data.avgSessionDuration}m</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;