import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

const AnalyticsTracker: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Track page views
    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_path: url,
        });
      }
    };

    // Track initial page load
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if (process.env.NEXT_PUBLIC_GA_ID) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
        document.head.appendChild(script);

        script.onload = () => {
          (window as any).dataLayer = (window as any).dataLayer || [];
          function gtag(...args: any[]) {
            (window as any).dataLayer.push(args);
          }
          (window as any).gtag = gtag;
          gtag('js', new Date());
          gtag('config', process.env.NEXT_PUBLIC_GA_ID);
        };
      }

      // Track performance metrics
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            
            // Track Core Web Vitals
            const vitals = {
              FCP: perfData.firstContentfulPaint,
              LCP: 0, // Will be tracked by PerformanceObserver
              FID: 0, // Will be tracked by PerformanceObserver
              CLS: 0, // Will be tracked by PerformanceObserver
              TTFB: perfData.responseStart - perfData.requestStart,
              TTI: perfData.domInteractive - perfData.navigationStart,
            };

            // Send to analytics
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'Core Web Vitals',
                value: Math.round(vitals.FCP),
                custom_map: {
                  fcp: Math.round(vitals.FCP),
                  ttfb: Math.round(vitals.TTFB),
                  tti: Math.round(vitals.TTI),
                }
              });
            }
          }, 0);
        });
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Track user interactions
  useEffect(() => {
    const trackInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      
      // Track button clicks
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const buttonText = target.textContent || target.closest('button')?.textContent || 'Unknown Button';
        trackEvent({
          action: 'click',
          category: 'Button',
          label: buttonText
        });
      }

      // Track link clicks
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.closest('a') as HTMLAnchorElement;
        const linkText = link.textContent || 'Unknown Link';
        const linkUrl = link.href || 'Unknown URL';
        
        trackEvent({
          action: 'click',
          category: 'Link',
          label: linkText,
          value: linkUrl.length
        });
      }

      // Track form submissions
      if (target.tagName === 'FORM' || target.closest('form')) {
        trackEvent({
          action: 'submit',
          category: 'Form',
          label: 'Contact Form'
        });
      }
    };

    document.addEventListener('click', trackInteraction);
    return () => {
      document.removeEventListener('click', trackInteraction);
    };
  }, []);

  const trackEvent = (event: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
  };

  // Track scroll depth
  useEffect(() => {
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track milestone scroll depths
        if (scrollPercent >= 25 && maxScroll < 25) {
          trackEvent({
            action: 'scroll',
            category: 'Engagement',
            label: '25% Scroll Depth'
          });
        } else if (scrollPercent >= 50 && maxScroll < 50) {
          trackEvent({
            action: 'scroll',
            category: 'Engagement',
            label: '50% Scroll Depth'
          });
        } else if (scrollPercent >= 75 && maxScroll < 75) {
          trackEvent({
            action: 'scroll',
            category: 'Engagement',
            label: '75% Scroll Depth'
          });
        } else if (scrollPercent >= 90 && maxScroll < 90) {
          trackEvent({
            action: 'scroll',
            category: 'Engagement',
            label: '90% Scroll Depth'
          });
        }
      }
    };

    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AnalyticsTracker;