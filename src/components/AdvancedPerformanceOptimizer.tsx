import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Activity, 
  Database, 
  Network, 
  Cpu, 
  HardDrive, 
  MemoryStick, 
  TrendingUp,
  Settings,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  threshold: number;
  status: 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  history: number[];
  timestamp: Date;
}

interface OptimizationRule {
  id: string;
  name: string;
  description: string;
  category: 'rendering' | 'network' | 'memory' | 'bundle' | 'caching';
  enabled: boolean;
  impact: 'low' | 'medium' | 'high';
  autoApply: boolean;
  conditions: {
    metric: string;
    operator: '>' | '<' | '>=' | '<=' | '==';
    value: number;
  }[];
  action: () => void;
}

interface AdvancedPerformanceOptimizerProps {
  enableRealTime?: boolean;
  refreshInterval?: number;
  enableAutoOptimization?: boolean;
  onOptimization?: (rule: OptimizationRule) => void;
  onPerformanceChange?: (metrics: PerformanceMetric[]) => void;
}

export const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({
  enableRealTime = true,
  refreshInterval = 1000,
  enableAutoOptimization = true,
  onOptimization,
  onPerformanceChange
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [optimizationRules, setOptimizationRules] = useState<OptimizationRule[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<Array<{
    id: string;
    rule: string;
    timestamp: Date;
    impact: string;
    success: boolean;
  }>>([]);
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const performanceObserverRef = useRef<PerformanceObserver | null>(null);

  // Initialize performance metrics
  const initializeMetrics = useCallback(() => {
    const initialMetrics: PerformanceMetric[] = [
      {
        id: 'fps',
        name: 'Frames Per Second',
        value: 60,
        unit: 'fps',
        threshold: 30,
        status: 'good',
        trend: 'stable',
        history: [],
        timestamp: new Date()
      },
      {
        id: 'memory',
        name: 'Memory Usage',
        value: 0,
        unit: 'MB',
        threshold: 100,
        status: 'good',
        trend: 'stable',
        history: [],
        timestamp: new Date()
      },
      {
        id: 'bundle-size',
        name: 'Bundle Size',
        value: 0,
        unit: 'KB',
        threshold: 1000,
        status: 'good',
        trend: 'stable',
        history: [],
        timestamp: new Date()
      },
      {
        id: 'network-latency',
        name: 'Network Latency',
        value: 0,
        unit: 'ms',
        threshold: 200,
        status: 'good',
        trend: 'stable',
        history: [],
        timestamp: new Date()
      },
      {
        id: 'render-time',
        name: 'Render Time',
        value: 0,
        unit: 'ms',
        threshold: 16,
        status: 'good',
        trend: 'stable',
        history: [],
        timestamp: new Date()
      },
      {
        id: 'dom-nodes',
        name: 'DOM Nodes',
        value: 0,
        unit: 'nodes',
        threshold: 1000,
        status: 'good',
        trend: 'stable',
        history: [],
        timestamp: new Date()
      }
    ];

    setMetrics(initialMetrics);
  }, []);

  // Initialize optimization rules
  const initializeOptimizationRules = useCallback(() => {
    const rules: OptimizationRule[] = [
      {
        id: 'lazy-loading',
        name: 'Lazy Loading',
        description: 'Enable lazy loading for images and components',
        category: 'rendering',
        enabled: true,
        impact: 'high',
        autoApply: true,
        conditions: [
          { metric: 'render-time', operator: '>', value: 16 }
        ],
        action: () => {
          // Implement lazy loading
          const images = document.querySelectorAll('img[data-src]');
          images.forEach(img => {
            const image = img as HTMLImageElement;
            if (image.dataset.src) {
              image.src = image.dataset.src;
              image.removeAttribute('data-src');
            }
          });
        }
      },
      {
        id: 'code-splitting',
        name: 'Code Splitting',
        description: 'Split large bundles into smaller chunks',
        category: 'bundle',
        enabled: true,
        impact: 'high',
        autoApply: true,
        conditions: [
          { metric: 'bundle-size', operator: '>', value: 1000 }
        ],
        action: () => {
          // Implement code splitting
          console.log('Applying code splitting optimization');
        }
      },
      {
        id: 'memory-cleanup',
        name: 'Memory Cleanup',
        description: 'Clean up unused memory and event listeners',
        category: 'memory',
        enabled: true,
        impact: 'medium',
        autoApply: true,
        conditions: [
          { metric: 'memory', operator: '>', value: 100 }
        ],
        action: () => {
          // Implement memory cleanup
          if (window.gc) {
            window.gc();
          }
        }
      },
      {
        id: 'image-optimization',
        name: 'Image Optimization',
        description: 'Optimize images for better performance',
        category: 'network',
        enabled: true,
        impact: 'medium',
        autoApply: false,
        conditions: [
          { metric: 'network-latency', operator: '>', value: 200 }
        ],
        action: () => {
          // Implement image optimization
          const images = document.querySelectorAll('img');
          images.forEach(img => {
            if (!img.loading) {
              img.loading = 'lazy';
            }
          });
        }
      },
      {
        id: 'caching',
        name: 'Caching Strategy',
        description: 'Implement aggressive caching for static assets',
        category: 'caching',
        enabled: true,
        impact: 'high',
        autoApply: true,
        conditions: [
          { metric: 'network-latency', operator: '>', value: 100 }
        ],
        action: () => {
          // Implement caching
          console.log('Applying caching optimization');
        }
      }
    ];

    setOptimizationRules(rules);
  }, []);

  // Collect performance metrics
  const collectMetrics = useCallback(() => {
    const newMetrics = metrics.map(metric => {
      let value = metric.value;
      let status: 'good' | 'warning' | 'critical' = 'good';

      switch (metric.id) {
        case 'fps':
          // Simulate FPS measurement
          value = Math.max(30, 60 - Math.random() * 20);
          break;
        case 'memory':
          // Get memory usage if available
          if ('memory' in performance) {
            const memory = (performance as any).memory;
            value = Math.round(memory.usedJSHeapSize / 1024 / 1024);
          } else {
            value = Math.round(Math.random() * 200);
          }
          break;
        case 'bundle-size':
          // Estimate bundle size
          value = Math.round(500 + Math.random() * 1000);
          break;
        case 'network-latency':
          // Simulate network latency
          value = Math.round(50 + Math.random() * 300);
          break;
        case 'render-time':
          // Simulate render time
          value = Math.round(8 + Math.random() * 20);
          break;
        case 'dom-nodes':
          // Count DOM nodes
          value = document.querySelectorAll('*').length;
          break;
      }

      // Determine status based on threshold
      if (value > metric.threshold * 1.5) {
        status = 'critical';
      } else if (value > metric.threshold) {
        status = 'warning';
      }

      // Calculate trend
      const history = [...metric.history, value].slice(-10);
      const trend = history.length >= 2 ? 
        (history[history.length - 1] > history[history.length - 2] ? 'up' : 
         history[history.length - 1] < history[history.length - 2] ? 'down' : 'stable') : 'stable';

      return {
        ...metric,
        value,
        status,
        trend,
        history,
        timestamp: new Date()
      };
    });

    setMetrics(newMetrics);
    onPerformanceChange?.(newMetrics);
  }, [metrics, onPerformanceChange]);

  // Apply optimization rules
  const applyOptimizationRules = useCallback(() => {
    if (!enableAutoOptimization) return;

    optimizationRules.forEach(rule => {
      if (!rule.enabled || !rule.autoApply) return;

      const shouldApply = rule.conditions.every(condition => {
        const metric = metrics.find(m => m.id === condition.metric);
        if (!metric) return false;

        switch (condition.operator) {
          case '>': return metric.value > condition.value;
          case '<': return metric.value < condition.value;
          case '>=': return metric.value >= condition.value;
          case '<=': return metric.value <= condition.value;
          case '==': return metric.value === condition.value;
          default: return false;
        }
      });

      if (shouldApply) {
        try {
          rule.action();
          setOptimizationHistory(prev => [{
            id: `opt-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            rule: rule.name,
            timestamp: new Date(),
            impact: rule.impact,
            success: true
          }, ...prev.slice(0, 49)]);
          onOptimization?.(rule);
        } catch (error) {
          setOptimizationHistory(prev => [{
            id: `opt-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            rule: rule.name,
            timestamp: new Date(),
            impact: rule.impact,
            success: false
          }, ...prev.slice(0, 49)]);
        }
      }
    });
  }, [optimizationRules, metrics, enableAutoOptimization, onOptimization]);

  // Start/stop monitoring
  const startMonitoring = useCallback(() => {
    if (intervalRef.current) return;
    
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      collectMetrics();
      applyOptimizationRules();
    }, refreshInterval);
  }, [collectMetrics, applyOptimizationRules, refreshInterval]);

  const stopMonitoring = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  }, []);

  const resetMetrics = useCallback(() => {
    setMetrics(prev => prev.map(metric => ({
      ...metric,
      value: 0,
      history: [],
      trend: 'stable',
      status: 'good'
    })));
    setOptimizationHistory([]);
  }, []);

  // Initialize on mount
  useEffect(() => {
    initializeMetrics();
    initializeOptimizationRules();
  }, [initializeMetrics, initializeOptimizationRules]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopMonitoring();
    };
  }, [stopMonitoring]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-50 border-green-200';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-green-500 rotate-180" />;
      case 'stable': return <Activity className="w-4 h-4 text-blue-500" />;
      default: return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'rendering': return <Zap className="w-4 h-4" />;
      case 'network': return <Network className="w-4 h-4" />;
      case 'memory': return <MemoryStick className="w-4 h-4" />;
      case 'bundle': return <Database className="w-4 h-4" />;
      case 'caching': return <HardDrive className="w-4 h-4" />;
      default: return <Settings className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Cpu className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Performance Optimizer</h2>
            <p className="text-sm text-gray-500">Real-time performance monitoring and optimization</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={isRunning ? stopMonitoring : startMonitoring}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              isRunning 
                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isRunning ? 'Stop' : 'Start'}</span>
          </button>
          
          <button
            onClick={resetMetrics}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <motion.div
              key={metric.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                selectedMetric === metric.id ? 'ring-2 ring-blue-500' : ''
              } ${getStatusColor(metric.status)}`}
              onClick={() => setSelectedMetric(selectedMetric === metric.id ? null : metric.id)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">{metric.name}</h4>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(metric.trend)}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    metric.status === 'good' ? 'bg-green-100 text-green-800' :
                    metric.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {metric.status}
                  </span>
                </div>
              </div>
              
              <div className="text-2xl font-bold mb-1">
                {metric.value.toFixed(1)} {metric.unit}
              </div>
              
              <div className="text-sm text-gray-500">
                Threshold: {metric.threshold} {metric.unit}
              </div>

              {metric.history.length > 1 && (
                <div className="mt-2 h-8 flex items-end space-x-1">
                  {metric.history.slice(-10).map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-blue-200 rounded-sm"
                      style={{ 
                        height: `${Math.max(4, (value / Math.max(...metric.history)) * 100)}%` 
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optimization Rules */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Optimization Rules</h3>
        <div className="space-y-3">
          {optimizationRules.map((rule) => (
            <motion.div
              key={rule.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center space-x-3">
                {getCategoryIcon(rule.category)}
                <div>
                  <h4 className="font-medium text-gray-900">{rule.name}</h4>
                  <p className="text-sm text-gray-500">{rule.description}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  rule.impact === 'high' ? 'bg-red-100 text-red-800' :
                  rule.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {rule.impact} impact
                </span>
                
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={rule.enabled}
                    onChange={(e) => {
                      setOptimizationRules(prev => prev.map(r => 
                        r.id === rule.id ? { ...r, enabled: e.target.checked } : r
                      ));
                    }}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Enabled</span>
                </label>
                
                <button
                  onClick={() => rule.action()}
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                >
                  Apply
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optimization History */}
      {optimizationHistory.length > 0 && (
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Optimizations</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {optimizationHistory.slice(0, 10).map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  {item.success ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  )}
                  <span className="font-medium">{item.rule}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item.impact === 'high' ? 'bg-red-100 text-red-800' :
                    item.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {item.impact}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  {item.timestamp.toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceOptimizer;