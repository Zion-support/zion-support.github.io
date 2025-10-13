"use client";
import { useEffect, useState, useCallback } from 'react';
import { BarChart3, Zap, Clock, Shield, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  inp: number;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  className?: string;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showDetails = false, 
  className = "" 
}) => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isVisible, setIsVisible] = useState(false);

  const updateMetric = useCallback((name: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const getPerformanceGrade = useCallback((metric: keyof PerformanceMetrics, value: number) => {
    const thresholds = {
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      fcp: { good: 1800, needsImprovement: 3000 },
      ttfb: { good: 800, needsImprovement: 1800 },
      inp: { good: 200, needsImprovement: 500 }
    };

    const threshold = thresholds[metric];
    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  }, []);

  const getGradeColor = useCallback((grade: string) => {
    switch (grade) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  }, []);

  const getGradeIcon = useCallback((grade: string) => {
    switch (grade) {
      case 'good': return <Shield className="w-4 h-4" />;
      case 'needs-improvement': return <TrendingUp className="w-4 h-4" />;
      case 'poor': return <Zap className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  }, []);

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Import web-vitals dynamically
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS((metric) => updateMetric('cls', metric.value));
      onINP((metric) => updateMetric('inp', metric.value));
      onFCP((metric) => updateMetric('fcp', metric.value));
      onLCP((metric) => updateMetric('lcp', metric.value));
      onTTFB((metric) => updateMetric('ttfb', metric.value));
    }).catch((error) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to load web-vitals:', error);
      }
    });

    // Monitor resource loading performance
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const domContentLoaded = navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart;
            const loadComplete = navEntry.loadEventEnd - navEntry.loadEventStart;
            
            // Track additional metrics
            updateMetric('fcp', domContentLoaded);
          }
        });
      });
      
      observer.observe({ entryTypes: ['navigation', 'resource'] });
      
      return () => observer.disconnect();
    }
  }, [updateMetric]);

  // Show monitor on Ctrl+Shift+P
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible && !showDetails) return null;

  const metricEntries = Object.entries(metrics) as [keyof PerformanceMetrics, number][];

  return (
    <div className={`fixed bottom-4 right-4 bg-slate-800/95 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/20 shadow-2xl z-50 max-w-sm ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-cyan-400" />
          <h3 className="text-white font-semibold">Performance Monitor</h3>
        </div>
        {!showDetails && (
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        )}
      </div>

      <div className="space-y-2">
        {metricEntries.length === 0 ? (
          <p className="text-gray-400 text-sm">Collecting metrics...</p>
        ) : (
          metricEntries.map(([metric, value]) => {
            const grade = getPerformanceGrade(metric, value);
            const colorClass = getGradeColor(grade);
            const icon = getGradeIcon(grade);
            
            return (
              <div key={metric} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className={colorClass}>{icon}</span>
                  <span className="text-gray-300 text-sm font-medium">
                    {metric.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-mono ${colorClass}`}>
                    {metric === 'cls' ? value.toFixed(3) : `${Math.round(value)}ms`}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${colorClass} bg-opacity-20`}>
                    {grade.replace('-', ' ')}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="mt-3 pt-3 border-t border-gray-700">
        <p className="text-xs text-gray-400">
          Press Ctrl+Shift+P to toggle
        </p>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;