import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  threshold: number;
}

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  category: 'performance' | 'accessibility' | 'seo' | 'security';
}

export function PerformanceOptimizer() {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    // Simulate performance monitoring
    const interval = setInterval(() => {
      const newMetrics: PerformanceMetric[] = [
        {
          name: 'Page Load Time',
          value: Math.random() * 2000 + 500,
          unit: 'ms',
          status: Math.random() > 0.7 ? 'good' : Math.random() > 0.4 ? 'warning' : 'critical',
          threshold: 1500
        },
        {
          name: 'First Contentful Paint',
          value: Math.random() * 1000 + 200,
          unit: 'ms',
          status: Math.random() > 0.8 ? 'good' : Math.random() > 0.5 ? 'warning' : 'critical',
          threshold: 800
        },
        {
          name: 'Largest Contentful Paint',
          value: Math.random() * 2500 + 800,
          unit: 'ms',
          status: Math.random() > 0.75 ? 'good' : Math.random() > 0.45 ? 'warning' : 'critical',
          threshold: 2000
        },
        {
          name: 'Cumulative Layout Shift',
          value: Math.random() * 0.3,
          unit: '',
          status: Math.random() > 0.8 ? 'good' : Math.random() > 0.6 ? 'warning' : 'critical',
          threshold: 0.1
        }
      ];

      setMetrics(newMetrics);

      // Generate optimization suggestions based on metrics
      const newSuggestions: OptimizationSuggestion[] = [];
      
      if (newMetrics[0].value > 1500) {
        newSuggestions.push({
          id: '1',
          title: 'Optimize Image Loading',
          description: 'Consider implementing lazy loading and WebP format for images',
          priority: 'high',
          category: 'performance'
        });
      }

      if (newMetrics[1].value > 800) {
        newSuggestions.push({
          id: '2',
          title: 'Reduce Critical CSS',
          description: 'Inline critical CSS and defer non-critical styles',
          priority: 'medium',
          category: 'performance'
        });
      }

      if (newMetrics[3].value > 0.1) {
        newSuggestions.push({
          id: '3',
          title: 'Fix Layout Shifts',
          description: 'Set explicit dimensions for images and avoid dynamic content insertion',
          priority: 'high',
          category: 'performance'
        });
      }

      setSuggestions(newSuggestions);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Show performance panel after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'critical': return <AlertTriangle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 border-red-500/30 text-red-400';
      case 'medium': return 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400';
      case 'low': return 'bg-blue-500/20 border-blue-500/30 text-blue-400';
      default: return 'bg-gray-500/20 border-gray-500/30 text-gray-400';
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Performance Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setShowPanel(!showPanel)}
          className="group relative p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110"
        >
          <Zap className="w-6 h-6 text-white" />
          
          {/* Performance Indicator */}
          {suggestions.length > 0 && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{suggestions.length}</span>
            </div>
          )}
        </button>
      </motion.div>

      {/* Performance Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-96 max-h-[80vh] bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 z-40 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-cyan-400/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Performance Monitor</h3>
                  <p className="text-cyan-400 text-sm">Real-time metrics</p>
                </div>
              </div>
              <button
                onClick={() => setShowPanel(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[calc(80vh-80px)] overflow-y-auto">
              {/* Performance Metrics */}
              <div>
                <h4 className="text-white font-medium mb-3">Performance Metrics</h4>
                <div className="space-y-3">
                  {metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className={`${getStatusColor(metric.status)}`}>
                          {getStatusIcon(metric.status)}
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{metric.name}</div>
                          <div className="text-gray-400 text-xs">
                            {metric.value.toFixed(metric.unit === '' ? 3 : 0)}{metric.unit}
                          </div>
                        </div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${getStatusColor(metric.status)} bg-opacity-20`}>
                        {metric.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimization Suggestions */}
              {suggestions.length > 0 && (
                <div>
                  <h4 className="text-white font-medium mb-3">Optimization Suggestions</h4>
                  <div className="space-y-3">
                    {suggestions.map((suggestion) => (
                      <div
                        key={suggestion.id}
                        className={`p-3 rounded-lg border ${getPriorityColor(suggestion.priority)}`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-medium">{suggestion.title}</h5>
                          <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(suggestion.priority)}`}>
                            {suggestion.priority}
                          </span>
                        </div>
                        <p className="text-sm opacity-90">{suggestion.description}</p>
                        <div className="mt-2">
                          <span className="text-xs opacity-75">{suggestion.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* No Suggestions State */}
              {suggestions.length === 0 && (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <p className="text-white font-medium">All Good!</p>
                  <p className="text-gray-400 text-sm">Performance is optimal</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
