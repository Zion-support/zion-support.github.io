<<<<<<< HEAD
'use client';
/**;
 * Advanced Performance Monitoring Utility;
 * Tracks Core Web Vitals and custom metrics;
 */;
interface PerformanceMetrics {fcp?: number; // First Contentful Paint;}
  lcp?: number; // Largest Contentful Paint;
  fid?: number; // First Input Delay;
  cls?: number; // Cumulative Layout Shift;
  ttfb?: number; // Time to First Byte;
  fmp?: number; // First Meaningful Paint;
<<<<<<< HEAD
  customMetrics: Record<string, number>;
=======
  customMetrics: Record<string, number>}}
class PerformanceMonitor {private metrics: PerformanceMetrics = {,}}interface PerformanceMetrics {}}fcp?: number; // First Contentful Paint;
  lcp?: number; // Largest Contentful Paint;
  fid?: number; // First Input Delay;
  cls?: number; // Cumulative Layout Shift;
  ttfb?: number; // Time to First Byte;
  fmp?: number; // First Meaningful Paint;
  customMetrics: Record<string></strin>,
=======
'use client'
/**
 * Advanced Performance Monitoring Utility
 * Tracks Core Web Vitals and custom metrics
 */
interface PerformanceMetrics {
    fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  fmp?: number; // First Meaningful Paint
  customMetrics: Record<string, number></string>
  }
>>>>>>> origin/main
}
class PerformanceMonitor {
    private metrics: PerformanceMetrics = {,
  }
interface PerformanceMetrics {}
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  fmp?: number; // First Meaningful Paint
<<<<<<< HEAD
  customMetrics: Record<string, number>;</strin>
=======
  customMetrics: Record</string><string></strin>
>>>>>>> origin/main
>>>>>>> origin/main
}
<<<<<<< HEAD
class PerformanceMonitor {}}private metrics: PerformanceMetrics = {,}customMetrics: {,}interface PerformanceMetrics {/* TODO: Fix JSX expression */,}}}
class PerformanceMonitor {/* TODO: Fix JSX expression */,}}s: {,}}
  private,;
  observers: PerformanceObserver[] = [],
=======
class PerformanceMonitor {}
  private metrics: PerformanceMetrics = {}
    customMetrics: {}
interface PerformanceMetrics {/* TODO: Fix JSX expression */}
}
class PerformanceMonitor {/* TODO: Fix JSX expression */}
  s: {}
<<<<<<< HEAD
  };
=======
  }
>>>>>>> origin/main
  private,
  observers: PerformanceObserver[] = []
>>>>>>> origin/main
  private isInitialized = false,
<<<<<<< HEAD
  init(): void {}}if (this.isInitialized || typeof window === 'undefined') return;
    this.isInitialized = true;
    this.setupWebVitals();
    this.setupCustomMetrics();,
    this.setupResourceTiming();
<<<<<<< HEAD
  init(): void {/* TODO: Fix JSX expression */}
  }
  /**
=======
  init(): void {/* TODO: Fix JSX expression */,}}}
  /**;
>>>>>>> origin/main
   * Initialize performance observers;
   */;
  private initializeObservers(): void {try {}
      // Observe paint metrics;
=======
  init(): void {}
    if (this.isInitialized || typeof window === 'undefined') return
    this.isInitialized = true
    this.setupWebVitals()
    this.setupCustomMetrics();,
    this.setupResourceTiming()
  init(): void {/* TODO: Fix JSX expression */}
  }
  /**
   * Initialize performance observers
   */
  private initializeObservers(): void {
    try {
      // Observe paint metrics
>>>>>>> origin/main
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        this.observeEntry('paint', (entries) => {
          entries.forEach((entry) => {
<<<<<<< HEAD
            if (entry.name === 'first-contentful-paint') {}private initializeObservers(): void {}}try {}}// Observe paint metrics;
      if ('PerformanceObserver' in window) {}// First Contentful Paint;
        this.observeEntry('paint', (entries) => {}entries.forEach((entry) => {}if (entry.name === 'first-contentful-paint') {}this.recordMetric('FCP', entry.startTime);
            }
// Largest Contentful Paint;
        this.observeEntry('largest-contentful-paint', entries => {)
    );
          const lastEntry = entries[entries.length - 1]);
          if (lastEntry) {
            this.recordMetric('LCP');
              (lastEntry as any).renderTime || (lastEntry as any).loadTime || lastEntry.startTime;
            )}}
// First Input Delay;
        this.observeEntry('first-input', entries => {)
    );
          const firstInput = entries[0]);
=======
            if (entry.name === 'first-contentful-paint') {}
  private initializeObservers(): void {}
    try {}
      // Observe paint metrics
      if ('PerformanceObserver' in window) {}
        // First Contentful Paint
        this.observeEntry('paint', (entries) => {}
          entries.forEach((entry) => {}
            if (entry.name === 'first-contentful-paint') {}
<<<<<<< HEAD
              this.recordMetric('FCP', entry.startTime);
            }


        // Largest Contentful Paint;
        this.observeEntry('largest-contentful-paint', entries => {)
          const lastEntry = entries[entries.length - 1];)
          if (lastEntry) {
            this.recordMetric('LCP')
              (lastEntry as any).renderTime || (lastEntry as any).loadTime || lastEntry.startTime;
            );
          }

        // First Input Delay;
        this.observeEntry('first-input', entries => {)
          const firstInput = entries[0];)
=======
              this.recordMetric('FCP', entry.startTime)
            }
