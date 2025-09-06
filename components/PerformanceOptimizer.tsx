
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
<<<<<<< HEAD
import {
  Zap
  Clock
  TrendingUp
  Activity
  Gauge
  Cpu
  Database
  Network;
=======
import {;
  Zap,;
  Clock,;
  TrendingUp,;
  Activity,;
  Gauge,;
  Cpu,;
  Database,;
  Network,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from 'lucide-react';

interface PerformanceMetrics {;
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;

  timeToInteractive: number;
}, []);
<<<<<<< HEAD
//Optimize images for (const img of Array.from (images) ) {
  if (img.complete && img.naturalWidth > 0) {
  //Add lazy loading img.loading = 'lazy';
//Add responsive sizes if not present if (!img.sizes) {
  optimizedCount++
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  className = ''
}) => {  const [metrics, setMetrics] = useState<PerformanceMetrics>({
=======
import { Zap, Clock, TrendingUp, Activity, Gauge, Cpu, Database, Network } from 'lucide-react';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number

  timeToInteractive: number
}
interface PerformanceOptimizerProps {
  className?: string
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
<<<<<<< HEAD
    loadTime: 0
    firstContentfulPaint: 0
    largestContentfulPaint: 0
    cumulativeLayoutShift: 0
    firstInputDelay: 0
    timeToInteractive: 0,  });    timeToInteractive: 0
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  });
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string>('idle');
  const [showMetrics, setShowMetrics] = useState(false);
<<<<<<< HEAD
  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
<<<<<<< HEAD
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
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart
        firstContentfulPaint: fcp ? fcp.startTime : 0
        largestContentfulPaint: lcp ? lcp.startTime : 0
        cumulativeLayoutShift: 0, // Would need to be measured with CLS API
        firstInputDelay: 0, // Would need to be measured with FID API
<<<<<<< HEAD
        timeToInteractive:
          navigation.domContentLoadedEventEnd - navigation.navigationStart
      }
      setMetrics(newMetrics);    }        timeToInteractive: navigation.domContentLoadedEventEnd - navigation.navigationStart
      }
      setMetrics(newMetrics)
=======
        timeToInteractive: navigation.domContentLoadedEventEnd - navigation.navigationStart
      };

      setMetrics(newMetrics)
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
            img.sizes =
=======

  // Measure performance metrics;
  const measurePerformance = useCallback(() => {;
    if (typeof window !== 'undefined' && 'performance' in window) {;
      const navigation = performance && performance.getEntriesByType(;
        'navigation';
      )[0] as PerformanceNavigationTiming;
      const paintEntries = performance && performance.getEntriesByType('paint');      const paintEntries = performance && performance.getEntriesByType('paint');

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
=======
          
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  }, []);

  // Optimize images;
  const optimizeImages = useCallback(async () => {;
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing images...');

    try {;
      const images = document && document.querySelectorAll('img');
      let optimizedCount = 0;

      for (const img of Array && Array.from(images)) {;
        if (img && img.complete && img && img.naturalWidth > 0) {;
          // Add lazy loading;
          img && img.loading = 'lazy';

          // Add responsive sizes if not present;
          if (!img && img.sizes) {;
            img && img.sizes =;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
          }
          optimizedCount++;        }
      }
      setOptimizationStatus(`Optimized ${optimizedCount} images`);
          // Add responsive sizes if not present;
          if (!img && img.sizes) {;
            img && img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
          }
<<<<<<< HEAD
          optimizedCount++
=======

          optimizedCount++;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }
      }
      setOptimizationStatus(`Optimized ${optimizedCount} images`);
<<<<<<< HEAD
      // Simulate optimization delay
=======

      // Simulate optimization delay;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOptimizationStatus('Image optimization complete');
    } catch (error) {;
      setOptimizationStatus('Image optimization failed');
      console && console.error('Image optimization error:', error);
    } finally {;
      setIsOptimizing(false);    }      // Simulate optimization delay;
      await new Promise(resolve => setTimeout(resolve, 1000));
<<<<<<< HEAD
      setOptimizationStatus('Image optimization complete')
    } catch (error) {
=======

      setOptimizationStatus('Image optimization complete');
    } catch (error) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setOptimizationStatus('Image optimization failed');
      console && console.error('Image optimization error:', error);
    } finally {;
      setIsOptimizing(false);
    }
  }, []);
