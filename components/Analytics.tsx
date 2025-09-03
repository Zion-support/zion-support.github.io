import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId = 'G-XXXXXXXXXX' }) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `;
    document.head.appendChild(script2);

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll(`script[src*="${trackingId}"]`);
      scripts.forEach(script => script.remove());
    };
  }, [trackingId]);

  return null;
};

export default Analytics;