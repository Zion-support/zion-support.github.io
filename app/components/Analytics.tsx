
'use client';
import { useEffect } from 'react';

interface AnalyticsProps {
  children: React.ReactNode;

    // Initialize analytics tracking
      // Google Analytics initialization
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
    };

    initAnalytics();
  }, []);

  return <React.Fragment />{children}</React.Fragment>;

// Extend Window interface for gtag
declare global {
  interface Window {
 void;