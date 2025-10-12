
import { useState, useEffect, useCallback } from 'react';
interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
  });

  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure load time;
    
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Measure render time;
    
      requestAnimationFrame(() => {
        
        setMetrics(prev => ({ ...prev, renderTime }));
      });
    };

    // Measure memory usage;
    
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB;
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Measure network latency;
    
      fetch('/api/ping', { method: 'HEAD' })
        .then(() => {
          
          setMetrics(prev => ({ ...prev, networkLatency: latency }));
        })
        .catch(() => {
          // Fallback if ping endpoint doesn't exist;
          setMetrics(prev => ({ ...prev, networkLatency: 0 }));
        });
    };

    // Run measurements;
    measureLoadTime();
    measureRenderTime();
    measureMemoryUsage();
    measureNetworkLatency();

    // Check if performance is optimized;</PerformanceMetrics>
    
        metrics.renderTime < 16 && // Render time under 16ms (60fps)
        metrics.memoryUsage < 100 && // Memory usage under 100MB;
        metrics.networkLatency < 200; // Network latency under 200ms;
      setIsOptimized(isOptimized);
    };

    // Check optimization after metrics are updated;
    
    return () => clearTimeout(timeoutId);
  }, [metrics.loadTime, metrics.renderTime, metrics.memoryUsage, metrics.networkLatency]);

    criticalResources.forEach((resource) => {
      
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Optimize images;

          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));

    // Add performance optimizations;
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optimize scroll performance;
    let ticking = false;
    
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollPosition);
  };

  return {
    metrics,
    isOptimized,
    optimizePerformance,
  };
};