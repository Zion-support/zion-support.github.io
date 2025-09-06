<<<<<<< HEAD

import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  Zap
  Clock
  TrendingUp
  Activity
  Gauge
  Cpu
  Database
  Network;
  Zap,
  Clock,
  TrendingUp,
  Activity,
  Gauge,
  Cpu,
  Database,;
  Network,;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from 'lucide-react';

interface PerformanceMetrics {;
  loadTime: number;
  Zap,
  Clock,
  TrendingUp,
  Activity,
  Gauge,
  Cpu,

<<<<<<< HEAD
  Database,;
  Network,;
} from 'lucide-react';
=======

} from 'lucide-react';
interface PerformanceMetrics {
  load_time: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
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
}
interface PerformanceOptimizerProps {
  class_name?: string;
}
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart
        firstContentfulPaint: fcp ? fcp.startTime : 0
        largestContentfulPaint: lcp ? lcp.startTime : 0
        cumulativeLayoutShift: 0, // Would need to be measured with CLS API
        firstInputDelay: 0, // Would need to be measured with FID API
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

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
    }
  }, []);


  // Run all optimizations;
  const runAllOptimizations = useCallback(async () => {;
    setIsOptimizing(true);
    setOptimizationStatus('Starting comprehensive optimization...');
    try {;

      await optimizeImages();
      await optimizeFonts();
      await optimizeCode();

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

      setOptimizationStatus('Optimization failed');

      console.error('Optimization error:', error)
    } finally {
      setIsOptimizing(false)

    }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            if (lcp > 2500) { // LCP should be under 2.5s
              console.warn('LCP is too slow:', lcp)

=======
          }
          optimized_count++;        }
      }
      setOptimizationStatus (`Optimized ${optimized_count} images`);
          // Add responsive sizes if not present;
          // Check condition
