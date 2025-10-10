  private observers: PerformanceObserver[] = [];

;
<<<<<<< HEAD
constructor() {}
    this.initializeMetrics();
  private initializeMetrics(): void {}
    if (typeof window === 'undefined' || !('performance' in window)) return;
    // Measure page load time;
    window.addEventListener('load', () => {;
const navigation = "performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;"
      this.metrics.loadTime = "navigation.loadEventEnd - navigation.loadEventStart});"
    // Measure Core Web Vitals;
    this.measureCoreWebVitals();
  private measureCoreWebVitals(): void {}
    // First Contentful Paint;
    this.observePaint('first-contentful-paint', (entry) => {}
      this.metrics.firstContentfulPaint="entry.startTime});"
    // Largest Contentful Paint;
=======

constructor() {
    this.initializeMetrics();

  private initializeMetrics(): void {
    if (typeof window === 'undefined' || !(performance in window)) return;

    // Measure page load time
    window.addEventListener(load, () => {;

const navigation = performance.getEntriesByType(navigation)[0] as PerformanceNavigationTiming;;

      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart});

    // Measure Core Web Vitals
    this.measureCoreWebVitals();

  private measureCoreWebVitals(): void {
    // First Contentful Paint
    this.observePaint('first-contentful-paint, (entry) => {
      this.metrics.firstContentfulPaint = entry.startTime});

    // Largest Contentful Paint
>>>>>>> origin/main
    this.observeLCP();
    // First Input Delay;
    this.observeFID();
    // Cumulative Layout Shift;
    this.observeCLS();
<<<<<<< HEAD
  private observePaint(type: string, callback: (entry: PerformanceEntry) => void): void {}
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
    try {;
const observer = new PerformanceObserver((list) => {}
        for (const entry of list.getEntries()) {}
          if (entry.name === type) {}
=======

  private observePaint(type: string, callback: (entry: PerformanceEntry) => void): void {
    if (typeof window === 'undefined' || !(PerformanceObserver in window)) return;

    try {;

const observer = new PerformanceObserver((list) => {;;

        for (const entry of list.getEntries()) {
          if (entry.name === type) {
>>>>>>> origin/main
            callback(entry);

        }

      });
<<<<<<< HEAD
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer)} catch (error) {}
      // console.warn removed for production;
=======

      observer.observe({ entryTypes: [paint] });

      this.observers.push(observer)} catch (error) {
      // console.warn removed for production
>>>>>>> origin/main
}

  }

<<<<<<< HEAD
  private observeLCP(): void {}
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
    try {;
const observer = new PerformanceObserver((list) => {;
const entries="list.getEntries();"
const lastEntry = "entries[entries.length - 1];"
        this.metrics.largestContentfulPaint="lastEntry.startTime});"
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer)} catch (error) {}
      // console.warn removed for production;
=======
  private observeLCP(): void {
    if (typeof window === 'undefined' || !(PerformanceObserver in window)) return;

    try {;

const observer = new PerformanceObserver((list) => {;;

const entries = list.getEntries();;

const lastEntry = entries[entries.length - 1];;

        this.metrics.largestContentfulPaint = lastEntry.startTime});

      observer.observe({ entryTypes: [largest-contentful-paint] });

      this.observers.push(observer)} catch (error) {
      // console.warn removed for production
>>>>>>> origin/main
}

  }

<<<<<<< HEAD
  private observeFID(): void {}
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
    try {;
const observer = new PerformanceObserver((list) => {}
        for (const entry of list.getEntries()) {}
          this.metrics.firstInputDelay = "entry.processingStart - entry.startTime}"
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer)} catch (error) {}
      // console.warn removed for production;
=======
  private observeFID(): void {
    if (typeof window === 'undefined' || !(PerformanceObserver in window)) return;

    try {;

const observer = new PerformanceObserver((list) => {;;

        for (const entry of list.getEntries()) {
          this.metrics.firstInputDelay = entry.processingStart - entry.startTime}

      });

      observer.observe({ entryTypes: [first-input] });

      this.observers.push(observer)} catch (error) {
      // console.warn removed for production
>>>>>>> origin/main
}

  }

<<<<<<< HEAD
  private observeCLS(): void {}
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
    try {;
let clsValue="0;"
const observer = new PerformanceObserver((list) => {}
        for (const entry of list.getEntries()) {}
          if (!(entry as any).hadRecentInput) {}
=======
  private observeCLS(): void {
    if (typeof window === 'undefined' || !(PerformanceObserver in window)) return;

    try {;

let clsValue = 0;;

const observer = new PerformanceObserver((list) => {;;

        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
>>>>>>> origin/main
            clsValue += (entry as any).value}

        }
<<<<<<< HEAD
        this.metrics.cumulativeLayoutShift="clsValue});"
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer)} catch (error) {}
      // console.warn removed for production;
=======

        this.metrics.cumulativeLayoutShift = clsValue});

      observer.observe({ entryTypes: [layout-shift] });

      this.observers.push(observer)} catch (error) {
      // console.warn removed for production
>>>>>>> origin/main
}

  }

  public getMetrics(): PerformanceMetrics {}
    return { ...this.metrics }}

  public getLoadTime(): number {}
    return this.metrics.loadTime}

  public getFirstContentfulPaint(): number {}
    return this.metrics.firstContentfulPaint}

  public getLargestContentfulPaint(): number {}
    return this.metrics.largestContentfulPaint}

  public getFirstInputDelay(): number {}
    return this.metrics.firstInputDelay}

  public getCumulativeLayoutShift(): number {}
    return this.metrics.cumulativeLayoutShift}

