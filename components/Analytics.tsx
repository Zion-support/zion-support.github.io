

const trackPerformance = () => {if (typeof window.gtag !== 'undefined' && 'performance' in window) ;'
  }
  const perf = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;'
        if (perf) {const loadTime = (perf.loadEventEnd || 0) - (perf.fetchStart || 0)window.gtag('event', 'page_load_time', {"event_category": 'Performance',"event_label": 'Page Load',"value": Math.round(loadTime)})}'
      }

  return null;
}

export const trackEvent = ("action": string, "category": string, label?: string, value?: number) => {if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {window.gtag('event', action, {"event_category": category,"event_label": label,"value": value})};'
}

export const trackPageView = ("url": string, "title": string) => ;
  const id = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';'
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined' && id) {window.gtag('config', id, {"page_title": title,"page_location": url})}'
}

export default Analytics;