// Largest Contentful Paint
        this.observeEntry()
    )
          const lastEntry = entries[entries.length - 1])
          if (lastEntry) {
            this.recordMetric('LCP')
              (lastEntry as any).renderTime || (lastEntry as any).loadTime || lastEntry.startTime
            )
  }
          }
// First Input Delay
        this.observeEntry()
    )
          const firstInput = entries[0])
>>>>>>> origin/main
>>>>>>> origin/main
          if (firstInput && (firstInput as any).processingStart !== undefined) {
<<<<<<< HEAD
        // Largest Contentful Paint;}this.observeEntry('largest-contentful-paint', entries => {)}const lastEntry = entries[entries.length - 1]
          if (lastEntry) {}this.recordMetric();
              'LCP',;
=======
        // Largest Contentful Paint
<<<<<<< HEAD
        this.observeEntry('largest-contentful-paint', entries => {</div>
          const lastEntry = entries[entries.length - 1];
=======
  }
        this.observeEntry('largest-contentful-paint', entries => {)}
          const lastEntry = entries[entries.length - 1]
>>>>>>> origin/main
          if (lastEntry) {}
            this.recordMetric()
              'LCP',
<<<<<<< HEAD
>>>>>>> origin/main
              (lastEntry as any).renderTime || (lastEntry as any).loadTime || lastEntry.startTime;
            );
          }
// First Input Delay;
        this.observeEntry('first-input', entries => {)}const firstInput = entries[0]
          if (firstInput && (firstInput as any).processingStart !== undefined) {}const fid = (firstInput as any).processingStart - firstInput.startTime;
            this.recordMetric('FID', fid);
          }
// Cumulative Layout Shift;
        this.observeEntry('layout-shift', (entries) => {let clsValue = 0;
=======
              (lastEntry as any).renderTime || (lastEntry as any).loadTime || lastEntry.startTime
<<<<<<< HEAD
            );
          }

        // First Input Delay
        this.observeEntry('first-input', entries => {</div>
          const firstInput = entries[0];
          if (firstInput && (firstInput as any).processingStart !== undefined) {}
            const fid = (firstInput as any).processingStart - firstInput.startTime;
            this.recordMetric('FID', fid);
          }

        // Cumulative Layout Shift;
=======
            )
          }
// First Input Delay
        this.observeEntry('first-input', entries => {)}
          const firstInput = entries[0]
          if (firstInput && (firstInput as any).processingStart !== undefined) {}
            const fid = (firstInput as any).processingStart - firstInput.startTime
            this.recordMetric('FID', fid)
          }
// Cumulative Layout Shift
>>>>>>> origin/main
        this.observeEntry('layout-shift', (entries) => {
    let clsValue = 0
>>>>>>> origin/main
          entries.forEach((entry: PerformanceEntry) => {,
<<<<<<< HEAD
            if (!(entry as any).hadRecentInput) {,;
        // Cumulative Layout Shift;}this.observeEntry('layout-shift', (entries) => {}let clsValue = 0;
          entries.forEach((entry: PerformanceEntry) => {,}if (!(entry as any).hadRecentInput) {}clsValue += (entry as any).value;
=======
            if (!(entry as any).hadRecentInput) {,
        // Cumulative Layout Shift
  }
        this.observeEntry('layout-shift', (entries) => {}
          let clsValue = 0
          entries.forEach((entry: PerformanceEntry) => {}
            if (!(entry as any).hadRecentInput) {}
<<<<<<< HEAD
              clsValue += (entry as any).value;
            }

          if (clsValue > 0) {}
            this.recordMetric('CLS', clsValue);
  private initializeObservers(): void {/* TODO: Fix JSX expression */}
            }
          });
        });
        // Largest Contentful Paint;
        this.observeEntry('largest-contentful-paint', entries => {/* TODO: Fix JSX expression */}
          })
        });
        // First Input Delay;
        this.observeEntry('first-input', entries => {/* TODO: Fix JSX expression */}
          })
        });
        // Cumulative Layout Shift;
        this.observeEntry('layout-shift', (entries) => {/* TODO: Fix JSX expression */}
            }
          });
          if (clsValue > 0) {/* TODO: Fix JSX expression */}
          }

      }
    } catch (error) {}
      logger.error('Failed to initialize performance observers', error as Error);
