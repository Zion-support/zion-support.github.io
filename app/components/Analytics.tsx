<<<<<<< HEAD
'use client'
import React, { useEffect } from 'react'
=======
import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314

const Analytics: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Replace with actual GA ID
      script.async = true;
      document.head.appendChild(script);

      // Initialize gtag
      window.gtag = function() {
        (window.gtag as any).q = (window.gtag as any).q || [];
        (window.gtag as any).q.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', 'G-XXXXXXXXXX'); // Replace with actual GA ID

      // Track page views
      const trackPageView = (url: string) => {
        if (window.gtag) {
          window.gtag('config', 'G-XXXXXXXXXX', {
            page_path: url,
          });
        }
      }

      // Track user interactions
      const trackEvent = (action: string, category: string, label?: string, value?: number) => {
        if (window.gtag) {
          window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
          });
        }
      }

      // Track clicks on important elements
      const handleClick = (event: Event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'A') {
          const link = target as HTMLAnchorElement;
          trackEvent('click', 'link', link.href);
        } else if (target.tagName === 'BUTTON') {
          trackEvent('click', 'button', target.textContent || 'button');
        }
      }

      // Track scroll depth
      let maxScroll = 0;
      const handleScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent;
          trackEvent('scroll', 'engagement', `${scrollPercent}%`);
        }
      }

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        trackEvent('timing', 'engagement', 'time_on_page', timeOnPage);
      }

      document.addEventListener('click', handleClick);
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('beforeunload', trackTimeOnPage);

      return () => {
        document.removeEventListener('click', handleClick);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('beforeunload', trackTimeOnPage);
      }
    }
  }, [])

  return null
}
<<<<<<< HEAD

export default Analytics
=======
export default function Analytics({ className = '', children, ...props }: AnalyticsProps) {
  return (
    <div className={`analytics-component ${className}`} {...props}>
      {children}
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
