import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number;
  fps: number;
  renderTime: number;
}

interface PerformanceMonitorProps {
  isVisible: boolean;
  onClose: () => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: 0,
    fps: 0,
    renderTime: 0
  });

  const [isRecording, setIsRecording] = useState(false);

  const getPerformanceScore = useCallback((value: number | null, thresholds: { good: number; poor: number }): 'good' | 'needs-improvement' | 'poor' => {
    if (value === null) return 'poor';
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  }, []);

  const getScoreColor = (score: 'good' | 'needs-improvement' | 'poor'): string => {
    switch (score) {
      case 'good': return 'text-green-600';
      case 'needs-improvement': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getScoreBgColor = (score: 'good' | 'needs-improvement' | 'poor'): string => {
    switch (score) {
      case 'good': return 'bg-green-100';
      case 'needs-improvement': return 'bg-yellow-100';
      case 'poor': return 'bg-red-100';
      default: return 'bg-gray-100';
    }
  };

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    // Measure Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            break;
          case 'first-input':
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
            }
            break;
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
            break;
          case 'navigation':
            setMetrics(prev => ({ ...prev, ttfb: (entry as any).responseStart - (entry as any).requestStart }));
            break;
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint', 'navigation'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ 
        ...prev, 
        memoryUsage: memory.usedJSHeapSize / (1024 * 1024) // Convert to MB
      }));
    }

    // Measure FPS
    let lastTime = performance.now();
    let frameCount = 0;
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setMetrics(prev => ({ ...prev, fps: Math.round((frameCount * 1000) / (currentTime - lastTime)) }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (isRecording) {
        requestAnimationFrame(measureFPS);
      }
    };

    if (isRecording) {
      requestAnimationFrame(measureFPS);
    }

    return () => {
      observer.disconnect();
    };
  }, [isRecording]);

  useEffect(() => {
    if (isVisible) {
      const cleanup = measurePerformance();
      return cleanup;
    }
  }, [isVisible, measurePerformance]);

  const lcpScore = getPerformanceScore(metrics.lcp, { good: 2500, poor: 4000 });
  const fidScore = getPerformanceScore(metrics.fid, { good: 100, poor: 300 });
  const clsScore = getPerformanceScore(metrics.cls, { good: 0.1, poor: 0.25 });
  const fcpScore = getPerformanceScore(metrics.fcp, { good: 1800, poor: 3000 });
  const ttfbScore = getPerformanceScore(metrics.ttfb, { good: 800, poor: 1800 });

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Performance Monitor</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Core Web Vitals */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Core Web Vitals</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">LCP</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-mono">
                  {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${getScoreBgColor(lcpScore)} ${getScoreColor(lcpScore)}`}>
                  {lcpScore.replace('-', ' ')}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">FID</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-mono">
                  {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${getScoreBgColor(fidScore)} ${getScoreColor(fidScore)}`}>
                  {fidScore.replace('-', ' ')}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">CLS</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-mono">
                  {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${getScoreBgColor(clsScore)} ${getScoreColor(clsScore)}`}>
                  {clsScore.replace('-', ' ')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Additional Metrics</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">FCP</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-mono">
                  {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${getScoreBgColor(fcpScore)} ${getScoreColor(fcpScore)}`}>
                  {fcpScore.replace('-', ' ')}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">TTFB</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-mono">
                  {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${getScoreBgColor(ttfbScore)} ${getScoreColor(ttfbScore)}`}>
                  {ttfbScore.replace('-', ' ')}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Memory</span>
              <span className="text-sm font-mono">{metrics.memoryUsage.toFixed(1)} MB</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">FPS</span>
              <span className="text-sm font-mono">{metrics.fps}</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="pt-4 border-t border-gray-200">
          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`w-full px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isRecording
                ? 'bg-red-100 text-red-700 hover:bg-red-200'
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;