<<<<<<< HEAD
  // Optimize fonts
  const optimizeFonts = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing fonts...');
    try {
      // Add font-display: swap to improve font loading
      const style = document.createElement('style')
      style.textContent = `
        @font-face {
<<<<<<< HEAD
=======

  // Optimize fonts;
  const optimizeFonts = useCallback(async () => {;
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing fonts...');

    try {;
      // Add font-display: swap to improve font loading;
      const style = document && document.createElement('style'),;
      style && style.textContent = `;
        @font-face {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          font-family: 'Inter';
          font-display: swap;
        }
        @font-face {;
          font-family: 'JetBrains Mono';        }
<<<<<<< HEAD
        @font-face {
          font-family: 'JetBrains Mono'
          font-display: swap
=======
        @font-face {;
          font-family: 'JetBrains Mono',;
          font-display: swap;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }
        @font-face {;
          font-family: 'Orbitron';
          font-display: swap;
=======
          font-family: 'Inter',
          font-display: swap
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        }
        @font-face {;
          font-family: 'Orbitron';
<<<<<<< HEAD
          font-display: swap;        }          font-family: 'Orbitron'
          font-display: swap
        }
<<<<<<< HEAD
=======
        @font-face {
          font-family: 'Orbitron',
          font-display: swap
        }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      `;
      document.head.appendChild(style);
      setOptimizationStatus('Font optimization complete');
      // Simulate optimization delay
=======
          font-display: swap;        }          font-family: 'Orbitron',;
          font-display: swap;
        }
      `;
      document && document.head.appendChild(style);

      setOptimizationStatus('Font optimization complete');
<<<<<<< HEAD

      // Simulate optimization delay;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
      
      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 800))
    } catch (error) {
      setOptimizationStatus('Font optimization failed');
      console.error('Font optimization error:', error)
    } finally {
      setIsOptimizing(false)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
  }, []);
