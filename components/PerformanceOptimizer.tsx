<<<<<<< HEAD
=======
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

=======
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
>>>>>>> main
import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

} from 'lucide-react';
interface PerformanceMetrics {;
  loadTime: number;
=======
=======
  Database,;
  Network,;


} from 'lucide-react';
interface PerformanceMetrics {
  load_time: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}, []);

import { Zap, Clock, TrendingUp, Activity, Gauge, Cpu, Database, Network } from 'lucide-react';


//Optimize images for (const img of Array && Array.from (images) ) {;
  if (img && img.complete && img && img.naturalWidth > 0) {;
  //Add lazy loading img && img.loading = 'lazy';
//Add responsive sizes if not present if (!img && img.sizes) {;
  optimizedCount++ ;
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({;
  className = '',;
}) => {  const [metrics, setMetrics] = useState<PerformanceMetrics>({;
interface PerformanceMetrics {;
  loadTime: number,;
  firstContentfulPaint: number,;
  largestContentfulPaint: number,;
  cumulativeLayoutShift: number,;
  firstInputDelay: number,;
  timeToInteractive: number;
}
interface PerformanceOptimizerProps {;
  className?: string;
}
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ className = '' }) => {;
  const [metrics, setMetrics] = useState<PerformanceMetrics>({;
    loadTime: 0,;
    firstContentfulPaint: 0,;
    largestContentfulPaint: 0,;
    cumulativeLayoutShift: 0,;
    firstInputDelay: 0,;
    timeToInteractive: 0,  });    timeToInteractive: 0;

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      setOptimizationStatus (`Optimized ${optimized_count} images`);
;
      // Simulate optimization delay;
      await new Promise (resolve => set_timeout (resolve, 1000));
;
      setOptimizationStatus ('Image optimization complete');
    } catch (error) {
      setOptimizationStatus ('Image optimization failed');
      console.error ('Image optimization error:', error);
    } finally {
      setIsOptimizing (false);    }      // Simulate optimization delay;
      await new Promise (resolve => set_timeout (resolve, 1000));
;
      setOptimizationStatus ('Image optimization complete');
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    } catch (error) {
      setOptimizationStatus ('Image optimization failed');
      console.error ('Image optimization error:', error);
    } finally {
      setIsOptimizing (false);
    }
  }, []);

          optimizedCount++;

        }
      }
      setOptimizationStatus(`Optimized ${optimizedCount} images`);


      setOptimizationStatus('Image optimization complete');
    } catch (error) {;

  // Optimize fonts;
  const optimizeFonts = useCallback(async () => {;
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing fonts...');
    try {;
      // Add font-display: swap to improve font loading;
      const style = document && document.createElement('style'),;
      style && style.textContent = `;
        @font-face {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          font-family: 'Inter';
          font-display: swap;
        }
        @font-face {;
          font-family: 'JetBrains Mono';        }
        @font-face {;
          font-family: 'JetBrains Mono',;
          font-display: swap;

=======          font-family: 'Inter',
          font-display: swap

        }
        @font-face {;
          font-family: 'Orbitron';

  // Optimize images
  const optimizeImages = useCallback(async () => {
    setIsOptimizing(true),
    setOptimizationStatus('Optimizing images...'),

      for (const img of Array.from(images)) {
        if (img.complete && img.naturalWidth > 0) {
          // Add lazy loading
          img.loading = 'lazy',
          
          // Add responsive sizes if not present
          if (!img.sizes) {
            img.sizes =
              '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
          }
          optimizedCount++;        }
      }
      setOptimizationStatus(`Optimized ${optimizedCount} images`);
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
      setOptimizationStatus('Image optimization complete');
    } catch (error) {
      setOptimizationStatus('Image optimization failed');
      console.error('Image optimization error:', error);
    } finally {
      setIsOptimizing(false);    }      // Simulate optimization delay
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
      const style = document.createElement('style')
      style.textContent = `
        @font-face {
`;
=======
=======
        }

        @font-face {
          font-family: 'Orbitron',
          font-display: swap
        }

      `;



      await new Promise(resolve => setTimeout(resolve, 800));
    } catch (error) {;
      setOptimizationStatus('Font optimization failed');
      console && console.error('Font optimization error:', error);
    } finally {;
      setIsOptimizing(false);    }      // Simulate optimization delay;
      await new Promise(resolve => setTimeout(resolve, 800));
    } catch (error) {;
      setOptimizationStatus('Font optimization failed');
      console && console.error('Font optimization error:', error);
    } finally {;
      setIsOptimizing(false);

=======
  // Optimize CSS and JavaScript;
  const optimizeCode = useCallback(async () => {;
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing code...');
    try {;
      // Add resource hints for critical resources;
      const preloadLinks = [;
        {;
          rel: 'preload',;
          href: '/fonts/inter-var && var.woff2',;
          as: 'font',;
          type: 'font/woff2',;
          crossorigin: 'anonymous',;
        },;
        {;
          rel: 'preload',;
          href: '/fonts/jetbrains-mono-var && var.woff2',;
          as: 'font',;
          type: 'font/woff2',;
          crossorigin: 'anonymous',;
        },      ];        { rel: 'preload', href: '/fonts/inter-var && var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },;
        { rel: 'preload', href: '/fonts/jetbrains-mono-var && var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
        { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', href: '/fonts/jetbrains-mono-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({;
preloadImages = [], preloadFonts = [;
    'https: //fonts && fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap;
  ], criticalCSS'}) => {;
  useEffect(() => {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Performance monitoring;
    if (typeof window !== 'undefined' && 'performance' in window) {'      // Monitor Core Web Vitals'      const observer = new PerformanceObserver((list) => {;
        for (const entry of list && list.getEntries()) {;
if (entry && entry.entryType === 'largest-contentful-paint') {'            console && console.log('LCP: ', entry && entry.startTime);
'          }'          if (entry && entry.entryType === 'first-input') {'            console && console.log('FID: ', entry && entry.processingStart - entry && entry.startTime);'          }'          if (entry && entry.entryType === 'layout-shift') {'            if (!(entry as any).hadRecentInput) {'              console && console.log('CLS: ', (entry as any).value);'            }'          }}
      });
      try {;
        observer && observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
'      } catch (e) {'        // Fallback for browsers that don&apos;t support all entry types;
        console && console.log('Performance monitoring not fully supported');
'      }';
      // Resource hints for better performance;const PerformanceOptimizer: React.FC < PerformanceOptimizerProps> = ({
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
      await new Promise(resolve => setTimeout(resolve, 1200));
    } catch (error) {;
      setOptimizationStatus('Code optimization failed');
      console.error('Code optimization error:', error)
    } finally {
      setIsOptimizing(false)    }
  }, []);

  // Run all optimizations;
  const runAllOptimizations = useCallback(async () => {;
    setIsOptimizing(true);
    setOptimizationStatus('Starting comprehensive optimization...');
    try {;
    try {
      await optimizeImages(),
      await optimizeFonts(),
      await optimizeCode(),
      
      setOptimizationStatus('All optimizations complete!'),

  }, []);
  // Optimize CSS and JavaScript
  const optimizeCode = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing code...');
    try {
      // Add resource hints for critical resources
      const preloadLinks = [
        {
          rel: 'preload'
          href: '/fonts/inter-var.woff2'
          as: 'font'
          type: 'font/woff2'
          crossorigin: 'anonymous'
        }
        {
          rel: 'preload'
          href: '/fonts/jetbrains-mono-var.woff2'
          as: 'font'
          type: 'font/woff2'
          crossorigin: 'anonymous'
        },      ];        { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
        { rel: 'preload', href: '/fonts/jetbrains-mono-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
      ];
      preloadLinks.forEach(linkAttrs => {
import React, { useEffect } from 'react;
import Head from 'next/head;
interface PerformanceOptimizerProps {preloadImages?: string[];
  preloadFonts?: string[];
  criticalCSS?: string;
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
preloadImages = [], preloadFonts = [;
    'https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap;
  ], criticalCSS'}) => {useEffect(() => {
    // Performance monitoring;
    if (typeof window !== 'undefined' && 'performance' in window) {'      // Monitor Core Web Vitals'      const observer = new PerformanceObserver((list) => {;
        for (const entry of list.getEntries()) {;
if (entry.entryType === 'largest-contentful-paint') {'            console.log('LCP: ', entry.startTime);
'          }'          if (entry.entryType === 'first-input') {'            console.log('FID: ', entry.processingStart - entry.startTime);'          }'          if (entry.entryType === 'layout-shift') {'            if (!(entry as any).hadRecentInput) {'              console.log('CLS: ', (entry as any).value);'            }'          }}
      });
      try {observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
'      } catch (e) {'        // Fallback for browsers that don&apos;t support all entry types;
        console.log('Performance monitoring not fully supported');
'      }';
      // Resource hints for better performance;
      const addResourceHint = (href: string, as: string, type?: string) => {const link = document.createElement('link');
        Object.entries(linkAttrs).forEach(([key, value]) => {
          if (key === 'crossorigin') {
            link.setAttribute(key, value as string);
          } else {
            (link as any)[key] = value;
          }
        });
        document.head.appendChild(link);
      });
      setOptimizationStatus('Code optimization complete');
      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 1200));
    } catch (error) {
      setOptimizationStatus('Code optimization failed');
      console.error('Code optimization error:', error);
    } finally {
      setIsOptimizing(false);    }      setIsOptimizing(false)
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
        measurePerformance();
      }, 500);
    } catch (error) {
      setOptimizationStatus('Optimization failed');
      console.error('Optimization error:', error);
    } finally {
      setIsOptimizing(false);    }      setOptimizationStatus('All optimizations complete!');
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
=======
=======
  criticalCSS?: string;
}


const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({;
preloadImages = [], preloadFonts = [;
    'https: //fonts && fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap;
  ], criticalCSS'}) => {;
  useEffect(() => {;

    // Performance monitoring;
    if (typeof window !== 'undefined' && 'performance' in window) {'      // Monitor Core Web Vitals'      const observer = new PerformanceObserver((list) => {;
        for (const entry of list && list.getEntries()) {;
if (entry && entry.entryType === 'largest-contentful-paint') {'            console && console.log('LCP: ', entry && entry.startTime);
'          }'          if (entry && entry.entryType === 'first-input') {'            console && console.log('FID: ', entry && entry.processingStart - entry && entry.startTime);'          }'          if (entry && entry.entryType === 'layout-shift') {'            if (!(entry as any).hadRecentInput) {'              console && console.log('CLS: ', (entry as any).value);'            }'          }}
      });

      try {;
        observer && observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

'      } catch (e) {'        // Fallback for browsers that don&apos;t support all entry types;
        console && console.log('Performance monitoring not fully supported');
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


      await new Promise(resolve => setTimeout(resolve, 1200));
    } catch (error) {;
      setOptimizationStatus('Code optimization failed');

      console.error('Code optimization error:', error)
    } finally {
      setIsOptimizing(false)

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


      setOptimizationStatus('Optimization failed');

      console.error('Optimization error:', error)
    } finally {
      setIsOptimizing(false)

    }
  }, [optimizeImages, optimizeFonts, optimizeCode, measurePerformance]);


  // Initialize performance monitoring;
  useEffect(() => {;
    if (typeof window !== 'undefined') {;
      // Measure initial performance;
      window && window.addEventListener('load', measurePerformance);
      // Monitor for performance issues;
      const observer = new PerformanceObserver(list => {;
        for (const entry of list && list.getEntries()) {;
          if (entry && entry.entryType === 'largest-contentful-paint') {;
            const lcp = entry && entry.startTime;
            if (lcp > 2500) {;
              // LCP should be under 2 && 2.5s;
              console && console.warn('LCP is too slow:', lcp);            }

=======      
      // Monitor for performance issues
=======

=======
      
      // Monitor for performance issues
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, [optimizeImages, optimizeFonts, optimizeCode, measurePerformance]);
  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Measure initial performance
      window.addEventListener('load', measurePerformance);
      // Monitor for performance issues
      const observer = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            if (lcp > 2500) {
              // LCP should be under 2.5s
              console.warn('LCP is too slow:', lcp);            }
          }
        }
      });      // Monitor for performance issues
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            if (lcp > 2500) { // LCP should be under 2.5s
              console.warn('LCP is too slow:', lcp)
=======
        document.head.append_child (link);
      });
;
      setOptimizationStatus ('Code optimization complete');
;
      // Simulate optimization delay;
      await new Promise (resolve => set_timeout (resolve, 1200));
    } catch (error) {
      setOptimizationStatus ('Code optimization failed');
      console.error ('Code optimization error:', error);
    } finally {
      setIsOptimizing (false);    }      setIsOptimizing (false);
    }
  }, []);
;
  // Run all optimizations;
  const runAllOptimizations = useCallback (async () => {
    setIsOptimizing (true);
    setOptimizationStatus ('Starting comprehensive optimization...');
;
    try {
      await optimize_images ();
      await optimize_fonts ();
      await optimize_code ();
;
      setOptimizationStatus ('All optimizations complete!');
;
      // Re - measure performance after optimization;
      set_timeout (() => {
        measure_performance ();
      }, 500);
    } catch (error) {
      setOptimizationStatus ('Optimization failed');
      console.error ('Optimization error:', error);
    } finally {
      setIsOptimizing (false);    }      setOptimizationStatus ('All optimizations complete!');
;
      // Re - measure performance after optimization;
      set_timeout (() => {
        measure_performance ();
      }, 500);
    } catch (error) {
      setOptimizationStatus ('Optimization failed');
      console.error ('Optimization error:', error);
    } finally {
      setIsOptimizing (false);
    }
  }, [optimize_images, optimize_fonts, optimize_code, measure_performance]);
;
  // Initialize performance monitoring;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      // Measure initial performance;
      window.addEventListener ('load', measure_performance);
;
      // Monitor for performance issues;
      const observer = new PerformanceObserver (list => {
        for (const entry of list.get_entries ()) {
          // Check condition
if ( {) {
  $2
}
            const lcp = entry.start_time;
            // Check condition
if ( {) {
  $2
}
              // LCP should be under 2.5s;
              console.warn ('LCP is too slow:', lcp);            }
          }
        }
      });      // Monitor for performance issues;
      const observer = new PerformanceObserver ((list) => {
        for (const entry of list.get_entries ()) {
          // Check condition
if ( {) {
  $2
}
            const lcp = entry.start_time;
            // Check condition
if ( { // LCP should be under 2.5s) {
  $2
}
              console.warn ('LCP is too slow:', lcp);
  }, [measurePerformance]);
=======  }, [measurePerformance]);



    

=======
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          {showMetrics ? 'Hide' : 'Show'} Metrics
        </button>
      </div>
            className="h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: "easeOut" }}


          />
        </div>
        <div className='text-right mt-1'>

          <span className='text-sm text-white/60'>{performanceScore}/100</span>        </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/70">Performance Score</span>
          <span className="text-2xl font-bold text-cyan-400">{performanceGrade}</span>
        </div>
      {/* Performance Score */}
      <div className='mb-6'>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-white/70'>Performance Score</span>
          <span className='text-2xl font-bold text-cyan-400'>
            {performanceGrade}
          </span>
        </div>
=======        <div className='w-full bg-white/10 rounded-full h-3'>
          <motion.div
            className='h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full'
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
        <div className='text-right mt-1'>
          <span className='text-sm text-white/60'>{performanceScore}/100</span>        </div>        </div>
        <div className="w-full bg-white/10 rounded-full h-3">
          <motion.div
=======
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/70">Performance Score</span>
          <span className="text-2xl font-bold text-cyan-400">{performanceGrade}</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-3">
          <motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: "easeOut" }}

=======          />
        </div>
        <div className="text-right mt-1">
          <span className="text-sm text-white/60">{performanceScore}/100</span>
        </div>
      </div>

=======
          />
        </div>
        <div className='text-right mt-1'>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <span className='text-sm text-white/60'>{performanceScore}/100</span>        </div>

        </div>

      </div>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Metrics Display */}
      {showMetrics && (;
        <motion&& motion.div

      {/* Optimization Controls */}
      <div className=&quot;space-y-3&quot;>
        <button
          onClick={_runAllOptimizations}
          disabled={_isOptimizing}
          className={_`w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
            isOptimizing
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-105'} flex items-center justify-center gap-2`}
        >
          {_isOptimizing ? (
            <>
              <div className=&quot;w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin&quot; />

          className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6'

        >
==============
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6'

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
      {/* Optimization Controls */}
      <div className='space-y-3'>        <button      <div className="space-y-3">
        <button
      <div className='space-y-3'>        <button

        <button

=======
=======
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

=======
          </div>
        </motion.div>
      )}
        <button


      {/* Optimization Controls */}

        <button
=======


      {/* Optimization Controls */}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          onClick={runAllOptimizations}
          disabled={isOptimizing}
          className={`w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
            isOptimizing
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-105'

            <div className="text-sm text-white/80">{optimizationStatus}</div>
          </div>

        </button>;
        {optimizationStatus !== 'idle' && (;
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <div className='text-sm text-white/80'>{optimizationStatus}</div>          </div>          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">;
            <div className="text-sm text-white/80">{optimizationStatus}</div>;
          </div>;
        )}
      </div>;


      {/* Preload critical resources */}
      {preloadImages && preloadImages.map((image, index) => (;
        <link
key={`preload-image-${index}}          rel="preload""          as="image""          href={image}"        />))}
      {preloadFonts && preloadFonts.map((font, index) => (;
        <link
key={`preload-font-${index}`}          rel="preload""          as="style""          href={font}"          onLoad={() => {;
            const link = document && document.querySelector(link[href="${font}"]`);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
"            if (link) {"              (link as HTMLLinkElement).rel = 'stylesheet;
}'          }}`        />;
      ))}
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />"      "      {/* Service Worker registration */}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <script
        dangerouslySetInnerHTML={{
          __html:             if ('serviceWorker' in navigator) {'              window && window.addEventListener('load', function() {'                navigator && navigator.serviceWorker.register('/sw && sw.js')'                  .then(function(registration) {'                    console && console.log('SW registered: ', registration)
'                  })'                  .catch(function(registrationError) {
                    console && console.log('SW registration failed: ', registrationError)'                  })'              })
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
          ``        }}/>;
    </Head>;
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
};
  );
      {/* Performance Tips */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <h4 className="text-sm font-semibold text-white/80 mb-3">Performance Tips</h4>
        <ul className="text-xs text-white/60 space-y-1">
        )}
      </div>

      {/* Performance Tips */}
        )}
      </div>



      {/* Performance Tips */}
      <div className='mt-6 pt-4 border-t border-white/10'>
        <h4 className='text-sm font-semibold text-white/80 mb-3'>
          Performance Tips
        </h4>
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
=======

interface PerformanceOptimizerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enable_reporting?: boolean;
}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      measureWebVitals();
    } else {;
      window && window.addEventListener('load', measureWebVitals);
    }
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return () => {;
      window && window.removeEventListener('load', measureWebVitals);
    };
  }, [measureWebVitals]);
  // Monitor for performance issues;
  useEffect(() => {;
    if (!metrics) return;
    const warnings: string[] = [];


=======
const PerformanceOptimizer: React.FC < PerformanceOptimizerProps> = ({
  onMetricsUpdate,
  enable_reporting = false;
}) => {
  const [metrics, set_metrics] = useState < PerformanceMetrics | null>(null);
;
  const measureWebVitals = useCallback (() => {
    if () return) {
  $2
}
    const navigation = performance.getEntriesByType ('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType ('paint');
;
    // Core Web Vitals;
    const fcp = paint.find (entry => entry.name === 'first - contentful - paint')?.start_time || 0;
    const lcp = performance.getEntriesByType ('largest - contentful - paint')[0]?.start_time || 0;
    const ttfb = navigation.response_start - navigation.request_start;
;
    // Memory usage (if available);
    const memory = (performance as any).memory ? {
      used: (performance as any).memory.usedJSHeapSize,
      total: (performance as any).memory.totalJSHeapSize,
      limit: (performance as any).memory.jsHeapSizeLimit;
    } : undefined;
;
    const new_metrics: PerformanceMetrics = {
      fcp,
      lcp,
      fid: 0, // First Input Delay - would need user interaction to measure;
      cls: 0, // Cumulative Layout Shift - would need observer;
      ttfb,
      memory;
    }
;
    set_metrics (new_metrics);
;
    // Check condition
if ( {) {
  $2
}
      onMetricsUpdate (new_metrics);
    }
    // Check condition
if ( {) {
  $2
}
      console.log ('Performance Metrics:', new_metrics);
    }
  }, [onMetricsUpdate, enable_reporting]);
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      measureWebVitals ();
    } else {
      window.addEventListener ('load', measureWebVitals);
    }
    return () => {
      window.removeEventListener ('load', measureWebVitals);
    }
  }, [measureWebVitals]);
;
  // Monitor for performance issues;
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    const warnings: string[] = [];
;
    if (warnings.push ('First Contentful Paint is slow (>1.8s)')) {
  $2
}
    if (warnings.push ('Largest Contentful Paint is slow (>2.5s)')) {
  $2
}
    if (warnings.push ('Time to First Byte is slow (>600ms)')) {
  $2
}
    // Check condition
if ( {) {
  $2
}
      const memory_usage = (metrics.memory.used / metrics.memory.limit) * 100;
      if (warnings.push ('High memory usage detected')) {
  $2
}
    }
    // Check condition
if ( {) {
  $2
}
      console.warn ('Performance Issues Detected:', warnings);
    }
  }, [metrics, enable_reporting]);
;
  return null;
}
;
export default PerformanceOptimizer;
;=======  );



    }
  }, [metrics, enableReporting]);
  return null;

}

export default PerformanceOptimizer;
<<<<<<< HEAD
=======
};export default PerformanceOptimizer;

export default PerformanceOptimizer;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> main
