

}
}, [])
//Optimize images for (const img of Array.from (images) ) {
  if (img.complete && img.naturalWidth > 0) {
  //Add lazy loading img.loading = 'lazy'
//Add responsive sizes if not present if (!img.sizes) {
  optimizedCount++ 
}
}//Simulate optimization delay await new Promise (resolve => setTimeout (resolve, 1000) )
setOptimizationStatus ('Font optimization complete')
//Simulate optimization delay setOptimizationStatus ('Code optimization complete')
//Simulate optimization delay try {
  await optimizeImages ()
await optimizeFonts ()
await optimizeCode ()
setOptimizationStatus ('All optimizations complete!')
//Re-measure performance after optimization //Initialize performance monitoring useEffect ( () => {
  if (typeof window !== 'undefined') {
  //Measure initial performance //Monitor for performance issues const observer = new PerformanceObserver ( (list) => {
  for (const entry of list.getEntries () ) {
  if (entry.entryType === 'largest-contentful-paint') {
  
}
}
})
}
}, [measurePerformance])
if (metrics.firstContentfulPaint > 1800) score -= 20
if (metrics.largestContentfulPaint > 2500) score -= 25
if (metrics.loadTime > 3000) score -= 15
if (metrics.timeToInteractive > 3500) score -= 20
> {
  showMetrics ? 'Hide' : 'Show' 
}Metrics </button> </div> </div> <div className="w-full bg-white/10 rounded-full h-3" > <motion.div </div> </div> {
  /* Metrics Display */ 
}{
  showMetrics && (<motion.div </div> </motion.div>) 
}<button onClick= {
  runAllOptimizations 
}disabled= {
  isOptimizing 
}className= {
  `w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 $ {
  isOptimizing ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-105' 
}flex items-center justify-center gap-2` 
}> {
  isOptimizing ? (<> <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> <span>Optimizing...</span> </>) : (<> <Zap className="w-4 h-4" /> <span>Run All Optimizations</span> </>) 
}</button> </div>) 
}</div> <li>• Use WebP images for better compression</li> <li>• Implement lazy loading for images</li> <li>• Minimize CSS and JavaScript bundles</li> <li>• Use CDN for static assets</li> <li>• Enable gzip compression</li> </ul> </div> </div>) 
}
export default PerformanceOptimizer
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
  Network} from 'lucide-react;




  Zap,
  Clock,
  TrendingUp,
  Activity,
  Gauge,

  Cpu,


}
}


    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,


      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
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


          }
          
          optimizedCount++
        }
      }



  // Optimize fonts;
const optimizeFonts = useCallback(async () => {
    setIsOptimizing(true);

    setOptimizationStatus('Optimizing fonts...');

    } catch (error) {
      setOptimizationStatus ('Font optimization failed');}
      console.error ('Font optimization error:', error);}
    } finally {

      setIsOptimizing (false);    }      // Simulate optimization delay;
      await new Promise (resolve => set_timeout (resolve, 800));

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
      ];
