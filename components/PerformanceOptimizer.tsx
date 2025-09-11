<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {;
  Zap,;
  Clock,;
  TrendingUp,;
  Activity,;
  Gauge,;
  Cpu,;
  Database,;
  Network,;
import {
import React, { useEffect, useState, useCallback } from 'react';

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
import {
  Zap,
  Clock,
  TrendingUp,
  Activity,
  Gauge,
  Cpu,
  Database,;
  Network,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


} from 'lucide-react';
interface PerformanceMetrics {;
  loadTime: number;
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Zap,
  Clock,
  TrendingUp,
  Activity,
  Gauge,
  Cpu,

  Database,;
  Network,;


} from 'lucide-react';
interface PerformanceMetrics {
  load_time: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
<<<<<<< HEAD
<<<<<<< HEAD
  timeToInteractive: number;
;
}, []);
import { Zap, Clock, TrendingUp, Activity, Gauge, Cpu, Database, Network } from 'lucide-react';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  timeToInteractive: number;
;

}, []);

import { Zap, Clock, TrendingUp, Activity, Gauge, Cpu, Database, Network } from 'lucide-react';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    loadTime: 0,
const PerformanceOptimizer: React.FC < PerformanceOptimizerProps> = ({ class_name = '' }) => {
  const [metrics, set_metrics] = useState < PerformanceMetrics>({
    load_time: 0,
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
<<<<<<< HEAD
<<<<<<< HEAD
const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0
    firstContentfulPaint: 0
    largestContentfulPaint: 0
    cumulativeLayoutShift: 0
    firstInputDelay: 0
    timeToInteractive: 0,  });    timeToInteractive: 0
  });
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string>('idle');
  const [showMetrics, setShowMetrics] = useState(false);
  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
      const fcp = paintEntries.find(
        entry => entry.name === 'first-contentful-paint'
      );
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
      

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart
        firstContentfulPaint: fcp ? fcp.startTime : 0
        largestContentfulPaint: lcp ? lcp.startTime : 0
        cumulativeLayoutShift: 0, // Would need to be measured with CLS API
        firstInputDelay: 0, // Would need to be measured with FID API
<<<<<<< HEAD
<<<<<<< HEAD
        timeToInteractive:
          navigation.domContentLoadedEventEnd - navigation.navigationStart
      }
      setMetrics(newMetrics);    }        timeToInteractive: navigation.domContentLoadedEventEnd - navigation.navigationStart
      }
      setMetrics(newMetrics)
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        timeToInteractive: navigation.domContentLoadedEventEnd - navigation.navigationStart
      };

      setMetrics(newMetrics)
    }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  // Measure performance metrics;
  const measurePerformance = useCallback(() => {;
    if (typeof window !== 'undefined' && 'performance' in window) {;
      const navigation = performance && performance.getEntriesByType(;
        'navigation';
      )[0] as PerformanceNavigationTiming;
      const paintEntries = performance && performance.getEntriesByType('paint');      const paintEntries = performance && performance.getEntriesByType('paint');

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const fcp = paintEntries && paintEntries.find(entry => entry && entry.name === 'first-contentful-paint');
      const lcp = performance && performance.getEntriesByType('largest-contentful-paint')[0];
      const fcp = paintEntries && paintEntries.find(;
        entry => entry && entry.name === 'first-contentful-paint';
      );
      const lcp = performance && performance.getEntriesByType('largest-contentful-paint')[0];
      const newMetrics: PerformanceMetrics = {;
        loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart,;
        firstContentfulPaint: fcp ? fcp && fcp.startTime : 0,;
        largestContentfulPaint: lcp ? lcp && lcp.startTime : 0,;
        cumulativeLayoutShift: 0, // Would need to be measured with CLS API;
        firstInputDelay: 0, // Would need to be measured with FID API;
        timeToInteractive:;
          navigation && navigation.domContentLoadedEventEnd - navigation && navigation.navigationStart,;
      };
      setMetrics(newMetrics);    }        timeToInteractive: navigation && navigation.domContentLoadedEventEnd - navigation && navigation.navigationStart;
      };
      setMetrics(newMetrics);
<<<<<<< HEAD
<<<<<<< HEAD
          // Add responsive sizes if not present
          if (!img.sizes) {
            img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    timeToInteractive: 0,  });    timeToInteractive: 0;
  });
  const [is_optimizing, setIsOptimizing] = useState (false);
  const [optimization_status, setOptimizationStatus] = useState < string>('idle');
  const [show_metrics, setShowMetrics] = useState (false);
