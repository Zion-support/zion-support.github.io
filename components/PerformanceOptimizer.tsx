import React, { useEffect, useState, useCallback } from 'react';
import { motion  } from 'framer-motion';
import { Zap, Clock, TrendingUp, Activity, Gauge, Cpu, Database, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Zap
  Clock
  TrendingUp
  Activity
  Gauge
  Cpu
  Database
  Network;
} from 'lucide-react';

interface PerformanceMetrics {
interface PerformanceMetrics {
  loadTime: number
  Zap,
  Clock,
  TrendingUp,
  Activity,
  Gauge,
  Cpu,

} from 'lucide-react'
interface PerformanceMetrics {
  load_time: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
  className = '',

interface PerformanceOptimizerProps {}
  class_name?: string
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,

  }, [])
  // Optimize images
  const optimizeImages = useCallback(async () => {}
    setIsOptimizing(true);'
    setOptimizationStatus('Optimizing images...')
    try {'
      const images = document.querySelectorAll('img')
      let optimizedCount = 0
      for (const img of Array.from(images)) {}
  if($2) {}
          // Add lazy loading'
          img.loading = 'lazy'
          optimized_count++;        }

      setOptimizationStatus (`Optimized ${optimized_count} images`)
          // Add responsive sizes if not present
          // Check condition
  if($2) {}
  $2
}'
            img.sizes = '(max - width: 768px) 100vw, (max - width: 1200px) 50vw, 33vw'
          optimized_count++
      console.error ('Image optimization error:', error)
    } finally {}
      setIsOptimizing (false)
  }, []);'
          font-display: swap;        }          font-family: 'Orbitron',
          font-display: swap
        }`
      `
      document && document.head.appendChild(style)
      console.error ('Font optimization error:', error)
    } finally {}
      ]
      preloadLinks && preloadLinks.forEach(linkAttrs => {
      setIsOptimizing (false)
      setIsOptimizing(false)
origin/cursor/automate-test-improve-and-merge-code-2533

  }, [])
  // Optimize CSS and JavaScript
const optimize_code = useCallback (async () => {
    setIsOptimizing (true)
    setOptimizationStatus ('Optimizing code...')
    try {

      // Add resource hints for critical resources
const preloadLinks = [
{
          rel: 'preload',
  href: '/fonts/inter-var.woff2',
          as: 'font',
  type: 'font/woff2',}
          crossorigin: 'anonymous',}
        },
        {
          rel: 'preload',
  href: '/fonts/jetbrains-mono-var.woff2',
          as: 'font',
  type: 'font/woff2',}
          crossorigin: 'anonymous',}
        },
      ]
      preload_links.for_each (link_attrs = > {}
import React, {;}
  useEffect } from 'react
import Head from 'next / head
interface PerformanceOptimizerProps {preload_images?: string[]
  preload_fonts?: string[];}
  criticalCSS?: string;}

    // Performance monitoring
  if($2) {'      // Monitor Core Web Vitals'      const observer = new PerformanceObserver((list) => {
        for (const entry of list && list.getEntries()) {;}
  if($2) {'            console && console.log('LCP: ', entry && entry.startTime);}
'          }'          if (entry && entry.entryType === 'first-input') {'            console && console.log('FID: ', entry && entry.processingStart - entry && entry.startTime);'          }'          if (entry && entry.entryType === 'layout-shift') {'            if (!(entry as any).hadRecentInput) {'              console && console.log('CLS: ', (entry as any).value);'            }'          }}
      })
'      } catch (e) {'        // Fallback for browsers that don&apos;t support all entry types;}
        console && console.log('Performance monitoring not fully supported');}
'      }'
      // Resource hints for better performance
const addResourceHint = (href: string, as: string, type?: string) =>
  const link = document.createElement('link')
        Object.entries(linkAttrs).forEach(([key, value]) => {
  if($2) {}
link.setAttribute(key, value as string);}
          } else {}
            (link as any)[key] = value;}

        })
        document.head.appendChild(link)
      })
      setOptimizationStatus('Code optimization complete')
      // Simulate optimization delay
