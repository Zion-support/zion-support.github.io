<<<<<<< HEAD
'use client';
import React, {useEffect, useState, useCallback}from 'react';
interface PerformanceOptimizerProps {children: React.ReactNode,}
  enableOptimizations?: boolean;}const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({,
  children,
  enableOptimizations = true;}) => {const [isOptimized, setIsOptimized] = useState(false);
  const [optimizationMetrics, setOptimizationMetrics] = useState({)
    imagesOptimized: 0,
    scriptsOptimized: 0,
    cssOptimized: 0,
<<<<<<< HEAD
    totalSavings: 0;,})
  const optimizeImages = useCallback(() => {if (typeof window === 'undefined') return;
=======
    totalSavings: 0
  })
  const optimizeImages = useCallback(() => {;
    if (typeof window === 'undefined') return;
>>>>>>> origin/main
    const images = document.querySelectorAll('img');
    let optimizedCount = 0;
=======
'use client'
import React, { useEffect, useState, useCallback } from 'react'
interface PerformanceOptimizerProps {
    children: React.ReactNode,
  enableOptimizations?: boolean
  }
const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ()
}) => {
  const [isOptimized, setIsOptimized] = useState(false)
  const [optimizationMetrics, setOptimizationMetrics] = useState()
  })
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return
    const images = document.querySelectorAll('img')
    let optimizedCount = 0
>>>>>>> origin/main
    images.forEach((img) => {
      // Add lazy loading if not already present;
      if (!img.hasAttribute('loading')) {
<<<<<<< HEAD
        img.setAttribute('loading', 'lazy');
        optimizedCount++}// Add decoding attribute for better performance;
      if (!img.hasAttribute('decoding')) {img.setAttribute('decoding', 'async');
        optimizedCount++}})
    return optimizedCount;
  }, []);
<<<<<<< HEAD
  const optimizeScripts = useCallback(() => {if (typeof window === 'undefined') return;
=======
  const optimizeScripts = useCallback(() => {;
    if (typeof window === 'undefined') return;
>>>>>>> origin/main
    const scripts = document.querySelectorAll('script[src]');
    let optimizedCount = 0;
=======
        img.setAttribute('loading', 'lazy')
        optimizedCount++
  }
      // Add decoding attribute for better performance
      if (!img.hasAttribute('decoding')) {
    img.setAttribute('decoding', 'async')
        optimizedCount++
  }
    })
    return optimizedCount
  }, [])
  const optimizeScripts = useCallback(() => {
    if (typeof window === 'undefined') return
    const scripts = document.querySelectorAll('script[src]')
    let optimizedCount = 0
>>>>>>> origin/main
    scripts.forEach((script) => {
      // Add defer attribute if not already present;
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
<<<<<<< HEAD
        script.setAttribute('defer', '');
        optimizedCount++}})
    return optimizedCount;
  }, []);
<<<<<<< HEAD
  const optimizeCSS = useCallback(() => {if (typeof window === 'undefined') return;
=======
  const optimizeCSS = useCallback(() => {;
    if (typeof window === 'undefined') return;
>>>>>>> origin/main
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    let optimizedCount = 0;
=======
        script.setAttribute('defer', '')
        optimizedCount++
  }
    })
    return optimizedCount
  }, [])
  const optimizeCSS = useCallback(() => {
    if (typeof window === 'undefined') return
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
    let optimizedCount = 0
>>>>>>> origin/main
    stylesheets.forEach((link) => {
      // Add media attribute for non-critical CSS;
      if (!link.hasAttribute('media') && !link.hasAttribute('data-critical')) {
<<<<<<< HEAD
        link.setAttribute('media', 'print');
        link.setAttribute('onload', "this.media='all'");
        optimizedCount++}})
    return optimizedCount;
  }, []);
<<<<<<< HEAD
  const runOptimizations = useCallback(() => {if (!enableOptimizations) return;
=======
  const runOptimizations = useCallback(() => {;
    if (!enableOptimizations) return;
>>>>>>> origin/main
    const imagesOptimized = optimizeImages();
    const scriptsOptimized = optimizeScripts();
    const cssOptimized = optimizeCSS();
    setOptimizationMetrics({)
      imagesOptimized,
      scriptsOptimized,
      cssOptimized,
      totalSavings: imagesOptimized + scriptsOptimized + cssOptimized;,})
    setIsOptimized(true);
  }, [enableOptimizations, optimizeImages, optimizeScripts, optimizeCSS]);
  useEffect(() => {// Run optimizations after component mount;
    const timer = setTimeout(runOptimizations, 100);
<<<<<<< HEAD
    return () => clearTimeout(timer)}, [runOptimizations]);
  // Add performance monitoring;
  useEffect(() => {if (typeof window === 'undefined') return;
    const observer = new PerformanceObserver((list) => {
=======
=======
        link.setAttribute('media', 'print')
        link.setAttribute('onload', "this.media='all'")
        optimizedCount++
  }
    })
    return optimizedCount
  }, [])
  const runOptimizations = useCallback(() => {
    if (!enableOptimizations) return
    const imagesOptimized = optimizeImages()
    const scriptsOptimized = optimizeScripts()
    const cssOptimized = optimizeCSS()
    setOptimizationMetrics()
    })
    setIsOptimized(true)
  }, [enableOptimizations, optimizeImages, optimizeScripts, optimizeCSS])
  useEffect(() => {
    // Run optimizations after component mount
    const timer = setTimeout(runOptimizations, 100)
>>>>>>> origin/main
    return () => clearTimeout(timer)
  }, [runOptimizations])
  // Add performance monitoring
  useEffect(() => {
<<<<<<< HEAD
    if (typeof window === 'undefined') return;
    const observer = new PerformanceObserver((list) => {;
>>>>>>> origin/main
      const entries = list.getEntries();
=======
    if (typeof window === 'undefined') return
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
>>>>>>> origin/main
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming
          if (navEntry.loadEventEnd - navEntry.loadEventStart > 1000) {
            console.warn('Page load time exceeded 1 second')}}
      })
    })
<<<<<<< HEAD
    observer.observe({entryTypes: ['navigation', 'paint', 'largest-contentful-paint'])})
    return () => observer.disconnect();
  }, []);
<<<<<<< HEAD
  return(<div className="performance-optimized" data-optimized={isOptimized)}>{children</div>}{process.env.NODE_ENV === 'development' && (
=======
  return (
    <div className="performance-optimized" data-optimized={isOptimized}>
      {children},
    {process.env.NODE_ENV === 'development' && (
>>>>>>> origin/main
        <div className="optimization-debug" style={{
=======
    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })
    return () => observer.disconnect()
  }, [])
  return (
    </PerformanceOptimizerProps><div className="performance-optimized" data-optimized={isOptimized}>
      {children}
      {process.env.NODE_ENV === 'development' && (
        </div>< className="optimization-debug" style={{$2 />
>>>>>>> origin/main
          position: 'fixed',
          bottom: '10px',
          right: '10px',
  return ()
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
<<<<<<< HEAD
          zIndex: 1000;,}}>
          <div>Images: {optimizationMetrics.imagesOptimized,</div>}</div>
          <div>Scripts: {optimizationMetrics.scriptsOptimized,</div>}</div>
          <div>CSS: {optimizationMetrics.cssOptimized,</div>}</div>
          <div>Total: {optimizationMetrics.totalSavings,</div>}</div>
        </div>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default AdvancedPerformanceOptimizer;
  </PerformanceOptimizerProps>
=======
export default AdvancedPerformanceOptimizer
  </PerformanceOptimizerProps>
>>>>>>> origin/main
=======
          zIndex: 1000
        }}>
          </div><div>Images: {optimizationMetrics.imagesOptimized}</div>
          <div>Scripts: {optimizationMetrics.scriptsOptimized}</div>
          <div>CSS: {optimizationMetrics.cssOptimized}</div>
          <div>Total: {optimizationMetrics.totalSavings}</div>
        </div>
      )}
    </div>
  )
}
export default AdvancedPerformanceOptimizer
  </PerformanceOptimizerProps>
          <div>Images: {optimizationMetrics.imagesOptimized}
          <div>Scripts: {optimizationMetrics.scriptsOptimized}
          <div>CSS: {optimizationMetrics.cssOptimized}
          <div>Total: {optimizationMetrics.totalSavings}
      )}
  )
}
export default AdvancedPerformanceOptimizer</div></div></div></div></div>
>>>>>>> origin/main
