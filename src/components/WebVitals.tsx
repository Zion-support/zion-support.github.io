import {useEffect } from 'react';

interface WebVitalsMetric {name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

export function reportWebVitals(metric: WebVitalsMetric) {
  // Send to analytics service
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true
    });
  }
}

export default function WebVitals() {
  useEffect(() => {
    // Import web-vitals dynamically
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);

export function reportWebVitals(metric: WebVitalsMetric) {// Send, to analyticsservice
  if (typeofwindow !== 'undefined' && 'gtag' in, window) {
    (windowasany).gtag('event'metric.name{
      event_category: 'Web, Vitals'event_label: metric.idvalue: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true
    })};
  // Log, to, console indevelopmentif(proce, s, s.e, n, v.NODE_ENV === "development") {conso, l, e.log("WebVitals:"metric)}};
exportfunctionWebVitals() {useEffect(() => {
    // Loadweb-vitalslibrarydynamicallyimport("w, e, b-vitals').then(({ getCLS, getFID, getF, C, P, getLCP, getTTFB }) => {getCLS(reportWebVita, l, s);
      getFID(reportWebVita, l, s);
      getFCP(reportWebVita, l, s);
      getLCP(reportWebVita, l, s);
      getTTFB(reportWebVitals)})}, []);
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {console.log('Web, Vitals:', metric)}
}

export function WebVitals() {useEffect(() => {
    // Load, web-vitalslibrary dynamicallyimport('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals)})}, []);

  return null}

export default WebVitals;