await new Promise(resolve => setTimeout(resolve, 1200))
    } catch (error) {
      setOptimizationStatus('Code optimization failed');}
      console.error('Code optimization error:', error);}
    } finally {}
      setIsOptimizing(false);}

  }, [])
  // Run all optimizations
const runAllOptimizations = useCallback(async () => {
    setIsOptimizing(true)
    setOptimizationStatus('Starting comprehensive optimization...')
    try {
      await optimizeImages()
      await optimizeFonts()
      await optimizeCode()
setOptimizationStatus('All optimizations complete!')
      // Re-measure performance after optimization
setTimeout(() => {}
        measurePerformance();}
      }, 500)
    } catch (error) {
      setOptimizationStatus('Optimization failed');}
      console.error('Optimization error:', error);}
    } finally {}
      setIsOptimizing(false);}

  }, [optimizeImages, optimizeFonts, optimizeCode, measurePerformance])
  // Initialize performance monitoring
useEffect(() => {
  if($2) {
      // Measure initial performance
window.addEventListener('load', measurePerformance)
// Monitor for performance issues
const observer = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
  if($2) {

  const lcp = entry.startTime
  if($2) {
              // LCP should be under 2.5s;}
console.warn('LCP is too slow:', lcp);}

      })

      try {}
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (e) {
        // Fallback for browsers that don&apos;t support all entry types''}
        console.log('Performance monitoring not fully supported')}

const getPerformanceScore = (): number => {
    let score = 100
observer.observe({ entryTypes: ['largest-contentful-paint'] })
      return () => {
        window.removeEventListener('load', measurePerformance)
        observer.disconnect()
      }
  }, [measurePerformance]);
  const getPerformanceScore = (): number => {
    let score = 100
origin/cursor/automate-test-improve-and-merge-code-2533
    if (metrics.firstContentfulPaint > 1800) score -= 20
    if (metrics.largestContentfulPaint > 2500) score -= 25
    if (metrics.loadTime > 3000) score -= 15
    if (metrics.timeToInteractive > 3500) score -= 20
  }
        </button>
      </div>
            className="h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
            initial={{ width: 0 }}`
            animate={{ width: `${performanceScore}%` }}"
            transition={{ duration: 1, ease: "easeOut" }}
      {/* Performance Score */}
<div className='mb-6'>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-white/70'>Performance Score</span>
          <span className='text-2xl font-bold text-cyan-400'>
            {performanceGrade}
          </span>
        </div>
        <div className='w-full bg-white/10 rounded-full h-3'    />
          <motion.div
            className='h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full'
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` ,

            transition={{ duration: 1, ease: 'easeOut' }}

             />
        </div>
        <div className='text-right mt-1'    />
          <span className='text-sm text-white/60'    />{performanceScore}/100</span>
        </div>
      </div>
origin/cursor/automate-test-improve-and-merge-code-2533
      {/* Metrics Display */}
      {showMetrics && (
        <motion&& motion.div
          initial={{ opacity: 0, height: 0 }}'
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6'
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <Clock className='w-6 h-6 text-blue-400 mx-auto mb-2' />
            <div className='text-lg font-bold text-white'>
              {Math.round(metrics.loadTime)}ms
            </div>
            <div className='text-xs text-white/60'    />Load Time</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'    />
            <Activity className='w-6 h-6 text-green-400 mx-auto mb-2'    />
            <div className='text-lg font-bold text-white'    />
              {Math.round(metrics.firstContentfulPaint)}ms
            </div>
            <div className='text-xs text-white/60'    />FCP</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'    />
            <TrendingUp className='w-6 h-6 text-purple-400 mx-auto mb-2'    />
            <div className='text-lg font-bold text-white'    />
              {Math.round(metrics.largestContentfulPaint)}ms
            </div>
            <div className='text-xs text-white/60'    />LCP</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'    />
            <Cpu className='w-6 h-6 text-yellow-400 mx-auto mb-2'    />
            <div className='text-lg font-bold text-white'    />
              {Math.round(metrics.timeToInteractive)}ms
            </div>
            <div className='text-xs text-white/60'    />TTI</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'    />
            <Database className='w-6 h-6 text-orange-400 mx-auto mb-2'    />
            <div className='text-lg font-bold text-white'    />
              {metrics.cumulativeLayoutShift.toFixed(3)}
            </div>
            <div className='text-xs text-white/60'    />CLS</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'    />
            <Network className='w-6 h-6 text-red-400 mx-auto mb-2'    />
            <div className='text-lg font-bold text-white'    />
              {Math.round(metrics.firstInputDelay)}ms
            </div>'
            <div className='text-xs text-white/60'>FID</div>          </div>"
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6"
        >"
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">"
            <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />"
            <div className="text-lg font-bold text-white">{Math.round(metrics.loadTime)}ms</div>"
            <div className="text-xs text-white/60">Load Time</div>
          </div>
          "
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">"
            <Activity className="w-6 h-6 text-green-400 mx-auto mb-2" />"
            <div className="text-lg font-bold text-white">{Math.round(metrics.firstContentfulPaint)}ms</div>"
            <div className="text-xs text-white/60">FCP</div>
          </div>
          "
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">"
            <TrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-2" />"
            <div className="text-lg font-bold text-white">{Math.round(metrics.largestContentfulPaint)}ms</div>"
            <div className="text-xs text-white/60">LCP</div>
          </div>
          "
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">"
            <Cpu className="w-6 h-6 text-yellow-400 mx-auto mb-2" />"
            <div className="text-lg font-bold text-white">{Math.round(metrics.timeToInteractive)}ms</div>"
            <div className="text-xs text-white/60">TTI</div>
          </div>
          "
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">"
            <Database className="w-6 h-6 text-orange-400 mx-auto mb-2" />"
            <div className="text-lg font-bold text-white">{metrics.cumulativeLayoutShift.toFixed(3)}</div>"
            <div className="text-xs text-white/60">CLS</div>
          </div>
          "
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">"
            <Network className="w-6 h-6 text-red-400 mx-auto mb-2" />"
            <div className="text-lg font-bold text-white">{Math.round(metrics.firstInputDelay)}ms</div>"
            <div className="text-xs text-white/60">FID</div>'"
      <div className='space-y-3'>        <button      <div className="space-y-3">
        <button
      <div className='space-y-3'>        <button

        <button
onClick={runAllOptimizations}
          disabled={isOptimizing}
          className={`w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
            isOptimizing
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-105'

          } flex items-center justify-center gap-2,
}    />

          } flex items-center justify-center gap-2`}
        >
          {isOptimizing ? (
            <>
<div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />
              <span>Optimizing...</span>
            </>
          ) : (
            <>
<Zap className='w-4 h-4' />
              <span>Run All Optimizations</span>
            </>
          )}
        </button>
        {optimizationStatus !== 'idle' && (
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <div className='text-sm text-white/80'>{optimizationStatus}</div>          </div>          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="text-sm text-white/80">{optimizationStatus}</div>
          </div>
        )}
      </div>
      {/* Performance Tips */}
      <div className='mt-6 pt-4 border-t border-white/10'>
        <h4 className='text-sm font-semibold text-white/80 mb-3'>
          Performance Tips
        </h4>
        <ul className='text-xs text-white/60 space-y-1'>          <li>• Use WebP images for better compression</li>      <div className="mt-6 pt-4 border-t border-white/10">
        <h4 className="text-sm font-semibold text-white/80 mb-3">Performance Tips</h4>
        <ul className="text-xs text-white/60 space-y-1">
          <li>• Use WebP images for better compression</li>
          <li>• Implement lazy loading for images</li>
          <li>• Minimize CSS and JavaScript bundles</li>
          <li>• Use CDN for static assets</li>
          <li>• Enable gzip compression</li>
        </ul>
      </div>
    </div>
  );
};export default PerformanceOptimizer;}
      // Preload critical resources;
      preloadImages.forEach(image => {addResourceHint(image, 'image');
'      });';
      preloadFonts.forEach(font => {addResourceHint(font, 'style');
'      });'    }}, [preloadImages, preloadFonts]);
  return (;
    <Head>;
      {/* Critical CSS inlined for above-the-fold content */}
      {criticalCSS && (;
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />;
      )}
{/* Preload critical resources */}
      {preloadImages.map((image, index) => (;
        <link;
key={`preload-image-${index}}          rel="preload""          as="image""          href={image}"        />))}
      {preloadFonts.map((font, index) => (;
        <link;
key={`preload-font-${index}`}          rel="preload""          as="style""          href={font}"          onLoad={() => {const link = document.querySelector(link[href="${font}"]`);
"            if (link) {"              (link as HTMLLinkElement).rel = 'stylesheet;
}'          }}`        />;
      ))}
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />"      "      {/* Service Worker registration */}
      <script;
        dangerouslySetInnerHTML={{__html:             if ('serviceWorker' in navigator) {'              window.addEventListener('load', function() {'                navigator.serviceWorker.register('/sw.js')'                  .then(function(registration) {'                    console.log('SW registered: ', registration);
'                  })'                  .catch(function(registrationError) {console.log('SW registration failed: ', registrationError);'                  });'              });
}
export default PerformanceOptimizer
interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memory?: {
    used: number;
    total: number;
    limit: number;
  }
}
interface PerformanceOptimizerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
}
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  onMetricsUpdate
  enableReporting = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' |!('performance' in window)) return;
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    // Core Web Vitals
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime |0;
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime |0;
    const ttfb = navigation.responseStart - navigation.requestStart;
    // Memory usage (if available)
    const memory = (performance as any).memory ? {
      used: (performance as any).memory.usedJSHeapSize
      total: (performance as any).memory.totalJSHeapSize
      limit: (performance as any).memory.jsHeapSizeLimit
    } : undefined;
    const newMetrics: PerformanceMetrics = {
      fcp
      lcp
      fid: 0, // First Input Delay - would need user interaction to measure
      cls: 0, // Cumulative Layout Shift - would need observer
      ttfb
      memory
    }
    setMetrics(newMetrics);
    if (onMetricsUpdate) {
      onMetricsUpdate(newMetrics);
    }
    if (enableReporting && process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', newMetrics);
    }
  }, [onMetricsUpdate, enableReporting]);
  useEffect(() => {
    if (document.readyState === 'complete') {
      measureWebVitals();
    } else {
      window.addEventListener('load', measureWebVitals);
    }
    return () => {
      window.removeEventListener('load', measureWebVitals);
    }
  }, [measureWebVitals]);
  // Monitor for performance issues
  useEffect(() => {
    if (!metrics) return;
    const warnings: string[] = [];
    if (metrics.fcp > 1800) warnings.push('First Contentful Paint is slow (>1.8s)');
    if (metrics.lcp > 2500) warnings.push('Largest Contentful Paint is slow (>2.5s)');
    if (metrics.ttfb > 600) warnings.push('Time to First Byte is slow (>600ms)');
    if (metrics.memory) {
      const memoryUsage = (metrics.memory.used / metrics.memory.limit) * 100;
      if (memoryUsage > 80) warnings.push('High memory usage detected');
    }
    if (warnings.length > 0 && enableReporting) {
      console.warn('Performance Issues Detected:', warnings);
    }
  }, [metrics, enableReporting]);
  return null;
}
export default PerformanceOptimizer;