;
  // Measure performance metrics;
  const measure_performance = useCallback (() => {
    // Check condition
if ( {) {
  $2
}
      const navigation = performance.getEntriesByType (
        'navigation')[0] as PerformanceNavigationTiming;
      const paint_entries = performance.getEntriesByType ('paint');      const paint_entries = performance.getEntriesByType ('paint');
;
      const fcp = paint_entries.find (entry => entry.name === 'first - contentful - paint');
      const lcp = performance.getEntriesByType ('largest - contentful - paint')[0];
;
      const fcp = paint_entries.find (
        entry => entry.name === 'first - contentful - paint');
      const lcp = performance.getEntriesByType ('largest - contentful - paint')[0];
;
      const new_metrics: PerformanceMetrics = {
        load_time: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.start_time : 0,
        largestContentfulPaint: lcp ? lcp.start_time : 0,
        cumulativeLayoutShift: 0, // Would need to be measured with CLS API;
        firstInputDelay: 0, // Would need to be measured with FID API;
        timeToInteractive:;
          navigation.domContentLoadedEventEnd - navigation.navigation_start,
      }
;
      set_metrics (new_metrics);    }        timeToInteractive: navigation.domContentLoadedEventEnd - navigation.navigation_start;
      }
;
      set_metrics (new_metrics);
  }, []);
;
  // Optimize images;
  const optimize_images = useCallback (async () => {
    setIsOptimizing (true);
    setOptimizationStatus ('Optimizing images...');
;
    try {
      const images = document.querySelectorAll ('img');
      let optimized_count = 0;
;
      for (const img of Array.from (images)) {
        // Check condition
if ( {) {
  $2
}
          // Add lazy loading;
          img.loading = 'lazy';
;
          // Add responsive sizes if not present;
          // Check condition
if ( {) {
  $2
}
            img.sizes =;
              '(max - width: 768px) 100vw, (max - width: 1200px) 50vw, 33vw';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (error) {
      setOptimizationStatus ('Image optimization failed');
      console.error ('Image optimization error:', error);
    } finally {
      setIsOptimizing (false);
    }
  }, []);
<<<<<<< HEAD
<<<<<<< HEAD
          optimizedCount++;
        }
      }
      setOptimizationStatus(`Optimized ${optimizedCount} images`);
      // Simulate optimization delay;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          optimizedCount++;

        }
      }
      setOptimizationStatus(`Optimized ${optimizedCount} images`);


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOptimizationStatus('Image optimization complete');
    } catch (error) {;
      setOptimizationStatus('Image optimization failed');
      console && console.error('Image optimization error:', error);
    } finally {;
      setIsOptimizing(false);    }      // Simulate optimization delay;
      await new Promise(resolve => setTimeout(resolve, 1000));
<<<<<<< HEAD
<<<<<<< HEAD
      setOptimizationStatus('Image optimization complete');
    } catch (error) {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      setOptimizationStatus('Image optimization complete');
    } catch (error) {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setOptimizationStatus('Image optimization failed');
      console && console.error('Image optimization error:', error);
    } finally {;
      setIsOptimizing(false);
    }
  }, []);
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Optimize fonts;
  const optimizeFonts = useCallback(async () => {;
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing fonts...');
    try {;
      // Add font-display: swap to improve font loading;
      const style = document && document.createElement('style'),;
      style && style.textContent = `;
        @font-face {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          font-family: 'Inter';
          font-display: swap;
        }
        @font-face {;
          font-family: 'JetBrains Mono';        }
<<<<<<< HEAD
<<<<<<< HEAD
        @font-face {;
          font-family: 'JetBrains Mono',;
          font-display: swap;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        @font-face {;
          font-family: 'JetBrains Mono',;
          font-display: swap;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
        @font-face {;
          font-family: 'Orbitron';
          font-display: swap;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          font-family: 'Inter',
          font-display: swap

        }
        @font-face {;
          font-family: 'Orbitron';

<<<<<<< HEAD
<<<<<<< HEAD
          font-family: 'Inter',
          font-display: swap
        }
        @font-face {;
          font-family: 'Orbitron';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  // Optimize fonts;
  const optimize_fonts = useCallback (async () => {
    setIsOptimizing (true);
    setOptimizationStatus ('Optimizing fonts...');
;
    try {
      // Add font - display: swap to improve font loading;
      const style = document.create_element ('style'),
      style.text_content = `;
        @font - face {
          font - family: 'Inter';
          font - display: swap;
        }
        @font - face {
          font - family: 'JetBrains Mono';        }
        @font - face {
          font - family: 'JetBrains Mono',
          font - display: swap;
        }
        @font - face {
          font - family: 'Orbitron';
          font - display: swap;
        }
        @font - face {
          font - family: 'Orbitron';
          font - display: swap;        }          font - family: 'Orbitron',
          font - display: swap;
<<<<<<< HEAD
<<<<<<< HEAD
      setMetrics(newMetrics)
    }
  }, []),

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        }

        @font-face {
          font-family: 'Orbitron',
          font-display: swap
        }

      `;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          font-display: swap;        }          font-family: 'Orbitron',;
          font-display: swap;
        }
      `;
      document && document.head.appendChild(style);
      setOptimizationStatus('Font optimization complete');
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 800))
      document.head.append_child (style);