if ( {) {
  $2
}
            img.sizes = '(max - width: 768px) 100vw, (max - width: 1200px) 50vw, 33vw';
          }
          optimized_count++;
        }
      }
    } catch (error) {
      setOptimizationStatus ('Image optimization failed');
      console.error ('Image optimization error:', error);
    } finally {
      setIsOptimizing (false);
    }
  }, []);
          font-display: swap;        }          font-family: 'Orbitron',;
          font-display: swap;
        }
      `;
      document && document.head.appendChild(style);
    } catch (error) {
      setOptimizationStatus ('Font optimization failed');
      console.error ('Font optimization error:', error);
    } finally {
      ];

      preloadLinks && preloadLinks.forEach(linkAttrs => {;
      setIsOptimizing (false);
    }
  }, []);
;
  // Optimize CSS and JavaScript;
  const optimize_code = useCallback (async () => {
    setIsOptimizing (true);
    setOptimizationStatus ('Optimizing code...');
;
    try {
      // Add resource hints for critical resources;
      const preload_links = [;
        {
          rel: 'preload',
          href: '/fonts / inter - var.woff2',
          as: 'font',
          type: 'font / woff2',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          href: '/fonts / jetbrains - mono - var.woff2',
          as: 'font',
          type: 'font / woff2',
          crossorigin: 'anonymous',
        },      ];        { rel: 'preload', href: '/fonts / inter - var.woff2', as: 'font', type: 'font / woff2', crossorigin: 'anonymous' },
        { rel: 'preload', href: '/fonts / jetbrains - mono - var.woff2', as: 'font', type: 'font / woff2', crossorigin: 'anonymous' }
      ];
;
      preload_links.for_each (link_attrs => {
import React, { useEffect } from 'react;
import Head from 'next / head;
interface PerformanceOptimizerProps {preload_images?: string[];
  preload_fonts?: string[];
  criticalCSS?: string;
}
    // Performance monitoring;
    if (typeof window !== 'undefined' && 'performance' in window) {'      // Monitor Core Web Vitals'      const observer = new PerformanceObserver((list) => {;
        for (const entry of list && list.getEntries()) {;
if (entry && entry.entryType === 'largest-contentful-paint') {'            console && console.log('LCP: ', entry && entry.startTime);
'          }'          if (entry && entry.entryType === 'first-input') {'            console && console.log('FID: ', entry && entry.processingStart - entry && entry.startTime);'          }'          if (entry && entry.entryType === 'layout-shift') {'            if (!(entry as any).hadRecentInput) {'              console && console.log('CLS: ', (entry as any).value);'            }'          }}
      });
'      } catch (e) {'        // Fallback for browsers that don&apos;t support all entry types;
        console && console.log('Performance monitoring not fully supported');
'      }';
      // Resource hints for better performance;
      const addResourceHint = (href: string, as: string, type?: string) => {;
        const link = document && document.createElement('link');
        Object && Object.entries(linkAttrs).forEach(([key, value]) => {;
          if (key === 'crossorigin') {;
            link && link.setAttribute(key, value as string);
          } else {;
            (link as any)[key] = value;
          }
        });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            }
          }
        }
      });
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return () => {
        window.removeEventListener('load', measurePerformance);
        observer.disconnect();
      };    }
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      return () => {
        window.removeEventListener('load', measurePerformance);
        observer.disconnect()
      }
<<<<<<< HEAD

    }

  }, [measurePerformance]);
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const getPerformanceScore = (): number => {
    let score = 100;

    

    if (metrics.firstContentfulPaint > 1800) score -= 20;
    if (metrics.largestContentfulPaint > 2500) score -= 25;
    if (metrics.loadTime > 3000) score -= 15;
    if (metrics.timeToInteractive > 3500) score -= 20;
<<<<<<< HEAD

=======


      observer && observer.observe({ entryTypes: ['largest-contentful-paint'] });
      return () => {;
        window && window.removeEventListener('load', measurePerformance);
        observer && observer.disconnect();
      };    }      ;
      observer && observer.observe({ entryTypes: ['largest-contentful-paint'] }),;
      return () => {;
        window && window.removeEventListener('load', measurePerformance);
        observer && observer.disconnect();
      }
  }, [measurePerformance]);
  const getPerformanceScore = (): number => {;
    let score = 100;
    if (metrics && metrics.firstContentfulPaint > 1800) score -= 20;
    if (metrics && metrics.largestContentfulPaint > 2500) score -= 25;
    if (metrics && metrics.loadTime > 3000) score -= 15;
    if (metrics && metrics.timeToInteractive > 3500) score -= 20;
    return Math && Math.max(0, score);  };    ;
    return Math && Math.max(0, score);

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  };

  const getPerformanceGrade = (score: number): string => {;
<<<<<<< HEAD
=======
    return Math.max(0, score);  }
    return Math.max(0, score)
  }
  const getPerformanceGrade = (score: number): string => {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        >
          {showMetrics ? 'Hide' : 'Show'} Metrics
        </button>
      </div>
<<<<<<< HEAD

=======
        <div className="w-full bg-white/10 rounded-full h-3">
          <motion.div

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            className="h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
<<<<<<< HEAD

      {/* Metrics Display */}
      {showMetrics && (

        <motion.div
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Metrics Display */}
      {showMetrics && (;
        <motion&& motion.div
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
          className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6'

=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6"
        >
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
            <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{Math.round(metrics.loadTime)}ms</div>
            <div className="text-xs text-white/60">Load Time</div>
          </div>
          
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
            <Activity className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{Math.round(metrics.firstContentfulPaint)}ms</div>
            <div className="text-xs text-white/60">FCP</div>
          </div>
          
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
            <TrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{Math.round(metrics.largestContentfulPaint)}ms</div>
            <div className="text-xs text-white/60">LCP</div>
          </div>
          
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
            <Cpu className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{Math.round(metrics.timeToInteractive)}ms</div>
            <div className="text-xs text-white/60">TTI</div>
          </div>
          
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
            <Database className="w-6 h-6 text-orange-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{metrics.cumulativeLayoutShift.toFixed(3)}</div>
            <div className="text-xs text-white/60">CLS</div>
          </div>
          
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
            <Network className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{Math.round(metrics.firstInputDelay)}ms</div>
            <div className="text-xs text-white/60">FID</div>
<<<<<<< HEAD

          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <Clock className='w-6 h-6 text-blue-400 mx-auto mb-2' />;
            <div className='text-lg font-bold text-white'>;
              {Math && Math.round(metrics && metrics.loadTime)}ms;
            </div>;
            <div className='text-xs text-white/60'>Load Time</div>;
          </div>;

          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <Activity className='w-6 h-6 text-green-400 mx-auto mb-2' />;
            <div className='text-lg font-bold text-white'>;
              {Math && Math.round(metrics && metrics.firstContentfulPaint)}ms;
            </div>;
            <div className='text-xs text-white/60'>FCP</div>;
          </div>;

          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <TrendingUp className='w-6 h-6 text-purple-400 mx-auto mb-2' />;
            <div className='text-lg font-bold text-white'>;
              {Math && Math.round(metrics && metrics.largestContentfulPaint)}ms;
            </div>;
            <div className='text-xs text-white/60'>LCP</div>;
          </div>;

          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <Cpu className='w-6 h-6 text-yellow-400 mx-auto mb-2' />;
            <div className='text-lg font-bold text-white'>;
              {Math && Math.round(metrics && metrics.timeToInteractive)}ms;
            </div>;
            <div className='text-xs text-white/60'>TTI</div>;
          </div>;

          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <Database className='w-6 h-6 text-orange-400 mx-auto mb-2' />;
            <div className='text-lg font-bold text-white'>;
              {metrics && metrics.cumulativeLayoutShift.toFixed(3)}
            </div>;
            <div className='text-xs text-white/60'>CLS</div>;
          </div>;

          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <Network className='w-6 h-6 text-red-400 mx-auto mb-2' />;
            <div className='text-lg font-bold text-white'>;
              {Math && Math.round(metrics && metrics.firstInputDelay)}ms;
            </div>;
            <div className='text-xs text-white/60'>FID</div>          </div>          ;
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">;
            <Network className="w-6 h-6 text-red-400 mx-auto mb-2" />;
            <div className="text-lg font-bold text-white">{Math && Math.round(metrics && metrics.firstInputDelay)}ms</div>;
            <div className="text-xs text-white/60">FID</div>;
        </motion && motion.div>;

      )}
      {/* Optimization Controls */}
      <div className='space-y-3'>        <button      <div className="space-y-3">;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
      <div className='space-y-3'>        <button      <div className="space-y-3">
        <button


      {/* Optimization Controls */}
      <div className='space-y-3'>        <button      <div className="space-y-3">
        <button
      <div className='space-y-3'>        <button

        <button



      {/* Optimization Controls */}

        <button
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          onClick={runAllOptimizations}
          disabled={isOptimizing}
          className={`w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
            isOptimizing
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-105'
<<<<<<< HEAD
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

