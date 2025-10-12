export default usePerformanceMonitoring;
// // PerformanceMetrics interface removed as it's not used in this hook;
  // const { trackPerformance } = useAnalytics();
  
      console.log('Performance metric:', name, value);
      // trackPerformance(name, value);
    []
  );
 {};
      // LCP - Largest Contentful Paint;

        reportMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      // FID - First Input Delay;
        
              (entry.processingStart || entry.startTime) - entry.startTime;
            reportMetric('FID', fid);
        );
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      // CLS - Cumulative Layout Shift;
      let clsValue = 0;

              hadRecentInput?: boolean;
              value?: number;
              clsValue += entry.value;
        );
        reportMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      // FCP - First Contentful Paint;
        
            reportMetric('FCP', entry.startTime);
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      // TTFB - Time to First Byte;

            reportMetric('TTFB', ttfb);
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });
      // Resource timing;

              // Only track slow resources;
              reportMetric('SLOW_RESOURCE', loadTime);
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      // Cleanup;
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        navigationObserver.disconnect();
        resourceObserver.disconnect();
      };
      console.error('Performance monitoring setup failed:', error);
 {};
  }, [reportMetric]);
  // Monitor page load performance;
      if (typeof window === 'undefined') return;
      
      )[0] as PerformanceNavigationTiming;
        
        };
          reportMetric(key.toUpperCase(), value);
        });
    };
    window.addEventListener('load', handleLoad);
 window.removeEventListener('load', handleLoad);
  }, [reportMetric]);
    reportMetric;
  };
};