=======
              clsValue += (entry as any).value
            }
if (clsValue > 0) {}
            this.recordMetric('CLS', clsValue)
  private initializeObservers(): void {/* TODO: Fix JSX expression */}
>>>>>>> origin/main
            }
if (clsValue > 0) {}this.recordMetric('CLS', clsValue);
  private initializeObservers(): void {/* TODO: Fix JSX expression */,}}}
          })
        })
<<<<<<< HEAD
        // Largest Contentful Paint;
        this.observeEntry('largest-contentful-paint', entries => {/* TODO: Fix JSX expression */,)}})
        })
        // First Input Delay;
        this.observeEntry('first-input', entries => {/* TODO: Fix JSX expression */,)}})
        })
        // Cumulative Layout Shift;
        this.observeEntry('layout-shift', (entries) => {/* TODO: Fix JSX expression */,}}
=======
        // Largest Contentful Paint
        this.observeEntry()
          })
        })
        // First Input Delay
        this.observeEntry()
          })
        })
        // Cumulative Layout Shift
        this.observeEntry('layout-shift', (entries) => {/* TODO: Fix JSX expression */}
            }
>>>>>>> origin/main
          })
          if (clsValue > 0) {/* TODO: Fix JSX expression */,}}
}
<<<<<<< HEAD
    } catch (error) {}logger.error('Failed to initialize performance observers', error as Error);
=======
    } catch (error) {}
      logger.error('Failed to initialize performance observers', error as Error)
>>>>>>> origin/main
>>>>>>> origin/main
    }
  }
<<<<<<< HEAD
  private observePaint(name: string, metricKey: keyof PerformanceMetrics): void {,}
    try {,}
      const observer = new PerformanceObserver((list) => {,;
        for (const entry of list.getEntries()) {,;
          if (entry.name === name) {,;
            (this.metrics as any)[metricKey] = entry.startTime;,}private observePaint(name: string, metricKey: keyof PerformanceMetrics): void {,}}try {}}const observer = new PerformanceObserver((list) => {}for (const entry of list.getEntries()) {}if (entry.name === name) {}(this.metrics as any)[metricKey] = entry.startTime;
=======
  private observePaint(name: string, metricKey: keyof PerformanceMetrics): void {
    try {,
      const observer = new PerformanceObserver((list) => {,
        for (const entry of list.getEntries()) {,
          if (entry.name === name) {,
            (this.metrics as any)[metricKey] = entry.startTime;,
  }
  private observePaint(name: string, metricKey: keyof PerformanceMetrics): void {}
    try {}
      const observer = new PerformanceObserver((list) => {}
        for (const entry of list.getEntries()) {}
          if (entry.name === name) {}
<<<<<<< HEAD
            (this.metrics as any)[metricKey] = entry.startTime;
<<<<<<< HEAD
            this.logMetric(metricKey as string, entry.startTime);
          }
        }

      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {}
      }
=======
>>>>>>> origin/main
            this.logMetric(metricKey as string, entry.startTime);
          }
        }
observer.observe({entryTypes: ['paint'] ,)})
      this.observers.push(observer);
    } catch (error) {}}
=======
            (this.metrics as any)[metricKey] = entry.startTime
            this.logMetric(metricKey as string, entry.startTime)
          }
        }
observer.observe({ entryTypes: ['paint'] })
      this.observers.push(observer)
    } catch (error) {}
      }
>>>>>>> origin/main
>>>>>>> origin/main
  }
<<<<<<< HEAD
  private observeLCP(): void {}}try {}}const observer = new PerformanceObserver((list) => {}const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1]