<<<<<<< HEAD
  // Optimize CSS and JavaScript
  const optimizeCode = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing code...');
    try {
      // Add resource hints for critical resources
      const preloadLinks = [
<<<<<<< HEAD
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
=======
        { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', href: '/fonts/jetbrains-mono-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      ];

      preloadLinks && preloadLinks.forEach(linkAttrs => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import React, { useEffect } from 'react;
import Head from 'next/head;
interface PerformanceOptimizerProps {preloadImages?: string[];
  preloadFonts?: string[];
  criticalCSS?: string;
}
<<<<<<< HEAD
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
preloadImages = [], preloadFonts = [;
    'https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap;
  ], criticalCSS'}) => {useEffect(() => {
=======

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({;
preloadImages = [], preloadFonts = [;
    'https: //fonts && fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap;
  ], criticalCSS'}) => {;
  useEffect(() => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // Performance monitoring;
    if (typeof window !== 'undefined' && 'performance' in window) {'      // Monitor Core Web Vitals'      const observer = new PerformanceObserver((list) => {;
        for (const entry of list && list.getEntries()) {;
if (entry && entry.entryType === 'largest-contentful-paint') {'            console && console.log('LCP: ', entry && entry.startTime);
'          }'          if (entry && entry.entryType === 'first-input') {'            console && console.log('FID: ', entry && entry.processingStart - entry && entry.startTime);'          }'          if (entry && entry.entryType === 'layout-shift') {'            if (!(entry as any).hadRecentInput) {'              console && console.log('CLS: ', (entry as any).value);'            }'          }}
      });
<<<<<<< HEAD
      try {observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
=======
      try {;
        observer && observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
'      } catch (e) {'        // Fallback for browsers that don&apos;t support all entry types;
        console && console.log('Performance monitoring not fully supported');
'      }';
      // Resource hints for better performance;
<<<<<<< HEAD
      const addResourceHint = (href: string, as: string, type?: string) => {const link = document.createElement('link');
        Object.entries(linkAttrs).forEach(([key, value]) => {
          if (key === 'crossorigin') {
<<<<<<< HEAD
            link.setAttribute(key, value as string);
          } else {
=======
      const addResourceHint = (href: string, as: string, type?: string) => {;
        const link = document && document.createElement('link');
        Object && Object.entries(linkAttrs).forEach(([key, value]) => {;
          if (key === 'crossorigin') {;
            link && link.setAttribute(key, value as string);
          } else {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            (link as any)[key] = value;
          }
        });
        document && document.head.appendChild(link);
      });
      setOptimizationStatus('Code optimization complete');
<<<<<<< HEAD
      // Simulate optimization delay
=======
=======
            link.setAttribute(key, value as string)
          } else {
            (link as any)[key] = value
          }
        });
        document.head.appendChild(link)
      });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

      // Simulate optimization delay;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      await new Promise(resolve => setTimeout(resolve, 1200));
    } catch (error) {;
      setOptimizationStatus('Code optimization failed');
<<<<<<< HEAD
      console && console.error('Code optimization error:', error);
    } finally {;
      setIsOptimizing(false);    }      setIsOptimizing(false);
=======
      console.error('Code optimization error:', error)
    } finally {
      setIsOptimizing(false)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
  }, []);
<<<<<<< HEAD
  // Run all optimizations
  const runAllOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus('Starting comprehensive optimization...');
    try {
=======

  // Run all optimizations;
  const runAllOptimizations = useCallback(async () => {;
    setIsOptimizing(true);
    setOptimizationStatus('Starting comprehensive optimization...');

    try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      await optimizeImages();
      await optimizeFonts();
      await optimizeCode();
<<<<<<< HEAD
      setOptimizationStatus('All optimizations complete!');
<<<<<<< HEAD
      // Re-measure performance after optimization
      setTimeout(() => {
=======

      // Re-measure performance after optimization;
      setTimeout(() => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        measurePerformance();
      }, 500);
    } catch (error) {;
      setOptimizationStatus('Optimization failed');
      console && console.error('Optimization error:', error);
    } finally {;
      setIsOptimizing(false);    }      setOptimizationStatus('All optimizations complete!');
<<<<<<< HEAD
=======
      
      setOptimizationStatus('All optimizations complete!');
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      // Re-measure performance after optimization
      setTimeout(() => {
        measurePerformance()
      }, 500)
    } catch (error) {
=======

      // Re-measure performance after optimization;
      setTimeout(() => {;
        measurePerformance();
      }, 500);

    } catch (error) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setOptimizationStatus('Optimization failed');
<<<<<<< HEAD
      console && console.error('Optimization error:', error);
    } finally {;
      setIsOptimizing(false);
=======
      console.error('Optimization error:', error)
    } finally {
      setIsOptimizing(false)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
  }, [optimizeImages, optimizeFonts, optimizeCode, measurePerformance]);
<<<<<<< HEAD
  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Measure initial performance
      window.addEventListener('load', measurePerformance);
<<<<<<< HEAD
      // Monitor for performance issues
      const observer = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            if (lcp > 2500) {
              // LCP should be under 2.5s
              console.warn('LCP is too slow:', lcp);            }
=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          }
        }
      });      // Monitor for performance issues;
      const observer = new PerformanceObserver((list) => {;
        for (const entry of list && list.getEntries()) {;
          if (entry && entry.entryType === 'largest-contentful-paint') {;
            const lcp = entry && entry.startTime;
            if (lcp > 2500) { // LCP should be under 2 && 2.5s;
              console && console.warn('LCP is too slow:', lcp);
=======
      
      // Monitor for performance issues
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            if (lcp > 2500) { // LCP should be under 2.5s
              console.warn('LCP is too slow:', lcp)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            }
          }
        }
      });
<<<<<<< HEAD
<<<<<<< HEAD
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      return () => {
        window.removeEventListener('load', measurePerformance);
        observer.disconnect();
      };    }
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
=======
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] }),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      return () => {
        window.removeEventListener('load', measurePerformance);
        observer.disconnect()
      }
<<<<<<< HEAD
=======
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  }, [measurePerformance]);
  const getPerformanceScore = (): number => {
    let score = 100;
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    if (metrics.firstContentfulPaint > 1800) score -= 20;
    if (metrics.largestContentfulPaint > 2500) score -= 25;
    if (metrics.loadTime > 3000) score -= 15;
    if (metrics.timeToInteractive > 3500) score -= 20;
<<<<<<< HEAD
    return Math.max(0, score);  }
    return Math.max(0, score)
  }
  const getPerformanceGrade = (score: number): string => {
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
    
    return Math.max(0, score)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  };

  const getPerformanceGrade = (score: number): string => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
