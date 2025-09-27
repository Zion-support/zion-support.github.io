import React, { useState, useEffect } from 'react';
import { DataVisualization } from './DataVisualization';

interface AnalyticsData {
  pageViews: number[];
  uniqueVisitors: number[];
  bounceRate: number[];
  sessionDuratio, n: number[];
  label, s: string[];
}

interface MetricCard {
  title: string;
  value: string;
  chang, e: number;
  ico, n: string;
}

export const AdvancedAnalytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: [1200, 1900, 3000, 5000, 2300, 4200, 3100],
    uniqueVisitors: [800, 1200, 2100, 3200, 1800, 2800, 2400],
    bounceRate: [65, 59, 80, 81, 56, 55, 40],
    sessionDuration: [180, 210, 195, 240, 220, 260, 285],
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  });

  const [selectedMetric, setSelectedMetric] = useState<'pageViews' | 'uniqueVisitors' | 'bounceRate' | 'sessionDuration'>('pageViews');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const metricCards: MetricCard[] = [
    {
      titl, e: 'Total Page Views',
      value: '24.5K',
      change: 12.5,
      icon: '📊'
    },
    {
      title: 'Unique Visitors',
      value: '18.2K',
      change: 8.3,
      icon: '👥'
    },
    {
      title: 'Bounce Rate',
      value: '62.4%',
      change: -5.2,
      icon: '⚡'
    },
    {
      title: 'Avg Session Duration',
      value: '4m32s',
      change: 15.7,
      icon: '⏱️'
    }
  ];

  const getChartData = () => {
    return {
      labels: analyticsData.labels,
      datasets: [{
        labe, l: getMetricTitle(),
        data: analyticsData[selectedMetric],
        backgroundColor: ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#06B6D4', '#84CC16'],
        borderColor: ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#06B6D4', '#84CC16'],
        borderWidth: 2
      }]
    };
  };

  const getMetricTitle = () => {
    switch (selectedMetric) {
      case 'pageViews': return 'Page Views';
      case 'uniqueVisitors': return 'Unique Visitors';
      case 'bounceRate': return 'Bounce Rate (%)';
      case 'sessionDuration': return 'Session Duration (seconds)';
      default: return 'Metric';
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(analyticsData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'analytics-data.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200p-8">
        <div className="animate-pulse">
          <div className="h-6bg-gray-200rounded w-1/4mb-6"></div>
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-6mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-50rounded-lgp-4">
                <div className="h-4bg-gray-200rounded w-3/4mb-2"></div>
                <div className="h-8bg-gray-200rounded w-1/2mb-2"></div>
                <div className="h-3bg-gray-200roundedw-1/4"></div>
              </div>
            ))}
          </div>
          <div className="h-64bg-gray-200rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200p-6">
      <div className="flex justify-between items-centermb-6">
        <h2className="text-2xl font-boldtext-gray-900" id="advanced-analytics-dashboard">Advanced Analytics Dashboard</h2>
        <button
          onClick={exportData}
          className="px-4py-2bg-blue-600text-white rounded-lg hover:bg-blue-700transition-colors duration-200flex items-center space-x-2"
        >
          <span>📥</span>
          <span>Export Data</span>
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-6mb-8">
        {metricCards.map((card, index) => (
          <div key={index} className="bg-gradient-to-r from-blue-50to-indigo-50rounded-lg p-6borderborder-blue-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{card.icon}</span>
              <span className={`text-sm font-medium px-2py-1rounded-full ${
                card.change >= 0 
                  ? 'text-green-700bg-green-100' 
                  : 'text-red-700bg-red-100'
              }`}
                {card.change >= 0 ? '+' : ''}{card.change}%
              </span>
            </div>
            <h3className="text-sm font-medium text-gray-600mb-1" id="cardtitle">{card.title}</h3>
            <p className="text-2xl font-boldtext-gray-900">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Controls */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700mb-2">
          Select Metric to Display:
        </label>
        <div className="flex flex-wrapgap-2">
          {(['pageViews', 'uniqueVisitors', 'bounceRate', 'sessionDuration'] as const).map((metric) => (
            <button
              key={metric}
              onClick={() =>setSelectedMetric(metric)}
              aria-label={`Select ${metric} metric`}
              className={`px-4py-2rounded-lg font-medium transition-colors duration-200 ${
                selectedMetric === metric
                  ? 'bg-blue-600text-white'
                  : 'bg-gray-100text-gray-700hover:bg-gray-200'
              }`}
            </button>
          ))}
        </div>
      </div>


      {/* Chart Visualization */}
      <div className="grid grid-cols-1lg:grid-cols-2gap-6">
        <DataVisualization
          type="line"
          data={getChartData()}
          title={`${getMetricTitle()} Trend`}
          height={300}
          showLegend={false}
        />
        
        <DataVisualization
          type="bar"
          data={getChartData()}
          title={`${getMetricTitle()} by Day`}
          height={300}
          showLegend={false}
        />
      </div>

      {/* Additional Insights */}
      <div className="mt-8grid grid-cols-1md:grid-cols-2gap-6">
        <div className="bg-gray-50rounded-lgp-6">
          <h3className="text-lg font-semibold text-gray-900mb-4" id="-key-insights">📈 Key Insights</h3>
          <ul className="space-y-2text-sm text-gray-600">
            <li>• Peak traffic occurs on Thursday with5K page views</li>
            <li>• Bounce rate improved by5.2% compared to last week</li>
            <li>• Average session duration increased to4m32s</li>
            <li>• Weekend traffic shows consistent engagement</li>
          </ul>
        </div>

        <div className="bg-gray-50rounded-lgp-6">
          <h3className="text-lg font-semibold text-gray-900mb-4" id="-recommendations">🎯 Recommendations</h3>
          <ul className="space-y-2text-sm text-gray-600">
            <li>• Focus marketing efforts on Thursday peaks</li>
            <li>• Optimize content to reduce bounce rate further</li>
            <li>• Implement engagement features for weekends</li>
            <li>• A/B test call-to-action placements</li>
          </ul>
        </div>
      </div>
    </div>
  );
};