=======
  private observeLCP(): void {}
    try {}
      const observer = new PerformanceObserver((list) => {}
<<<<<<< HEAD
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
>>>>>>> origin/main
        this.metrics.lcp = lastEntry.startTime;
        this.logMetric('lcp', lastEntry.startTime);
<<<<<<< HEAD

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
=======
observer.observe({entryTypes: ['largest-contentful-paint'] ,)})
      this.observers.push(observer);
    } catch (error) {}}
  }
  private observeFID(): void {}}try {}}const observer = new PerformanceObserver((list) => {}for (const entry of list.getEntries()) {}this.metrics.fid = (entry as any).processingStart - entry.startTime;
          this.logMetric('fid', this.metrics.fid);
        }
observer.observe({entryTypes: ['first-input'] ,)})
      this.observers.push(observer);
    } catch (error) {}}
  }
  private observeCLS(): void {}}try {}}let clsValue = 0;
      const observer = new PerformanceObserver((list) => {}for (const entry of list.getEntries()) {}if (!(entry as any).hadRecentInput) {}clsValue += (entry as any).value;
    } catch (error) {/* TODO: Fix JSX expression */,}}
  }
<<<<<<< HEAD
  private observePaint(nam,;)
=======
  private observePaint(nam,
>>>>>>> origin/main
  e: string, metricKe);
  y: keyof PerformanceMetrics): void {/* TODO: Fix JSX expression */,}}}
        }
      })
      observer.observe({/* TODO: Fix JSX expression */,)})
  s: ['paint'] ,})
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */,}}
=======
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        this.metrics.lcp = lastEntry.startTime
        this.logMetric('lcp', lastEntry.startTime)
observer.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(observer)
>>>>>>> origin/main
    } catch (error) {}
      }
  }
  private observeFID(): void {}
    try {}
      const observer = new PerformanceObserver((list) => {}
        for (const entry of list.getEntries()) {}
<<<<<<< HEAD
          this.metrics.fid = (entry as any).processingStart - entry.startTime;
          this.logMetric('fid', this.metrics.fid);
        }

      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
=======
          this.metrics.fid = (entry as any).processingStart - entry.startTime
          this.logMetric('fid', this.metrics.fid)
        }
observer.observe({ entryTypes: ['first-input'] })
      this.observers.push(observer)
>>>>>>> origin/main
    } catch (error) {}
      }
  }
  private observeCLS(): void {}
    try {}
      let clsValue = 0
      const observer = new PerformanceObserver((list) => {}
        for (const entry of list.getEntries()) {}
          if (!(entry as any).hadRecentInput) {}
<<<<<<< HEAD
            clsValue += (entry as any).value;
=======
            clsValue += (entry as any).value
>>>>>>> origin/main
    } catch (error) {/* TODO: Fix JSX expression */}
    }
  }
  private observePaint()
  e: string, metricKe)
  y: keyof PerformanceMetrics): void {/* TODO: Fix JSX expression */}
          }
        }
<<<<<<< HEAD
      });
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['paint'] });
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */}
      }
  }
  private observeLCP(): void {/* TODO: Fix JSX expression */}
      });
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */}
      }
  }
  private observeFID(): void {/* TODO: Fix JSX expression */}
        }
      });
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */}
      }
  }
  private observeCLS(): void {/* TODO: Fix JSX expression */}
          }
        }
        this.metrics.cls = clsValue;
        this.logMetric('cls', clsValue);

      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {}
      }
=======
      })
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['paint'] })
      this.observers.push(observer)
    } catch (error) {/* TODO: Fix JSX expression */}
      }
>>>>>>> origin/main
  }
  private observeLCP(): void {/* TODO: Fix JSX expression */,}}})
      observer.observe({/* TODO: Fix JSX expression */,)})
  s: ['largest-contentful-paint'] ,})
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */,}}
  }
  private observeFID(): void {/* TODO: Fix JSX expression */,}}}
      })
<<<<<<< HEAD
      observer.observe({/* TODO: Fix JSX expression */,)})
  s: ['first-input'] ,})
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */,}}
  }
  private observeCLS(): void {/* TODO: Fix JSX expression */,}}}
        }
        this.metrics.cls = clsValue;
        this.logMetric('cls', clsValue);
observer.observe({entryTypes: ['layout-shift'] ,)})
      this.observers.push(observer);
    } catch (error) {}}
>>>>>>> origin/main
  }
  private setupCustomMetrics(): void {// Time to First Byte;}
    if (performance.timing) {
      this.metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
<<<<<<< HEAD
      this.logMetric('ttfb', this.metrics.ttfb);
    }
    // Page Load Time;
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      this.addCustomMetric('pageLoadTime', loadTime);
    }
