
;

setMetrics (newMetrics) 
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
import { motion   } from 'framer-motion';
import { Zap, Clock, TrendingUp, Activity, Gauge, Cpu, Database, Network  } from 'lucide-react';
import { motion  } from 'framer-motion';

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


} from 'lucide-react';


interface PerformanceMetrics {;
  loadTime: number;
  Zap,
  Clock,
  TrendingUp,
  Activity,
  Gauge,
  Cpu,


} from 'lucide-react';
interface PerformanceMetrics {
  load_time: number;
import { Zap;
  Clock;
  TrendingUp;
  Activity;
  Gauge;
  Cpu;
  Database;
  Network;
  Zap,Clock,TrendingUp,Activity,Gauge,Cpu,Database,Network,} from 'lucide-react';
interface PerformanceMetrics  {interface PerformanceMetrics  {loadTime: number;
  Zap,Clock,TrendingUp,Activity,Gauge,Cpu,} from 'lucide-react';
interface PerformanceMetrics  {load_time: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;interface PerformanceMetrics  {loadTime: number;
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
import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, TrendingUp, Activity, Gauge, Cpu, Database, Network } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number,
  firstContentfulPaint: number,
  largestContentfulPaint: number,
  cumulativeLayoutShift: number,
  firstInputDelay: number,
  timeToInteractive: number
}

interface PerformanceOptimizerProps {
  className?: string
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0
  });
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string>('idle');
  const [showMetrics, setShowMetrics] = useState(false);

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
      
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        cumulativeLayoutShift: 0, // Would need to be measured with CLS API
        firstInputDelay: 0, // Would need to be measured with FID API
        timeToInteractive: navigation.domContentLoadedEventEnd - navigation.navigationStart
      };

      setMetrics(newMetrics)
    }
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
          
          optimizedCount++
        }
      }

      setOptimizationStatus(`Optimized ${optimizedCount} images`);
      
      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setOptimizationStatus('Image optimization complete')
    } catch (error) {
      setOptimizationStatus('Image optimization failed');
      console.error('Image optimization error:', error)
    } finally {
      setIsOptimizing(false)
    }
  }, []);

  // Optimize fonts
  const optimizeFonts = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing fonts...');

    try {
      // Add font-display: swap to improve font loading
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: 'Inter',
          font-display: swap
        }
        @font-face {
          font-family: 'JetBrains Mono',
          font-display: swap
        }
        @font-face {
      setIsOptimizing (false);
    }
  }, []);
          font-display: swap;        }          font-family: 'Orbitron',;
          font-display: swap;
        }
      `;
      document && document.head.appendChild(style);
          font-family: 'Orbitron',
          font-display: swap
        }
      `;
      document.head.appendChild(style);

      setOptimizationStatus('Font optimization complete');
      
      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 800))
    } catch (error) {
      setOptimizationStatus('Font optimization failed');
      console.error('Font optimization error:', error)
    } finally {
      ];

      preloadLinks && preloadLinks.forEach(linkAttrs => {;
      setIsOptimizing (false);
      setIsOptimizing(false)
    }
  }, []);

  // Optimize CSS and JavaScript
  const optimizeCode = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing code...');

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
      setOptimizationStatus(`Optimized ${optimizedCount} images`)// Simulate optimization delay;
      await new Promise(resolve => setTimeout(resolve, 1000))setOptimizationStatus('Image optimization complete')} catch (error) {setOptimizationStatus ('Image optimization failed')console.error ('Image optimization error:', error)} finally {setIsOptimizing (false)}
  }, [])font-display: swap;        }          font-family: 'Orbitron',font-display: swap;
        }
      `;
      document && document.head.appendChild(style)setIsOptimizing(false)}
  }, [])// Optimize fonts;
  const optimizeFonts = useCallback(async () => {setIsOptimizing(true)setOptimizationStatus('Optimizing fonts...')try {// Add font-display: swap to improve font loading;
      const style = document.createElement('style')style.textContent = `;
        @font-face {font-family: 'Inter';
          font-display: swap;
        }
        @font-face {font-family: 'JetBrains Mono';        }
        @font-face {font-family: 'JetBrains Mono';
          font-display: swap;
        }
        @font-face {font-family: 'Orbitron';
          font-display: swap;
        }
      `;
      document.head.appendChild(style)setOptimizationStatus('Font optimization complete')// Simulate optimization delay;
      await new Promise(resolve => setTimeout(resolve, 800))} catch (error) {setOptimizationStatus ('Font optimization failed')console.error ('Font optimization error:', error)} finally {];preloadLinks && preloadLinks.forEach(linkAttrs => {setIsOptimizing (false)setIsOptimizing(false)}
  }, [])// Optimize CSS and JavaScript;
  const optimize_code = useCallback (async () => {setIsOptimizing (true)setOptimizationStatus ('Optimizing code...')try {// Add resource hints for critical resources;
      const preload_links = [;
        {rel: 'preload',href: '/fonts / inter - var.woff2',as: 'font',type: 'font / woff2',crossorigin: 'anonymous',},{rel: 'preload',href: '/fonts / jetbrains - mono - var.woff2',as: 'font',type: 'font / woff2',crossorigin: 'anonymous',},      ];        { rel: 'preload', href: '/fonts / inter - var.woff2', as: 'font', type: 'font / woff2', crossorigin: 'anonymous' },{ rel: 'preload', href: '/fonts / jetbrains - mono - var.woff2', as: 'font', type: 'font / woff2', crossorigin: 'anonymous' }// Add resource hints for critical resources;
      const preloadLinks = [;
{rel: 'preload',href: '/fonts/inter-var.woff2',as: 'font',type: 'font/woff2',crossorigin: 'anonymous',},{rel: 'preload',href: '/fonts/jetbrains-mono-var.woff2',as: 'font',type: 'font/woff2',crossorigin: 'anonymous',},];preload_links.for_each (link_attrs => {import React, { useEffect } from 'react;
import Head from 'next / head;
interface PerformanceOptimizerProps {preload_images?: string[];
  preload_fonts?: string[];
  criticalCSS?: string;
}
    // Performance monitoring;
      // Add resource hints for critical resources
      const preloadLinks = [
        { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', href: '/fonts/jetbrains-mono-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
      ];

      preloadLinks.forEach(linkAttrs => {
        const link = document.createElement('link');
        Object.entries(linkAttrs).forEach(([key, value]) => {
          if (key === 'crossorigin') {
            link.setAttribute(key, value as string)
          } else {
            (link as any)[key] = value
          }
        });
        document.head.appendChild(link)
      });

      setOptimizationStatus('Code optimization complete');
      
      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 1200))
    } catch (error) {
      setOptimizationStatus('Code optimization failed');
      console.error('Code optimization error:', error)
    } finally {
      setIsOptimizing(false)
    }
  }, []);

  // Run all optimizations
  const runAllOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus('Starting comprehensive optimization...');

    try {
      await optimizeImages();
      await optimizeFonts();
      await optimizeCode();
      
      setOptimizationStatus('All optimizations complete!');
      
      // Re-measure performance after optimization
      setTimeout(() => {
        measurePerformance()
      }, 500)
      
    } catch (error) {
      setOptimizationStatus('Optimization failed');
      console.error('Optimization error:', error)
    } finally {
      setIsOptimizing(false)
    }
  }, [optimizeImages, optimizeFonts, optimizeCode, measurePerformance]);

  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Measure initial performance
      window.addEventListener('load', measurePerformance);
      
      // Monitor for performance issues
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
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] }),
      
      return () => {
        window.removeEventListener('load', measurePerformance);
        observer.disconnect()

observer.observe({ entryTypes: ['largest-contentful-paint'] });

      return () => {
        window.removeEventListener('load', measurePerformance);
        observer.disconnect();
      };
      }
    }
  }, [measurePerformance]);

  const getPerformanceScore = (): number => {
    let score = 100;
    
    if (metrics.firstContentfulPaint > 1800) score -= 20;
    if (metrics.largestContentfulPaint > 2500) score -= 25;
    if (metrics.loadTime > 3000) score -= 15;
    if (metrics.timeToInteractive > 3500) score -= 20;
    
    return Math.max(0, score)
  };

  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F'
  };

  const performanceScore = getPerformanceScore();
  const performanceGrade = getPerformanceGrade(performanceScore);

  return (
    <div className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Gauge className="w-5 h-5 text-cyan-400" />
          Performance Optimizer
        </h3>
        <button
          onClick={() => setShowMetrics(!showMetrics)}

          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          {showMetrics ? 'Hide' : 'Show'} Metrics
        </button>
      </div>
    if (typeof window !== 'undefined' && 'performance' in window) {'      // Monitor Core Web Vitals'      const observer = new PerformanceObserver((list) => {for (const entry of list && list.getEntries()) {if (entry && entry.entryType === 'largest-contentful-paint') {'            console && console.log('LCP: ', entry && entry.startTime)'          }'          if (entry && entry.entryType === 'first-input') {'            console && console.log('FID: ', entry && entry.processingStart - entry && entry.startTime)'          }'          if (entry && entry.entryType === 'layout-shift') {'            if (!(entry as any).hadRecentInput) {'              console && console.log('CLS: ', (entry as any).value)'            }'          }}
      })'      } catch (e) {'        // Fallback for browsers that don&apos;t support all entry types;
        console && console.log('Performance monitoring not fully supported')'      }';
      // Resource hints for better performance;const addResourceHint = (href: string, as: string, type?: string) => {const link = document && document.createElement('link')Object && Object.entries(linkAttrs).forEach(([key, value]) => {if (key === 'crossorigin') {link && link.setAttribute(key, value as string)} else {(link as any)[key] = value;
          }
        })const addResourceHint = (href: string, as: string, type?: string) => {const link = document.createElement('link')Object.entries(linkAttrs).forEach(([key, value]) => {if (key === 'crossorigin') {link.setAttribute(key, value as string)} else {(link as any)[key] = value;
          }
        })document.head.appendChild(link)})setOptimizationStatus('Code optimization complete')// Simulate optimization delay;
      await new Promise(resolve => setTimeout(resolve, 1200))} catch (error) {setOptimizationStatus('Code optimization failed')console.error('Code optimization error:', error)} finally {setIsOptimizing(false)}
  }, [])// Run all optimizations;
  const runAllOptimizations = useCallback(async () => {setIsOptimizing(true)setOptimizationStatus('Starting comprehensive optimization...')try {await optimizeImages()await optimizeFonts()await optimizeCode()setOptimizationStatus('All optimizations complete!')// Re-measure performance after optimization;
      setTimeout(() => {measurePerformance()}, 500)} catch (error) {setOptimizationStatus('Optimization failed')console.error('Optimization error:', error)} finally {setIsOptimizing(false)}
  }, [optimizeImages, optimizeFonts, optimizeCode, measurePerformance])// Initialize performance monitoring;
  useEffect(() => {if (typeof window !== 'undefined') {// Measure initial performance;
      window.addEventListener('load', measurePerformance)// Monitor for performance issues;
      const observer = new PerformanceObserver(list => {for (const entry of list.getEntries()) {if (entry.entryType === 'largest-contentful-paint') {const lcp = entry.startTime;
            if (lcp > 2500) {// LCP should be under 2.5s;
              console.warn('LCP is too slow:', lcp)}
          }
        }})return () => {window.removeEventListener('load', measurePerformance)observer.disconnect()}}
      observer.observe({ entryTypes: ['largest-contentful-paint'] })return () => {window.removeEventListener('load', measurePerformance)observer.disconnect()})try {observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })} catch (e) {// Fallback for browsers that don&apos;t support all entry types'';
        console.log('Performance monitoring not fully supported')}
  const getPerformanceScore = (): number => {let score  = 100;observer.observe({ entryTypes: ['largest-contentful-paint'] })return () => {window.removeEventListener('load', measurePerformance)observer.disconnect()}}
  }, [measurePerformance])const getPerformanceScore = (): number => {let score  = 100;if (metrics.firstContentfulPaint > 1800) score -= 20;
    if (metrics.largestContentfulPaint > 2500) score -= 25;
    if (metrics.loadTime > 3000) score -= 15;
    if (metrics.timeToInteractive > 3500) score -= 20;}const getPerformanceGrade  = (score: number): string => {return Math.max(0, score)}const getPerformanceGrade = (score: number): string => {if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';return 'F';
  }const performanceScore = getPerformanceScore()const performanceGrade  = getPerformanceGrade(performanceScore)>;
      <div className='flex items-center justify-between mb-6'>;
        <h3 className='text-xl font-bold text-white flex items-center gap-2'>;
          <Gauge className='w-5 h-5 text-cyan-400' />;
          Performance Optimizer;
        </h3>;
        <button;
          onClick={() => setShowMetrics(!showMetrics)}
className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300';
        >;
          {showMetrics ? 'Hide' : 'Show'} Metrics;
        </button>;
      </div>;
            className="h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full";
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: "easeOut" }}{/* Performance Score */}
<div className='mb-6'>;
        <div className='flex items-center justify-between mb-2'>;
          <span className='text-white/70'>Performance Score</span>;
          <span className='text-2xl font-bold text-cyan-400'>;
            {performanceGrade}
          </span>;
        </div>;
        <div className='w-full bg-white/10 rounded-full h-3'>;
          <motion.div;
            className='h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full';
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />;
        </div>;
        <div className='text-right mt-1'>;
          <span className='text-sm text-white/60'>{performanceScore}/100</span>;
        </div>;
      </div>;
            className="h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
      {/* Metrics Display */}
      {showMetrics && (<motion&& motion.div;
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}

className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6'
        >
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
      <div className='space-y-3'>        <button      <div className="space-y-3">
        <button


      {/* Optimization Controls */}
<div className='space-y-3'>
        <button
      <div className='space-y-3'>        <button

        <button



      {/* Optimization Controls */}

        <button
          onClick={runAllOptimizations}
          disabled={isOptimizing}
          className={`w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
            isOptimizing
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-105'
          exit={{ opacity: 0, height: 0 }}className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6';
        >;
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <Clock className='w-6 h-6 text-blue-400 mx-auto mb-2' />;
            <div className='text-lg font-bold text-white'>;
              {Math.round(metrics.loadTime)}ms;
            </div>;
            <div className='text-xs text-white/60'>Load Time</div>;
          </div>;
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <Activity className='w-6 h-6 text-green-400 mx-auto mb-2' />;
            <div className='text-lg font-bold text-white'>;
              {Math.round(metrics.firstContentfulPaint)}ms;
            </div>;
            <div className='text-xs text-white/60'>FCP</div>;
          </div>;
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <TrendingUp className='w-6 h-6 text-purple-400 mx-auto mb-2' />;
            <div className='text-lg font-bold text-white'>;
              {Math.round(metrics.largestContentfulPaint)}ms;
            </div>;
            <div className='text-xs text-white/60'>LCP</div>;
          </div>;
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <Cpu className='w-6 h-6 text-yellow-400 mx-auto mb-2' />;
            <div className='text-lg font-bold text-white'>;
              {Math.round(metrics.timeToInteractive)}ms;
            </div>;
            <div className='text-xs text-white/60'>TTI</div>;
          </div>;
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <Database className='w-6 h-6 text-orange-400 mx-auto mb-2' />;
            <div className='text-lg font-bold text-white'>;
              {metrics.cumulativeLayoutShift.toFixed(3)}
            </div>;
            <div className='text-xs text-white/60'>CLS</div>;
          </div>;
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <Network className='w-6 h-6 text-red-400 mx-auto mb-2' />;
            <div className='text-lg font-bold text-white'>;
              {Math.round(metrics.firstInputDelay)}ms;
            </div>;
            <div className='text-xs text-white/60'>FID</div>          </div>;
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6";
        >;
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">;
            <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />;
            <div className="text-lg font-bold text-white">{Math.round(metrics.loadTime)}ms</div>;
            <div className="text-xs text-white/60">Load Time</div>;
          </div>;
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">;
            <Activity className="w-6 h-6 text-green-400 mx-auto mb-2" />;
            <div className="text-lg font-bold text-white">{Math.round(metrics.firstContentfulPaint)}ms</div>;
            <div className="text-xs text-white/60">FCP</div>;
          </div>;
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">;
            <TrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-2" />;
            <div className="text-lg font-bold text-white">{Math.round(metrics.largestContentfulPaint)}ms</div>;
            <div className="text-xs text-white/60">LCP</div>;
          </div>;
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">;
            <Cpu className="w-6 h-6 text-yellow-400 mx-auto mb-2" />;
            <div className="text-lg font-bold text-white">{Math.round(metrics.timeToInteractive)}ms</div>;
            <div className="text-xs text-white/60">TTI</div>;
          </div>;
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">;
            <Database className="w-6 h-6 text-orange-400 mx-auto mb-2" />;
            <div className="text-lg font-bold text-white">{metrics.cumulativeLayoutShift.toFixed(3)}</div>;
            <div className="text-xs text-white/60">CLS</div>;
          </div>;
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">;
            <Network className="w-6 h-6 text-red-400 mx-auto mb-2" />;
            <div className="text-lg font-bold text-white">{Math.round(metrics.firstInputDelay)}ms</div>;
            <div className="text-xs text-white/60">FID</div>;
      <div className='space-y-3'>        <button      <div className="space-y-3">;
        <button;
            <div className='text-xs text-white/60'>FID</div>;
          </div>;
        </motion.div>;
      )}{/* Optimization Controls */}
