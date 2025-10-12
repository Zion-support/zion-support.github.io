
import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;

  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
  });

  const [isOptimized, setIsOptimized] = useState(false);

    if (typeof window === 'undefined') return;

    // Measure load time
      const loadTime = performance.now();
 ({ ...prev, loadTime }));
    };

    // Measure render time
      const renderStart = performance.now();
        const renderTime = performance.now() - renderStart;
 ({ ...prev, renderTime }));
      });

  }, []);

    // Measure memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
 ({ ...prev, memoryUsage }));
    };

    // Measure network latency
      const start = performance.now();
      fetch('/api/ping', { method: 'HEAD' })
          const latency = performance.now() - start;
 ({ ...prev, networkLatency: latency }));
        })
          // Fallback if ping endpoint doesn't exist
 ({ ...prev, networkLatency: 0 }));
        });
    };

 clearInterval(interval);
  }, [measurePerformance]);

    // Check if performance is optimized
      const isOptimized = 
        metrics.loadTime 
        metrics.renderTime 
        metrics.memoryUsage 
        metrics.networkLatency 

      setIsOptimized(isOptimized);
    };

    // Check optimization after metrics are updated
    const timeoutId = setTimeout(checkOptimization, 1000);

 clearTimeout(timeoutId);
  }, [metrics.loadTime, metrics.renderTime, metrics.memoryUsage, metrics.networkLatency]);

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.png',
    ];

      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Optimize images
    const images = document.querySelectorAll('img[data-src]');
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
      });
    });

 imageObserver.observe(img));

    // Add performance optimizations
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optimize scroll performance
    let ticking = false;
      if (!ticking) {
          // Update scroll position
          ticking = false;
        });
        ticking = true;
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });

 window.removeEventListener('scroll', updateScrollPosition);
  };

  return {
    metrics,
    isOptimized,
    optimizePerformance,
  };
};