=======
      {/* Performance Tips */}
      <div className='mt-6 pt-4 border-t border-white/10'>;
        <h4 className='text-sm font-semibold text-white/80 mb-3'>;
          Performance Tips;
        </h4>;
        <ul className='text-xs text-white/60 space-y-1'>          <li>• Use WebP images for better compression</li>      <div className="mt-6 pt-4 border-t border-white/10">;
        <h4 className="text-sm font-semibold text-white/80 mb-3">Performance Tips</h4>;
        <ul className="text-xs text-white/60 space-y-1">;
          <li>• Use WebP images for better compression</li>;
          <li>• Implement lazy loading for images</li>;
          <li>• Minimize CSS and JavaScript bundles</li>;
          <li>• Use CDN for static assets</li>;
          <li>• Enable gzip compression</li>;
        </ul>;
      </div>;
    </div>;
  );
};export default PerformanceOptimizer;}
      // Preload critical resources;
'      });'    }}, [preloadImages, preloadFonts]);
  return (
    <Head>;
      {/* Critical CSS inlined for above-the-fold content */}
      {criticalCSS && (;
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />;
      )}
"            if (link) {"              (link as HTMLLinkElement).rel = 'stylesheet;
}'          }}`        />;
      ))}
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />"      "      {/* Service Worker registration */}
}
          ``        }}/>;
    </Head>;
  );
      {/* Performance Tips */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <h4 className="text-sm font-semibold text-white/80 mb-3">Performance Tips</h4>
        <ul className="text-xs text-white/60 space-y-1">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Performance Tips */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <h4 className="text-sm font-semibold text-white/80 mb-3">Performance Tips</h4>
        <ul className="text-xs text-white/60 space-y-1">


        )}
      </div>

<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Performance Tips */}
      <div className='mt-6 pt-4 border-t border-white/10'>
        <h4 className='text-sm font-semibold text-white/80 mb-3'>
          Performance Tips
        </h4>
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <li>• Use WebP images for better compression</li>
          <li>• Implement lazy loading for images</li>
          <li>• Minimize CSS and JavaScript bundles</li>
          <li>• Use CDN for static assets</li>
          <li>• Enable gzip compression</li>
        </ul>
      </div>
    </div>

<<<<<<< HEAD
=======
  }, [measure_performance]);
;
  const getPerformanceScore = (): number => {
    let score = 100;
;
    // Check condition
if (score -= 20) {
  $2
}
    // Check condition
if (score -= 25) {
  $2
}
    // Check condition
if (score -= 15) {
  $2
}
    // Check condition
if (score -= 20) {
  $2
}
    return Math.max (0, score);  } ;
    return Math.max (0, score);
  }