;
      setOptimizationStatus ('Font optimization complete');
;
      // Simulate optimization delay;
      await new Promise (resolve => set_timeout (resolve, 800));
    } catch (error) {
      setOptimizationStatus ('Font optimization failed');
      console.error ('Font optimization error:', error);
    } finally {
      setIsOptimizing (false);    }      // Simulate optimization delay;
      await new Promise (resolve => set_timeout (resolve, 800));
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (error) {
      setOptimizationStatus ('Font optimization failed');
      console.error ('Font optimization error:', error);
    } finally {
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  criticalCSS?: string;
}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({;
preloadImages = [], preloadFonts = [;
    'https: //fonts && fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap;
  ], criticalCSS'}) => {;
  useEffect(() => {;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Performance monitoring;
    if (typeof window !== 'undefined' && 'performance' in window) {'      // Monitor Core Web Vitals'      const observer = new PerformanceObserver((list) => {;
        for (const entry of list && list.getEntries()) {;
if (entry && entry.entryType === 'largest-contentful-paint') {'            console && console.log('LCP: ', entry && entry.startTime);
'          }'          if (entry && entry.entryType === 'first-input') {'            console && console.log('FID: ', entry && entry.processingStart - entry && entry.startTime);'          }'          if (entry && entry.entryType === 'layout-shift') {'            if (!(entry as any).hadRecentInput) {'              console && console.log('CLS: ', (entry as any).value);'            }'          }}
      });
<<<<<<< HEAD
      try {;
        observer && observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
=======

      try {;
        observer && observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
'      } catch (e) {'        // Fallback for browsers that don&apos;t support all entry types;
        console && console.log('Performance monitoring not fully supported');
'      }';
      // Resource hints for better performance;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
      setOptimizationStatus('Font optimization complete'),
      
      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 800))
    } catch (error) {
      setOptimizationStatus('Font optimization failed'),
          font-family: 'Inter';
          font-display: swap;
        }
        @font-face {
          font-family: 'JetBrains Mono';        }
        @font-face {
          font-family: 'JetBrains Mono'
          font-display: swap
        }
        @font-face {
          font-family: 'Orbitron';
          font-display: swap;
        }
        @font-face {
          font-family: 'Orbitron';
          font-display: swap;        }          font-family: 'Orbitron'
          font-display: swap
        }
      `;
      document.head.appendChild(style);
      setOptimizationStatus('Font optimization complete');
      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 800));
    } catch (error) {
      setOptimizationStatus('Font optimization failed');
      console.error('Font optimization error:', error);
    } finally {
      setIsOptimizing(false);    }      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 800))
    } catch (error) {
      setOptimizationStatus('Font optimization failed');
      console.error('Font optimization error:', error)
    } finally {
      setIsOptimizing(false)
    }
      setOptimizationStatus('Code optimization complete'),
      
      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 1200))
    } catch (error) {
      setOptimizationStatus('Code optimization failed'),
=======

      await new Promise(resolve => setTimeout(resolve, 1200));
    } catch (error) {;
      setOptimizationStatus('Code optimization failed');
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      console.error('Code optimization error:', error)
    } finally {
      setIsOptimizing(false)
<<<<<<< HEAD
    }
}, []);
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  }, []);


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Run all optimizations;
  const runAllOptimizations = useCallback(async () => {;
    setIsOptimizing(true);
    setOptimizationStatus('Starting comprehensive optimization...');
    try {;
<<<<<<< HEAD
      await optimizeImages();
      await optimizeFonts();
      await optimizeCode();
      // Re-measure performance after optimization;
      setTimeout(() => {;
        measurePerformance();
      }, 500);
    } catch (error) {;
      setOptimizationStatus('Optimization failed');
      console && console.error('Optimization error:', error);
    } finally {;
      setIsOptimizing(false);    }      setOptimizationStatus('All optimizations complete!');
      setOptimizationStatus('All optimizations complete!');

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }
        }
      });      // Monitor for performance issues;
      const observer = new PerformanceObserver((list) => {;
        for (const entry of list && list.getEntries()) {;
          if (entry && entry.entryType === 'largest-contentful-paint') {;
            const lcp = entry && entry.startTime;
            if (lcp > 2500) { // LCP should be under 2 && 2.5s;
              console && console.warn('LCP is too slow:', lcp);
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }
          }
        }
      });
<<<<<<< HEAD


<<<<<<< HEAD
      observer.observe({ entryTypes: ['largest-contentful-paint'] }),
;
      observer.observe ({ entry_types: ['largest - contentful - paint'] });
;
      return () => {
        window.removeEventListener ('load', measure_performance);
        observer.disconnect ();
      }    }
      observer.observe ({ entry_types: ['largest - contentful - paint'] }),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return () => {
        window.removeEventListener ('load', measure_performance);
        observer.disconnect ();
      }
<<<<<<< HEAD
=======

    }

  }, [measurePerformance]);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, [measurePerformance]);



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const getPerformanceScore = (): number => {
    let score = 100;

    

<<<<<<< HEAD
    }
  }, [measurePerformance]);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      return () => {
        window.removeEventListener('load', measurePerformance);
        observer.disconnect();
      };    }
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      return () => {
        window.removeEventListener('load', measurePerformance);
        observer.disconnect()
      }
  }, [measurePerformance]);

  const getPerformanceScore = (): number => {
    let score = 100;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (metrics.firstContentfulPaint > 1800) score -= 20;
    if (metrics.largestContentfulPaint > 2500) score -= 25;
    if (metrics.loadTime > 3000) score -= 15;
    if (metrics.timeToInteractive > 3500) score -= 20;
<<<<<<< HEAD
<<<<<<< HEAD
    
    return Math.max(0, score)

    return Math.max(0, score)
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



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
    
    return Math.max(0, score)

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  };
  const getPerformanceGrade = (score: number): string => {;
=======
  };
  const getPerformanceGrade = (score: number): string => {;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return Math.max(0, score);  }
    return Math.max(0, score)
  }
  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
<<<<<<< HEAD
<<<<<<< HEAD
    return 'F';  };    return 'F'
  }
  const performanceScore = getPerformanceScore();
  const performanceGrade = getPerformanceGrade(performanceScore);
    >
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-xl font-bold text-white flex items-center gap-2'>
          <Gauge className='w-5 h-5 text-cyan-400' />          Performance Optimizer
        </h3>
        <button
          onClick={() => setShowMetrics(!showMetrics)}
          className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300'        >  return (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  };

  const performanceScore = getPerformanceScore();
  const performanceGrade = getPerformanceGrade(performanceScore);



        <button
          onClick={() => setShowMetrics(!showMetrics)}
          className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300'        >  return (
    <div className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 ${className}`}>;
      <div className="flex items-center justify-between mb-6">;
        <h3 className="text-xl font-bold text-white flex items-center gap-2">;
          <Gauge className="w-5 h-5 text-cyan-400" />;
        </h3>;
        <button
          onClick={() => setShowMetrics(!showMetrics)}

  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Gauge className="w-5 h-5 text-cyan-400" />
        </h3>
        <button
          onClick={() => setShowMetrics(!showMetrics)}
<<<<<<< HEAD
<<<<<<< HEAD
          className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300'          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
=======
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          {showMetrics ? 'Hide' : 'Show'} Metrics
        </button>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/70">Performance Score</span>
          <span className="text-2xl font-bold text-cyan-400">{performanceGrade}</span>
        </div>
<<<<<<< HEAD
        <div className="w-full bg-white/10 rounded-full h-3">
          <motion.div

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className='w-full bg-white/10 rounded-full h-3'>
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
          className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300'          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300";
        >;
          {showMetrics ? 'Hide' : 'Show'} Metrics;
        </button>;
      </div>;
      {/* Performance Score */}

=======
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/70">Performance Score</span>
          <span className="text-2xl font-bold text-cyan-400">{performanceGrade}</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-3">
          <motion.div

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />
        </div>
        <div className="text-right mt-1">
          <span className="text-sm text-white/60">{performanceScore}/100</span>
        </div>
      </div>
<<<<<<< HEAD
=======


=======
          />
        </div>
        <div className='text-right mt-1'>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <span className='text-sm text-white/60'>{performanceScore}/100</span>        </div>

        </div>

      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Metrics Display */}
      {showMetrics && (
        <motion.div
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Metrics Display */}
      {showMetrics && (;
        <motion&& motion.div
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}


<<<<<<< HEAD
          className=&quot;grid grid-cols-2 md:grid-cols-3 gap-4 mb-6&quot;
        >
          <div className=&quot;text-center p-3 rounded-lg bg-white/5 border border-white/10&quot;>
            <Clock className=&quot;w-6 h-6 text-blue-400 mx-auto mb-2&quot; />
            <div className=&quot;text-lg font-bold text-white&quot;>{Math.round(metrics.loadTime)}ms</div>
            <div className=&quot;text-xs text-white/60&quot;>Load Time</div>
          </div>
          
          <div className=&quot;text-center p-3 rounded-lg bg-white/5 border border-white/10&quot;>
            <Activity className=&quot;w-6 h-6 text-green-400 mx-auto mb-2&quot; />
            <div className=&quot;text-lg font-bold text-white&quot;>{Math.round(metrics.firstContentfulPaint)}ms</div>
            <div className=&quot;text-xs text-white/60&quot;>FCP</div>
          </div>
          
          <div className=&quot;text-center p-3 rounded-lg bg-white/5 border border-white/10&quot;>
            <TrendingUp className=&quot;w-6 h-6 text-purple-400 mx-auto mb-2&quot; />
            <div className=&quot;text-lg font-bold text-white&quot;>{Math.round(metrics.largestContentfulPaint)}ms</div>
            <div className=&quot;text-xs text-white/60&quot;>LCP</div>
          </div>
          
          <div className=&quot;text-center p-3 rounded-lg bg-white/5 border border-white/10&quot;>
            <Cpu className=&quot;w-6 h-6 text-yellow-400 mx-auto mb-2&quot; />
            <div className=&quot;text-lg font-bold text-white&quot;>{Math.round(metrics.timeToInteractive)}ms</div>
            <div className=&quot;text-xs text-white/60&quot;>TTI</div>
          </div>
          
          <div className=&quot;text-center p-3 rounded-lg bg-white/5 border border-white/10&quot;>
            <Database className=&quot;w-6 h-6 text-orange-400 mx-auto mb-2&quot; />
            <div className=&quot;text-lg font-bold text-white&quot;>{metrics.cumulativeLayoutShift.toFixed(3)}</div>
            <div className=&quot;text-xs text-white/60&quot;>CLS</div>
          </div>
          
          <div className=&quot;text-center p-3 rounded-lg bg-white/5 border border-white/10&quot;>
            <Network className=&quot;w-6 h-6 text-red-400 mx-auto mb-2&quot; />
            <div className=&quot;text-lg font-bold text-white&quot;>{Math.round(metrics.firstInputDelay)}ms</div>
            <div className=&quot;text-xs text-white/60&quot;>FID</div>
          </div>
        </motion.div>
      )}

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6'


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
          </div>
        </motion.div>
      )}
        </motion.div>
      )}
      {/* Optimization Controls */}
      <div className='space-y-3'>        <button      <div className="space-y-3">
        <button

      {/* Optimization Controls */}
      <div className='space-y-3'>        <button      <div className="space-y-3">
        <button
      <div className='space-y-3'>        <button

        <button

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        <button


      {/* Optimization Controls */}

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        <button
=======


      {/* Optimization Controls */}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          onClick={runAllOptimizations}
          disabled={isOptimizing}
          className={`w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
            isOptimizing
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-105'

<<<<<<< HEAD
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
              <Zap className='w-4 h-4' />              <Zap className="w-4 h-4" />
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      preloadImages && preloadImages.forEach(image => {;
addResourceHint(image, 'image');
'      });';
      preloadFonts && preloadFonts.forEach(font => {;
        addResourceHint(font, 'style');
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
'      });'    }}, [preloadImages, preloadFonts]);
  return (
    <Head>;
      {/* Critical CSS inlined for above-the-fold content */}
      {criticalCSS && (;
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Preload critical resources */}
      {preloadImages && preloadImages.map((image, index) => (;
        <link
key={`preload-image-${index}}          rel="preload""          as="image""          href={image}"        />))}
      {preloadFonts && preloadFonts.map((font, index) => (;
        <link
key={`preload-font-${index}`}          rel="preload""          as="style""          href={font}"          onLoad={() => {;
            const link = document && document.querySelector(link[href="${font}"]`);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
"            if (link) {"              (link as HTMLLinkElement).rel = 'stylesheet;
}'          }}`        />;
      ))}
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />"      "      {/* Service Worker registration */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <script
        dangerouslySetInnerHTML={{
          __html:             if ('serviceWorker' in navigator) {'              window && window.addEventListener('load', function() {'                navigator && navigator.serviceWorker.register('/sw && sw.js')'                  .then(function(registration) {'                    console && console.log('SW registered: ', registration)
'                  })'                  .catch(function(registrationError) {
                    console && console.log('SW registration failed: ', registrationError)'                  })'              })
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
          ``        }}/>;
    </Head>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
  );
      {/* Performance Tips */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <h4 className="text-sm font-semibold text-white/80 mb-3">Performance Tips</h4>
        <ul className="text-xs text-white/60 space-y-1">
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        )}
      </div>

      {/* Performance Tips */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="mt-6 pt-4 border-t border-white/10">
        <h4 className="text-sm font-semibold text-white/80 mb-3">Performance Tips</h4>
        <ul className="text-xs text-white/60 space-y-1">
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        )}
      </div>



      {/* Performance Tips */}
      <div className='mt-6 pt-4 border-t border-white/10'>
        <h4 className='text-sm font-semibold text-white/80 mb-3'>
          Performance Tips
        </h4>
