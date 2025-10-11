<<<<<<< HEAD
  private observers: PerformanceObserver[] = [],
constructor() {this.initializeMetrics()}}
private initializeMetrics(): void {if (typeof window === 'undefined' || !('performance' in window)) return;}
=======
private observers: PerformanceObserver[] = [],
constructor() {
    this.initializeMetrics()
  }
  }
private initializeMetrics(): void {
    if (typeof window === 'undefined' || !('performance' in window)) return;
>>>>>>> origin/main
// Measure page load time;
    window.addEventListener('load', () => 
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
  }
    })
// Measure Core Web Vitals;
    this.measureCoreWebVitals();
  }
private measureCoreWebVitals(): void {
    // First Contentful Paint;
    this.observePaint('first-contentful-paint', (entry) => 
      this.metrics.firstContentfulPaint = entry.startTime;
  }
    })
// Largest Contentful Paint;
    this.observeLCP();
// First Input Delay;
    this.observeFID();
// Cumulative Layout Shift;
    this.observeCLS();
  }
private observePaint(type: string, callback: (entry: PerformanceEntry) => void): void {,}
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return,
try {
            callback(entry)
  }
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {console.warn('PerformanceObserver not supported:', error)}}
  }
<<<<<<< HEAD
private observeLCP(): void {if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;}
try {const observer = new PerformanceObserver((list) => {}
=======
    }
  }
private observeLCP(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
try 
      const observer = new PerformanceObserver((list) => ;
        const entries = list.getEntries();
  }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {console.warn('LCP observer not supported:', error)}}
  }
    }
  }
private observeFID(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
try {
  }
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {console.warn('FID observer not supported:', error)}}
  }
    }
  }
private observeCLS(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
try {
      let clsValue = 0;
  }
          };
        };
        this.metrics.cumulativeLayoutShift = clsValue;
      })
      observer.observe({entryTypes: ['layout-shift'] ,)})
      this.observers.push(observer);
    } catch (error) {console.warn('CLS observer not supported:', error)}}
  }
    }
  }
public getMetrics(): PerformanceMetrics {}
    return { ...this.metrics }
  }
public getLoadTime(): number {
    return this.metrics.loadTime;
  }
  }
public getFirstContentfulPaint(): number {
    return this.metrics.firstContentfulPaint;
  }
  }
public getLargestContentfulPaint(): number {
    return this.metrics.largestContentfulPaint;
  }
  }
public getFirstInputDelay(): number {
    return this.metrics.firstInputDelay;
  }
  }
public getCumulativeLayoutShift(): number {
    return this.metrics.cumulativeLayoutShift;
  }
  }
public isPerformanceGood(): boolean {
  }
  }
public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = []
  }
  }
}
export const performanceMonitor = new PerformanceMonitor();
// Utility functions;
      console.log(`${name} took ${end - start} milliseconds`);
    }
return result;
  }) as T;
}
    let timeout: NodeJS.Timeout;
return ((...args: Parameters<T>) => 
    clearTimeout(timeout),
    timeout = setTimeout(() => func(...args), wait)}}) as T;
}
): T => {
    let inThrottle: boolean;
return ((...args: Parameters<T>) => 
    if (!inThrottle) 
      func(...args)
      inThrottle = true,
      setTimeout(() => inThrottle = false, limit)
  }
    };
  }) as T;
}
    requestIdleCallback(callback)
  }
  } else {
    setTimeout(callback, 1)
  }
  };
};
export const preloadImage = (src: string): Promise<void> => {;
    return new Promise((resolve, reject) => ;
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  }
  })
}
<<<<<<< HEAD
export const preloadImages = (srcs: string[]): Promise<void[]> => {,
    return Promise.all(srcs.map(preloadImage))}}
=======
export const preloadImages = (srcs: string[]): Promise<void[]> => {;
    return Promise.all(srcs.map(preloadImage)
  }
}
>>>>>>> origin/main