=======
      this.logMetric('ttfb', this.metrics.ttfb)}}
    // Page Load Time;
    if (performance.timing) {const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      this.addCustomMetric('pageLoadTime', loadTime)}}
>>>>>>> origin/main
    // DOM Content Loaded;
    if (performance.timing) {}private setupCustomMetrics(): void {}}// Time to First Byte;
    if (performance.timing) {}this.metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      this.logMetric('ttfb', this.metrics.ttfb);
    }
    // Page Load Time;
    if (performance.timing) {}const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      this.addCustomMetric('pageLoadTime', loadTime);
    }
    // DOM Content Loaded;
    if (performance.timing) {}const domContentLoaded = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
      this.addCustomMetric('domContentLoaded', domContentLoaded);
    }
  }
  private setupResourceTiming(): void {}}try {}}const observer = new PerformanceObserver((list) => {}for (const entry of list.getEntries()) {}if (entry.entryType === 'resource') {}const resourceEntry = entry as PerformanceResourceTiming;
            this.analyzeResource(resourceEntry);
          }
        }
observer.observe({entryTypes: ['resource'] ,)})
      this.observers.push(observer);
    } catch (error) {}}
  }
  private analyzeResource(entry: PerformanceResourceTiming): void {,}}const duration = entry.responseEnd - entry.startTime;
    const size = entry.transferSize || 0;
    // Track slow resources;
    if (duration > 1000) {,}this.addCustomMetric(`slowResource_${entry.name)}`, duration);
    }
    // Track large resources;
    if (size > 100000) {// 100KB;}this.addCustomMetric(`largeResource_${entry.name)}`, size);
=======
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['largest-contentful-paint'] })
      this.observers.push(observer)
    } catch (error) {/* TODO: Fix JSX expression */}
      }
  }
  private observeFID(): void {/* TODO: Fix JSX expression */}
        }
      })
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['first-input'] })
      this.observers.push(observer)
    } catch (error) {/* TODO: Fix JSX expression */}
      }
  }
  private observeCLS(): void {/* TODO: Fix JSX expression */}
          }
        }
        this.metrics.cls = clsValue
        this.logMetric('cls', clsValue)
observer.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(observer)
    } catch (error) {}
      }
  }
  private setupCustomMetrics(): void {
    // Time to First Byte
    if (performance.timing) {
      this.metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart
      this.logMetric('ttfb', this.metrics.ttfb)
  }
    }
    // Page Load Time
    if (performance.timing) {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      this.addCustomMetric('pageLoadTime', loadTime)
  }
    }
    // DOM Content Loaded
    if (performance.timing) {}
  private setupCustomMetrics(): void {}
    // Time to First Byte
    if (performance.timing) {}
<<<<<<< HEAD
      this.metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      this.logMetric('ttfb', this.metrics.ttfb);
    }
    // Page Load Time
    if (performance.timing) {}
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      this.addCustomMetric('pageLoadTime', loadTime);
    }
    // DOM Content Loaded
    if (performance.timing) {}
      const domContentLoaded = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
      this.addCustomMetric('domContentLoaded', domContentLoaded);
=======
      this.metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart
      this.logMetric('ttfb', this.metrics.ttfb)
    }
    // Page Load Time
    if (performance.timing) {}
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      this.addCustomMetric('pageLoadTime', loadTime)
    }
    // DOM Content Loaded
    if (performance.timing) {}
      const domContentLoaded = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
      this.addCustomMetric('domContentLoaded', domContentLoaded)
>>>>>>> origin/main
    }
  }
  private setupResourceTiming(): void {}
    try {}
      const observer = new PerformanceObserver((list) => {}
        for (const entry of list.getEntries()) {}
          if (entry.entryType === 'resource') {}
<<<<<<< HEAD
            const resourceEntry = entry as PerformanceResourceTiming;
            this.analyzeResource(resourceEntry);
          }
        }

      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
=======
            const resourceEntry = entry as PerformanceResourceTiming
            this.analyzeResource(resourceEntry)
          }
        }
observer.observe({ entryTypes: ['resource'] })
      this.observers.push(observer)
>>>>>>> origin/main
    } catch (error) {}
      }
  }
  private analyzeResource(entry: PerformanceResourceTiming): void {}
<<<<<<< HEAD
    const duration = entry.responseEnd - entry.startTime;
    const size = entry.transferSize || 0;
    // Track slow resources;
    if (duration > 1000) {,
      this.addCustomMetric(`slowResource_${entry.name}`, duration);
    }
    // Track large resources;
    if (size > 100000) { // 100KB;
      this.addCustomMetric(`largeResource_${entry.name}`, size);
    }
