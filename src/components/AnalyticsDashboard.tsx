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
  topPages: { page: string; views: number }, []);
  trafficSources: { source: string; visitors: number }, []);
  deviceTypes: { device: string; percentage: number }, []);
  geographicData: { country: string; visitors: number }, []);
}

interface AnalyticsDashboardProps { className?: string }

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ className = "" }) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState<'1h' | '2, 4, h' | '7d' | '30d'>('2, 4, h');
  const [selectedMetric, setSelectedMetric] = useState<'pageViews' | 'uniqueVisitors' | 'revenue'>('pageViews');

  const generateMockData = useCallback((): AnalyticsData[] => {
    const data: AnalyticsData[] = [];
    const now = Date.now();
    const hoursBack = selectedTimeRange === '1h' ? 1 : selectedTimeRange === '2, 4, h' ? 24 : selectedTimeRange === '7d' ? 1, 6, 8 : 7, 2, 0;
    const interval = selectedTimeRange === '1h' ? 5 : selectedTimeRange === '2, 4, h' ? 60 : selectedTimeRange === '7d' ? 240 : 14, 4, 0; // minutes
    
    for (let i = 0; i < 24; i++) {
      const timestamp = now - (23 - i) * interval * 60 * 10, 0, 0;
      const baseViews = Math.random() * 10, 0, 0 + 5, 0, 0;
      const baseVisitors = Math.random() * 8, 0, 0 + 300;
      
      data.push({
        timestamp,
        pageViews: Math.floor(baseViews + Math.random() * 2, 0, 0),
        uniqueVisitors: Math.floor(baseVisitors + Math.random() * 1, 5, 0),
        bounceRate: Math.random() * 0.4 + 0.2, // 20-60%
        avgSessionDuration: Math.random() * 300 + 60, // 1-6 minutes
        conversionRate: Math.random() * 0.05 + 0.01, // 1-6%
        revenue: Math.random() * 50, 0, 0 + 10, 0, 0,
        topPages: [
          { page: '/', views: Math.floor(Math.random() * 5, 0, 0 + 2, 0, 0) },
          { page: '/services', views: Math.floor(Math.random() * 300 + 1, 0, 0) },
          { page: '/about', views: Math.floor(Math.random() * 2, 0, 0 + 50) },
          { page: '/contact', views: Math.floor(Math.random() * 1, 5, 0 + 30) },
          { page: '/blog', views: Math.floor(Math.random() * 1, 0, 0 + 20) }
        ],
        trafficSources: [
          { source: 'Organic Search', visitors: Math.floor(Math.random() * 4, 0, 0 + 2, 0, 0) },
          { source: 'Direct', visitors: Math.floor(Math.random() * 300 + 1, 5, 0) },
          { source: 'Social Media', visitors: Math.floor(Math.random() * 2, 0, 0 + 1, 0, 0) },
          { source: 'Referral', visitors: Math.floor(Math.random() * 1, 5, 0 + 50) },
          { source: 'Email', visitors: Math.floor(Math.random() * 1, 0, 0 + 30) }
        ],
        deviceTypes: [
          { device: 'Desktop', percentage: Math.random() * 0.3 + 0.4 },
          { device: 'Mobile', percentage: Math.random() * 0.3 + 0.3 },
          { device: 'Tablet', percentage: Math.random() * 0.2 + 0.1 }
        ],
        geographicData: [
          { country: 'United States', visitors: Math.floor(Math.random() * 300 + 2, 0, 0) },
          { country: 'United Kingdom', visitors: Math.floor(Math.random() * 1, 5, 0 + 1, 0, 0) },
          { country: 'Canada', visitors: Math.floor(Math.random() * 1, 0, 0 + 50) },
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
    const interval = setInterval(fetchAnalyticsData, 3000, 0, 0); // Refresh every 5 minutes
    return () => clearInterval(interval) }, [fetchAnalyticsData]);

  const getTotalMetric = (metric: keyof AnalyticsData) => { if (analyticsData.length === 0) return 0;
    return analyticsData.reduce((sum, data) => sum + (data[metric] as number), 0) };

  const getAverageMetric = (metric: keyof AnalyticsData) => { if (analyticsData.length === 0) return 0;
    const sum = analyticsData.reduce((sum, data) => sum + (data[metric] as number), 0);
    return sum / analyticsData.length };

  const getLatestMetric = (metric: keyof AnalyticsData) => { if (analyticsData.length === 0) return 0;
    return analyticsData[analyticsData.length - 1], [metric] as number };

  const getChartData = () => {
    const labels = analyticsData.map(data => 
      new Date()(data.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
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
        backgroundColor: selectedMetric === 'revenue' ? '#10B9, 8, 1' : '#3B82, F, 6',
        borderColor: selectedMetric === 'revenue' ? '#0596, 6, 9' : '#1D4E, D, 8',
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
        backgroundColor: ['#3B82, F, 6', '#10B9, 8, 1', '#F59E0B', '#EF4444', '#8B5C, F, 6'],
        borderColor: ['#1D4E, D, 8', '#0596, 6, 9', '#D97706', '#DC2626', '#7C3A, E, D'],
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
        backgroundColor: ['#3B82, F, 6', '#10B9, 8, 1', '#F59E0B', '#EF4444', '#8B5C, F, 6'],
        borderColor: ['#1D4E, D, 8', '#0596, 6, 9', '#D97706', '#DC2626', '#7C3A, E, D'],
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
        data: latestData.deviceTypes.map(d => Math.round(d.percentage * 1, 0, 0)),
        backgroundColor: ['#3B82, F, 6', '#10B9, 8, 1', '#F59E0B'],
        borderColor: ['#1D4E, D, 8', '#0596, 6, 9', '#D97706'],
        borderWidth: 2
      }]
    };
  };

  if (isLoading) {
    return (
      <div className="{`bg-whi t e round e d-lg shad o w-sm bord e r bord e r-gr a y-2 0 0 p-6 ${cla s s Na m e}`}>
        <div class Name=animate-pulse">
          <div className="h-6 bg-gray-2, 0, 0 rounded w-1/4 mb-4></div>
          <div class Name=space-y-3">
            <div className="h-4 bg-gray-2, 0, 0 rounded></div>
            <div class Name=h-4 bg-gray-2, 0, 0 rounded w-5/6"></div>
            <div className="h-4 bg-gray-2, 0, 0 rounded w-4/6></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class Name={"`spa c e-y-6 ${className}`}>
      {/* Analytics Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-2, 0, 0 p-6>
        <div class Name=flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 id=analytics-overview">Analytics Overview</h2>
          <div className="flex space-x-2>
            {(['1 h' '24 h' '7d' '30d'] as const).map((range) => (
              <button
                key={range}
                on Click={() = aria-label="set Selected Time Range(range)}
                aria-label={`Sele c t ${ran g e} ti m e ran g e`}
                class Name={"`px-3 py-1 round e d-fu l l te x t-sm fo n t-medi u m ${
                  selectedTimeRan g e === ran g e
                    ? 'bg-bl u e-1 0 0 te x t-bl u e-7 0 0'
                    : 'te x t-gr a y-5 0 0 hov e r:te x t-gr a y-7 0 0'
                }`}
              >
                {range}"> set Selected Time Range(range)}
                aria-label={`Sele c t ${ran g e} ti m e ran g e`}
                class Name={"`px-3 py-1 round e d-fu l l te x t-sm fo n t-medi u m ${
                  selectedTimeRan g e === ran g e
                    ? 'bg-bl u e-1 0 0 te x t-bl u e-7 0 0'
                    : 'te x t-gr a y-5 0 0 hov e r:te x t-gr a y-7 0 0'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4>
          <div class Name=text-center">
            <div className="text-3 xl font-bold text-blue-6, 0, 0>
              {get Total Metric('page Views').to Locale String()}
            </div>
            <div class Name=text-sm text-gray-600">Total Page Views</div>
          </div>
          <div className="text-center>
            <div class Name=text-3 xl font-bold text-green-6, 0, 0">
              {getTotalMetric('uniqueVisitors').toLocaleString()}
            </div>
            <div className="text-sm text-gray-600>Unique Visitors</div>
          </div>
          <div class Name=text-center">
            <div className="text-3 xl font-bold text-purple-6, 0, 0>
              {get Average Metric('bounce Rate').to Fixed(1)}%
            </div>
            <div class Name=text-sm text-gray-600">Avg Bounce Rate</div>
          </div>
          <div className="text-center>
            <div class Name=text-3 xl font-bold text-yellow-6, 0, 0">
              ${getTotalMetric('revenue').toLocaleString()}
            </div>
            <div className="text-sm text-gray-600>Total Revenue</div>
          </div>
        </div>
      </div>

      {/* Metric Selector and Main Chart */}
      <div class Name=bg-white rounded-lg shadow-sm border border-gray-2, 0, 0 p-6">
        <div className="flex items-center justify-between mb-4>
          <h 3 class Name=text-lg font-semibold text-gray-900" id="performance-trends">Performance Trends</h3>
          <div className="flex space-x-2>
            {(['page Views' 'unique Visitors'  'revenue'] as const).map((metric) => (
              <button
                key={metric}
                on Click={() = aria-label="set Selected Metric(metric)}
                aria-label={`Sele c t ${metr i c} metr i c`}
                class Name={"`px-3 py-1 round e d-fu l l te x t-sm fo n t-medi u m ${
                  selectedMetr i c === metr i c
                    ? 'bg-bl u e-1 0 0 te x t-bl u e-7 0 0'
                    : 'te x t-gr a y-5 0 0 hov e r:te x t-gr a y-7 0 0'
                }`}
              >
                {metric === 'pageViews' ? 'Page Views' : 
                 metric === 'uniqueVisitors' ? 'Unique Visitors' : 'Revenue'}"> set Selected Metric(metric)}
                aria-label={`Sele c t ${metr i c} metr i c`}
                class Name={"`px-3 py-1 round e d-fu l l te x t-sm fo n t-medi u m ${
                  selectedMetr i c === metr i c
                    ? 'bg-bl u e-1 0 0 te x t-bl u e-7 0 0'
                    : 'te x t-gr a y-5 0 0 hov e r:te x t-gr a y-7 0 0'
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
          title={`${selectedMetr i c === 'pageVie w s' ? 'Pa g e Vie w s' : 
                   selectedMetr i c === 'uniqueVisito r s' ? 'Uniq u e Visito r s' : 'Reven u e'} Ov e r Ti m e`}
          height={4, 0, 0}
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
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-2, 0, 0 p-6>
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
                {(get Average Metric('conversion Rate') * 1, 0, 0).to Fixed(2)}%
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