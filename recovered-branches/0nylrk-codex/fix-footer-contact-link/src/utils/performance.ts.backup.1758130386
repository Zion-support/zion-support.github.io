// Performance monitoring and optimization utilities

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

export class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];
  
  constructor() {
    this.initializeMetrics();
    this.setupObservers();
  }
  
  private initializeMetrics() {
    // Get basic load time
    if (performance.timing) {
      this.metrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    }
    
    // Get Web Vitals
    this.getWebVitals();
  }
  
  private getWebVitals() {
    // First Contentful Paint
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      this.metrics.firstContentfulPaint = fcpEntry.startTime;
    }
    
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.largestContentfulPaint = lastEntry.startTime;
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.push(lcpObserver);
    
    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
    this.observers.push(fidObserver);
    
    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.cumulativeLayoutShift = clsValue;
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(clsObserver);
  }
  
  private setupObservers() {
    // Time to Interactive
    const ttiObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure' && entry.name === 'time-to-interactive') {
          this.metrics.timeToInteractive = entry.startTime;
        }
      });
    });
    ttiObserver.observe({ entryTypes: ['measure'] });
    this.observers.push(ttiObserver);
  }
  
  public getMetrics(): PerformanceMetrics {
    return this.metrics as PerformanceMetrics;
  }
  
  public reportMetrics() {
    const metrics = this.getMetrics();
    console.log('Performance Metrics:', metrics);
    
    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        event_label: 'Web Vitals',
        value: Math.round(metrics.loadTime || 0),
        custom_map: {
          fcp: Math.round(metrics.firstContentfulPaint || 0),
          lcp: Math.round(metrics.largestContentfulPaint || 0),
          fid: Math.round(metrics.firstInputDelay || 0),
          cls: Math.round(metrics.cumulativeLayoutShift || 0),
          tti: Math.round(metrics.timeToInteractive || 0)
        }
      });
    }
  }
  
  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Image optimization utility
export const optimizeImage = (src: string, width?: number, height?: number, quality: number = 80): string => {
  // If using a CDN like Cloudinary or similar, add optimization parameters
  if (src.includes('cloudinary.com') || src.includes('images.unsplash.com')) {
    const params = new URLSearchParams();
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    params.append('q', quality.toString());
    params.append('f', 'auto'); // Auto format
    params.append('c', 'fill'); // Crop mode
    
    const separator = src.includes('?') ? '&' : '?';
    return `${src}${separator}${params.toString()}`;
  }
  
  return src;
};

// Lazy loading utility
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Resource preloading utility
export const preloadResource = (href: string, as: string, type?: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
};

// Critical CSS inlining utility
export const inlineCriticalCSS = (css: string) => {
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.insertBefore(style, document.head.firstChild);
};

// Bundle size monitoring
export const getBundleSize = (): number => {
  const scripts = document.querySelectorAll('script[src]');
  let totalSize = 0;
  
  scripts.forEach(script => {
    const src = script.getAttribute('src');
    if (src && src.includes('assets/')) {
      // This is a rough estimate - in production, you'd want to measure actual file sizes
      totalSize += 100; // Placeholder
    }
  });
  
  return totalSize;
};

// Memory usage monitoring
export const getMemoryUsage = (): any => {
  if ('memory' in performance) {
    return (performance as any).memory;
  }
  return null;
};

export default PerformanceMonitor;