=======
    const duration = entry.responseEnd - entry.startTime
    const size = entry.transferSize || 0
    // Track slow resources
    if (duration > 1000) {
    ,
>>>>>>> origin/main
  }
      this.addCustomMetric(`slowResource_${entry.name}`, duration)
    }
    // Track large resources
    if (size > 100000) {
    // 100KB
  }
      this.addCustomMetric(`largeResource_${entry.name}`, size)
>>>>>>> origin/main
    }
  }
  addCustomMetric(name: string, value: number): void {,}
    ,
<<<<<<< HEAD
    this.metrics.customMetrics[name] = value;,;
    this.logMetric(name, value)}}
  private logMetric(name: string, value: number): void {,}
    ,}if (process.env.NODE_ENV === 'development') {}ms`);
=======
    this.metrics.customMetrics[name] = value;,
<<<<<<< HEAD
    this.logMetric(name, value);
  }
  private logMetric(name: string, value: number): void {,
    if (process.env.NODE_ENV === 'development') {}ms`);
=======
    this.logMetric(name, value)
  }
  }
  private logMetric(name: string, value: number): void {
    ,
  }
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'development') {}ms`);
>>>>>>> origin/main
>>>>>>> origin/main
    }
    // Send to analytics if available;
    if (typeof window !== 'undefined' && (window as any).gtag) {(window as any).gtag('event', 'performance_metric', {);
        metric_name: name),
    // Track slow resources;}if (duration > 1000) {}this.addCustomMetric(`slowResource_${entry.name)}`, duration);
    }
    // Track large resources;
    if (size > 100000) {// 100KB}this.addCustomMetric(`largeResource_${entry.name)}`, size);
    }
  }
  addCustomMetric(name: string, value: number): void {,}}this.metrics.customMetrics[name] = value;
    this.logMetric(name, value);
  }
  private logMetric(name: string, value: number): void {,}}if (process.env.NODE_ENV === 'development') {}}ms`);
    }
    // Send to analytics if available;
    if (typeof window !== 'undefined' && (window as any).gtag) {}(window as any).gtag('event', 'performance_metric', {)}metric_name: name,