<div className='space-y-3'>;
        <button;
      <div className='space-y-3'>        <button;
        <button;
      {/* Optimization Controls */}<button;
          onClick={runAllOptimizations}
          disabled={isOptimizing}
          className={`w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${isOptimizing;
              ? 'bg-gray-600 cursor-not-allowed';
              : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-105';
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
  )}export default PerformanceOptimizer;}
      // Preload critical resources;
'      })'    }}, [preloadImages, preloadFonts])return (<Head>;
      {/* Critical CSS inlined for above-the-fold content */}
      {criticalCSS && (<style dangerouslySetInnerHTML={{ __html: criticalCSS }} />;
      )}
"            if (link) {"              (link as HTMLLinkElement).rel = 'stylesheet;
}'          }}`        />;
      ))}
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />"      "      {/* Service Worker registration */}
}
          ``        }}/>;
    </Head>;
  ){/* Performance Tips */}
      <div className="mt-6 pt-4 border-t border-white/10">;
        <h4 className="text-sm font-semibold text-white/80 mb-3">Performance Tips</h4>;
        <ul className="text-xs text-white/60 space-y-1">;
      {/* Performance Tips */}
      <div className="mt-6 pt-4 border-t border-white/10">;
        <h4 className="text-sm font-semibold text-white/80 mb-3">Performance Tips</h4>;
        <ul className="text-xs text-white/60 space-y-1">;
          } flex items-center justify-center gap-2`}
        >;
          {isOptimizing ? (<>;
<div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />;
              <span>Optimizing...</span>;
            </>;
          ) : (<>;
<Zap className='w-4 h-4' />;
              <span>Run All Optimizations</span>;
            </>;
          )}
        </button>;
        {optimizationStatus !== 'idle' && (<div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <div className='text-sm text-white/80'>{optimizationStatus}</div>;
          </div>;
      <div className="mt-6 pt-4 border-t border-white/10">
        <h4 className="text-sm font-semibold text-white/80 mb-3">Performance Tips</h4>
        <ul className="text-xs text-white/60 space-y-1">
      {/* Performance Tips */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <h4 className="text-sm font-semibold text-white/80 mb-3">Performance Tips</h4>
        <ul className="text-xs text-white/60 space-y-1">


        )}
      </div>;
      {/* Performance Tips */}

        <ul className='text-xs text-white/60 space-y-1'>
          <li>• Use WebP images for better compression</li>
          <li>• Implement lazy loading for images</li>
          <li>• Minimize CSS and JavaScript bundles</li>
          <li>• Use CDN for static assets</li>
          <li>• Enable gzip compression</li>
        </ul>
      </div>
    </div>

  }, [measure_performance]);
;
interface PerformanceMetrics {
  fcp: number;
        )}
      </div>;
      {/* Performance Tips */}
<div className='mt-6 pt-4 border-t border-white/10'>;
        <h4 className='text-sm font-semibold text-white/80 mb-3'>;
          Performance Tips;
        </h4>;
        <ul className='text-xs text-white/60 space-y-1'>;
          <li>• Use WebP images for better compression</li>;
          <li>• Implement lazy loading for images</li>;
          <li>• Minimize CSS and JavaScript bundles</li>;
          <li>• Use CDN for static assets</li>;
          <li>• Enable gzip compression</li>;
        </ul>;
      </div>;
    </div>;
  }, [measure_performance])const getPerformanceScore = (): number => {let score  = 100;// Check condition;
if (score -= 20) {$2;
}
    // Check condition;
if (score -= 25) {$2;
}
    // Check condition;
if (score -= 15) {$2;
}
    // Check condition;
if (score -= 20) {$2;
}
    return Math.max (0, score)}return Math.max (0, score)}const getPerformanceGrade = (score: number): string => {// Check condition;
if (return 'A') {$2;
}
    // Check condition;
if (return 'B') {$2;
}
    // Check condition;
if (return 'C') {$2;
}
    // Check condition;
if (return 'D') {$2;
}
    return 'F';  }    return 'F';
  }const performance_score = getPerformanceScore ()const performance_grade  = getPerformanceGrade (performance_score)>;
      <div className='flex items - center justify - between mb - 6'>;
        <h3 className='text - xl font - bold text - white flex items - center gap - 2'>;
          <Gauge className='w - 5 h - 5 text - cyan - 400' />          Performance Optimizer;
        </h3>;
        <button;
          on_click={() => setShowMetrics (!show_metrics)}
          className='text - sm text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300'        >  return (<div className={`bg - slate - 800 / 50 backdrop - blur - xl rounded - 2xl border border - white / 10 p - 6 ${class_name}`}>;
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

      {/* Performance Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/70">Performance Score</span>
          <span className="text-2xl font-bold text-cyan-400">{performanceGrade}</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-3">
          <motion.div
            className="h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="text-right mt-1">
          <span className="text-sm text-white/60">{performanceScore}/100</span>
        </div>
      </div>

      {/* Metrics Display */}
      {showMetrics && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
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
          </div>
        </motion.div>
      )}

      {/* Optimization Controls */}
      <div className="space-y-3">
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

        {optimizationStatus !== 'idle' && (
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="text-sm text-white/80">{optimizationStatus}</div>
          </div>
        )}
      </div>

      {/* Performance Tips */}
      <div className="mt-6 pt-4 border-t border-white/10">
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
  )
};

export default PerformanceOptimizer;
      measureWebVitals()} else {window && window.addEventListener('load', measureWebVitals)}
export default PerformanceOptimizer;)

  );




      measureWebVitals()} else {window && window.addEventListener('load', measureWebVitals)}
export default PerformanceOptimizer;)
          exit={{ opacity: 0, height: 0}}
          className = $2;
export default PerformanceOptimizer,
