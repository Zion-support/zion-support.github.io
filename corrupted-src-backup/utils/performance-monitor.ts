interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  navigationStart: number;
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number | null;
  firstContentfulPaint: number | null;
}

interface UserInteraction {
  type: 'click' | 'scroll' | 'keydown' | 'resize';
  timestamp: number;
  element?: string;
  duration?: number;
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics;
  private interactions: UserInteraction[] = [];
  private isInitialized: boolean = false;
  private observer: PerformanceObserver | null = null;

  private constructor() {
    this.metrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
      navigationStart: performance.now(),
      loadTime: 0,
      domContentLoaded: 0,
      firstPaint: null,
      firstContentfulPaint: null,
    };
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  init(): void {
    if (this.isInitialized) {
      return;
    }

    this.setupPerformanceObserver();
    this.trackUserInteractions();
    this.measureCoreWebVitals();
    this.trackPageLoadMetrics();

    this.isInitialized = true;
//     }

  private setupPerformanceObserver(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    try {
      this.observer = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          this.processPerformanceEntry(entry);
        }
      });

      // Observe different types of performance entries
      this.observer.observe({
        entryTypes: [
          'paint',
          'largest-contentful-paint',
          'first-input',
          'layout-shift',
        ],
      });
    } catch (error) {
//       }
  }

  private processPerformanceEntry(entry: PerformanceEntry): void {
    switch (entry.entryType) {
      case 'paint':
        if (entry.name === 'first-paint') {
          this.metrics.firstPaint = entry.startTime;
        } else if (entry.name === 'first-contentful-paint') {
          this.metrics.firstContentfulPaint = entry.startTime;
          this.metrics.fcp = entry.startTime;
        }
        break;
      case 'largest-contentful-paint':
        this.metrics.lcp = entry.startTime;
        break;
      case 'first-input':
        this.metrics.fid = entry.processingStart - entry.startTime;
        break;
      case 'layout-shift':
        if (!(entry as any).hadRecentInput) {
          this.metrics.cls = (this.metrics.cls || 0) + (entry as any).value;
        }
        break;
    }
  }

  private trackUserInteractions(): void {
    if (typeof window === 'undefined') return;

    const interactionTypes: (keyof WindowEventMap)[] = [
      'click',
      'scroll',
      'keydown',
      'resize',
    ];

    interactionTypes.forEach(type => {
      window.addEventListener(
        type,
        event => {
          const interaction: UserInteraction = {
            type: type as UserInteraction['type'],
            timestamp: performance.now(),
            element: (event.target as Element)?.tagName?.toLowerCase(),
          };

          this.interactions.push(interaction);

          // Keep only last 100 interactions
          if (this.interactions.length > 100) {
            this.interactions = this.interactions.slice(-100);
          }
        },
        { passive: true }
      );
    });
  }

  private measureCoreWebVitals(): void {
    if (typeof window === 'undefined') return;

    // Measure Time to First Byte
    if (performance.timing) {
      this.metrics.ttfb =
        performance.timing.responseStart - performance.timing.navigationStart;
    }

    // Measure page load time
    window.addEventListener('load', () => {
      this.metrics.loadTime = performance.now() - this.metrics.navigationStart;
    });

    // Measure DOM content loaded
    document.addEventListener('DOMContentLoaded', () => {
      this.metrics.domContentLoaded =
        performance.now() - this.metrics.navigationStart;
    });
  }

  private trackPageLoadMetrics(): void {
    if (typeof window === 'undefined') return;

    // Track resource loading
    const _resources = performance.getEntriesByType('resource');
    const totalResourceSize = resources.reduce((total, resource) => {
      return total + (resource.transferSize || 0);
    }, 0);

//     console.log(
      `Total resources loaded: ${resources.length}, Total size: ${(totalResourceSize / 1024).toFixed(2)} KB`
    );
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  getInteractions(): UserInteraction[] {
    return [...this.interactions];
  }

  getPerformanceScore(): number {
    const { lcp, fid, cls, fcp } = this.metrics;
    let _score = 100;

    // LCP scoring (Good: <2.5s, Needs Improvement: 2.5-4s, Poor: >4s)
    if (lcp !== null) {
      if (lcp > 4000) score -= 30;
      else if (lcp > 2500) score -= 15;
    }

    // FID scoring (Good: <100ms, Needs Improvement: 100-300ms, Poor: >300ms)
    if (fid !== null) {
      if (fid > 300) score -= 30;
      else if (fid > 100) score -= 15;
    }

    // CLS scoring (Good: <0.1, Needs Improvement: 0.1-0.25, Poor: >0.25)
    if (cls !== null) {
      if (cls > 0.25) score -= 30;
      else if (cls > 0.1) score -= 15;
    }

    // FCP scoring (Good: <1.8s, Needs Improvement: 1.8-3s, Poor: >3s)
    if (fcp !== null) {
      if (fcp > 3000) score -= 10;
      else if (fcp > 1800) score -= 5;
    }

    return Math.max(0, score);
  }

  generateReport(): string {
    const _metrics = this.getMetrics();
//     const score = this.getPerformanceScore();
    const _interactions = this.getInteractions();

    return `
Performance Report:
Overall Score: ${score}/100

Core Web Vitals:
- LCP: ${metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}
- FID: ${metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}
- CLS: ${metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}
- FCP: ${metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}

Page Load Metrics:
- TTFB: ${metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}
- Load Time: ${metrics.loadTime ? `${metrics.loadTime.toFixed(2)}ms` : 'N/A'}
- DOM Content Loaded: ${metrics.domContentLoaded ? `${metrics.domContentLoaded.toFixed(2)}ms` : 'N/A'}

User Interactions: ${interactions.length}
- Clicks: ${interactions.filter(i => i.type === 'click').length}
- Scrolls: ${interactions.filter(i => i.type === 'scroll').length}
- Keydowns: ${interactions.filter(i => i.type === 'keydown').length}
- Resizes: ${interactions.filter(i => i.type === 'resize').length}
    `.trim();
  }

  cleanup(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.isInitialized = false;
//     }
}

export default PerformanceMonitor;