=======
    if (process.env.NODE_ENV === 'development') {}ms`)
    }
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'performance_metric', {)
        metric_name: name),
    // Track slow resources
  }
    if (duration > 1000) {}
<<<<<<< HEAD
      this.addCustomMetric(`slowResource_${entry.name}`, duration);
    }
    // Track large resources
    if (size > 100000) { // 100KB}
      this.addCustomMetric(`largeResource_${entry.name}`, size);
    }
  }
  addCustomMetric(name: string, value: number): void {}
    this.metrics.customMetrics[name] = value;
    this.logMetric(name, value);
  }
  private logMetric(name: string, value: number): void {}
    if (process.env.NODE_ENV === 'development') {}
      }ms`);
    }
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {}
      (window as any).gtag('event', 'performance_metric', {</div>
=======
      this.addCustomMetric(`slowResource_${entry.name}`, duration)
    }
    // Track large resources
    if (size > 100000) { // 100KB}
      this.addCustomMetric(`largeResource_${entry.name}`, size)
    }
  }
  addCustomMetric(name: string, value: number): void {}
    this.metrics.customMetrics[name] = value
    this.logMetric(name, value)
  }
  private logMetric(name: string, value: number): void {}
    if (process.env.NODE_ENV === 'development') {}
      }ms`)
    }
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {}
      (window as any).gtag('event', 'performance_metric', {)}
>>>>>>> origin/main
        metric_name: name,
>>>>>>> origin/main
        metric_value: Math.round(value),
        event_category: 'performance',
}
  }
<<<<<<< HEAD
  getMetrics(): PerformanceMetrics {}}return {...this.metrics}}}
  getScore(): number {}}const scores = []
=======
  getMetrics(): PerformanceMetrics {}
<<<<<<< HEAD
    return { ...this.metrics };
=======
    return { ...this.metrics }
>>>>>>> origin/main
  }
  getScore(): number {}
<<<<<<< HEAD
    const scores = [];
>>>>>>> origin/main
    // FCP scoring (0-100);
    if (this.metrics.fcp) {}if (this.metrics.fcp <= 1800) scores.push(100);
      else if (this.metrics.fcp <= 4000) scores.push(50);
      else scores.push(25);
    }
<<<<<<< HEAD
    // LCP scoring (0-100)
    if (this.metrics.lcp) {}
      if (this.metrics.lcp <= 2500) scores.push(100);
=======
    // LCP scoring (0-100);
    if (this.metrics.lcp) {}if (this.metrics.lcp <= 2500) scores.push(100);
>>>>>>> origin/main
      else if (this.metrics.lcp <= 4000) scores.push(75);
      else if (this.metrics.lcp <= 6000) scores.push(50);
      else scores.push(25);
    }
<<<<<<< HEAD
    // FID scoring (0-100)
    if (this.metrics.fid) {}
      if (this.metrics.fid <= 100) scores.push(100);
=======
    // FID scoring (0-100);
    if (this.metrics.fid) {}if (this.metrics.fid <= 100) scores.push(100);
>>>>>>> origin/main
      else if (this.metrics.fid <= 300) scores.push(75);
      else if (this.metrics.fid <= 500) scores.push(50);
      else scores.push(25);
    }
<<<<<<< HEAD
    // CLS scoring (0-100)
    if (this.metrics.cls) {}
      if (this.metrics.cls <= 0.1) scores.push(100);
      else if (this.metrics.cls <= 0.25) scores.push(75);
      else if (this.metrics.cls <= 0.4) scores.push(50);
      else scores.push(25);
    }
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }
  generateReport(): string {}
      });
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */}
      }
  }
  private setupCustomMetrics(): void {/* TODO: Fix JSX expression */}
    }
    // Page Load Time;
    if (performance.timing) {/* TODO: Fix JSX expression */}
    }
    // DOM Content Loaded;
    if (performance.timing) {/* TODO: Fix JSX expression */}
    }
  }
  private setupResourceTiming(): void {/* TODO: Fix JSX expression */}
          }
        }
      });
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['resource'] });
      this.observers.push(observer);
=======
    // CLS scoring (0-100);
    if (this.metrics.cls) {}if (this.metrics.cls <= 0.1) scores.push(100);
      else if (this.metrics.cls <= 0.25) scores.push(75);
      else if (this.metrics.cls <= 0.4) scores.push(50);
      else scores.push(25);
    }];];
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }
  generateReport(): string {}}})
      observer.observe({/* TODO: Fix JSX expression */,)})
  s: ['layout-shift'] ,})
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */,}}
  }
  private setupCustomMetrics(): void {/* TODO: Fix JSX expression */,}}}
    // Page Load Time;
    if (performance.timing) {/* TODO: Fix JSX expression */,}}
    // DOM Content Loaded;
    if (performance.timing) {/* TODO: Fix JSX expression */,}}
=======
    const scores = []
    // FCP scoring (0-100)
    if (this.metrics.fcp) {}
      if (this.metrics.fcp <= 1800) scores.push(100)
      else if (this.metrics.fcp <= 4000) scores.push(50)
      else scores.push(25)
    }
    // LCP scoring (0-100)
    if (this.metrics.lcp) {}
      if (this.metrics.lcp <= 2500) scores.push(100)
      else if (this.metrics.lcp <= 4000) scores.push(75)
      else if (this.metrics.lcp <= 6000) scores.push(50)
      else scores.push(25)
    }
    // FID scoring (0-100)
    if (this.metrics.fid) {}
      if (this.metrics.fid <= 100) scores.push(100)
      else if (this.metrics.fid <= 300) scores.push(75)
      else if (this.metrics.fid <= 500) scores.push(50)
      else scores.push(25)
    }
    // CLS scoring (0-100)
    if (this.metrics.cls) {}
      if (this.metrics.cls <= 0.1) scores.push(100)
      else if (this.metrics.cls <= 0.25) scores.push(75)
      else if (this.metrics.cls <= 0.4) scores.push(50)
      else scores.push(25)
    }]
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0
  }
  generateReport(): string {}
      })
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['layout-shift'] })
      this.observers.push(observer)
    } catch (error) {/* TODO: Fix JSX expression */}
      }
  }
  private setupCustomMetrics(): void {/* TODO: Fix JSX expression */}
    }
    // Page Load Time
    if (performance.timing) {/* TODO: Fix JSX expression */}
    }
    // DOM Content Loaded
    if (performance.timing) {/* TODO: Fix JSX expression */}
    }
>>>>>>> origin/main
  }
  private setupResourceTiming(): void {/* TODO: Fix JSX expression */,}}}
        }
      })
<<<<<<< HEAD
      observer.observe({/* TODO: Fix JSX expression */,)})
  s: ['resource'] ,})
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */,}}
  }
  private analyzeResource(entr);
  y: PerformanceResourceTiming): void {/* TODO: Fix JSX expression */,}}this.addCustomMetric(`slowResource_${entry.name)}`, duration);
    }
    // Track large resources;
    if (size > 100000) {/* TODO: Fix JSX expression */,}`;
      this.addCustomMetric(`largeResource_${entry.name)}`, size);
    }
  }
