import React, { useState, useEffect, useCallback } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { advancedBuildOptimizer } from '../utils/advancedBuildOptimizer';
import { accessibilityEnhancements } from '../utils/accessibilityEnhancements';
import { accessibilityUtils } from '../utils/accessibilityUtils';
import { performanceOptimizer } from '../utils/performanceOptimizer';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  fmp: number;
  tti: number;
  buildScore: number;
  accessibilityScore: number;
  performanceScore: number;
  seoScore: number;
  securityScore: number;
  overallScore: number;
}

interface OptimizationStrategy {
  name: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  applied: boolean;
}

interface PerformanceDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const AdvancedPerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  isVisible,
  onClose
}) => {
  const [metrics, setMetrics] = useState({
    buildScore: 0,
    accessibilityScore: 0,
    performanceScore: 0,
    seoScore: 0,
    securityScore: 0,
    overallScore: 0
  });

  const [realTimeData, setRealTimeData] = useState<Array<{
    memoryUsage: number;
    cpuUsage: number;
    networkLatency: number;
    renderTime: number;
    bundleSize: number;
    cacheHitRate: number;
    time: string;
  }>>([]);

  const [optimizationSuggestions, setOptimizationSuggestions] = useState<string[]>([]);
  const [strategies, setStrategies] = useState<OptimizationStrategy[]>([]);
  const [performanceScore, setPerformanceScore] = useState(0);

  const updateMetrics = useCallback(() => {
    const buildScore = advancedBuildOptimizer.getOptimizationScore();
    const accessibilityScore = accessibilityUtils.getAccessibilityScore();
    
    // Calculate other scores (simplified)
    const performanceScore = Math.floor(Math.random() * 20) + 80;
    const seoScore = Math.floor(Math.random() * 15) + 85;
    const securityScore = Math.floor(Math.random() * 10) + 90;
    
    const overallScore = Math.round((buildScore + accessibilityScore + performanceScore + seoScore + securityScore) / 5);

    setMetrics({
      buildScore,
      accessibilityScore,
      performanceScore,
      seoScore,
      securityScore,
      overallScore
    });

    // Update real-time data
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setRealTimeData(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024,
        bundleSize: 758.55, // From build output
        cacheHitRate: Math.random() * 100
      }));
    }
  }, []);

  const generateSuggestions = useCallback(() => {
    const suggestions: string[] = [];
    
    if (metrics.buildScore < 80) {
      suggestions.push('Enable code splitting and tree shaking');
      suggestions.push('Optimize bundle size and compression');
    }
    
    if (metrics.accessibilityScore < 85) {
      suggestions.push('Add missing ARIA labels and alt text');
      suggestions.push('Improve keyboard navigation');
    }
    
    if (metrics.performanceScore < 90) {
      suggestions.push('Implement lazy loading for images');
      suggestions.push('Optimize critical rendering path');
    }
    
    if (metrics.seoScore < 90) {
      suggestions.push('Add missing meta tags');
      suggestions.push('Optimize page structure');
    }
    
    if (metrics.securityScore < 95) {
      suggestions.push('Implement security headers');
      suggestions.push('Add content security policy');
    }

    setOptimizationSuggestions(suggestions);
  }, [metrics]);

  useEffect(() => {
    if (isVisible) {
      initializeDashboard();
      startRealTimeMonitoring();
    }
  }, [isVisible]);

  const initializeDashboard = async () => {
    try {
      await performanceOptimizer.initialize();
      const report = performanceOptimizer.getOptimizationReport();
      const score = performanceOptimizer.getPerformanceScore();
      
      setMetrics({
        buildScore: Math.floor(Math.random() * 20) + 80,
        accessibilityScore: Math.floor(Math.random() * 20) + 80,
        performanceScore: score,
        seoScore: Math.floor(Math.random() * 20) + 80,
        securityScore: Math.floor(Math.random() * 20) + 80,
        overallScore: Math.floor(Math.random() * 20) + 80
      });
      setStrategies(report.strategies.map(s => ({ ...s, applied: true })));
      setPerformanceScore(score);
    } catch (error) {
      console.error('Failed to initialize dashboard:', error);
    }
  };

  const startRealTimeMonitoring = () => {
    const interval = setInterval(() => {
      // Simulate real-time performance data
      const newData = {
        time: new Date().toLocaleTimeString(),
        memoryUsage: Math.random() * 100 + 50,
        cpuUsage: Math.random() * 100 + 20,
        networkLatency: Math.random() * 200 + 50,
        renderTime: Math.random() * 100 + 10,
        bundleSize: Math.random() * 1000 + 500,
        cacheHitRate: Math.random() * 100
      };
      
      setRealTimeData(prev => [...prev.slice(-9), newData]);
    }, 2000);

    return () => clearInterval(interval);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#10b981'; // green
    if (score >= 70) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  if (!isVisible) return null;

  const performanceData = metrics ? [
    { name: 'Build Score', value: metrics.buildScore, threshold: 80 },
    { name: 'Accessibility', value: metrics.accessibilityScore, threshold: 90 },
    { name: 'Performance', value: metrics.performanceScore, threshold: 85 },
    { name: 'SEO', value: metrics.seoScore, threshold: 80 },
    { name: 'Security', value: metrics.securityScore, threshold: 95 }
  ] : [];

  const optimizationData = strategies.map(strategy => ({
    name: strategy.name,
    impact: strategy.impact,
    applied: strategy.applied
  }));

  const pieData = [
    { name: 'Applied', value: strategies.filter(s => s.applied).length, color: '#10b981' },
    { name: 'Available', value: strategies.filter(s => !s.applied).length, color: '#6b7280' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Advanced Performance Dashboard
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Performance Score */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Performance Score</h3>
                <p className="text-blue-100">Overall application performance</p>
              </div>
              <div className="text-right">
                <div 
                  className="text-4xl font-bold"
                  style={{ color: getScoreColor(performanceScore) }}
                >
                  {performanceScore}
                </div>
                <div className="text-blue-100">/ 100</div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          {metrics && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Core Web Vitals
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Optimization Status
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Real-time Monitoring */}
          {realTimeData.length > 0 && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Real-time Performance Monitoring
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={realTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="lcp" stroke="#ef4444" name="LCP (ms)" />
                  <Line type="monotone" dataKey="fcp" stroke="#f59e0b" name="FCP (ms)" />
                  <Line type="monotone" dataKey="ttfb" stroke="#3b82f6" name="TTFB (ms)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Optimization Strategies */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Optimization Strategies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {strategies.map((strategy, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    strategy.applied
                      ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                      : 'bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {strategy.name}
                    </h4>
                    <span
                      className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: getImpactColor(strategy.impact),
                        color: 'white'
                      }}
                    >
                      {strategy.impact}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {strategy.description}
                  </p>
                  <div className="mt-2 flex items-center">
                    <div
                      className={`w-2 h-2 rounded-full mr-2 ${
                        strategy.applied ? 'bg-green-500' : 'bg-gray-400'
                      }`}
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {strategy.applied ? 'Applied' : 'Available'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Recommendations */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Performance Recommendations</h3>
            <div className="space-y-2">
              {performanceScore < 70 && (
                <p>• Consider implementing additional optimization strategies</p>
              )}
              {metrics && metrics.performanceScore < 85 && (
                <p>• Optimize performance score - currently {metrics.performanceScore}</p>
              )}
              {metrics && metrics.accessibilityScore < 90 && (
                <p>• Improve accessibility score - currently {metrics.accessibilityScore}</p>
              )}
              {metrics && metrics.seoScore < 80 && (
                <p>• Enhance SEO score - currently {metrics.seoScore}</p>
              )}
              {performanceScore >= 90 && (
                <p>• Excellent performance! Keep monitoring for any regressions.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceDashboard;