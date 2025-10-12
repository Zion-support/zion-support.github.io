import { use Effect, use Callback } from 'react';
// import { use Analytics } from '../components/AnalyticsProvider';
// Performance Metrics interface removed as it's not used in this hook
  // const { track Performance } = use Analytics();
  
      console.log('Performance metric:', name, value);
      // track Performance(name, value);
    []
  );
      return () => {};
    }
      // L CP - Largest Contentful Paint
      
        const entries = list.get Entries();
        const last Entry = entries[entries.length - 1];
        report Metric('L CP', last Entry.start Time);
      });
      lcp Observer.observe({ entry Types: ['largest-contentful-paint'] });
      // F ID - First Input Delay
      
        const entries = list.get Entries();
            
              (entry.processing Start || entry.start Time) - entry.start Time;
            report Metric('F ID', fid);
          }
        );
      });
      fid Observer.observe({ entry Types: ['first-input'] });
      // C LS - Cumulative Layout Shift
      let cls Value = 0;
      
        const entries = list.get Entries();
              had Recent Input?: boolean;
              value?: number;
            }
              cls Value += entry.value;
            }
          }
        );
        report Metric('C LS', cls Value);
      });
      cls Observer.observe({ entry Types: ['layout-shift'] });
      // F CP - First Contentful Paint
      
        const entries = list.get Entries();
            report Metric('F CP', entry.start Time);
          }
        });
      });
      fcp Observer.observe({ entry Types: ['paint'] });
      // T TF B - Time to First Byte
      
        const entries = list.get Entries();
            const nav Entry = entry as Performance Navigation Timing;
            const ttfb = nav Entry.response Start - nav Entry.request Start;
            report Metric('T TF B', ttfb);
          }
        });
      });
      navigation Observer.observe({ entry Types: ['navigation'] });
      // Resource timing
      
        const entries = list.get Entries();
            const resource Entry = entry as Performance Resource Timing;
            const load Time = resource Entry.response End - resource Entry.request Start;
              // Only track slow resources
              report Metric('S LO W_ RE SO UR CE', load Time);
            }
          }
        });
      });
      resource Observer.observe({ entry Types: ['resource'] });
      // Cleanup
        lcp Observer.disconnect();
        fid Observer.disconnect();
        cls Observer.disconnect();
        fcp Observer.disconnect();
        navigation Observer.disconnect();
        resource Observer.disconnect();
      };
      console.error('Performance monitoring setup failed:', error);
      return () => {};
    }
  }, [report Metric]);
  // Monitor page load performance
    
      if (typeof window === 'undefined') return;
      
      )[0] as Performance Navigation Timing;
        
        };
          report Metric(key.to Upper Case(), value);
        });
      }
    };
    window.add Event Listener('load', handle Load);
    return () => window.remove Event Listener('load', handle Load);
  }, [report Metric]);
    report Metric
  };
};
export default usePerformanceMonitoring;
