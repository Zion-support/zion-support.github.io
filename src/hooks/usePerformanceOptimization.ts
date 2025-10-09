'use client';
interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}
export     }
            const metrics: PerformanceMetrics = {
      loadTime: navigation;
        ? navigation.loadEventEnd - navigation.loadEventStart;
        : 0,
      firstContentfulPaint:
        paintEntries.find(entry => entry.name === 'first-contentful-paint')
          ?.startTime || 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0;
    }
    // Measure LCP;
                if (lastEntry) {
        metrics.largestContentfulPaint = lastEntry.startTime;
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    // Measure CLS;
                  value?: number;
        }
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
        }
      }
      metrics.cumulativeLayoutShift = clsValue;
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    // Measure FID;
            }
        metrics.firstInputDelay =
          (fidEntry.processingStart || 0) - entry.startTime;
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
    // Cleanup observers after a delay;
    setTimeout(() => {
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
    }, 10000);
    return metrics;
  }, []);
                img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    images.forEach(img => imageObserver.observe(img));
  }, []);
      criticalResources.forEach(resource => {
            link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);
  useEffect(() => {
    // Measure performance after page load;
          if (metrics) {
        // Send metrics to analytics in production;
        if (process.env['NODE_ENV'] === 'production') {
          // Track metrics in production;
        }
        if (process.env['NODE_ENV'] === 'development') { 
          if (import.meta.env.DEV) { 
          } 
        }
      }
    }, 1000);
    // Optimize images;
    optimizeImages();
    // Preload critical resources;
    preloadCriticalResources();
    return () => clearTimeout(timer);
  }, [measurePerformance, optimizeImages, preloadCriticalResources]);
  return {
    measurePerformance,
    optimizeImages,
    preloadCriticalResources;
  }
}