<<<<<<< HEAD
  public isPerformanceGood(): boolean {}
    return (
=======
  public isPerformanceGood(): boolean {
  return (

>>>>>>> origin/main
      this.metrics.firstContentfulPaint < 1800 &&
      this.metrics.largestContentfulPaint < 2500 &&
      this.metrics.firstInputDelay < 100 &&
      this.metrics.cumulativeLayoutShift < 0.1);
<<<<<<< HEAD
  public cleanup(): void {}
    this.observers.forEach(observer = "> observer.disconnect());"
    this.observers="[]}"
}

export const performanceMonitor = "new PerformanceMonitor();"
// Utility functions;
export const measureFunction = <T extends (...args: any[]) => any>(
=======

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());

    this.observers = []}

}

export const performanceMonitor = new PerformanceMonitor();;

// Utility functions
export const measureFunction = <T extends (...args: any[]) => any>(;;

>>>>>>> origin/main
  fn: T,
  name?: string;
): T = "> {}"
return ((...args: Parameters<T></T>
);

}) => {;
<<<<<<< HEAD
const start="performance.now();"
const result="fn(...args);"
const end="performance.now();"
    if (name) {}
      // console.log removed for production;
=======

const start = performance.now();;

const result = fn(...args);;

const end = performance.now();;

    if (name) {
      // console.log removed for production
>>>>>>> origin/main
}

    return result}) as T}

export const debounce = <T extends (...args: any[]) => any>(;;

  func: T,
<<<<<<< HEAD
  wait: number;
): T = "> {}"
return (
=======
  wait: number
): T => {
  return (

>>>>>>> origin/main
;

let timeout: NodeJS.Timeout;
<<<<<<< HEAD
  return ((...args: Parameters<T></T>
);
}) => {}
=======

  return ((...args: Parameters<T>
);

}) => {
>>>>>>> origin/main
    clearTimeout(timeout);

    timeout = setTimeout(() => func(...args), wait)}) as T}

export const throttle = <T extends (...args: any[]) => any>(;;

  func: T,
<<<<<<< HEAD
  limit: number;
): T = "> {}"
return (
=======
  limit: number
): T => {
  return (

>>>>>>> origin/main
;

let inThrottle: boolean;
<<<<<<< HEAD
  return ((...args: Parameters<T></T>
);
}) => {}
    if (!inThrottle) {}
      func(...args);
      inThrottle="true;"
      setTimeout(() => inThrottle = "false, limit);"
  }) as T}
export const lazyLoad = (callback: () => void): void = "> {}"
  if ('requestIdleCallback' in window) {}
    requestIdleCallback(callback)} else {}
=======

  return ((...args: Parameters<T>
);

}) => {
    if (!inThrottle) {
      func(...args);

      inThrottle = true;

      setTimeout(() => inThrottle = false, limit);

  }) as T}

export const lazyLoad = (callback: () => void): void => {;;

  if ('requestIdleCallback in window) {
    requestIdleCallback(callback)} else {
>>>>>>> origin/main
    setTimeout(callback, 1);

}
<<<<<<< HEAD
export const preloadImage = (src: string): Promise<void> => {}
  return new Promise((resolve, reject) => {;
const img = "new Image();"
    img.onload = () => resolve();
    img.onerror="reject;"
    img.src="src})"
export const preloadImages = (srcs: string[]): Promise<void[]> => {}
  return Promise.all(srcs.map(preloadImage));
=======

export const preloadImage = (src: string): Promise<void> => {;;

  return new Promise((resolve, reject) => {;

const img = new Image();;

    img.onload = () => resolve();

    img.onerror = reject;

    img.src = src})
export const preloadImages = (srcs: string[]): Promise<void[]> => {;;

  return Promise.all(srcs.map(preloadImage));
>>>>>>> origin/main
