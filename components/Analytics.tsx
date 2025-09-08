import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Analytics: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Track page views
    const trackPageView = (url: string) => {
      if (process.env.NODE_ENV === 'production') {
        // In production, you would integrate with your analytics service
        // For now, we'll just log to console in development
        console.log('Page view:', url);
        
        // Example: Google Analytics 4
        // gtag('config', 'GA_MEASUREMENT_ID', {
        //   page_path: url,
        // });
      }
    };

    // Track initial page load
    trackPageView(router.asPath);

    // Track route changes
    const handleRouteChange = (url: string) => {
      trackPageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    // Track user interactions
    if (typeof window === 'undefined') return;

    const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
      if (process.env.NODE_ENV === 'production') {
        console.log('Event:', eventName, parameters);
        
        // Example: Google Analytics 4
        // gtag('event', eventName, parameters);
      }
    };

    // Track button clicks
    const handleButtonClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const buttonText = target.textContent || target.closest('button')?.textContent || 'Unknown';
        trackEvent('button_click', {
          button_text: buttonText,
          page: router.asPath
        });
      }
    };

    // Track form submissions
    const handleFormSubmit = (e: Event) => {
      const target = e.target as HTMLFormElement;
      if (target.tagName === 'FORM') {
        trackEvent('form_submit', {
          form_id: target.id || 'unknown',
          page: router.asPath
        });
      }
    };

    // Track link clicks
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link) {
        const href = link.getAttribute('href');
        const isExternal = href?.startsWith('http') && !href.includes(window.location.hostname);
        
        trackEvent('link_click', {
          link_url: href,
          is_external: isExternal,
          page: router.asPath
        });
      }
    };

    // Add event listeners
    document.addEventListener('click', handleButtonClick);
    document.addEventListener('submit', handleFormSubmit);
    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleButtonClick);
      document.removeEventListener('submit', handleFormSubmit);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [router]);

  return null; // This component doesn't render anything
};

