'use client';
 origin/cursor/analyze-improve-and-deploy-application-0fac;
 origin/cursor/analyze-improve-and-deploy-application-0fdb
;
interface PerformanceOptimizerProps {
  children: React.ReactNode;
 origin/cursor/analyze-improve-and-deploy-application-0e37;
}
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
const [isOptimized, setIsOptimized] = useState(false);
 origin/cursor/analyze-improve-and-deploy-application-1247;
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
 origin/cursor/analyze-improve-and-deploy-application-0ff3;
 origin/cursor/analyze-improve-and-deploy-application-15ad;
};
// Lazy load non-critical components;
    const lazyLoadComponents = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              element.classList.add('loaded')
              observer.unobserve(element)
            }
          })
        },
        { threshold: 0.1 }
      )
      const lazyElements = document.querySelectorAll('[data-lazy]')
      lazyElements.forEach(el => observer.observe(el))
    }
    // Monitor Core Web Vitals;
    const monitorWebVitals = () => {
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })))
        onFID((metric) => setMetrics(prev => ({ ...prev, fid: metric.value })))
        onFCP((metric) => setMetrics(prev => ({ ...prev, fcp: metric.value })))
        onLCP((metric) => setMetrics(prev => ({ ...prev, lcp: metric.value })))
        onTTFB((metric) => setMetrics(prev => ({ ...prev, ttfb: metric.value })))
      }).catch(() => {
        // Silently fail if web-vitals is not available;
      })
    }
      }
      window.addEventListener('scroll', updateScrollPosition, { passive: true })
      return () => window.removeEventListener('scroll', updateScrollPosition)
    }
    // Initialize optimizations;
    preloadCriticalResources()
    optimizeImages()
    lazyLoadComponents()
    monitorWebVitals()
    const cleanupScroll = optimizeScroll()
    // Cleanup;
    return () => {
      cleanupScroll()
    }
  }, [])
  // Log performance metrics in development;
  useEffect(() => {
    if (process.env['NODE_ENV'] === 'development' && Object.values(metrics).some(val => val !== null)) {
      console.log('Performance Metrics:', metrics)
    }
  }, [metrics])
  return null;
}
export default PerformanceOptimizer origin/cursor/analyze-improve-and-deploy-application-0e37;
 origin/cursor/analyze-improve-and-deploy-application-0f1c;
 origin/cursor/analyze-improve-and-deploy-application-1247</PerformanceOptimizerProps>
