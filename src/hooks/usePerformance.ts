import { use Effect, use State } from 'react';
import { analytics } from '../utils/analytics';
  load Time: number;
  dom Content Loaded: number;
  first Contentful Paint: number;
  largest Contentful Paint: number;
  cumulative Layout Shift: number;
  first Input Delay: number;
}
  const [metrics, set Metrics] = use State<P erformance Metrics | null>(null);
  const [is Monitoring, set Is Monitoring] = use State(false);
    if (typeof window === 'undefined' || !('performance' in window)) return;
    
      )[0] as Performance Navigation Timing;
      const paint Entries = performance.get Entries By Type('paint');
      
        paint Entries.find(entry => entry.name === 'first-contentful-paint')?.start Time || 0;
      
        paint Entries.find(entry => entry.name === 'largest-contentful-paint')?.start Time || 0;
      // Measure C LS (Cumulative Layout Shift)
      let cumulative Layout Shift = 0;
        
              cumulative Layout Shift += (entry as unknown as { value: number }).value;
            }
          }
        });
        observer.observe({ entry Types: ['layout-shift'] });
      }
      // Measure F ID (First Input Delay)
      let first Input Delay = 0;
        
                (entry as unknown as { processing Start: number }).processing Start - entry.start Time;
            }
          }
        });
        observer.observe({ entry Types: ['first-input'] });
      }
        dom Content Loaded:
        first Input Delay
      };
      set Metrics(performance Data);
      set Is Monitoring(false);
      // Report to analytics using track Timing
      analytics.track Timing('performance', 'load_time', performance Data.load Time);
      analytics.track Timing('performance', 'dom_content_loaded', performance Data.dom Content Loaded);
        performance Data.first Contentful Paint
      );
        performance Data.largest Contentful Paint
      );
        performance Data.cumulative Layout Shift
      );
      analytics.track Timing('performance', 'first_input_delay', performance Data.first Input Delay);
    };
    // Start monitoring
    set Is Monitoring(true);
    // Measure performance after page load
      measure Performance();
      window.add Event Listener('load', measure Performance);
    }
      window.remove Event Listener('load', measure Performance);
    };
  }, []);
  return { metrics, is Monitoring };
};
