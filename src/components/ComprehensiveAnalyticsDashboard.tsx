import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
}

interface ComprehensiveAnalyticsDashboardProps {
  data: AnalyticsData;
  onDataRefresh?: () => void;
  isRealTime?: boolean;
  className?: string;
}

export const ComprehensiveAnalyticsDashboard: React.FC<ComprehensiveAnalyticsDashboardProps> = ({
  data,
  onDataRefresh,
  isRealTime = false,
  className = ''
}) => {
  const [selectedMetric, setSelectedMetric] = useState<string>('pageViews');
  const [timeRange, setTimeRange] = useState<string>('7d');

  const metrics = [
    { value: 'pageViews', label: 'Page Views' },
    { value: 'uniqueVisitors', label: 'Unique Visitors' },
    { value: 'bounceRate', label: 'Bounce Rate' },
    { value: 'conversionRate', label: 'Conversion Rate' }
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold flex items-center space-x-2">
            <div className="w-5 h-5 bg-blue-500 rounded" />
            <span>Analytics Dashboard</span>
          </h3>
          <p className="text-sm text-gray-600">Comprehensive analytics overview</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div key={metric.value} className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-600">{metric.label}</h4>
              <p className="text-2xl font-bold text-gray-900">
                {data[metric.value as keyof AnalyticsData]?.toLocaleString() || '0'}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex space-x-2">
            {['7d', '30d', '90d'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 rounded text-sm ${
                  timeRange === range
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          
          <button
            onClick={onDataRefresh}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refresh Data
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-600">Average Session Duration</h4>
            <p className="text-2xl font-bold text-gray-900">
              {data.avgSessionDuration?.toFixed(2)}s
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-600">Real-time Status</h4>
            <p className="text-lg font-bold text-green-600">
              {isRealTime ? 'Active' : 'Inactive'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveAnalyticsDashboard;