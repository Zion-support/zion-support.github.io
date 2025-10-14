import { useEffect } from 'react';

interface Performance Metrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number
  }

interface Performance Event Timing extends Performance Entry {
  processing Start?: number
  }

interface Layout Shift extends Performance Entry {
  had Recent Input: boolean;
  value: number
  }

const PerformanceMonitor = () => {
  use Effect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const metrics: Performance Metrics = {};

    // Measure Largest Contentful Paint (LCP)
    const lcp Observer = new Performance Observer((list) => {
      const entries = list.get Entries();
      const last Entry = entries[entries.length - 1];
      metrics.lcp = last Entry.start Time
  });
    lcp Observer.observe({ entry Types: ['largest-contentful-paint'] });

    // Measure First Input Delay (FID)
    const fid Observer = new Performance Observer((list) => {
      const entries = list.get Entries();
      entries.for Each((entry) => {
        const fid Entry = entry as Performance Event Timing;
        if (fid Entry.processing Start) {
          metrics.fid = fid Entry.processing Start - fid Entry.start Time
  }
      })
  });
    fid Observer.observe({ entry Types: ['first-input'] });

    // Measure Cumulative Layout Shift (CLS)
    let cls Value = 0;
    const cls Observer = new Performance Observer((list) => {
      const entries = list.get Entries();
      entries.for Each((entry) => {
        const layout Shift Entry = entry as Layout Shift;
        if (!layout Shift Entry.had Recent Input) {
          cls Value += layout Shift Entry.value
  }
      });
      metrics.cls = cls Value
  });
    cls Observer.observe({ entry Types: ['layout-shift'] });

    // Measure First Contentful Paint (FCP)
    const fcp Observer = new Performance Observer((list) => {
      const entries = list.get Entries();
      entries.for Each((entry) => {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.start Time
  }
      })
  });
    fcp Observer.observe({ entry Types: ['paint'] });

    // Measure Time to First Byte (TTFB)
    const navigation Entry = performance.get Entries By Type('navigation')[0] as Performance Navigation Timing;
    if (navigation Entry) {
      metrics.ttfb = navigation Entry.response Start - navigation Entry.request Start
  }

    // Send metrics after page load
    const send Metrics = () => {
      if (Object.keys(metrics).length > 0) {
        // In a real application, you would send these metrics to your analytics service
        console.log('Performance Metrics: ', metrics)
  }
    };

    // Send metrics when page is about to unload
    window.add Event Listener('beforeunload', send Metrics);

    // Cleanup observers
    return () => {
      lcp Observer.disconnect();
      fid Observer.disconnect();
      cls Observer.disconnect();
      fcp Observer.disconnect();
      window.remove Event Listener('beforeunload', send Metrics)
  }
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  // Development mode: show performance metrics
  const metrics: Performance Metrics = {};

  const get Score Color = (value: number | undefined, thresholds: { good: number; poor: number }) => {
    if (!value) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500'
  };

  return (
    <div className="fixedbottom-4 right-4bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs font-mono">
      <div className="font-boldmb-2">Performance Metrics</div>
      <div className="space-y-1">
        <div className="flexjustify-between">
          <span>FCP: </span>
          <span className={get Score Color(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flexjustify-between">
          <span>LCP: </span>
          <span className={get Score Color(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flexjustify-between">
          <span>FID: </span>
          <span className={get Score Color(metrics.fid, { good: 100, poor: 300 })}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flexjustify-between">
          <span>CLS: </span>
          <span className={get Score Color(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls ? metrics.cls.to Fixed(3) : 'N/A'}
          </span>
        </div>
        <div className="flexjustify-between">
          <span>TTFB: </span>
          <span className={get Score Color(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  )
  };

export default PerformanceMonitor;