=======
    return 'F';  };    return 'F';
=======
    return 'F'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  };

  const performanceScore = getPerformanceScore();
  const performanceGrade = getPerformanceGrade(performanceScore);

<<<<<<< HEAD

    >;
      <div className='flex items-center justify-between mb-6'>;
        <h3 className='text-xl font-bold text-white flex items-center gap-2'>;
          <Gauge className='w-5 h-5 text-cyan-400' />          Performance Optimizer;
        </h3>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
          className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300'          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        >
          {showMetrics ? 'Hide' : 'Show'} Metrics
        </button>
      </div>
=======
          className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300'          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300";
        >;
          {showMetrics ? 'Hide' : 'Show'} Metrics;
        </button>;
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Performance Score */}
<<<<<<< HEAD
      <div className='mb-6'>;
        <div className='flex items-center justify-between mb-2'>;
          <span className='text-white/70'>Performance Score</span>;
          <span className='text-2xl font-bold text-cyan-400'>;
            {performanceGrade}
          </span>;
        </div>;
        <div className='w-full bg-white/10 rounded-full h-3'>;
          <motion&& motion.div
            className='h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full'
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />;
        </div>;
        <div className='text-right mt-1'>;
          <span className='text-sm text-white/60'>{performanceScore}/100</span>        </div>        </div>;
        <div className="w-full bg-white/10 rounded-full h-3">;
          <motion&& motion.div
=======
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/70">Performance Score</span>
          <span className="text-2xl font-bold text-cyan-400">{performanceGrade}</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-3">
          <motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            className="h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
<<<<<<< HEAD
          />
        </div>
        <div className="text-right mt-1">
          <span className="text-sm text-white/60">{performanceScore}/100</span>
        </div>
      </div>
=======
          />;
        </div>;
        <div className="text-right mt-1">;
          <span className="text-sm text-white/60">{performanceScore}/100</span>;
        </div>;
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Metrics Display */}
      {showMetrics && (;
        <motion&& motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
          className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6'
<<<<<<< HEAD
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
=======
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
          
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
            <Network className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{Math.round(metrics.firstInputDelay)}ms</div>
            <div className="text-xs text-white/60">FID</div>
<<<<<<< HEAD
        </motion.div>
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      )}
      {/* Optimization Controls */}
      <div className='space-y-3'>        <button      <div className="space-y-3">;
=======
          </div>
        </motion.div>
      )}

      {/* Optimization Controls */}
      <div className="space-y-3">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        <button
          onClick={runAllOptimizations}
          disabled={isOptimizing}
          className={`w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
            isOptimizing
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-105'
<<<<<<< HEAD
          } flex items-center justify-center gap-2`}>;
          {isOptimizing ? (;
            <>;
              <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />              <span>Optimizing...</span>;
            </>;
          ) : (;
            <>;
              <Zap className='w-4 h-4' />              <span>Run All Optimizations</span>              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />;
              <span>Optimizing...</span>;
            </>;
          ) : (;
            <>;
              <Zap className='w-4 h-4' />              <Zap className="w-4 h-4" />;
              <span>Run All Optimizations</span>;
            </>;
          )}
<<<<<<< HEAD
        </button>
        {optimizationStatus !== 'idle' && (
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <div className='text-sm text-white/80'>{optimizationStatus}</div>          </div>          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            <div className="text-sm text-white/80">{optimizationStatus}</div>
          </div>
        )}
      </div>
