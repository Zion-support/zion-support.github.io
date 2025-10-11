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
<<<<<<< HEAD
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
=======
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;}})
// Measure Core Web Vitals;
    this.measureCoreWebVitals();
  }
private measureCoreWebVitals(): void {// First Contentful Paint;}
    this.observePaint('first-contentful-paint', (entry) => {
      this.metrics.firstContentfulPaint = entry.startTime;}})
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
// Largest Contentful Paint;
    this.observeLCP();
// First Input Delay;
    this.observeFID();
// Cumulative Layout Shift;
    this.observeCLS();
  }
private observePaint(type: string, callback: (entry: PerformanceEntry) => void): void {,}
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return,
<<<<<<< HEAD
try {
<<<<<<< HEAD
      const observer = const observer = const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === type) {
=======
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()
          if (entry.name === type) 
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            callback(entry)
  }
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
=======
try {const observer = new PerformanceObserver((list) => {}
        for (const entry of list.getEntries()) {
          if (entry.name === type) {
            callback(entry)}}
        }
      })
      observer.observe({entryTypes: ['paint'] ,)})
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
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
<<<<<<< HEAD
try 
      const observer = new PerformanceObserver((list) => ;
        const entries = list.getEntries();
<<<<<<< HEAD
        const lastEntry = const lastEntry = const lastEntry = entries[entries.length - 1]
        this.metrics.largestContentfulPaint = lastEntry.startTime
=======
        const lastEntry = entries[entries.length - 1]
        this.metrics.largestContentfulPaint = lastEntry.startTime;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
=======
try {
      const observer = new PerformanceObserver((list) => {;
>>>>>>> origin/main
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1]
        this.metrics.largestContentfulPaint = lastEntry.startTime;}})
      observer.observe({entryTypes: ['largest-contentful-paint'] ,)})
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      this.observers.push(observer);
    } catch (error) {console.warn('LCP observer not supported:', error)}}
  }
<<<<<<< HEAD
    }
  }
private observeFID(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
try {
<<<<<<< HEAD
      const observer = const observer = const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.metrics.firstInputDelay = entry.processingStart - entry.startTime
=======
      const observer = new PerformanceObserver((list) => 
        for (const entry of list.getEntries()
          this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  }
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
=======
private observeFID(): void {if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;}
try {const observer = new PerformanceObserver((list) => {}
        for (const entry of list.getEntries()) {
          this.metrics.firstInputDelay = entry.processingStart - entry.startTime;}}
      })
      observer.observe({entryTypes: ['first-input'] ,)})
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      this.observers.push(observer);
    } catch (error) {console.warn('FID observer not supported:', error)}}
  }
<<<<<<< HEAD
    }
  }
private observeCLS(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
try {
      let clsValue = 0;
<<<<<<< HEAD
      const observer = const observer = const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
=======
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()
          if (!(entry as any).hadRecentInput) 
            clsValue += (entry as any).value;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  }
          };
        };
=======
private observeCLS(): void {if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;}
try {let clsValue = 0;}
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;}}
        }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
        this.metrics.cumulativeLayoutShift = clsValue;
      })
      observer.observe({entryTypes: ['layout-shift'] ,)})
      this.observers.push(observer);
    } catch (error) {console.warn('CLS observer not supported:', error)}}
  }
<<<<<<< HEAD
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
<<<<<<< HEAD
    return ()
    )
=======
    return (
      this.metrics.firstContentfulPaint < 1800 &&;
      this.metrics.largestContentfulPaint < 2500 &&;
      this.metrics.firstInputDelay < 100 &&;)
      this.metrics.cumulativeLayoutShift < 0.1;)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
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
<<<<<<< HEAD
export const measureFunction = const measureFunction = const measureFunction = <T extends (...args: any[]) => any>()
): T => {
  return ((...args: Parameters<T>) => {
    const start = const start = performance.now()
    const result = fn(...args)
    const end = performance.now(),;
if (name) {};
=======
export const measureFunction = <T extends (...args: any[]) => any>(,
  fn: T,)
  name?: string;)
): T => {
  return ((...args: Parameters<T>) => 
    const start = performance.now()
    const result = fn(...args)
    const end = performance.now(),
if (name) }
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      console.log(`${name} took ${end - start} milliseconds`);
=======
public getMetrics(): PerformanceMetrics {}}return {...this.metrics}}}
public getLoadTime(): number {return this.metrics.loadTime;}}}
public getFirstContentfulPaint(): number {return this.metrics.firstContentfulPaint;}}}
public getLargestContentfulPaint(): number {return this.metrics.largestContentfulPaint;}}}
public getFirstInputDelay(): number {return this.metrics.firstInputDelay;}}}
public getCumulativeLayoutShift(): number {return this.metrics.cumulativeLayoutShift;}}}
public isPerformanceGood(): boolean {return(this.metrics.firstContentfulPaint < 1800 &&;)}
      this.metrics.largestContentfulPaint < 2500 &&;
      this.metrics.firstInputDelay < 100 &&;
      this.metrics.cumulativeLayoutShift < 0.1;
    )}}
public cleanup(): void {this.observers.forEach(observer => observer.disconnect());}
    this.observers = []}}
}
export const performanceMonitor = new PerformanceMonitor();
// Utility functions;
export const measureFunction = <T extends (...args: any[]) => any>(,
  fn: T,
  name?: string;
): T => {return ((...args: Parameters<T>) => {,
    const start = performance.now()
    const result = fn(...args)
    const end = performance.now(),
if (name) {}console.log(`${name)}took ${end - start}milliseconds`);
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    }
return result;
  }) as T;
}
<<<<<<< HEAD
export const debounce = const debounce = const debounce = <T extends (...args: any[]) => any>();
): T => {;
=======
export const debounce = <T extends (...args: any[]) => any>(,
<<<<<<< HEAD
  func: T,)
  wait: number)
=======
  func: T,
<<<<<<< HEAD
  wait: number;,
): T => {let timeout: NodeJS.Timeout;,
return ((...args: Parameters<T>) => {,
=======
  wait: number
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
): T => {
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    let timeout: NodeJS.Timeout;
<<<<<<< HEAD
return ((...args: Parameters<T>) => 
=======
return ((...args: Parameters<T>) => {
>>>>>>> origin/main
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    clearTimeout(timeout),
    timeout = setTimeout(() => func(...args), wait)}}) as T;
}
<<<<<<< HEAD
export const throttle = const throttle = const throttle = <T extends (...args: any[]) => any>()
=======
export const throttle = <T extends (...args: any[]) => any>(,
<<<<<<< HEAD
  func: T,)
  limit: number;)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
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
<<<<<<< HEAD
export const lazyLoad = const lazyLoad = const lazyLoad = (callback: () => void): void => {
    if ('requestIdleCallback' in window) {
=======
export const lazyLoad = (callback: () => void): void => {
    if ('requestIdleCallback' in window) 
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
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
=======
  func: T,
  limit: number;,
): T => {let inThrottle: boolean;,
return ((...args: Parameters<T>) => {,
    if (!inThrottle) {
      func(...args)
      inThrottle = true,
      setTimeout(() => inThrottle = false, limit)}}
  }) as T;
}
export const lazyLoad = (callback: () => void): void => {,
    if ('requestIdleCallback' in window) {
    requestIdleCallback(callback)}} else {setTimeout(callback, 1)}}}
}
<<<<<<< HEAD
export const preloadImage = (src: string): Promise<void> => {,
    return new Promise((resolve, reject) => {
=======
export const preloadImage = (src: string): Promise<void> => {;
    return new Promise((resolve, reject) => {;
>>>>>>> origin/main
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;}})
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
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
