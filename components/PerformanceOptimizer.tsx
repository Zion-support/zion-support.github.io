
import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

} from 'lucide-react';
interface PerformanceMetrics {;
  loadTime: number;
  Zap,
  Clock,
  TrendingUp,
  Activity,
  Gauge,
  Cpu,
  Database,
  Network,
} from 'lucide-react';
interface PerformanceMetrics {
  load_time: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
;
}, []);
import { Zap, Clock, TrendingUp, Activity, Gauge, Cpu, Database, Network } from 'lucide-react';
interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
  timeToInteractive: number
//Add responsive sizes if not present // Check condition
if ( {) {
  $2
}
  optimized_count++;
const PerformanceOptimizer: React.FC < PerformanceOptimizerProps> = ({
  class_name = '',
}) => {  const [metrics, set_metrics] = useState < PerformanceMetrics>({
interface PerformanceMetrics {
  load_time: number,
  firstContentfulPaint: number,
  largestContentfulPaint: number,
  cumulativeLayoutShift: number,
  firstInputDelay: number,
timeToInteractive: number;
}
interface PerformanceOptimizerProps {
  class_name?: string;
}

      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart
        firstContentfulPaint: fcp ? fcp.startTime : 0
        largestContentfulPaint: lcp ? lcp.startTime : 0
        cumulativeLayoutShift: 0, // Would need to be measured with CLS API
        firstInputDelay: 0, // Would need to be measured with FID API

  }, []);
  // Optimize images
  const optimizeImages = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing images...');
    try {
      const images = document.querySelectorAll('img');
      let optimizedCount = 0;
      for (const img of Array.from(images)) {
        if (img.complete && img.naturalWidth > 0) {
          // Add lazy loading
          img.loading = 'lazy';

          // Add responsive sizes if not present
          if (!img.sizes) {
            img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          }

      console.error('Image optimization error:', error)
    } finally {
      setIsOptimizing(false)
    }

    try {
      // Add font-display: swap to improve font loading
      const style = document.createElement('style')
      style.textContent = `
        @font-face {

      console.error('Font optimization error:', error)
    } finally {
      setIsOptimizing(false)
    }

      // Re-measure performance after optimization
      setTimeout(() => {
        measurePerformance()
      }, 500)

      setOptimizationStatus('Optimization failed');
      console.error('Optimization error:', error)
    } finally {
      setIsOptimizing(false)
    }

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            if (lcp > 2500) { // LCP should be under 2.5s
              console.warn('LCP is too slow:', lcp)

            }
          }
        }
      });

  const getPerformanceScore = (): number => {
    let score = 100;
    if (metrics.firstContentfulPaint > 1800) score -= 20;
    if (metrics.largestContentfulPaint > 2500) score -= 25;
    if (metrics.loadTime > 3000) score -= 15;
    if (metrics.timeToInteractive > 3500) score -= 20;

    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';

        >
          {showMetrics ? 'Hide' : 'Show'} Metrics
        </button>
      </div>

        <div className="w-full bg-white/10 rounded-full h-3">
          <motion.div
            className="h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: "easeOut" }}

      {/* Metrics Display */}
      {showMetrics && (

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}

          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <Clock className='w-6 h-6 text-blue-400 mx-auto mb-2' />
            <div className='text-lg font-bold text-white'>
              {Math.round(metrics.loadTime)}ms
            </div>
            <div className='text-xs text-white/60'>Load Time</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <Activity className='w-6 h-6 text-green-400 mx-auto mb-2' />
            <div className='text-lg font-bold text-white'>
              {Math.round(metrics.firstContentfulPaint)}ms
            </div>
            <div className='text-xs text-white/60'>FCP</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <TrendingUp className='w-6 h-6 text-purple-400 mx-auto mb-2' />
            <div className='text-lg font-bold text-white'>
              {Math.round(metrics.largestContentfulPaint)}ms
            </div>
            <div className='text-xs text-white/60'>LCP</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <Cpu className='w-6 h-6 text-yellow-400 mx-auto mb-2' />
            <div className='text-lg font-bold text-white'>
              {Math.round(metrics.timeToInteractive)}ms
            </div>
            <div className='text-xs text-white/60'>TTI</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <Database className='w-6 h-6 text-orange-400 mx-auto mb-2' />
            <div className='text-lg font-bold text-white'>
              {metrics.cumulativeLayoutShift.toFixed(3)}
            </div>
            <div className='text-xs text-white/60'>CLS</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <Network className='w-6 h-6 text-red-400 mx-auto mb-2' />
            <div className='text-lg font-bold text-white'>
              {Math.round(metrics.firstInputDelay)}ms
            </div>
            <div className='text-xs text-white/60'>FID</div>          </div>
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
            <Network className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{Math.round(metrics.firstInputDelay)}ms</div>
            <div className="text-xs text-white/60">FID</div>
        </motion.div>
      )}

      <div className='space-y-3'>        <button

        <button

          onClick={runAllOptimizations}
          disabled={isOptimizing}
          className={`w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
            isOptimizing
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-105'
          } flex items-center justify-center gap-2`}
        >
          {isOptimizing ? (
            <>
              <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />              <span>Optimizing...</span>
            </>
          ) : (
            <>
              <Zap className='w-4 h-4' />              <span>Run All Optimizations</span>              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />

              <span>Optimizing...</span>
            </>
          ) : (
            <>

              <span>Run All Optimizations</span>
            </>
          )}
        </button>

            <div className="text-sm text-white/80">{optimizationStatus}</div>
          </div>

      {/* Performance Tips */}
      <div className='mt-6 pt-4 border-t border-white/10'>
        <h4 className='text-sm font-semibold text-white/80 mb-3'>
          Performance Tips
        </h4>

          <li>• Use WebP images for better compression</li>
          <li>• Implement lazy loading for images</li>
          <li>• Minimize CSS and JavaScript bundles</li>
          <li>• Use CDN for static assets</li>
          <li>• Enable gzip compression</li>
        </ul>
      </div>
    </div>

      // Preload critical resources;
      preload_images.for_each (image => {
addResourceHint (image, 'image');
'      });';
      preload_fonts.for_each (font => {
        addResourceHint (font, 'style');
'      });'    }}, [preload_images, preload_fonts]);
  return (
    <Head>;

{/* Preload critical resources */}
      {preload_images.map ((image, index) => (
        <link;
key={`preload - image-${index}}          rel="preload""          as="image""          href={image}"        />))}
      {preload_fonts.map ((font, index) => (
        <link;
key={`preload - font-${index}`}          rel="preload""          as="style""          href={font}"          on_load={() => {
            const link = document.query_selector (link[href="${font}"]`);
"            if ( {"              (link as HTMLLinkElement).rel = 'stylesheet) {
  $2
}
}'          }}`        />))}
      {/* Performance hints */}
      <meta http_equiv="x - dns - prefetch - control" content="on" />"      "      {/* Service Worker registration */}
      <script;
        dangerouslySetInnerHTML={{
          __html:             // Check condition
if ( {'              window.addEventListener ('load', function () {'                navigator.service_worker.register ('/sw.js')'                  .then (function (registration) {'                    console.log ('SW registered: ', registration)) {
  $2
}
'                  })'                  .catch (function (registration_error) {
                    console.log ('SW registration failed: ', registration_error);'                  });'              });
}
          ``        }}/>;
    </Head>);
}
  );
}
;
export default PerformanceOptimizer;
;
interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memory?: {;
    used: number;
    total: number;
    limit: number;
  }
}
interface PerformanceOptimizerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enable_reporting?: boolean;
}
interface PerformanceOptimizerProps {;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
}
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({;
  onMetricsUpdate,;
  enableReporting = false;
}) => {;
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const measureWebVitals = useCallback(() => {;
    if (typeof window === 'undefined' || !('performance' in window)) return;
    const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance && performance.getEntriesByType('paint');
    // Core Web Vitals;
    const fcp = paint && paint.find(entry => entry && entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = performance && performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
    const ttfb = navigation && navigation.responseStart - navigation && navigation.requestStart;
    // Memory usage (if available);
    const memory = (performance as any).memory ? {;
      used: (performance as any).memory && memory.usedJSHeapSize,;
      total: (performance as any).memory && memory.totalJSHeapSize,;
      limit: (performance as any).memory && memory.jsHeapSizeLimit;
    } : undefined;
    const newMetrics: PerformanceMetrics = {;
      fcp,;
      lcp,;
      fid: 0, // First Input Delay - would need user interaction to measure;
      cls: 0, // Cumulative Layout Shift - would need observer;
      ttfb,;
      memory;
    };
    setMetrics(newMetrics);
    if (onMetricsUpdate) {;
      onMetricsUpdate(newMetrics);
    }
    if (enableReporting && process && process.env.NODE_ENV === 'development') {;
      console && console.log('Performance Metrics:', newMetrics);
    }
  }, [onMetricsUpdate, enableReporting]);
  useEffect(() => {;
    if (document && document.readyState === 'complete') {;
      measureWebVitals();
    } else {;
      window && window.addEventListener('load', measureWebVitals);
    }
    return () => {;
      window && window.removeEventListener('load', measureWebVitals);
    };
  }, [measureWebVitals]);
  // Monitor for performance issues;
  useEffect(() => {;
    if (!metrics) return;
    const warnings: string[] = [];
    if (metrics && metrics.fcp > 1800) warnings && warnings.push('First Contentful Paint is slow (>1 && 1.8s)');
    if (metrics && metrics.lcp > 2500) warnings && warnings.push('Largest Contentful Paint is slow (>2 && 2.5s)');
    if (metrics && metrics.ttfb > 600) warnings && warnings.push('Time to First Byte is slow (>600ms)');
    if (metrics && metrics.memory) {;
      const memoryUsage = (metrics && metrics.memory.used / metrics && metrics.memory.limit) * 100;
      if (memoryUsage > 80) warnings && warnings.push('High memory usage detected');
    }
    if (warnings && warnings.length > 0 && enableReporting) {;
      console && console.warn('Performance Issues Detected:', warnings);
    }
  }, [metrics, enableReporting]);
  return null;
}
export default PerformanceOptimizer;
