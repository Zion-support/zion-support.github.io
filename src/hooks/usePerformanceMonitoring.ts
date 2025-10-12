'use client';
// import { useAnalytics } from '../components/AnalyticsProvider';
// PerformanceMetrics interface removed as it's not used in this hook
  // const { trackPerformance } = useAnalytics();
  
      console.log('Performance metric:', name, value);
      // trackPerformance(name, value);
    []
  );
      return () => {};
    }
      // LCP - Largest Contentful Paint
      
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        reportMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      // FID - First Input Delay
      
        const entries = list.getEntries();
            
              (entry.processingStart || entry.startTime) - entry.startTime;
            reportMetric('FID', fid);
          }
        );
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      // CLS - Cumulative Layout Shift
      let clsValue = 0;
      
        const entries = list.getEntries();
              hadRecentInput?: boolean;
              value?: number;
            }
              clsValue += entry.value;
            }
          }
        );
        reportMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      // FCP - First Contentful Paint
      
        const entries = list.getEntries();
            reportMetric('FCP', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      // TTFB - Time to First Byte
      
        const entries = list.getEntries();
            const navEntry = entry as PerformanceNavigationTiming;
            const ttfb = navEntry.responseStart - navEntry.requestStart;
            reportMetric('TTFB', ttfb);
          }
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });
      // Resource timing
      
        const entries = list.getEntries();
            const resourceEntry = entry as PerformanceResourceTiming;
            const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
              // Only track slow resources
              reportMetric('SLOW_RESOURCE', loadTime);
            }
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      // Cleanup
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        navigationObserver.disconnect();
        resourceObserver.disconnect();
      };
      console.error('Performance monitoring setup failed:', error);
      return () => {};
    }
  }, [reportMetric]);
  // Monitor page load performance
    
      if (typeof window === 'undefined') return;
      
      )[0] as PerformanceNavigationTiming;
        
        };
          reportMetric(key.toUpperCase(), value);
        });
      }
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, [reportMetric]);
    reportMetric
  };