;

      preload_links.for_each (link_attrs => {
import React, { useEffect } from 'react;

import Head from 'next / head;


interface PerformanceOptimizerProps {preload_images?: string[];
  preload_fonts?: string[];}
  criticalCSS?: string;}
}


    // Performance monitoring;


    if (typeof window !== ';undefined' && 'performance' in window) {'      // Monitor Core Web Vitals'      const observer = new PerformanceObserver((list) => {;
        for (const entry of list && list.getEntries()) {;}
if (entry && entry.entryType === 'largest-contentful-paint') {'            console && console.log('LCP: ', entry && entry.startTime);}
'          }'          if (entry && entry.entryType === 'first-input') {'            console && console.log('FID: ', entry && entry.processingStart - entry && entry.startTime);'          }'          if (entry && entry.entryType === 'layout-shift') {'            if (!(entry as any).hadRecentInput) {'              console && console.log('CLS: ', (entry as any).value);'            }'          }}
      });

'      }';
      // Resource hints for better performance;



const PerformanceOptimizer: React.FC < PerformanceOptimizerProps> = ({
preload_images = [], preload_fonts = [;
    'https: //fonts.googleapis.com / css2?family = Inter:wght@300;400;500;600;700;800;900 & display = swap;
  ], criticalCSS'}) => {
  useEffect (() => {
    // Performance monitoring;
    if ( {'      // Monitor Core Web Vitals'      const observer = new PerformanceObserver ((list) => {) {
  $2
}
        for (const entry of list.get_entries ()) {
if ( {'            console.log ('LCP: ', entry.start_time)) {
  $2
}
'          }'          if ( {'            console.log ('FID: ', entry.processing_start - entry.start_time)) {
  $2
}'          }'          if ( {'            if (!(entry as any).hadRecentInput) {'              console.log ('CLS: ', (entry as any).value)) {
  $2
}'            }'          }}
      });
      try {
        observer.observe ({ entry_types: ['largest - contentful - paint', 'first - input', 'layout - shift'] });
'      } catch (e) {'        // Fallback for browsers that don & apos;t support all entry types;
        console.log ('Performance monitoring not fully supported');
'      }';
      // Resource hints for better performance;
      const addResourceHint = (href: string, as: string, type?: string) =>: any {
        const link = document.create_element ('link');
        Object.entries (link_attrs).for_each (([key, value]) => {
          // Check condition
if ( {) {
  $2
}
            link.set_attribute (key, value as string);



          } else {
      const addResourceHint = (href: string, as: string, type?: string) => {;
        const link = document && document.createElement('link');
        Object && Object.entries(linkAttrs).forEach(([key, value]) => {;
          if (key === 'crossorigin') {;
            link && link.setAttribute(key, value as string);
          } else {;
            (link as any)[key] = value;

          }
        });
        document.head.appendChild(link);
      });

      setOptimizationStatus('Code optimization complete');
      // Simulate optimization delay;
await new Promise(resolve => setTimeout(resolve, 1200));
    } catch (error) {
      setOptimizationStatus('Code optimization failed');}
      console.error('Code optimization error:', error);}
    } finally {}
      setIsOptimizing(false);}

    }
  }, []);


  // Run all optimizations;
const runAllOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus('Starting comprehensive optimization...');

    try {;



            }
          }
        }




      return () => {
        window.removeEventListener('load', measurePerformance);
        observer.disconnect()


      }



  const getPerformanceScore = (): number => {
    let score = 100;
    



    if (metrics.firstContentfulPaint > 1800) score -= 20;
    if (metrics.largestContentfulPaint > 2500) score -= 25;
    if (metrics.loadTime > 3000) score -= 15;
    if (metrics.timeToInteractive > 3500) score -= 20;


  };
  const getPerformanceGrade = (score: number): string => {;
    return Math.max(0, score);  }
    return Math.max(0, score)
  }
  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';

    if (score >= 80) return 'B';
    if (score >= 70) return C;
    if (score >= 60) return 'D';


    <div className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 ${className}`}>

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Gauge className="w-5 h-5 text-cyan-400" />
        </h3>
        <button
          onClick={() => setShowMetrics(!showMetrics)}

        >
          {showMetrics ? 'Hide' : Show} Metrics
        </button>
      </div>



            className="h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: "easeOut" }}


        </div>
      </div>



      {/* Metrics Display */}
      {showMetrics && (;
        <motion&& motion.div

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


          </div>
        </motion.div>
      )}



        <button


      {/* Optimization Controls */}



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
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Optimizing...</span>
            </>
          ) : (
            <>
              <Zap className="w-4 h-4" />
              <span>Run All Optimizations</span>
            </>
          )}
        </button>



        )}
      </div>

      {/* Performance Tips */}

      <div className='mt-6 pt-4 border-t border-white/10'>
        <h4 className='text-sm font-semibold text-white/80 mb-3'>
          Performance Tips
        </h4>

        <ul className='text-xs text-white/60 space-y-1'>          <li>• Use WebP images for better compression</li>





          <li>• Use WebP images for better compression</li>
          <li>• Implement lazy loading for images</li>
          <li>• Minimize CSS and JavaScript bundles</li>
          <li>• Use CDN for static assets</li>
          <li>• Enable gzip compression</li>

        </ul>
      </div>
    </div>
  )
};



  );




      measureWebVitals()} else {window && window.addEventListener('load', measureWebVitals)}
export default PerformanceOptimizer;)
          exit={{ opacity: 0, height: 0}}
          className = $2;
export default PerformanceOptimizer,
      measureWebVitals()} else {window && window.addEventListener('load', measureWebVitals)}
export default PerformanceOptimizer;)

      measureWebVitals();
    } else {;
      }
      window && window.addEventListener('load', measureWebVitals);'
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

  );








