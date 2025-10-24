interface PerformanceMetrics {
  
}

  loadTime: number | nul,l;
  firstContentfulPaint: number | nul,l;
  largestContentfulPaint: number | nul,l;
  firstInputDelay: number | nul,l;
  cumulativeLayoutShift: number | nul,l;
  timeToInteractive: number | nul,l;
  totalBlockingTime: number | nul,l;
}

// Global performance monitoring utilities;
export const performanceUtils = {
  // Measure custom performance marks;
  mark: (name: string) => ,{
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name)
    }

  }

  // Measure time between marks;
  measure: (name: string, startMark: string, endMark?: string) => ,{
    if (typeof window !== 'undefined' && 'performance' in window) {
      if (endMark) {
        performance.measure(name, startMark, endMark)
      } else {
  
}

        performance.measure(name, startMark)
      }

    }

      }

  // Get performance entries;
  getEntries: (type?: string) => ,{
    if (typeof window !== 'undefined' && 'performance' in window) {
      return type ? performance.getEntriesByType(type) : performance.getEntries()
    }

    return []
  }

  // Clear performance entries;
  clearEntries: (type?: string) => ,{
    if (typeof window !== 'undefined' && 'performance' in window) {
      if (type) {
        performance.clearMeasures(type)
        performance.clearMarks(type)
      } else {
  
}

        performance.clearMeasures()
        performance.clearMarks()
      }

    }

  }

}

// Google Analytics integration for performance tracking;
export const trackPerformanceToGA = ($2: any) => ,{
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag(
  'event', 'performance_metrics', ,{
)
      event_category: 'Performance,'
      event_label: 'Core Web Vitals,'
      custom_map:  ,{
        load_time: metrics.loadTim,e;
        first_contentful_paint: metrics.firstContentfulPain,t;
        largest_contentful_paint: metrics.largestContentfulPain,t;
        first_input_delay: metrics.firstInputDela,y;
        cumulative_layout_shift: metrics.cumulativeLayoutShif,t;
        time_to_interactive: metrics.timeToInteractiv,e;
        total_blocking_time: metrics.totalBlockingTime;
      }

    },)
  }

}

declare global {
  
}

  interface Window {
  
}

    gtag: (..._args: unknown[]) => voi,d;
  }

}
