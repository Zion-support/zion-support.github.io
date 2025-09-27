import React, { useState, useEffect, useCallback } from 'react';
import { DataVisualization } from './DataVisualization';

interface AnalyticsData {
  timestamp: number;
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  revenue: number;
  topPages: { page: string; views: number }[];
  trafficSources: { source: string; visitors: number }[];
  deviceTypes: { device: string; percentage: number }[];
  geographicData: { country: string; visitors: number }[];
}

interface AnalyticsDashboardProps { className?: string }

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ className = "" }) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [selectedMetric, setSelectedMetric] = useState<'pageViews' | 'uniqueVisitors' | 'revenue'>('pageViews');

  const generateMockData = useCallback((): AnalyticsData[] => {
    const data: AnalyticsData[] = [];
    const now = Date.now();
    const hoursBack = selectedTimeRange === '1h' ? 1 : selectedTimeRange === '24h' ? 24 : selectedTimeRange === '7d' ? 168 : 720;
    const interval = selectedTimeRange === '1h' ? 5 : selectedTimeRange === '24h' ? 60 : selectedTimeRange === '7d' ? 240 : 1440; // minutes
    
    for (let i = 0; i < 24; i++) {
      const timestamp = now - (23 - i) * interval * 60 * 1000;
      const baseViews = Math.random() * 1000 + 500;
      const baseVisitors = Math.random() * 800 + 300;
      
      data.push({
        timestamp,
        pageViews: Math.floor(baseViews + Math.random() * 200),
        uniqueVisitors: Math.floor(baseVisitors + Math.random() * 150),
        bounceRate: Math.random() * 0.4 + 0.2, // 20-60%
        avgSessionDuration: Math.random() * 300 + 60, // 1-6 minutes
        conversionRate: Math.random() * 0.05 + 0.01, // 1-6%
        revenue: Math.random() * 5000 + 1000,
        topPages: [
          { page: '/', views: Math.floor(Math.random() * 500 + 200) },
          { page: '/services', views: Math.floor(Math.random() * 300 + 100) },
          { page: '/about', views: Math.floor(Math.random() * 200 + 50) },
          { page: '/contact', views: Math.floor(Math.random() * 150 + 30) },
          { page: '/blog', views: Math.floor(Math.random() * 100 + 20) }
        ],
        trafficSources: [
          { source: 'Organic Search', visitors: Math.floor(Math.random() * 400 + 200) },
          { source: 'Direct', visitors: Math.floor(Math.random() * 300 + 150) },
          { source: 'Social Media', visitors: Math.floor(Math.random() * 200 + 100) },
          { source: 'Referral', visitors: Math.floor(Math.random() * 150 + 50) },
          { source: 'Email', visitors: Math.floor(Math.random() * 100 + 30) }
        ],
        deviceTypes: [
          { device: 'Desktop', percentage: Math.random() * 0.3 + 0.4 },
          { device: 'Mobile', percentage: Math.random() * 0.3 + 0.3 },
          { device: 'Tablet', percentage: Math.random() * 0.2 + 0.1 }
        ],
        geographicData: [
          { country: 'United States', visitors: Math.floor(Math.random() * 300 + 200) },
          { country: 'United Kingdom', visitors: Math.floor(Math.random() * 150 + 100) },
          { country: 'Canada', visitors: Math.floor(Math.random() * 100 + 50) },
          { country: 'Germany', visitors: Math.floor(Math.random() * 80 + 40) },
          { country: 'Australia', visitors: Math.floor(Math.random() * 60 + 30) }
        ]
      });
    }
    
    return data;
  }, [selectedTimeRange]);

  const fetchAnalyticsData = useCallback(async () => { try {
      setIsLoading(true);
      
      const mockData = generateMockData();
      setAnalyticsData(mockData) } catch (error) { console.error('Failed to fetch analytics data:', error) } finally { setIsLoading(false) }
  }, [generateMockData]);

  useEffect(() => { fetchAnalyticsData();
    const interval = setInterval(fetchAnalyticsData, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval) }, [fetchAnalyticsData]);

  const getTotalMetric = (metric: keyof AnalyticsData) => { if (analyticsData.length === 0) return 0;
    return analyticsData.reduce((sum, data) => sum + (data[metric] as number), 0) };

  const getAverageMetric = (metric: keyof AnalyticsData) => { if (analyticsData.length === 0) return 0;
    const sum = analyticsData.reduce((sum, data) => sum + (data[metric] as number), 0);
    return sum / analyticsData.length };

  const getLatestMetric = (metric: keyof AnalyticsData) => { if (analyticsData.length === 0) return 0;
    return analyticsData[analyticsData.length - 1][metric] as number };

  const getChartData = () => {
    const labels = analyticsData.map(data => 
      new Date(data.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );
    
    const metricData = analyticsData.map(data => { switch (selectedMetric) {
        case 'pageViews': return data.pageViews;
        case 'uniqueVisitors': return data.uniqueVisitors;
        case 'revenue': return data.revenue;
        default: return data.pageViews }
    });

    return {
      labels,
      datasets: [{
        label: selectedMetric === 'pageViews' ? 'Page Views' : 
               selectedMetric === 'uniqueVisitors' ? 'Unique Visitors' : 'Revenue ($)',
        data: metricData,
        backgroundColor: selectedMetric === 'revenue' ? '#10B981' : '#3B82F6',
        borderColor: selectedMetric === 'revenue' ? '#059669' : '#1D4ED8',
        borderWidth: 2,
        fill: true
      }]
    };
  };

  const getTopPagesData = () => {
    if (analyticsData.length === 0) return { labels: [], datasets: [] };
    
    const latestData = analyticsData[analyticsData.length - 1];
    const sortedPages = latestData.topPages.sort((a, b) => b.views - a.views);
    
    return {
      labels: sortedPages.map(p => p.page),
      datasets: [{
        label: 'Page Views',
        data: sortedPages.map(p => p.views),
        backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
        borderColor: ['#1D4ED8', '#059669', '#D97706', '#DC2626', '#7C3AED'],
        borderWidth: 2
      }]
    };
  };

  const getTrafficSourcesData = () => {
    if (analyticsData.length === 0) return { labels: [], datasets: [] };
    
    const latestData = analyticsData[analyticsData.length - 1];
    const sortedSources = latestData.trafficSources.sort((a, b) => b.visitors - a.visitors);
    
    return {
      labels: sortedSources.map(s => s.source),
      datasets: [{
        label: 'Visitors',
        data: sortedSources.map(s => s.visitors),
        backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
        borderColor: ['#1D4ED8', '#059669', '#D97706', '#DC2626', '#7C3AED'],
        borderWidth: 2
      }]
    };
  };

  const getDeviceTypesData = () => {
    if (analyticsData.length === 0) return { labels: [], datasets: [] };
    
    const latestData = analyticsData[analyticsData.length - 1];
    const total = latestData.deviceTypes.reduce((sum, d) => sum + d.percentage, 0);
    
    return {
      labels: latestData.deviceTypes.map(d => d.device),
      datasets: [{
        label: 'Device Usage',
        data: latestData.deviceTypes.map(d => Math.round(d.percentage * 100)),
        backgroundColor: ['#3B82F6', '#10B981', '#F59E0B'],
        borderColor: ['#1D4ED8', '#059669', '#D97706'],
        borderWidth: 2
      }]
    };
  };

  if (isLoading) {
    return (
      <div className="{`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${class Name}`}>
        <div class Name=animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4></div>
          <div class Name=space-y-3">
            <div className="h-4 bg-gray-200 rounded></div>
            <div class Name=h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class Name={"`space-y-6 ${className}`}>
      {/* Analytics Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6>
        <div class Name=flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 id=analytics-overview">Analytics Overview</h2>
          <div className="flex space-x-2>
            {(['1 h' '24 h' '7d' '30d'] as const).map((range) => (
              <button
                key={range}
                on Click={() => set Selected Time Range(range)}
                aria-label={`Select ${range} time range`}
                class Name={"`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedTimeRange === range
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4>
          <div class Name=text-center">
            <div className="text-3 xl font-bold text-blue-600>
              {get Total Metric('page Views').to Locale String()}
            </div>
            <div class Name=text-sm text-gray-600">Total Page Views</div>
          </div>
          <div className="text-center>
            <div class Name=text-3 xl font-bold text-green-600">
              {getTotalMetric('uniqueVisitors').toLocaleString()}
            </div>
            <div className="text-sm text-gray-600>Unique Visitors</div>
          </div>
          <div class Name=text-center">
            <div className="text-3 xl font-bold text-purple-600>
              {get Average Metric('bounce Rate').to Fixed(1)}%
            </div>
            <div class Name=text-sm text-gray-600">Avg Bounce Rate</div>
          </div>
          <div className="text-center>
            <div class Name=text-3 xl font-bold text-yellow-600">
              ${getTotalMetric('revenue').toLocaleString()}
            </div>
            <div className="text-sm text-gray-600>Total Revenue</div>
          </div>
        </div>
      </div>

      {/* Metric Selector and Main Chart */}
      <div class Name=bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4>
          <h 3 class Name=text-lg font-semibold text-gray-900" id="performance-trends">Performance Trends</h3>
          <div className="flex space-x-2>
            {(['page Views' 'unique Visitors'  'revenue'] as const).map((metric) => (
              <button
                key={metric}
                on Click={() => set Selected Metric(metric)}
                aria-label={`Select ${metric} metric`}
                class Name={"`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedMetric === metric
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {metric === 'pageViews' ? 'Page Views' : 
                 metric === 'uniqueVisitors' ? 'Unique Visitors' : 'Revenue'}
              </button>
            ))}
          </div>
        </div>
        
        <DataVisualization
          type="line"
          data={getChartData()}
          title={`${selectedMetric === 'pageViews' ? 'Page Views' : 
                   selectedMetric === 'uniqueVisitors' ? 'Unique Visitors' : 'Revenue'} Over Time`}
          height={400}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6>
        <Data Visualization
          type=bar"
          data={getTopPagesData()}
          title="Top Pages"
          height={300}
        />
        <DataVisualization
          type="pie"
          data={getTrafficSourcesData()}
          title="Traffic Sources"
          height={300}
        />
      </div>

      {/* Device Types and Additional Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6>
        <Data Visualization
          type=doughnut"
          data={getDeviceTypesData()}
          title="Device Types"
          height={300}
        />
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6>
          <h 3 class Name=text-lg font-semibold text-gray-900 mb-4" id="key-metrics">Key Metrics</h3>
          <div className="space-y-4>
            <div class Name=flex justify-between items-center">
              <span className="text-sm text-gray-600>Avg Session Duration</span>
              <span class Name=text-sm font-medium text-gray-900">
                {Math.round(getAverageMetric('avgSessionDuration'))}s
              </span>
            </div>
            <div className="flex justify-between items-center>
              <span class Name=text-sm text-gray-600">Conversion Rate</span>
              <span className="text-sm font-medium text-gray-900>
                {(get Average Metric('conversion Rate') * 100).to Fixed(2)}%
              </span>
            </div>
            <div class Name=flex justify-between items-center">
              <span className="text-sm text-gray-600>Latest Page Views</span>
              <span class Name=text-sm font-medium text-gray-900">
                {getLatestMetric('pageViews').toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center>
              <span class Name=text-sm text-gray-600">Latest Unique Visitors</span>
              <span className="text-sm font-medium text-gray-900>
                {get Latest Metric('unique Visitors').to Locale String()}
              </span>
            </div>
            <div class Name=flex justify-between items-center">
              <span className="text-sm text-gray-600>Latest Revenue</span>
              <span class Name=text-sm font-medium text-gray-900">
                ${getLatestMetric('revenue').toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};