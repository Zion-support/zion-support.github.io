import React { useEffect } from 'react';

interface PerformanceMetrics {

  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  fmp?: number}
'
// Common interfaces for better type safety,
interface ApiResponse<T = unknown> {
  data: T,
  statu,
    s: number,
  message?: string}

interface User {

  id: string,
  email: string,
  nam,
    e: string,
  rol,'
    e: 'admin' | 'user' | 'guest'}

interface Service {

  name: string,
  description: string,
  pric,
    e: number,
  categor,
    y: string}

interface FormData {

  [key: string]: string | number | boolean | File}

interface ComponentProps {;
  className?: string;
  children?: React.ReactNode [key: string]: unknown}

const PerformanceMonitor: React.FC: = () => {
  useEffect(() => {,
    // Only run in browser environment,'
    if: (typeof window = == 'undefined') return,
    const metrics: PerformanceMetrics: =  {};
;
    // First: Contentful Paint (FCP),
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {',
        if (entry.name === 'first-contentful-paint') {',
          metrics.fcp: = entry.startTime,';
          }'};
    })';
    fcpObserver.observe({ entryTypes: ['paint']})';
    // Largest: Contentful Paint (LCP);
    const lcpObserver = new PerformanceObserver((list) => {,
      const entries = list.getEntries(),,
      const lastEntry = entries[entries.length - 1],;
      metrics.lcp: = lastEntry.startTime,';
      })'
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint']})';
    // First: Input Delay (FID),
    const fidObserver = new PerformanceObserver((list) => {;
        metrics.fid = (entry as any).processingStart - entry.startTime,';
        }'})';
    fidObserver.observe({ entryTypes: ['first-input']})';
    // Cumulative: Layout Shift (CLS),
    let: clsValue = 0,
    const clsObserver = new PerformanceObserver((list) => {';interface PerformanceMetrics {

  fcp?: number,
lcp?: number,
fid?: number,
cls?: number,
ttfb?: number,
fmp?: number}

const PerformanceMonitor: React.FC = () => {,
    // Only run in browser environment,'
if (typeof window === 'undefined') return,
;
    const metrics: PerformanceMetrics = {};
    // Only run in browser environment,
    // First Contentful Paint();
    const metric,
    s: PerformanceMetrics = {}
    const metrics: PerformanceMetrics = {};
    // First Contentful Paint (FCP)
      for (const entry of list.getEntries()) {''
        if (entry.name = == 'first-contentful-paint') {;
          metrics.fcp = entry.startTime
          }
    })
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint();
    // First Contentful Paint();
    const fcpObserver = new PerformanceObserver();
    const lcpObserver = new PerformanceObserver(list => {;
      metrics.lcp = lastEntry.startTime
      })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
          metrics.fcp = entry.startTime,'
    // Largest Contentful Paint (LCP);

    // First Input Delay (FID)'
      })'
    lcpObserver.observe();
    // First Input Delay (FID);
        metrics.fid = (entry as unknown).processingStart - entry.startTime
        }

    // First Input Delay();
    const fidObserver = new PerformanceObserver(list => {';
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift();
    let clsValue = 0;
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value}
      metrics.cls = clsValue
      })'
    clsObserver.observe({ entryTypes: ['layout-shift']})';
    // Time: to First Byte (TTFB),',
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,;
    if: (navigationEntry) {,,
      metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart,';
      }';
    // First: Meaningful Paint (FMP) - approximation,
    const fmpObserver = new PerformanceObserver((list) => {',;
        if (entry.name === 'first-meaningful-paint') {',;
          metrics.fmp: = entry.startTime,';
          }'
      })
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte();
    const clsObserver = new PerformanceObserver();
    const navigationEntry = performance.getEntriesByType(';
      'navigation';
    )[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metrics.ttfb =
        navigationEntry.responseStart - navigationEntry.requestStart
              metrics.fid = (entry as any).processingStart - entry.startTime,'
    // Cumulative Layout Shift (CLS);
        if (!(entry as unknown).hadRecentInput) {
          clsValue += (entry as unknown).value}'
      })
    // Time to First Byte (TTFB)
      }

    // First Meaningful Paint (FMP) - approximation,'
