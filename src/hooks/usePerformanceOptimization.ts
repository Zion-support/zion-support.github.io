  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
      return null;
    
    )[0] as PerformanceNavigationTiming;
    
      loadTime: navigation;
        ? navigation.loadEventEnd - navigation.loadEventStart;
      firstContentfulPaint:
 entry.name === 'first-contentful-paint')
      firstInputDelay: 0;
    };
    // Measure LCP;

        metrics.largestContentfulPaint = lastEntry.startTime;
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    // Measure CLS;
    let clsValue = 0;
    
          hadRecentInput?: boolean;
          value?: number;
        };
          clsValue += layoutShiftEntry.value || 0;
      metrics.cumulativeLayoutShift = clsValue;
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    // Measure FID;
          processingStart?: number;
        };
          (fidEntry.processingStart || 0) - entry.startTime;
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
    // Cleanup observers after a delay;
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
    }, 10000);
    return metrics;
  }, []);

          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
      });
    });
 imageObserver.observe(img));
  }, []);

      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);
    // Measure performance after page load;
      
        // Send metrics to analytics in production;
          // Track metrics in production;
            console.log('Performance metrics:', metrics);
    }, 1000);
    // Optimize images;
    optimizeImages();
    // Preload critical resources;
    preloadCriticalResources();
 clearTimeout(timer);
  }, [measurePerformance, optimizeImages, preloadCriticalResources]);
    preloadCriticalResources;
  };
};
