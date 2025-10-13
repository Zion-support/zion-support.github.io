import React, { useEffect, useState, useCallback } from 'react';
import { Activity, Zap, Clock, Database } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  lcp: number;
  fid: number;
  cls: number;
}

interface AdvancedPerformanceMonitorProps {
  children: React.ReactNode;
  showDebugInfo?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ 
  children, 
  showDebugInfo = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  // Measure Core Web Vitals
  const measureWebVitals = useCallback(() => {
    // LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        setMetrics(prev => ({ 
          ...prev, 
          fid: entry.processingStart - entry.startTime 
        }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  // Measure memory usage
  const measureMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }));
    }
  }, []);

  // Measure FPS
  const measureFPS = useCallback(() => {
    let lastTime = performance.now();
    let frameCount = 0;

    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setMetrics(prev => ({ ...prev, fps: frameCount }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (isRecording) {
        requestAnimationFrame(countFrames);
      }
    };

    if (isRecording) {
      requestAnimationFrame(countFrames);
    }
  }, [isRecording]);

  // Measure load time
  const measureLoadTime = useCallback(() => {
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));
  }, []);

  // Initialize performance monitoring
  useEffect(() => {
    const cleanup = measureWebVitals();
    measureLoadTime();
    measureMemory();

    // Update memory usage periodically
    const memoryInterval = setInterval(measureMemory, 5000);

    return () => {
      cleanup();
      clearInterval(memoryInterval);
    };
  }, [measureWebVitals, measureLoadTime, measureMemory]);

  // FPS measurement
  useEffect(() => {
    if (isRecording) {
      measureFPS();
    }
  }, [isRecording, measureFPS]);

  // Toggle recording
  const toggleRecording = useCallback(() => {
    setIsRecording(!isRecording);
  }, [isRecording]);

  // Toggle visibility
  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  // Performance optimization suggestions
  const getPerformanceSuggestions = useCallback(() => {
    const suggestions = [];
    
    if (metrics.lcp > 2500) {
      suggestions.push('LCP is slow. Consider optimizing images and critical resources.');
    }
    
    if (metrics.fid > 100) {
      suggestions.push('FID is high. Consider reducing JavaScript execution time.');
    }
    
    if (metrics.cls > 0.1) {
      suggestions.push('CLS is high. Ensure stable layout and avoid layout shifts.');
    }
    
    if (metrics.memoryUsage > 50) {
      suggestions.push('Memory usage is high. Consider implementing memory optimization.');
    }
    
    if (metrics.fps < 30) {
      suggestions.push('FPS is low. Consider optimizing animations and rendering.');
    }

    return suggestions;
  }, [metrics]);

  const suggestions = getPerformanceSuggestions();

  return (
    <div className="performance-monitor">
      {children}
      
      {showDebugInfo && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={toggleVisibility}
            className="mb-2 w-12 h-12 bg-slate-800 hover:bg-slate-700 text-white rounded-full flex items-center justify-center transition-colors"
            title="Toggle Performance Monitor"
          >
            <Activity className="w-5 h-5" />
          </button>
          
          {isVisible && (
            <div className="bg-slate-800 rounded-lg p-4 shadow-2xl border border-slate-700 min-w-80">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Performance Monitor
                </h3>
                <button
                  onClick={toggleRecording}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    isRecording 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isRecording ? 'Stop' : 'Start'} Recording
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-xs text-gray-400">Load Time</div>
                      <div className="text-sm text-white">{metrics.loadTime.toFixed(0)}ms</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-green-400" />
                    <div>
                      <div className="text-xs text-gray-400">Memory</div>
                      <div className="text-sm text-white">{metrics.memoryUsage.toFixed(1)}MB</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <div>
                      <div className="text-xs text-gray-400">FPS</div>
                      <div className="text-sm text-white">{metrics.fps}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="text-xs text-gray-400">LCP</div>
                      <div className="text-sm text-white">{metrics.lcp.toFixed(0)}ms</div>
                    </div>
                  </div>
                </div>
                
                {suggestions.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-700">
                    <div className="text-xs text-gray-400 mb-2">Suggestions:</div>
                    <ul className="space-y-1">
                      {suggestions.map((suggestion, index) => (
                        <li key={index} className="text-xs text-yellow-400">
                          • {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;