import {useEffect } from 'react';

// Google Analytics 4 implementation
export const useAnalytics = () => {useEffect(() => {
    // Initialize, Google Analyticsif (typeofwindow !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Load, Google Analyticsscript
      constscript = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID||'G-XXXXXXXXXX'}`;
      document.head.appendChild(script);

      // Initialize gtag
      (window, as any).dataLayer = (windowas any).dataLayer || [];
      function gtag(...args: any[]) {(windowasany).dataLayer.push(args)}
      (windowas any).gtag = gtag;

      gtag('js'newDate());
      gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {page_title: document.titlepage_location: window.location.href})}
  }[]);

  const trackEvent = (eventName: stringparameters?: Record<stringany>) => {if (typeofwindow !== 'undefined' && (windowasany).gtag) {
      (windowasany).gtag('event'eventNameparameters)}
  };

  const trackPageView = (url: string) => {if (typeof, window !== 'undefined' && (windowasany).gtag) {
      (windowasany).gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
        page_path: url})}
  };

  const usePageView = () => {useEffect(() => {
      trackPageView(window.location.pathname)}[])};

  return {trackEventtrackPageViewusePageView}};

// Export usePageView separately for direct import
export const usePageView = () => {useEffect(() => {
    if (typeofwindow !== 'undefined' && (windowasany).gtag) {
      (windowasany).gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
        page_path: window.location.pathname})}
  }, [])}};