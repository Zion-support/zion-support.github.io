/**
 * Performance Monitoring Utility
 * Provides comprehensive performance tracking and reporting
 */

export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
}

export interface PerformanceThresholds {
  fcp: { good: number; needsImprovement: number };
  lcp: { good: number; needsImprovement: number };
  fid: { good: number; needsImprovement: number };
  cls: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
}

// Performance thresholds based on Core Web Vitals
const PERFORMANCE_THRESHOLDS: PerformanceThresholds = {
  fcp: { good: 1800, needsImprovement: 3000 },
  lcp: { good: 2500, needsImprovement: 4000 },
  fid: { good: 100, needsImprovement: 300 },
  cls: { good: 0.1, needsImprovement: 0.25 },
  ttfb: { good: 800, needsImprovement: 1800 },
};

/**
 * Get rating for a metric
 */
export function getMetricRating(
  metric: keyof PerformanceThresholds,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = PERFORMANCE_THRESHOLDS[metric];
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.needsImprovement) return 'needs-improvement';
  return 'poor';
}

/**
 * Collect all performance metrics
 */
export function collectPerformanceMetrics(): PerformanceMetrics | null {
  if (typeof window === 'undefined' || !window.performance) {
    return null;
  }

  const perfData = window.performance.timing;
  const paint = window.performance.getEntriesByType('paint');

  return {
    fcp:
      paint.find((entry) => entry.name === 'first-contentful-paint')
        ?.startTime || 0,
    lcp: 0, // Would need PerformanceObserver for accurate LCP
    fid: 0, // Would need PerformanceObserver for accurate FID
    cls: 0, // Would need PerformanceObserver for accurate CLS
    ttfb: perfData.responseStart - perfData.navigationStart,
    domLoad: perfData.domContentLoadedEventEnd - perfData.navigationStart,
    windowLoad: perfData.loadEventEnd - perfData.navigationStart,
  };
}

/**
 * Generate performance report
 */
export function generatePerformanceReport(): {
  metrics: PerformanceMetrics | null;
  ratings: Record<string, string>;
  score: number;
  recommendations: string[];
} {
  const metrics = collectPerformanceMetrics();
  
  if (!metrics) {
    return {
      metrics: null,
      ratings: {},
      score: 0,
      recommendations: ['Performance API not available'],
    };
  }

  const ratings: Record<string, string> = {
    fcp: getMetricRating('fcp', metrics.fcp),
    lcp: getMetricRating('lcp', metrics.lcp),
    fid: getMetricRating('fid', metrics.fid),
    cls: getMetricRating('cls', metrics.cls),
    ttfb: getMetricRating('ttfb', metrics.ttfb),
  };

  // Calculate overall score (0-100)
  const goodCount = Object.values(ratings).filter((r) => r === 'good').length;
  const score = Math.round((goodCount / Object.keys(ratings).length) * 100);

  // Generate recommendations
  const recommendations: string[] = [];
  
  if (ratings.fcp !== 'good') {
    recommendations.push(
      'Optimize First Contentful Paint: Reduce render-blocking resources, use font-display: swap, and optimize critical CSS.'
    );
  }
  
  if (ratings.lcp !== 'good') {
    recommendations.push(
      'Improve Largest Contentful Paint: Optimize images, preload key resources, and ensure fast server response times.'
    );
  }
  
  if (ratings.fid !== 'good') {
    recommendations.push(
      'Reduce First Input Delay: Break up long JavaScript tasks, use web workers, and defer non-critical JavaScript.'
    );
  }
  
  if (ratings.cls !== 'good') {
    recommendations.push(
      'Minimize Cumulative Layout Shift: Set explicit dimensions for images and embeds, avoid inserting content above existing content.'
    );
  }
  
  if (ratings.ttfb !== 'good') {
    recommendations.push(
      'Improve Time to First Byte: Optimize server response times, use CDN, enable caching, and consider using edge functions.'
    );
  }

  return {
    metrics,
    ratings,
    score,
    recommendations,
  };
}

/**
 * Log performance metrics to console in development
 */
export function logPerformanceMetrics(): void {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const report = generatePerformanceReport();
  
  if (!report.metrics) {
    return;
  }

  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable no-console */
    console.group('📊 Performance Report');
    console.log('Score:', `${report.score}/100`);
    console.log('Metrics:', report.metrics);
    console.log('Ratings:', report.ratings);
    
    if (report.recommendations.length > 0) {
      console.group('💡 Recommendations');
      report.recommendations.forEach((rec, i) => {
        console.log(`${i + 1}.`, rec);
      });
      console.groupEnd();
    }
    
    console.groupEnd();
    /* eslint-enable no-console */
  }
}

/**
 * Send performance metrics to analytics
 */
export function sendPerformanceMetrics(): void {
  const report = generatePerformanceReport();
  
  if (!report.metrics || typeof window === 'undefined') {
    return;
  }

  // Send to Google Analytics if available
  if ('gtag' in window) {
    const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
    
    Object.entries(report.metrics).forEach(([key, value]) => {
      if (value > 0) {
        gtag('event', `performance_${key}`, {
          event_category: 'Performance',
          value: Math.round(value),
          non_interaction: true,
        });
      }
    });
    
    gtag('event', 'performance_score', {
      event_category: 'Performance',
      value: report.score,
      non_interaction: true,
    });
  }
}

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring(): void {
  if (typeof window === 'undefined') {
    return;
  }

  // Wait for page load
  window.addEventListener('load', () => {
    // Add small delay to ensure all metrics are available
    setTimeout(() => {
      logPerformanceMetrics();
      sendPerformanceMetrics();
    }, 1000);
  });
}
