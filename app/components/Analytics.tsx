<<<<<<< HEAD
=======
import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
>>>>>>> origin/main
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
interface AnalyticsProps {
<<<<<<< HEAD
}
const Analytics: React.FC<AnalyticsProps> = ({
  measurementId = 'G-XXXXXXXXXX', // Replace with actual GA4 measurement ID
  enabled = process.env.NODE_ENV === 'production'
}) => {
  const location = useLocation();
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;
    // Initialize Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: any[]) {
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector(`script[src*="${measurementId}"]`);
      if (existingScript) {
      }
  // Track page views on route changes
  useEffect(() => {
    if (!enabled || typeof window === 'undefined' || !window.gtag) return;
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
  // Track Core Web Vitals
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;
    const trackWebVitals = () => {
      // Track LCP
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            window.gtag('event', 'web_vitals', {
              name: 'LCP',
              value: Math.round(entry.startTime),
              event_category: 'Web Vitals',
              event_label: 'Largest Contentful Paint',
          }
        }
      // Track FID
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.entryType === 'first-input') {
            window.gtag('event', 'web_vitals', {
              name: 'FID',
              value: Math.round((entry as any).processingStart - entry.startTime),
              event_category: 'Web Vitals',
              event_label: 'First Input Delay',
          }
        }
      // Track CLS
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        window.gtag('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(clsValue * 1000),
          event_category: 'Web Vitals',
          event_label: 'Cumulative Layout Shift',
    // Wait for page to be fully loaded
    if (document.readyState === 'complete') {
    } else {
    }
    return () => {
  // Track custom events
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (!enabled || typeof window === 'undefined' || !window.gtag) return;
  // Track button clicks
  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const button = target.closest('button, a, [role="button"]');
      if (button) {
        const buttonText = button.textContent?.trim() || 'Unknown';
        const buttonId = button.id || button.className;
        trackEvent('button_click', {
          button_text: buttonText,
          button_id: buttonId,
          page_location: window.location.href,
      }
    return () => document.removeEventListener('click', handleClick);
  // Track form submissions
  useEffect(() => {
    const handleSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const formId = form.id || form.className;
      trackEvent('form_submit', {
        form_id: formId,
        page_location: window.location.href,
    return () => document.removeEventListener('submit', handleSubmit);
  // Track scroll depth
  useEffect(() => {
    let maxScroll = 0;
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        // Track at 25%, 50%, 75%, and 100%
        if ([25, 50, 75, 100].includes(scrollPercent)) {
          trackEvent('scroll_depth', {
            scroll_percent: scrollPercent,
            page_location: window.location.href,
        }
      }
    return () => window.removeEventListener('scroll', trackScroll);
  return null; // This component doesn't render anything
=======
  className?: string;
  children?: React.ReactNode;
}

export default function Analytics({ className = '', children, ...props }: AnalyticsProps) {
  return (
    <div className={`analytics-component ${className}`} {...props}>
      {children}
    </div>
  );
}
>>>>>>> origin/main
