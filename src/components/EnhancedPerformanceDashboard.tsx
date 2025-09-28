import React, { useState, useEffect, useCallback } from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  LineChart, 
  Line,
  Area,
  AreaChart
} from 'recharts';
import { performanceEnhancements } from '../utils/performanceEnhancements';
import { bundleOptimizer } from '../utils/bundleOptimizer';
import { loadingOptimizer } from '../utils/loadingOptimizer';

interface EnhancedPerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

interface PerformanceData {
  timestamp: number;
  lcp: number;
  fcp: number;
  fid: number;
  cls: number;
  memoryUsage: number;
  bundleScore: number;
  loadingScore: number;
}

const EnhancedPerformanceDashboard: React.FC<EnhancedPerformanceDashboardProps> = ({ 
  isVisible, 
  onClose 
}) => {
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
  const [currentMetrics, setCurrentMetrics] = useState(performanceEnhancements.getMetrics());
  const [bundleAnalysis, setBundleAnalysis] = useState(bundleOptimizer.getAnalysis());
  const [loadingMetrics, setLoadingMetrics] = useState(loadingOptimizer.getMetrics());
  const [optimizationSuggestions, setOptimizationSuggestions] = useState(performanceEnhancements.getSuggestions());
  const [bundleRecommendations, setBundleRecommendations] = useState(bundleOptimizer.getRecommendations());
  const [loadingStrategies, setLoadingStrategies] = useState(loadingOptimizer.getStrategies());

  const updateMetrics = useCallback(() => {
    const metrics = performanceEnhancements.getMetrics();
    const bundle = bundleOptimizer.getAnalysis();
    const loading = loadingOptimizer.getMetrics();
    
    setCurrentMetrics(metrics);
    setBundleAnalysis(bundle);
    setLoadingMetrics(loading);
    setOptimizationSuggestions(performanceEnhancements.getSuggestions());
    setBundleRecommendations(bundleOptimizer.getRecommendations());
    setLoadingStrategies(loadingOptimizer.getStrategies());

    // Add to performance data
    if (metrics) {
      const newDataPoint: PerformanceData = {
        timestamp: Date.now(),
        lcp: metrics.lcp,
        fcp: metrics.fcp,
        fid: metrics.fid,
        cls: metrics.cls,
        memoryUsage: 0, // metrics.memoryUsage not available
        bundleScore: bundleOptimizer.getOptimizationScore(),
        loadingScore: loadingOptimizer.getLoadingScore()
      };

      setPerformanceData(prev => [...prev.slice(-19), newDataPoint]);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      updateMetrics();
      const interval = setInterval(updateMetrics, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible, updateMetrics]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getImpactColor = (impact: number) => {
    if (impact >= 30) return '#ef4444';
    if (impact >= 15) return '#f59e0b';
    return '#10b981';
  };

  const applyOptimization = (suggestion: any) => {
    if (suggestion.action) {
      suggestion.action();
      updateMetrics();
    }
  };

  const applyBundleOptimization = (recommendation: any) => {
    bundleOptimizer.applyRecommendations([recommendation]);
    updateMetrics();
  };

  const applyLoadingStrategy = (strategyName: string) => {
    loadingOptimizer.applyStrategy(strategyName);
    updateMetrics();
  };

  const exportReport = () => {
    const report = {
      timestamp: new Date().toISOString(),
      performance: currentMetrics,
      bundle: bundleAnalysis,
      loading: loadingMetrics,
      suggestions: optimizationSuggestions,
      bundleRecommendations,
      loadingStrategies,
      performanceReport: performanceEnhancements.generateReport(),
      bundleReport: bundleOptimizer.generateOptimizationReport(),
      loadingReport: loadingOptimizer.generateLoadingReport()
    };
    
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `enhanced-performance-report-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isVisible) return null;

  const performanceScore = performanceEnhancements.getPerformanceScore();
  const bundleScore = bundleOptimizer.getOptimizationScore();
  const loadingScore = loadingOptimizer.getLoadingScore();
  const overallScore = Math.round((performanceScore + bundleScore + loadingScore) / 3);

  const pieData = [
    { name: 'Performance', value: performanceScore, color: '#3b82f6' },
    { name: 'Bundle', value: bundleScore, color: '#10b981' },
    { name: 'Loading', value: loadingScore, color: '#f59e0b' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Enhanced Performance Dashboard
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Overall Score */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Overall Performance Score</h3>
            <div className="text-4xl font-bold">{overallScore}/100</div>
            <div className="mt-2 text-blue-100">
              {overallScore >= 90 ? 'Excellent' : 
               overallScore >= 80 ? 'Good' : 
               overallScore >= 70 ? 'Fair' : 'Needs Improvement'}
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Performance Score
              </h4>
              <div className={`text-2xl font-bold ${getScoreColor(performanceScore).split(' ')[0]}`}>
                {performanceScore}/100
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Core Web Vitals
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Bundle Score
              </h4>
              <div className={`text-2xl font-bold ${getScoreColor(bundleScore).split(' ')[0]}`}>
                {bundleScore}/100
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Bundle Optimization
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Loading Score
              </h4>
              <div className={`text-2xl font-bold ${getScoreColor(loadingScore).split(' ')[0]}`}>
                {loadingScore}/100
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Loading Performance
              </div>
            </div>
          </div>

          {/* Real-time Performance Chart */}
          {performanceData.length > 0 && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Real-time Performance Monitoring
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="timestamp" tickFormatter={(value) => new Date(value).toLocaleTimeString()} />
                  <YAxis />
                  <Tooltip 
                    labelFormatter={(value) => new Date(value).toLocaleString()}
                    formatter={(value, name) => [
                      typeof value === 'number' ? value.toFixed(2) : value,
                      name === 'lcp' ? 'LCP (ms)' :
                      name === 'fcp' ? 'FCP (ms)' :
                      name === 'fid' ? 'FID (ms)' :
                      name === 'cls' ? 'CLS' :
                      name === 'memoryUsage' ? 'Memory (MB)' :
                      name === 'bundleScore' ? 'Bundle Score' :
                      name === 'loadingScore' ? 'Loading Score' : name
                    ]}
                  />
                  <Area type="monotone" dataKey="lcp" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="fcp" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="fid" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Optimization Suggestions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Performance Optimizations
              </h3>
              <div className="space-y-3">
                {optimizationSuggestions.slice(0, 5).map((suggestion: any, index: number) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-3 rounded border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {suggestion.title}
                      </h4>
                      <span
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{
                          backgroundColor: getImpactColor(suggestion.impact),
                          color: 'white'
                        }}
                      >
                        {suggestion.impact}% impact
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {suggestion.description}
                    </p>
                    {suggestion.automated && (
                      <button
                        onClick={() => applyOptimization(suggestion)}
                        className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                      >
                        Apply
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Bundle Optimizations
              </h3>
              <div className="space-y-3">
                {bundleRecommendations.slice(0, 5).map((recommendation, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-3 rounded border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {recommendation.title}
                      </h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        recommendation.priority === 'critical' ? 'bg-red-100 text-red-800' :
                        recommendation.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {recommendation.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {recommendation.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {recommendation.impact}KB savings
                      </span>
                      <button
                        onClick={() => applyBundleOptimization(recommendation)}
                        className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Loading Strategies */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Loading Optimization Strategies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {loadingStrategies.map((strategy, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded border">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {strategy.name}
                    </h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      strategy.priority === 'critical' ? 'bg-red-100 text-red-800' :
                      strategy.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {strategy.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {strategy.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {strategy.estimatedImprovement}% improvement
                    </span>
                    <button
                      onClick={() => applyLoadingStrategy(strategy.name)}
                      className="text-xs bg-purple-500 text-white px-2 py-1 rounded hover:bg-purple-600"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={exportReport}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Export Full Report
            </button>
            <button
              onClick={updateMetrics}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Refresh Metrics
            </button>
            <button
              onClick={() => {
                performanceEnhancements.applyAutomatedOptimizations();
                updateMetrics();
              }}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Apply All Automated
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedPerformanceDashboard;