import React, { useState, useEffect, useCallback } from 'react';
import { 
  Activity, 
  Zap, 
  Clock, 
  HardDrive, 
  Network, 
  Cpu, 
  Memory, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  Settings,
  RefreshCw,
  BarChart3,
  Gauge,
  Target,
  Rocket,
  Shield
} from 'lucide-react';

interface PerformanceMetrics {
  pageLoadTime: number;
  memoryUsage: number;
  bundleSize: number;
  lighthouseScore: number;
  networkLatency: number;
  cpuUsage: number;
  domSize: number;
  imageOptimization: number;
  accessibilityScore: number;
  seoScore: number;
  bestPracticesScore: number;
  performanceScore: number;
}

interface OptimizationSuggestion {
  id: string;
  category: 'performance' | 'accessibility' | 'seo' | 'best-practices';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
  priority: number;
  action: string;
}

const EnhancedPerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    pageLoadTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    lighthouseScore: 0,
    networkLatency: 0,
    cpuUsage: 0,
    domSize: 0,
    imageOptimization: 0,
    accessibilityScore: 0,
    seoScore: 0,
    bestPracticesScore: 0,
    performanceScore: 0
  });

  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [historicalData, setHistoricalData] = useState<PerformanceMetrics[]>([]);

  // Simulate performance metrics collection
  const collectMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = {
      pageLoadTime: Math.random() * 3000 + 500, // 500ms - 3.5s
      memoryUsage: Math.random() * 100 + 20, // 20MB - 120MB
      bundleSize: Math.random() * 500 + 100, // 100KB - 600KB
      lighthouseScore: Math.random() * 40 + 60, // 60 - 100
      networkLatency: Math.random() * 200 + 50, // 50ms - 250ms
      cpuUsage: Math.random() * 30 + 10, // 10% - 40%
      domSize: Math.random() * 1000 + 500, // 500 - 1500 nodes
      imageOptimization: Math.random() * 30 + 70, // 70% - 100%
      accessibilityScore: Math.random() * 30 + 70, // 70 - 100
      seoScore: Math.random() * 30 + 70, // 70 - 100
      bestPracticesScore: Math.random() * 30 + 70, // 70 - 100
      performanceScore: Math.random() * 30 + 70, // 70 - 100
    };

    setMetrics(newMetrics);
    setHistoricalData(prev => [...prev.slice(-9), newMetrics]);
    setLastUpdate(new Date());
  }, []);

  // Generate optimization suggestions based on metrics
  const generateSuggestions = useCallback((currentMetrics: PerformanceMetrics) => {
    const newSuggestions: OptimizationSuggestion[] = [];

    if (currentMetrics.pageLoadTime > 2000) {
      newSuggestions.push({
        id: 'slow-load',
        category: 'performance',
        title: 'Page Load Time Optimization',
        description: 'Page load time is above 2 seconds. Consider implementing lazy loading and code splitting.',
        impact: 'high',
        effort: 'medium',
        priority: 1,
        action: 'Implement lazy loading for images and components'
      });
    }

    if (currentMetrics.memoryUsage > 80) {
      newSuggestions.push({
        id: 'memory-usage',
        category: 'performance',
        title: 'Memory Usage Optimization',
        description: 'Memory usage is high. Check for memory leaks and optimize component lifecycle.',
        impact: 'medium',
        effort: 'high',
        priority: 2,
        action: 'Audit component memory usage and implement cleanup'
      });
    }

    if (currentMetrics.bundleSize > 300) {
      newSuggestions.push({
        id: 'bundle-size',
        category: 'performance',
        title: 'Bundle Size Reduction',
        description: 'Bundle size is large. Consider tree shaking and dynamic imports.',
        impact: 'high',
        effort: 'medium',
        priority: 1,
        action: 'Implement dynamic imports and code splitting'
      });
    }

    if (currentMetrics.accessibilityScore < 90) {
      newSuggestions.push({
        id: 'accessibility',
        category: 'accessibility',
        title: 'Accessibility Improvements',
        description: 'Accessibility score needs improvement. Add ARIA labels and keyboard navigation.',
        impact: 'high',
        effort: 'low',
        priority: 1,
        action: 'Add ARIA labels and improve keyboard navigation'
      });
    }

    if (currentMetrics.seoScore < 90) {
      newSuggestions.push({
        id: 'seo',
        category: 'seo',
        title: 'SEO Optimization',
        description: 'SEO score can be improved. Add meta tags and structured data.',
        impact: 'medium',
        effort: 'low',
        priority: 2,
        action: 'Add meta tags and structured data markup'
      });
    }

    setSuggestions(newSuggestions.sort((a, b) => a.priority - b.priority));
  }, []);

  useEffect(() => {
    if (isMonitoring) {
      collectMetrics();
      const interval = setInterval(collectMetrics, 30000); // Update every 30 seconds
      return () => clearInterval(interval);
    }
  }, [isMonitoring, collectMetrics]);

  useEffect(() => {
    generateSuggestions(metrics);
  }, [metrics, generateSuggestions]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-4 h-4 text-green-500" />;
    if (score >= 70) return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
    return <XCircle className="w-4 h-4 text-red-500" />;
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="fixed top-4 left-4 z-50 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-xl max-w-md">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Performance Dashboard</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMonitoring(!isMonitoring)}
              className={`p-1 rounded ${isMonitoring ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}
              title={isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
            >
              <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`} />
            </button>
            <button
              onClick={collectMetrics}
              className="p-1 rounded hover:bg-gray-100 text-gray-600"
              title="Refresh Metrics"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded hover:bg-gray-100 text-gray-600"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              <BarChart3 className="w-4 h-4" />
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Last updated: {lastUpdate.toLocaleTimeString()}
        </p>
      </div>

      <div className="p-4 space-y-4">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Load Time</span>
            </div>
            <p className="text-lg font-bold text-blue-900">
              {metrics.pageLoadTime.toFixed(0)}ms
            </p>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <Memory className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-900">Memory</span>
            </div>
            <p className="text-lg font-bold text-green-900">
              {metrics.memoryUsage.toFixed(0)}MB
            </p>
          </div>
          
          <div className="bg-purple-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <HardDrive className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-900">Bundle</span>
            </div>
            <p className="text-lg font-bold text-purple-900">
              {metrics.bundleSize.toFixed(0)}KB
            </p>
          </div>
          
          <div className="bg-orange-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-900">Lighthouse</span>
            </div>
            <p className="text-lg font-bold text-orange-900">
              {metrics.lighthouseScore.toFixed(0)}
            </p>
          </div>
        </div>

        {/* Lighthouse Scores */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700 flex items-center space-x-2">
            <Gauge className="w-4 h-4" />
            <span>Lighthouse Scores</span>
          </h4>
          <div className="space-y-2">
            {[
              { label: 'Performance', score: metrics.performanceScore, color: getScoreColor(metrics.performanceScore) },
              { label: 'Accessibility', score: metrics.accessibilityScore, color: getScoreColor(metrics.accessibilityScore) },
              { label: 'SEO', score: metrics.seoScore, color: getScoreColor(metrics.seoScore) },
              { label: 'Best Practices', score: metrics.bestPracticesScore, color: getScoreColor(metrics.bestPracticesScore) }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{item.label}</span>
                <div className="flex items-center space-x-2">
                  {getScoreIcon(item.score)}
                  <span className={`text-sm font-medium ${item.color}`}>
                    {item.score.toFixed(0)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Suggestions */}
        {suggestions.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700 flex items-center space-x-2">
              <Rocket className="w-4 h-4" />
              <span>Optimization Suggestions</span>
            </h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {suggestions.slice(0, 3).map((suggestion) => (
                <div key={suggestion.id} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h5 className="text-sm font-medium text-yellow-900">{suggestion.title}</h5>
                      <p className="text-xs text-yellow-700 mt-1">{suggestion.description}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <span className={`px-2 py-1 text-xs rounded-full border ${getImpactColor(suggestion.impact)}`}>
                        {suggestion.impact}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full border ${getEffortColor(suggestion.effort)}`}>
                        {suggestion.effort}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Historical Chart */}
        {isExpanded && historicalData.length > 1 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700 flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Performance Trend</span>
            </h4>
            <div className="h-20 bg-gray-50 rounded-lg p-2">
              <div className="flex items-end justify-between h-full space-x-1">
                {historicalData.map((data, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-blue-500 rounded-t"
                    style={{
                      height: `${(data.lighthouseScore / 100) * 100}%`,
                      opacity: 0.3 + (index / historicalData.length) * 0.7
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="flex space-x-2">
          <button
            onClick={() => window.open('https://pagespeed.web.dev/', '_blank')}
            className="flex-1 bg-blue-600 text-white text-xs py-2 px-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            <Zap className="w-3 h-3 inline mr-1" />
            PageSpeed
          </button>
          <button
            onClick={() => window.open('https://developers.google.com/web/tools/lighthouse', '_blank')}
            className="flex-1 bg-green-600 text-white text-xs py-2 px-3 rounded-md hover:bg-green-700 transition-colors"
          >
            <Target className="w-3 h-3 inline mr-1" />
            Lighthouse
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedPerformanceDashboard;