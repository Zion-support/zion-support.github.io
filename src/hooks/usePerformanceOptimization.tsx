:src/hooks/usePerformanceOptimization.tsx

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number
}

interface UsePerformanceOptimizationOptions {
  enableLazyLoading?: boolean;
  enableIntersectionObserver?: boolean;
  enableMemoryManagement?: boolean;
  enableFPSMonitoring?: boolean;
:src/hooks/usePerformanceOptimization.tsx
  threshold?: number
}
;
export 
  threshold?: number}

export const {;
    enableLazyLoading = true,;
    enableIntersectionObserver = true,;
    enableMemoryManagement = true,;
    enableFPSMonitoring = true,;
:src/hooks/usePerformanceOptimization.tsx
    threshold = 0.1} = options;
;
    threshold = 0.1} = options;

const metricsRef:  useRef<PerformanceMetrics>({;
    loadTime: 0,;
    renderTime: 0,;
    memoryUsage: 0,;
    fps: 0});

  
  
  
  // Measure initial load time
  useEffect(() => {

    if (typeof window !== 'null') {
:src/hooks/usePerformanceOptimization.tsx

      
      metricsRef.current.loadTime = loadTime;

      // Report to analytics if available
      if (window.gtag) {

        window.gtag('event',performance_metric', {

          event_category: 'performance',
          event_label: 'load_time',
          value: Math.round(loadTime)
        })}
    }
  }, []);

  // FPS monitoring
  useEffect(() => {
    if (!enableFPSMonitoring) return;

    let animationFrameId: number;

:src/hooks/usePerformanceOptimization.tsx
    
      
      frameCountRef.current++;

      if (currentTime - lastTimeRef.current >= 1000) {

        
      frameCountRef.current++;

      if (currentTime - lastTimeRef.current >= 1000) {
        
        metricsRef.current.fps = fps;

        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;

        // Log low FPS for debugging
        if (fps < 30) {
:src/hooks/usePerformanceOptimization.tsx

          // // // // // // // // console.warn(`Low FPS detected: ${fps}`)}`
          // console.warn(`Low FPS detected: ${fps}`)}
          // // // // // // // console.warn(`Low FPS detected: ${fps}`)}
          console.warn(`Low FPS detected: ${fps}`)}
      }

      animationFrameId = requestAnimationFrame(measureFPS)};

    animationFrameId = requestAnimationFrame(measureFPS);

    return : unknown {
      if (animationFrameId) {

        cancelAnimationFrame(animationFrameId)}
    }}, [enableFPSMonitoring]);

  // Memory management
  useEffect(: unknown {
    if (!enableMemoryManagement) return;

<<<<<<< HEAD
    
=======
:src/hooks/usePerformanceOptimization.tsx
    const checkMemoryUsage = () => {;'
    
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
      if ('memory' in performance) {;
        
        metricsRef.current.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB

        // Warn if memory usage is high
:src/hooks/usePerformanceOptimization.tsx
        if (memory.usedJSHeapSize > 100 * 1024 * 1024) { // 100MB'
          // // // // // // // // console.warn('High memory usage detected:', metricsRef.current.memoryUsage.toFixed(2),MB')}
          // console.warn('High memory usage detected:', metricsRef.current.memoryUsage.toFixed(2),MB')}
      }
    };

    
    return : unknown clearInterval(intervalId)}, [enableMemoryManagement]);
        if (memory.usedJSHeapSize > 100 * 1024 * 1024) { // 100MB
          // // // // // // // console.warn('High memory usage detected:', metricsRef.current.memoryUsage.toFixed(2), 'MB')}
          console.warn('High memory usage detected:', metricsRef.current.memoryUsage.toFixed(2), 'MB')}
      }
    };

    
    return () => clearInterval(intervalId)}, [enableMemoryManagement]);

  // Intersection Observer for lazy loading
      return}

    if (observerRef.current) {

      observerRef.current.disconnect()}

    observerRef.current = createIntersectionObserver(entries: unknown {;
      entries.forEach(entry: unknown {;
        if (entry.isIntersecting) {;
          callback();
          if (observerRef.current) {

            observerRef.current.unobserve(entry.target)}
        }
      })});

    if (observerRef.current) {

      observerRef.current.observe(element)}
  }, [enableLazyLoading, createIntersectionObserver]);

:src/hooks/usePerformanceOptimization.tsx
  // Performance monitoring'`
        // // // // // // // // console.warn(`Slow render detected in ${componentName}:`, renderTime.toFixed(2),ms')}'`
<<<<<<< HEAD
        // console.warn(`Slow render detected in ${componentName}:`, renderTime.toFixed(2),ms')}
=======
        // console.warn(`Slow render detected in ${componentName}:`, renderTime.toFixed(2), 'ms')}
  // Performance monitoring
        // // // // // // // console.warn(`Slow render detected in ${componentName}:`, renderTime.toFixed(2), 'ms')}
        console.warn(`Slow render detected in ${componentName}:`, renderTime.toFixed(2), 'ms')}
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

      // Report to analytics if available
      if (window.gtag) {

        window.gtag('event',performance_metric', {

          event_category: 'performance',
          event_label: 'render_time',
          value: Math.round(renderTime)
        })}
    }}, []);

  // Debounced function utility
    
    return (...args: Parameters<T>)  => {

      clearTimeout(timeoutId);
      timeoutId = setTimeout(: unknown func(...args), delay)}}, []);

  // Throttled function utility
    
    return (...args: Parameters<T>)  => {
:src/hooks/usePerformanceOptimization.tsx

      
      if (now - lastCall >= delay) {

        lastCall = now;
        func(...args)}
    }}, []);

  // Cleanup function
    }
  }, []);

  // Get current metrics
:src/hooks/usePerformanceOptimization.tsx
  
  // Memoized performance data
  
  // Memoized performance data
  
    metrics: getMetrics(),;
    isLowFPS: metricsRef.current.fps < 30,;
    isHighMemory: metricsRef.current.memoryUsage > 100,;
    isSlowRender: metricsRef.current.renderTime > 16}), [getMetrics]);

  // Cleanup on unmount
  useEffect(() => {
    return cleanup}, [cleanup]);

  return {

    lazyLoad,
    measureRenderTime,
    debounce,
    throttle,
    createIntersectionObserver,
    getMetrics,
    performanceData,
    cleanup
  }};

// Type declaration for gtag
declare global {

  interface Window {
    gtag?: (...args[])  => void}
}
'`