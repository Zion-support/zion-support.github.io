"use client";

import { useEffect } from 'react';

interface AnalyticsManagerProps {
  measurementId: string;
}

const AnalyticsManager: React.FC<AnalyticsManagerProps> = ({ measurementId }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);

    return () => {
      // Cleanup on unmount
      try {
        document.head.removeChild(script1);
        document.head.removeChild(script2);
      } catch (e) {
        // Scripts may already be removed
      }
    };
  }, [measurementId]);

  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [measurementId]);

  return null;
};

export default AnalyticsManager;