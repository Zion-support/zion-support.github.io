import React, { useState, useEffect } from 'react';
import PerformanceMonitor from '../utils/performance-monitor';
import SEOOptimizer from '../utils/seo-optimizer';
import ErrorHandler from '../utils/error-handler';

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
          <button
            onClick={() => setActiveTab('performance')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'performance'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Performance
          </button>
          <button
            onClick={() => setActiveTab('seo')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'seo'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            SEO
          </button>
          <button
            onClick={() => setActiveTab('errors')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'errors'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Errors
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
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
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800">Load Time</h3>
          <div className="text-3xl font-bold text-yellow-600">
            {data?.loadTime ? `${data.loadTime}ms` : 'N/A'}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>First Contentful Paint</span>
            <span className="font-semibold">{data?.fcp || 'N/A'}ms</span>
          </div>
          <div className="flex justify-between">
            <span>Largest Contentful Paint</span>
            <span className="font-semibold">{data?.lcp || 'N/A'}ms</span>
          </div>
          <div className="flex justify-between">
            <span>Cumulative Layout Shift</span>
            <span className="font-semibold">{data?.cls || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SEOTab: React.FC<{ analytics: any }> = ({ analytics }) => {
  if (!analytics) return <div>Loading SEO analytics...</div>;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">SEO Score</h3>
          <div className="text-3xl font-bold text-blue-600">{analytics.score || 'N/A'}/100</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Page Speed</h3>
          <div className="text-3xl font-bold text-green-600">{analytics.pageSpeed || 'N/A'}</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">SEO Recommendations</h3>
        <div className="space-y-2">
          {analytics.recommendations?.map((rec: string, index: number) => (
            <div key={index} className="flex items-start">
              <span className="text-yellow-500 mr-2">•</span>
              <span>{rec}</span>
            </div>
          )) || <div>No recommendations available</div>}
        </div>
      </div>
    </div>
  );
};

const ErrorsTab: React.FC<{ metrics: any }> = ({ metrics }) => {
  if (!metrics) return <div>Loading error metrics...</div>;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800">Total Errors</h3>
          <div className="text-3xl font-bold text-red-600">{metrics.totalErrors || 0}</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800">Warnings</h3>
          <div className="text-3xl font-bold text-yellow-600">{metrics.warnings || 0}</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Resolved</h3>
          <div className="text-3xl font-bold text-green-600">{metrics.resolved || 0}</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Recent Errors</h3>
        <div className="space-y-2">
          {metrics.recentErrors?.map((error: any, index: number) => (
            <div key={index} className="p-3 bg-red-50 rounded border-l-4 border-red-400">
              <div className="font-semibold text-red-800">{error.message}</div>
              <div className="text-sm text-red-600">{error.stack}</div>
            </div>
          )) || <div>No recent errors</div>}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;