<<<<<<< HEAD
  addCustomMetric(nam,;)
  e: string, valu);
  e: number): void {/* TODO: Fix JSX expression */,}}}
  private logMetric(nam,;)
=======
  addCustomMetric(nam,
  e: string, valu);
  e: number): void {/* TODO: Fix JSX expression */}
  }
  private logMetric(nam,
>>>>>>> origin/main
  e: string, valu);
  e: number): void {/* TODO: Fix JSX expression */,}}`;
      }ms`);
    }
    // Send to analytics if available;
    if (typeof window !== 'undefined' && (window as any).gtag) {/* TODO: Fix JSX expression */,}})
    }
  }
  getMetrics(): PerformanceMetrics {/* TODO: Fix JSX expression */,}}return {...this.metrics}}}
  getScore(): number {/* TODO: Fix JSX expression */,}}}
    // LCP scoring (0-100);
    if (this.metrics.lcp) {/* TODO: Fix JSX expression */,}}
    // FID scoring (0-100);
    if (this.metrics.fid) {/* TODO: Fix JSX expression */,}}
    // CLS scoring (0-100);
    if (this.metrics.cls) {/* TODO: Fix JSX expression */,}}
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }
generateReport(): string {const score = this.getScore();}
    const metrics = this.getMetrics();
    return `;
Performance Report:  ,}Score: ${score,}Metrics: ${JSON.stringify(metrics, null, 2)}`;
=======
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['resource'] })
      this.observers.push(observer)
>>>>>>> origin/main
    } catch (error) {/* TODO: Fix JSX expression */}
      }
  }
  private analyzeResource(entr)
  y: PerformanceResourceTiming): void {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
      this.addCustomMetric(`slowResource_${entry.name}`, duration);
    }
    // Track large resources;
    if (size > 100000) {/* TODO: Fix JSX expression */}`
      this.addCustomMetric(`largeResource_${entry.name}`, size);
=======
      this.addCustomMetric(`slowResource_${entry.name}`, duration)
    }
    // Track large resources
    if (size > 100000) {/* TODO: Fix JSX expression */}`
      this.addCustomMetric(`largeResource_${entry.name}`, size)
>>>>>>> origin/main
    }
  }
  addCustomMetric()
  e: string, valu)
  e: number): void {/* TODO: Fix JSX expression */}
  }
<<<<<<< HEAD
  private logMetric(nam,
  e: string, valu)
  e: number): void {/* TODO: Fix JSX expression */}`
      }ms`);
    }
    // Send to analytics if available;
    if (typeof window !== 'undefined' && (window as any).gtag) {/* TODO: Fix JSX expression */}
      });
    }
  }
  getMetrics(): PerformanceMetrics {/* TODO: Fix JSX expression */}
    return { ...this.metrics };
=======
  private logMetric()
  e: string, valu)
  e: number): void {/* TODO: Fix JSX expression */}`
      }ms`)
    }
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {/* TODO: Fix JSX expression */}
      })
    }
  }
  getMetrics(): PerformanceMetrics {/* TODO: Fix JSX expression */}
    return { ...this.metrics }
>>>>>>> origin/main
  }
  getScore(): number {/* TODO: Fix JSX expression */}
    }
    // LCP scoring (0-100)
    if (this.metrics.lcp) {/* TODO: Fix JSX expression */}
    }
    // FID scoring (0-100)
    if (this.metrics.fid) {/* TODO: Fix JSX expression */}
    }
    // CLS scoring (0-100)
    if (this.metrics.cls) {/* TODO: Fix JSX expression */}
    }
<<<<<<< HEAD
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }

  generateReport(): string {
    const score = this.getScore();
    const metrics = this.getMetrics();
=======
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0
  }
generateReport(): string {
    const score = this.getScore()
    const metrics = this.getMetrics()
>>>>>>> origin/main
    return `
Performance Report:
  }
Score: ${score}
<<<<<<< HEAD
Metrics: ${JSON.stringify(metrics, null, 2</div>
    `;
  }


=======
Metrics: ${JSON.stringify(metrics, null, 2)}
    `
>>>>>>> origin/main
  }
>>>>>>> origin/main