<<<<<<< HEAD

        <ul className='text-xs text-white/60 space-y-1'>          <li>• Use WebP images for better compression</li>


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <ul className='text-xs text-white/60 space-y-1'>          <li>• Use WebP images for better compression</li>      <div className="mt-6 pt-4 border-t border-white/10">
        <h4 className="text-sm font-semibold text-white/80 mb-3">Performance Tips</h4>
        <ul className="text-xs text-white/60 space-y-1">
        <ul className='text-xs text-white/60 space-y-1'>          <li>• Use WebP images for better compression</li>

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <li>• Use WebP images for better compression</li>
          <li>• Implement lazy loading for images</li>
          <li>• Minimize CSS and JavaScript bundles</li>
          <li>• Use CDN for static assets</li>
          <li>• Enable gzip compression</li>
        </ul>
      </div>
    </div>

<<<<<<< HEAD
<<<<<<< HEAD
  )
};
export default PerformanceOptimizer;
interface PerformanceMetrics {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  );
};export default PerformanceOptimizer;}
      // Preload critical resources;
      preload_images.for_each (image => {
addResourceHint (image, 'image');
'      });';
      preload_fonts.for_each (font => {
        addResourceHint (font, 'style');
'      });'    }}, [preload_images, preload_fonts]);
  return (
    <Head>;
=======
=======
  );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Critical CSS inlined for above-the-fold content */}
      {criticalCSS && (;
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />;
      )}

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface PerformanceOptimizerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enable_reporting?: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      measureWebVitals();
    } else {;
      window && window.addEventListener('load', measureWebVitals);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return () => {;
      window && window.removeEventListener('load', measureWebVitals);
    };
  }, [measureWebVitals]);
  // Monitor for performance issues;
  useEffect(() => {;
<<<<<<< HEAD
<<<<<<< HEAD
    if (!metrics) return;
    const warnings: string[] = [];
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    if (!metrics) return;
    const warnings: string[] = [];


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (metrics && metrics.fcp > 1800) warnings && warnings.push('First Contentful Paint is slow (>1 && 1.8s)');
    if (metrics && metrics.lcp > 2500) warnings && warnings.push('Largest Contentful Paint is slow (>2 && 2.5s)');
    if (metrics && metrics.ttfb > 600) warnings && warnings.push('Time to First Byte is slow (>600ms)');
    if (metrics && metrics.memory) {;
      const memoryUsage = (metrics && metrics.memory.used / metrics && metrics.memory.limit) * 100;
      if (memoryUsage > 80) warnings && warnings.push('High memory usage detected');
    }
    if (warnings && warnings.length > 0 && enableReporting) {;
      console && console.warn('Performance Issues Detected:', warnings);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  }, [metrics, enableReporting]);
  return null;
}
export default PerformanceOptimizer;
<<<<<<< HEAD
=======

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
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );



<<<<<<< HEAD
=======

    }
  }, [metrics, enableReporting]);
  return null;

}

export default PerformanceOptimizer;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

};export default PerformanceOptimizer;

export default PerformanceOptimizer;
<<<<<<< HEAD
export default PerformanceOptimizer;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
