import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  trackingId = process.env.REACT_APP_GA_TRACKING_ID 
}) => {
  const location = useLocation();

  useEffect(() => {
    if (!trackingId) return;

    // Initialize Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Configure gtag
    window.gtag = window.gtag || function() {
      (window.gtag.q = window.gtag.q || []).push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      document.head.removeChild(script);
    };
  }, [trackingId]);

  useEffect(() => {
    if (!window.gtag) return;

    // Track page views
    window.gtag('config', trackingId, {
      page_path: location.pathname,
      page_title: document.title,
    });
  }, [location, trackingId]);

  return null;
};

export default Analytics;