;
  const getPerformanceGrade = (score: number): string => {
    // Check condition
if (return 'A') {
  $2
}
    // Check condition
if (return 'B') {
  $2
}
    // Check condition
if (return 'C') {
  $2
}
    // Check condition
if (return 'D') {
  $2
}
    return 'F';  }    return 'F';
  }
;
  const performance_score = getPerformanceScore ();
  const performance_grade = getPerformanceGrade (performance_score);
;
    >;
      <div className='flex items - center justify - between mb - 6'>;
        <h3 className='text - xl font - bold text - white flex items - center gap - 2'>;
          <Gauge className='w - 5 h - 5 text - cyan - 400' />          Performance Optimizer;
        </h3>;
        <button;
          on_click={() => setShowMetrics (!show_metrics)}
          className='text - sm text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300'        >  return (
    <div className={`bg - slate - 800 / 50 backdrop - blur - xl rounded - 2xl border border - white / 10 p - 6 ${class_name}`}>;
      <div className="flex items - center justify - between mb - 6">;
        <h3 className="text - xl font - bold text - white flex items - center gap - 2">;
          <Gauge className="w - 5 h - 5 text - cyan - 400" />;
        </h3>;
        <button;
          on_click={() => setShowMetrics (!show_metrics)}
          className='text - sm text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300'          className="text - sm text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300";
        >;
          {show_metrics ? 'Hide' : 'Show'} Metrics;
        </button>;
      </div>;
      {/* Performance Score */}
      <div className='mb - 6'>;
        <div className='flex items - center justify - between mb - 2'>;
          <span className='text - white / 70'>Performance Score</span>;
          <span className='text - 2xl font - bold text - cyan - 400'>;
            {performance_grade}
          </span>;
        </div>;
        <div className='w - full bg - white / 10 rounded - full h - 3'>;
          <motion.div;
            className='h - 3 bg - gradient - to - r from - red - 500 via - yellow - 500 to - green - 500 rounded - full';
            initial={{ width: 0 }}
            animate={{ width: `${performance_score}%` }}
            transition={{ duration: 1, ease: 'ease_out' }}
          />;
        </div>;
        <div className='text - right mt - 1'>;
          <span className='text - sm text - white / 60'>{performance_score}/100</span>        </div>        </div>;
        <div className="w - full bg - white / 10 rounded - full h - 3">;
          <motion.div;
            className="h - 3 bg - gradient - to - r from - red - 500 via - yellow - 500 to - green - 500 rounded - full";
            initial={{ width: 0 }}
            animate={{ width: `${performance_score}%` }}
            transition={{ duration: 1, ease: "ease_out" }}
          />;
        </div>;
        <div className="text - right mt - 1">;
          <span className="text - sm text - white / 60">{performance_score}/100</span>;
        </div>;
      </div>;
      {/* Metrics Display */}
      {show_metrics && (
        <motion.div;
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='grid grid - cols - 2 md:grid - cols - 3 gap - 4 mb - 6';
          <div className='text - center p - 3 rounded - lg bg - white / 5 border border - white / 10'>;
            <Clock className='w - 6 h - 6 text - blue - 400 mx - auto mb - 2' />;
            <div className='text - lg font - bold text - white'>;
              {Math.round (metrics.load_time)}ms;
            </div>;
            <div className='text - xs text - white / 60'>Load Time</div>;
          </div>;
          <div className='text - center p - 3 rounded - lg bg - white / 5 border border - white / 10'>;
            <Activity className='w - 6 h - 6 text - green - 400 mx - auto mb - 2' />;
            <div className='text - lg font - bold text - white'>;
              {Math.round (metrics.firstContentfulPaint)}ms;
            </div>;
            <div className='text - xs text - white / 60'>FCP</div>;
          </div>;
          <div className='text - center p - 3 rounded - lg bg - white / 5 border border - white / 10'>;
            <TrendingUp className='w - 6 h - 6 text - purple - 400 mx - auto mb - 2' />;
            <div className='text - lg font - bold text - white'>;
              {Math.round (metrics.largestContentfulPaint)}ms;
            </div>;
            <div className='text - xs text - white / 60'>LCP</div>;
          </div>;
          <div className='text - center p - 3 rounded - lg bg - white / 5 border border - white / 10'>;
            <Cpu className='w - 6 h - 6 text - yellow - 400 mx - auto mb - 2' />;
            <div className='text - lg font - bold text - white'>;
              {Math.round (metrics.timeToInteractive)}ms;
            </div>;
            <div className='text - xs text - white / 60'>TTI</div>;
          </div>;
          <div className='text - center p - 3 rounded - lg bg - white / 5 border border - white / 10'>;
            <Database className='w - 6 h - 6 text - orange - 400 mx - auto mb - 2' />;
            <div className='text - lg font - bold text - white'>;
              {metrics.cumulativeLayoutShift.to_fixed (3)}
            </div>;
            <div className='text - xs text - white / 60'>CLS</div>;
          </div>;
          <div className='text - center p - 3 rounded - lg bg - white / 5 border border - white / 10'>;
            <Network className='w - 6 h - 6 text - red - 400 mx - auto mb - 2' />;
            <div className='text - lg font - bold text - white'>;
              {Math.round (metrics.firstInputDelay)}ms;
            </div>;
            <div className='text - xs text - white / 60'>FID</div>          </div>;
          <div className="text - center p - 3 rounded - lg bg - white / 5 border border - white / 10">;
            <Network className="w - 6 h - 6 text - red - 400 mx - auto mb - 2" />;
            <div className="text - lg font - bold text - white">{Math.round (metrics.firstInputDelay)}ms</div>;
            <div className="text - xs text - white / 60">FID</div>;
        </motion.div>)}
      {/* Optimization Controls */}
      <div className='space - y-3'>        <button      <div className="space - y-3">;
        <button;
          on_click={runAllOptimizations}
          disabled={is_optimizing}
          className={`w - full px - 4 py - 3 rounded - lg font - semibold text - white transition - all duration - 300 ${
            is_optimizing;
              ? 'bg - gray - 600 cursor - not - allowed';
              : 'bg - gradient - to - r from - cyan - 600 to - blue - 600 hover:from - cyan - 700 hover:to - blue - 700 hover:scale - 105';
          } flex items - center justify - center gap - 2`}
        >;
          {is_optimizing ? (
            <>;
              <div className='w - 4 h - 4 border - 2 border - white / 30 border - t-white rounded - full animate - spin' />              <span > Optimizing...</span>;
            </>) : (
            <>;
              <Zap className='w - 4 h - 4' />              <span > Run All Optimizations</span>              <div className="w - 4 h - 4 border - 2 border - white / 30 border - t-white rounded - full animate - spin" />;
              <span > Optimizing...</span>;
            </>) : (
            <>;
              <Zap className='w - 4 h - 4' />              <Zap className="w - 4 h - 4" />;
              <span > Run All Optimizations</span>;
            </>)}
        </button>;
        {optimization_status !== 'idle' && (
          <div className='text - center p - 3 rounded - lg bg - white / 5 border border - white / 10'>;
            <div className='text - sm text - white / 80'>{optimization_status}</div>          </div>          <div className="text - center p - 3 rounded - lg bg - white / 5 border border - white / 10">;
            <div className="text - sm text - white / 80">{optimization_status}</div>;
          </div>)}
      </div>;
      {/* Performance Tips */}
      <div className='mt - 6 pt - 4 border - t border - white / 10'>;
        <h4 className='text - sm font - semibold text - white / 80 mb - 3'>;
          Performance Tips;
        </h4>;
        <ul className='text - xs text - white / 60 space - y-1'>          <li>• Use WebP images for better compression</li>      <div className="mt - 6 pt - 4 border - t border - white / 10">;
        <h4 className="text - sm font - semibold text - white / 80 mb - 3">Performance Tips</h4>;
        <ul className="text - xs text - white / 60 space - y-1">;
          <li>• Use WebP images for better compression</li>;
          <li>• Implement lazy loading for images</li>;
          <li>• Minimize CSS and JavaScript bundles</li>;
          <li>• Use CDN for static assets</li>;
          <li>• Enable gzip compression</li>;
        </ul>;
      </div>;
    </div>);
}export default PerformanceOptimizer;}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Preload critical resources;
      preload_images.for_each (image => {
addResourceHint (image, 'image');
'      });';
      preload_fonts.for_each (font => {
        addResourceHint (font, 'style');
'      });'    }}, [preload_images, preload_fonts]);
  return (
    <Head>;
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
      measureWebVitals();
    } else {;
      window && window.addEventListener('load', measureWebVitals);
    }
export default PerformanceOptimizer;
<<<<<<< HEAD
=======

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
