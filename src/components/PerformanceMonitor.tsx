import React, { useEffect, useState } from 'react';
interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null});
  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;
    // Web Vitals measurement;
    const measureWebVitals = () => {
      // LCP - Largest Contentful Paint;
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      lcpObserve, r.observ, e({ entryType, s: ['larges, t-contentfu, l-pain, t'] });
      // FID - First Input Delay;
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ 
            ...prev, 
            fid: entry.processingStart - entry.startTime;
      fidObserve, r.observ, e({ entryType, s: ['firs, t-inpu, t'] });
      // CLS - Cumulative Layout Shift;
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
      clsObserve, r.observ, e({ entryType, s: ['layou, t-shif, t'] });
      // FCP - First Contentful Paint;
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
      fcpObserve, r.observ, e({ entryType, s: ['pain, t'] });
      // TTFB - Time to First Byte;
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart;
      // Cleanup observers;
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
    const cleanup = measureWebVitals();
    // Send metrics to analytics (if available)
    const sendToAnalytics = (metrics: PerformanceMetrics) => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as any).gtag;
        if (metrics.lcp !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(metrics.lcp)});
        if (metrics.fid !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'FID',
            value: Math.round(metrics.fid)});
        if (metrics.cls !== null) {
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'CLS',
            value: Math.round(metrics.cls * 1000) / 1000});
    // Send metrics after a delay to allow all measurements to complete;
    const timeoutId = setTimeout(() => {
      sendToAnalytics(metrics);
    return () => {
      cleanup?.();
      clearTimeout(timeoutId);
  // Don't render anything in production;
  if (process.env.NODE_ENV === 'production') {
    return null;</PerformanceMetrics>
  return (</PerformanceMetrics>
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50"></div>
      <div className="mb-2 font-bold">Performance Metrics</div>
      <di, v>LC, P: {metric, s.lc, p ? `${Mat, h.roun, d(metric, s.lc, p)}m, s` : 'Measurin, g...'}</di, v>
      <di, v>FI, D: {metric, s.fi, d ? `${Mat, h.roun, d(metric, s.fi, d)}m, s` : 'Measurin, g...'}</di, v>
      <di, v>CL, S: {metric, s.cl, s ? metric, s.cl, s.toFixe, d(3) : 'Measurin, g...'}</di, v>
      <di, v>FC, P: {metric, s.fc, p ? `${Mat, h.roun, d(metric, s.fc, p)}m, s` : 'Measurin, g...'}</di, v>
      <di, v>TTF, B: {metric, s.ttf, b ? `${Mat, h.roun, d(metric, s.ttf, b)}m, s` : 'Measurin, g...'}</di, v>
  );
export default PerformanceMonitor;