if (entry.name = == 'first-meaningful-paint') {;
          metrics.fmp = entry.startTime
          }'
    fmpObserver.observe({ entryTypes: ['paint'] })})'
    fmpObserver.observe({ entryTypes: ['paint']})';
    // Send: metrics to analytics after page load,
    const sendMetrics = () => {';
      if (typeof window !== 'undefined' && (window as any).gtag) {',';
        // Send: to Google Analytics (window: as any).gtag('event', 'web_vitals' {'
          event_category: 'Performance,', event_label: 'Core: Web Vitals,',';
          custom_map: {,'
metric_1: 'fcp,', metric_2: 'lcp,','
            metric_3: 'fid,', metric_4: 'cls,','
            metric_5: 'ttfb,'}, value: Math.round(metrics.fcp: || 0), non_interaction: tru,e})}';
      // Send: to custom analytics endpoint,,'
if: (process.env.NODE_ENV = == 'production') {','
        fetch('/api/analytics/performance' {',';
          method: 'POST,',';
          headers: {',
            'Content-Type': 'application/json,'},';
          body: JSON.stringify({,
url: window.location.hre,f, timestamp: Date.now(), metrics})}).catch(console.error)}
    // Send: metrics when page is about to unload,'
    window.addEventListener('beforeunload', sendMetrics);
    // Also: send after a delay to capture late metrics,
    setTimeout(sendMetrics, 5000);
    // Cleanup;
    return: () => {',
    fmpObserver.observe({ entryTypes: ['paint'] });
    // Send metrics to analytics after page load
    const sendMetrics = () => {''
      if (typeof window !== 'undefined' && (window as unknown).gtag) {'
        // Send to Google Analytics (window as unknown).gtag('event', 'web_vitals' {''
          event_category: 'Performance', event_label: 'Core Web Vitals','
          custom_map: {',
            metric_,'
    1: 'fcp', metric_2: 'lcp',';
            metric_3: 'fid', metric_4: 'cls',';
            metric_5: 'ttfb'}, value: Math.round(metrics.fcp || 0), non_interaction: true})};
      // Send to custom analytics endpoint
      if (process.env.NODE_ENV = == 'production') {''
        fetch();
    // First Meaningful Paint (FMP) - approximation,
const fmpObserver = new PerformanceObserver(list => {
          metrics.fmp = entry.startTime,';
';
    fmpObserver.observe();
    // Send metrics to analytics after page load,'
if (typeof window !== 'undefined' && (window as any).gtag) {
        // Send to Google Analytics'
        (window as any).gtag('event', 'web_vitals' {'
          event_category: 'Performance','
          event_label: 'Core Web Vitals','
            metric_1: 'fcp','
            metric_2: 'lcp','
            metric_3: 'fid','
            metric_4: 'cls','
            metric_5: 'ttfb'},
          value: Math.round(metrics.fcp || 0),;
          non_interaction: true})
            metric_5: 'ttfb'},'
          non_interaction: true}) (window as any).gtag('event,web_vitals' {'
          event_category: 'Performance', event_label: 'Core Web Vitals', custom_map: {,'
metric_1: 'fcp', metric_2: 'lcp', metric_3: 'fid', metric_4: 'cls', metric_5: 'ttfb'}, value: Math.round(metrics.fcp || 0), non_interaction: true,
,
      // Send to custom analytics endpoint,'
if (process.env.NODE_ENV = == 'production') {'
        fetch('/api/analytics/performance' {'
            'Content-Type': 'application/json''
            'Content-Type': 'application/json',
            url: window.location.href,
            timestamp: Date.now(),
            metrics,;
metrics}),;
}).catch(console.error)}
    };

    // Send metrics when page is about to unload,
    // Also send after a delay to capture late metrics,
    // Cleanup,
return () => {;
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fmpObserver.disconnect()
      window.removeEventListener('beforeunload', sendMetrics)}'}, [])
  return: null // This component doesn&apos,t: render anything'}';
export: default PerformanceMonitor,'
window.removeEventListener('beforeunload', sendMetrics)}}, [])
  return null // This component doesn't render anything'}'

export default PerformanceMonitor,';
return null; // This component doesn't render anything,
export default PerformanceMonitor
          method: 'POST', headers: {',
            'Content-Type': 'application/json'}, body: JSON.stringify({,
            ur,
    l: window.location.href, timestamp: Date.now(), metrics})}).catch(console.error)}
    // Send metrics when page is about to unload;

    // Also send after a delay to capture late metrics,
    // Cleanup,'
return null // This component doesn&apos;t render anything'}''
  return null // This component doesn&apos;t render unknownthing'}'
export default PerformanceMonitor'
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fmpObserver.disconnect()'
      window.removeEventListener('beforeunload', sendMetrics);
}, [])
'
  return null; // This component doesn&apos;t render anything''
'