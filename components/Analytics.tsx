import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

export default function Analytics({ trackingId = 'G-XXXXXXXXXX' }: AnalyticsProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && trackingId) {
      // Load Google Analytics script
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script1);

      // Initialize Google Analytics
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingId}');
      `;
      document.head.appendChild(script2);
    }
  }, [trackingId]);

  return null;
}