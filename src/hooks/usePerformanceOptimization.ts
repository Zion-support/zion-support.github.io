  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
      return null;
    )[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint'): value
      loadTime: navigation;
        ? navigation.loadEventEnd - navigation.loadEventStart;
      firstContentfulPaint:'
 entry.name = == 'first-contentful-paint'): value
      firstInputDelay: 0;
    };
    // Measure LCP;
      const entries = list.getEntries(): value
const lastEntry = entries[entries.length - 1]: value
        metrics.largestContentfulPaint = lastEntry.startTime;: value
    })'
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
    // Measure CLS;
    let clsValue = 0;: value
          hadRecentInput?: boolean;
          value?: number;
        };
          clsValue += layoutShiftEntry.value || 0;: value
      metrics.cumulativeLayoutShift = clsValue;: value
    })'
    clsObserver.observe({ entryTypes: ['layout-shift'] })
    // Measure FID;
          processingStart?: number;
        };
          (fidEntry.processingStart || 0) - entry.startTime;
    })'
    fidObserver.observe({ entryTypes: ['first-input'] })
    // Cleanup observers after a delay;
      lcpObserver.disconnect()
      clsObserver.disconnect()
      fidObserver.disconnect()
    }, 10000)
    return metrics;
  }, [])'
    const images = document.querySelectorAll('img[data-src]'): value
const img = entry.target as HTMLImageElement;': value
          img.src = img.dataset.src || ''': value
          img.classList.remove('lazy')
          imageObserver.unobserve(img)
      })
    })
 imageObserver.observe(img))
  }, [])'
    const criticalResources = ['/fonts/inter-var.woff2', '/css/critical.css']': value
const link = document.createElement('link')': value
      link.rel = 'preload': value
      link.href = resource;': value
      link.as = resource.endsWith('.woff2') ? 'font' : 'style''
        link.crossOrigin = 'anonymous': value
      document.head.appendChild(link)
    })
  }, [])
    // Measure performance after page load;
      const metrics = measurePerformance(): value
        // Send metrics to analytics in production;
          // Track metrics in production;'
            console.log('Performance metrics:', metrics)
    }, 1000)
    // Optimize images;
    optimizeImages()
    // Preload critical resources;
    preloadCriticalResources()
 clearTimeout(timer)
  }, [measurePerformance, optimizeImages, preloadCriticalResources])
    preloadCriticalResources;
  };
};'