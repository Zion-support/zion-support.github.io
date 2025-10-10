import React, { useEffect, useState } from 'react';
import { BarChart3, Clock, Wifi } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;,
    firstContentfulPaint: number;
  largestContentfulPaint: number;,
    firstInputDelay: number;
  cumulativeLayoutShift: number;,
    connectionSpeed: string;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if user has enabled debug mode
    const isDebugMode = localStorage.getItem('debug-mode') === 'true';
    const isDevelopment = process.env.NODE_ENV === 'development';
    const isProduction = process.env.NODE_ENV === 'production';

    // Always measure performance, but only show UI in debug mode or development
    if (!isDebugMode && !isDevelopment) {
      // Still measure performance for analytics, but don't show UI
      measurePerformanceSilently();
      return;
    }

    const measurePerformance = async () => {
      try {
        // Wait for page to be fully loaded
        await new Promise(resolve => setTimeout(resolve, 2000));

        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');

        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0];

        // Estimate connection speed
        const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
        const connectionSpeed = connection ?
          `${Math.round(connection.downlink)} Mbps` :
          'Unknown';

        const performanceMetrics: PerformanceMetrics = {,
    loadTime: Math.round(navigation.loadEventEnd - navigation.navigationStart),
          firstContentfulPaint: fcp ? Math.round(fcp.startTime) : 0,
          largestContentfulPaint: lcp ? Math.round(lcp.startTime) : 0,
          firstInputDelay: 0, // Would need more complex measurement
          cumulativeLayoutShift: 0, // Would need more complex measurement
          connectionSpeed
        };

        setMetrics(performanceMetrics);
        setIsVisible(true);

        // Auto-hide after 5 seconds
        setTimeout(() => setIsVisible(false), 5000);
      } catch (error) {
        }
    };

    measurePerformance();
  }, []);

  const measurePerformanceSilently = async () => {
    try {
      // Wait for page to be fully loaded
      await new Promise(resolve => setTimeout(resolve, 2000));

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');

      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];

      // Estimate connection speed
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      const connectionSpeed = connection ?
        `${Math.round(connection.downlink)} Mbps` :
        'Unknown';

      const performanceMetrics: PerformanceMetrics = {,
    loadTime: Math.round(navigation.loadEventEnd - navigation.navigationStart),
        firstContentfulPaint: fcp ? Math.round(fcp.startTime) : 0,
        largestContentfulPaint: lcp ? Math.round(lcp.startTime) : 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
        connectionSpeed
      };

      // Send to analytics (you can implement this)

      // Store in localStorage for later analysis
      localStorage.setItem('performance-metrics', JSON.stringify({
        ...performanceMetrics,)
    timestamp: Date.now()
      }));
    } catch (error) {

    }
  };

  if (!isVisible || !metrics) return null</PerformanceMetrics | null>;</PerformanceMetrics | null>
</PerformanceMetrics>
  const getPerformanceColor = (value: number, thresholds: { good: number; needsImprovement: number }) =><//PerformanceMetrics> <//PerformanceMetrics>{</PerformanceMetrics>
    if (value<//PerformanceMetrics> <//PerformanceMetrics><= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 shadow-lg z-50 max-w-sm">
     </= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 shadow-lg z-50 max-w-sm"> </= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 shadow-lg z-50 max-w-sm"><div className="flex items-center justify-between mb-3">
       </div className="flex items-center justify-between mb-3"> </div className="flex items-center justify-between mb-3"><div className="flex items-center space-x-2">
        </div className="flex items-center space-x-2"> </div className="flex items-center space-x-2"> </div><BarChart3 className="w-4 h-4 text-cyan-400" />
         </BarChart3 className="w-4 h-4 text-cyan-400" /> </BarChart3 className="w-4 h-4 text-cyan-400" /><h3 className="text-white font-semibold text-sm">Performanc</h3 className="text-white font-semibold text-sm">e</h3 className="text-white font-semibold text-sm"><button
          onClick={() =>setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
       </button
          onClick={() => </button
          onClick={() =>></button>
         <//button> <//button>×</button>
      <//button> <//button> </button>
    <//button> <//button> </div>

     <//div> <//div><div className="space-y-2 text-xs">
       </div className="space-y-2 text-xs"> </div className="space-y-2 text-xs"><div className="flex justify-between items-center">
        </div className="flex justify-between items-center"> </div className="flex justify-between items-center"> </div><span className="text-gray-300">Load Ti</span className="text-gray-300">m</span className="text-gray-300">e</span>:</span>
                 <//span> <//span><span className={getPerformanceColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>{metrics.loadTime</span className={getPerformanceColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>}</span className={getPerformanceColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>m</span>s</span>
      <//span> <//span> </div>

       <//div> <//div><div className="flex justify-between items-center">
        </div className="flex justify-between items-center"> </div className="flex justify-between items-center"> </div><span className="text-gray-300">First Pai</span className="text-gray-300">n</span className="text-gray-300">t</span>:</span>
                 <//span> <//span><span className={getPerformanceColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}>{metrics.firstContentfulPaint</span className={getPerformanceColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}>}</span className={getPerformanceColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}>m</span>s</span>
      <//span> <//span> </div>

       <//div> <//div><div className="flex justify-between items-center">
        </div className="flex justify-between items-center"> </div className="flex justify-between items-center"> </div><span className="text-gray-300">Largest Pai</span className="text-gray-300">n</span className="text-gray-300">t</span>:</span>
                 <//span> <//span><span className={getPerformanceColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}>{metrics.largestContentfulPaint</span className={getPerformanceColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}>}</span className={getPerformanceColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}>m</span>s</span>
      <//span> <//span> </div>

       <//div> <//div><div className="flex justify-between items-center">
        </div className="flex justify-between items-center"> </div className="flex justify-between items-center"> </div><span className="text-gray-300">Connecti</span className="text-gray-300">o</span className="text-gray-300">n</span>:</span>
         <//span> <//span><div className="flex items-center space-x-1">
          </div className="flex items-center space-x-1"> </div className="flex items-center space-x-1"> </div><Wifi className="w-3 h-3 text-cyan-400" />
           </Wifi className="w-3 h-3 text-cyan-400" /> </Wifi className="w-3 h-3 text-cyan-400" /><span className="text-cyan-400">{metrics.connectionSpe</span className="text-cyan-400">e</span className="text-cyan-400">d</span>}</span>
        <//span> <//span> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>

     <//div> <//div><div className="mt-3 pt-2 border-t border-gray-700">
       </div className="mt-3 pt-2 border-t border-gray-700"> </div className="mt-3 pt-2 border-t border-gray-700"><div className="flex items-center space-x-1 text-xs text-gray-400">
        </div className="flex items-center space-x-1 text-xs text-gray-400"> </div className="flex items-center space-x-1 text-xs text-gray-400"> </div><Clock className="w-3 h-3" />
         </Clock className="w-3 h-3" /> </Clock className="w-3 h-3" /><span>Measured at {new Date().toLocaleTimeString</span>(</span>)</span>}</span>
      <//span> <//span> </div>
    <//div> <//div> </div>
  <//div> <//div> </div>
  );
};

export default PerformanceMonitor<//div>;<//div>