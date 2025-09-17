<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  networkRequests: number;
  errors: number;
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    networkRequests: 0,
    errors: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure performance metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      // Measure render time
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - renderStart;
        
        // Get memory usage if available
        const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
        
        // Count network requests
        const networkRequests = performance.getEntriesByType('resource').length;
        
        // Count errors
        const errors = performance.getEntriesByType('error').length;
        
        setMetrics({
          loadTime,
          renderTime,
          memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
          bundleSize: 0, // This would be calculated from actual bundle analysis
          networkRequests,
          errors
        });
      });
    };

    // Measure after initial load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Monitor performance continuously
    const interval = setInterval(measurePerformance, 5000);

    return () => {
      window.removeEventListener('load', measurePerformance);
      clearInterval(interval);
    };
  }, []);

  // Toggle dashboard visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          title="Open Performance Dashboard (Ctrl+Shift+P)"
        >
          📊
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Performance Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Load Time:</span>
          <span className={`text-sm font-medium ${metrics.loadTime > 3000 ? 'text-red-600' : metrics.loadTime > 1000 ? 'text-yellow-600' : 'text-green-600'}`}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Render Time:</span>
          <span className={`text-sm font-medium ${metrics.renderTime > 100 ? 'text-red-600' : metrics.renderTime > 50 ? 'text-yellow-600' : 'text-green-600'}`}>
            {metrics.renderTime.toFixed(2)}ms
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Memory Usage:</span>
          <span className={`text-sm font-medium ${metrics.memoryUsage > 100 ? 'text-red-600' : metrics.memoryUsage > 50 ? 'text-yellow-600' : 'text-green-600'}`}>
            {metrics.memoryUsage}MB
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Network Requests:</span>
          <span className="text-sm font-medium text-blue-600">
            {metrics.networkRequests}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Errors:</span>
          <span className={`text-sm font-medium ${metrics.errors > 0 ? 'text-red-600' : 'text-green-600'}`}>
            {metrics.errors}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Press Ctrl+Shift+P to toggle
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
=======
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePerformance } from '@/hooks/use-performance';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Zap, Clock, Target, RefreshCw, Eye, EyeOff } from 'lucide-react';

export function PerformanceDashboard() {
  const { metrics, score, grade, resetMetrics, isSupported } = usePerformance();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isSupported) {
    return null;
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    if (score >= 70) return 'text-orange-400';
    return 'text-red-400';
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'bg-green-500';
      case 'B': return 'bg-yellow-500';
      case 'C': return 'bg-orange-500';
      case 'D': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const formatMetric = (value: number | null, unit: string) => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)} ${unit}`;
  };

  const getMetricStatus = (metric: string, value: number | null) => {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 }
    };

    if (value === null) return 'unknown';
    const threshold = thresholds[metric];
    if (!threshold) return 'unknown';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return '✓';
      case 'needs-improvement': return '⚠';
      case 'poor': return '✗';
      default: return '?';
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-20 right-4 z-50 bg-zion-blue-dark/90 backdrop-blur-sm border border-zion-blue-light/20 rounded-lg p-3 text-zion-cyan hover:bg-zion-blue-light/10 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </motion.button>

      {/* Dashboard */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-20 right-4 z-40 w-80 max-h-[80vh] overflow-y-auto"
          >
            <Card className="bg-zion-blue-dark/95 backdrop-blur-md border-zion-blue-light/20 text-white">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-zion-cyan" />
                    Performance
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge className={`${getGradeColor(grade)} text-white`}>
                      Grade {grade}
                    </Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-zion-slate-light hover:text-zion-cyan"
                    >
                      {isExpanded ? '−' : '+'}
                    </Button>
                  </div>
                </div>
                
                {/* Overall Score */}
                <div className="text-center py-4">
                  <div className={`text-3xl font-bold ${getScoreColor(score)}`}>
                    {score}
                  </div>
                  <div className="text-sm text-zion-slate-light">Performance Score</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Core Web Vitals */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zion-cyan flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Core Web Vitals
                  </h4>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-slate-light">FCP</span>
                      <div className="flex items-center space-x-2">
                        <span className={getStatusColor(getMetricStatus('fcp', metrics.fcp))}>
                          {getStatusIcon(getMetricStatus('fcp', metrics.fcp))}
                        </span>
                        <span>{formatMetric(metrics.fcp, 'ms')}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-slate-light">LCP</span>
                      <div className="flex items-center space-x-2">
                        <span className={getStatusColor(getMetricStatus('lcp', metrics.lcp))}>
                          {getStatusIcon(getMetricStatus('lcp', metrics.lcp))}
                        </span>
                        <span>{formatMetric(metrics.lcp, 'ms')}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-slate-light">FID</span>
                      <div className="flex items-center space-x-2">
                        <span className={getStatusColor(getMetricStatus('fid', metrics.fid))}>
                          {getStatusIcon(getMetricStatus('fid', metrics.fid))}
                        </span>
                        <span>{formatMetric(metrics.fid, 'ms')}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-slate-light">CLS</span>
                      <div className="flex items-center space-x-2">
                        <span className={getStatusColor(getMetricStatus('cls', metrics.cls))}>
                          {getStatusIcon(getMetricStatus('cls', metrics.cls))}
                        </span>
                        <span>{formatMetric(metrics.cls, '')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Metrics */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3 pt-3 border-t border-zion-blue-light/20"
                  >
                    <h4 className="text-sm font-semibold text-zion-cyan flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Additional Metrics
                    </h4>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-slate-light">TTFB</span>
                        <span>{formatMetric(metrics.ttfb, 'ms')}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Actions */}
                <div className="pt-3 border-t border-zion-blue-light/20">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={resetMetrics}
                      className="flex-1 border-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/10"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setIsVisible(false)}
                      className="flex-1 border-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/10"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
>>>>>>> origin/website-improvements-v2