<<<<<<< HEAD
=======
        </button>;

        {optimizationStatus !== 'idle' && (;
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>;
            <div className='text-sm text-white/80'>{optimizationStatus}</div>          </div>          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">;
            <div className="text-sm text-white/80">{optimizationStatus}</div>;
          </div>;
        )}
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
      preloadImages.forEach(image => {addResourceHint(image, 'image');
'      });';
      preloadFonts.forEach(font => {addResourceHint(font, 'style');
=======
      preloadImages && preloadImages.forEach(image => {;
addResourceHint(image, 'image');
'      });';
      preloadFonts && preloadFonts.forEach(font => {;
        addResourceHint(font, 'style');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
'      });'    }}, [preloadImages, preloadFonts]);
  return (
    <Head>;
      {/* Critical CSS inlined for above-the-fold content */}
      {criticalCSS && (;
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />;
      )}
<<<<<<< HEAD
{/* Preload critical resources */}
      {preloadImages.map((image, index) => (;
        <link;
key={`preload-image-${index}}          rel="preload""          as="image""          href={image}"        />))}
      {preloadFonts.map((font, index) => (;
        <link;
key={`preload-font-${index}`}          rel="preload""          as="style""          href={font}"          onLoad={() => {const link = document.querySelector(link[href="${font}"]`);
=======

      {/* Preload critical resources */}
      {preloadImages && preloadImages.map((image, index) => (;
        <link
key={`preload-image-${index}}          rel="preload""          as="image""          href={image}"        />))}

      {preloadFonts && preloadFonts.map((font, index) => (;
        <link
key={`preload-font-${index}`}          rel="preload""          as="style""          href={font}"          onLoad={() => {;
            const link = document && document.querySelector(link[href="${font}"]`);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
"            if (link) {"              (link as HTMLLinkElement).rel = 'stylesheet;
}'          }}`        />;
      ))}
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />"      "      {/* Service Worker registration */}
<<<<<<< HEAD
      <script;
        dangerouslySetInnerHTML={{__html:             if ('serviceWorker' in navigator) {'              window.addEventListener('load', function() {'                navigator.serviceWorker.register('/sw.js')'                  .then(function(registration) {'                    console.log('SW registered: ', registration);
'                  })'                  .catch(function(registrationError) {console.log('SW registration failed: ', registrationError);'                  });'              });
=======
      <script
        dangerouslySetInnerHTML={{
          __html:             if ('serviceWorker' in navigator) {'              window && window.addEventListener('load', function() {'                navigator && navigator.serviceWorker.register('/sw && sw.js')'                  .then(function(registration) {'                    console && console.log('SW registered: ', registration)
'                  })'                  .catch(function(registrationError) {
                    console && console.log('SW registration failed: ', registrationError)'                  })'              })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
          ``        }}/>;
    </Head>;
  );
<<<<<<< HEAD
}
  )
}
export default PerformanceOptimizer;
interface PerformanceMetrics {
=======
};
  );
=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
};

export default PerformanceOptimizer;

interface PerformanceMetrics {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      measureWebVitals();
    } else {;
      window && window.addEventListener('load', measureWebVitals);
    }
<<<<<<< HEAD
    return () => {
      window.removeEventListener('load', measureWebVitals);
    }
  }, [measureWebVitals]);
  // Monitor for performance issues
  useEffect(() => {
=======

    return () => {;
      window && window.removeEventListener('load', measureWebVitals);
    };
  }, [measureWebVitals]);

  // Monitor for performance issues;
  useEffect(() => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (!metrics) return;
    const warnings: string[] = [];
<<<<<<< HEAD
    if (metrics.fcp > 1800) warnings.push('First Contentful Paint is slow (>1.8s)');
    if (metrics.lcp > 2500) warnings.push('Largest Contentful Paint is slow (>2.5s)');
    if (metrics.ttfb > 600) warnings.push('Time to First Byte is slow (>600ms)');
    if (metrics.memory) {
      const memoryUsage = (metrics.memory.used / metrics.memory.limit) * 100;
      if (memoryUsage > 80) warnings.push('High memory usage detected');
    }
    if (warnings.length > 0 && enableReporting) {
      console.warn('Performance Issues Detected:', warnings);
=======

    if (metrics && metrics.fcp > 1800) warnings && warnings.push('First Contentful Paint is slow (>1 && 1.8s)');
    if (metrics && metrics.lcp > 2500) warnings && warnings.push('Largest Contentful Paint is slow (>2 && 2.5s)');
    if (metrics && metrics.ttfb > 600) warnings && warnings.push('Time to First Byte is slow (>600ms)');

    if (metrics && metrics.memory) {;
      const memoryUsage = (metrics && metrics.memory.used / metrics && metrics.memory.limit) * 100;
      if (memoryUsage > 80) warnings && warnings.push('High memory usage detected');
    }

    if (warnings && warnings.length > 0 && enableReporting) {;
      console && console.warn('Performance Issues Detected:', warnings);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }, [metrics, enableReporting]);
  return null;
}
export default PerformanceOptimizer;

