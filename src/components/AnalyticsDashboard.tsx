import React, { useState, useEffect } from 'react';
import PerformanceMonitor from '../utils/performance-monitor';
import SEOOptimizer from '../utils/seo-optimizer';
import ErrorHandler from '../utils/error-handler';

<<<<<<< HEAD
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
  topPages: Array<{
    path: string;
    views: number;
  }>;
  trafficSources: Array<{
    source: string;
    percentage: number;
  }>;
}

interface AnalyticsDashboardProps {
  className?: string;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  className = ''
}) => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for now
    const mockData: AnalyticsData = {
      pageViews: 12543,
      uniqueVisitors: 8921,
      bounceRate: 0.35,
      avgSessionDuration: 180,
      topPages: [
        { path: '/', views: 3245 },
        { path: '/services', views: 2156 },
        { path: '/about', views: 1890 }
      ],
      trafficSources: [
        { source: 'Direct', percentage: 45 },
        { source: 'Google', percentage: 30 },
        { source: 'Social', percentage: 15 },
        { source: 'Referral', percentage: 10 }
      ]
    };

    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    <div className={`analytics-dashboard ${className}`}>
      <h2 className="text-2xl font-bold mb-6">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg">
    avgSessionDuration: 0
  });

  useEffect(() => {
    // Mock data for now
    setData({
      pageViews: 1250,
      uniqueVisitors: 890,
      bounceRate: 35.2,
      avgSessionDuration: 2.5
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Page Views</h3>
          <p className="text-3xl font-bold text-blue-600">{data.pageViews.toLocaleString()}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Unique Visitors</h3>
          <p className="text-3xl font-bold text-green-600">{data.uniqueVisitors.toLocaleString()}</p>
        </div>
        
=======
interface DashboardProps {
  isVisible?: boolean;
  onClose?: () => void;
}

const AnalyticsDashboard: React.FC<DashboardProps> = ({ isVisible = false, onClose }) => {
  const [activeTab, setActiveTab] = useState<'performance' | 'seo' | 'errors'>('performance');
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);
  const [seoAnalytics, setSeoAnalytics] = useState<any>(null);
  const [errorMetrics, setErrorMetrics] = useState<any>(null);

  useEffect(() => {
    if (isVisible) {
      updateMetrics();
      const interval = setInterval(updateMetrics, 5000); // Update every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const updateMetrics = () => {
    const performanceMonitor = PerformanceMonitor.getInstance();
    const seoOptimizer = SEOOptimizer.getInstance();
    const errorHandler = ErrorHandler.getInstance();

    setPerformanceMetrics({
      metrics: performanceMonitor.getMetrics(),
      score: performanceMonitor.getPerformanceScore(),
      interactions: performanceMonitor.getInteractions()
    });

    setSeoAnalytics(seoOptimizer.getAnalytics());
    setErrorMetrics(errorHandler.getErrorMetrics());
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Analytics Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="flex border-b">
          {['performance', 'seo', 'errors'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 font-medium capitalize ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-4 overflow-y-auto max-h-[calc(90vh-120px)]">
          {activeTab === 'performance' && <PerformanceTab metrics={performanceMetrics} />}
          {activeTab === 'seo' && <SEOTab analytics={seoAnalytics} />}
          {activeTab === 'errors' && <ErrorsTab metrics={errorMetrics} />}
        </div>
      </div>
    </div>
  );
};

const PerformanceTab: React.FC<{ metrics: any }> = ({ metrics }) => {
  if (!metrics) return <div>Loading performance metrics...</div>;

  const { metrics: data, score, interactions } = metrics;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Performance Score</h3>
          <div className="text-3xl font-bold text-blue-600">{score}/100</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Total Interactions</h3>
          <div className="text-3xl font-bold text-green-600">{interactions.length}</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-800">Load Time</h3>
          <div className="text-3xl font-bold text-purple-600">
            {data.loadTime ? `${data.loadTime.toFixed(0)}ms` : 'N/A'}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Core Web Vitals</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>LCP (Largest Contentful Paint):</span>
              <span className={getVitalColor(data.lcp, 2500, 4000)}>
                {data.lcp ? `${data.lcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>FID (First Input Delay):</span>
              <span className={getVitalColor(data.fid, 100, 300)}>
                {data.fid ? `${data.fid.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>CLS (Cumulative Layout Shift):</span>
              <span className={getVitalColor(data.cls, 0.1, 0.25)}>
                {data.cls ? data.cls.toFixed(4) : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>FCP (First Contentful Paint):</span>
              <span className={getVitalColor(data.fcp, 1800, 3000)}>
                {data.fcp ? `${data.fcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">User Interactions</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Clicks:</span>
              <span>{interactions.filter((i: any) => i.type === 'click').length}</span>
            </div>
            <div className="flex justify-between">
              <span>Scrolls:</span>
              <span>{interactions.filter((i: any) => i.type === 'scroll').length}</span>
            </div>
            <div className="flex justify-between">
              <span>Keydowns:</span>
              <span>{interactions.filter((i: any) => i.type === 'keydown').length}</span>
            </div>
            <div className="flex justify-between">
              <span>Resizes:</span>
              <span>{interactions.filter((i: any) => i.type === 'resize').length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SEOTab: React.FC<{ analytics: any }> = ({ analytics }) => {
  if (!analytics) return <div>Loading SEO analytics...</div>;

  const totalPageViews = Array.from(analytics.values()).reduce((sum: number, data: any) => sum + data.pageViews, 0);
  const totalPages = analytics.size;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Total Page Views</h3>
          <div className="text-3xl font-bold text-blue-600">{totalPageViews}</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Pages Tracked</h3>
          <div className="text-3xl font-bold text-green-600">{totalPages}</div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Page Performance</h3>
        <div className="space-y-2">
          {Array.from(analytics.entries()).map(([page, data]: [string, any]) => (
            <div key={page} className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium">{page || '/'}</span>
              <div className="text-sm text-gray-600">
                {data.pageViews} views
                <span className="ml-2 text-xs">
                  (Last: {new Date(data.lastUpdated).toLocaleTimeString()})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ErrorsTab: React.FC<{ metrics: any }> = ({ metrics }) => {
  if (!metrics) return <div>Loading error metrics...</div>;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800">Total Errors</h3>
          <div className="text-3xl font-bold text-red-600">{metrics.totalErrors}</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold text-orange-800">Critical</h3>
          <div className="text-3xl font-bold text-orange-600">
            {metrics.errorsBySeverity.critical || 0}
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800">High</h3>
          <div className="text-3xl font-bold text-yellow-600">
            {metrics.errorsBySeverity.high || 0}
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Error Rate</h3>
          <div className="text-3xl font-bold text-blue-600">
            {metrics.errorRate.toFixed(4)}/s
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Errors by Type</h3>
          <div className="space-y-2">
            {Object.entries(metrics.errorsByType).map(([type, count]) => (
              <div key={type} className="flex justify-between">
                <span className="capitalize">{type}:</span>
                <span className="font-medium">{count as number}</span>
>>>>>>> origin/cursor/ad-creation-and-management-ac48
              </div>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {data.trafficSources.map((source, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-700">{source.source}</span>
                <span className="font-semibold">{source.percentage}%</span>
              </div>
            ))}
          </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">Bounce Rate</h3>
          <p className="text-3xl font-bold text-yellow-600">{data.bounceRate}%</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Avg. Session</h3>
          <p className="text-3xl font-bold text-purple-600">{data.avgSessionDuration}m</p>
const AnalyticsDashboard: React.FC = () => {
=======
        <div>
          <h3 className="text-lg font-semibold mb-3">Errors by Severity</h3>
          <div className="space-y-2">
            {Object.entries(metrics.errorsBySeverity).map(([severity, count]) => (
              <div key={severity} className="flex justify-between">
                <span className="capitalize">{severity}:</span>
                <span className={`font-medium ${getSeverityColor(severity)}`}>
                  {count as number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const getVitalColor = (value: number | null, good: number, poor: number) => {
  if (value === null) return 'text-gray-500';
  if (value <= good) return 'text-green-600';
  if (value <= poor) return 'text-yellow-600';
  return 'text-red-600';
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'critical': return 'text-red-600';
    case 'high': return 'text-orange-600';
    case 'medium': return 'text-yellow-600';
    case 'low': return 'text-green-600';
    default: return 'text-gray-600';
  }
};

export default AnalyticsDashboard;
>>>>>>> origin/cursor/ad-creation-and-management-ac48
