'use client';
import React, { useEffect } from 'react';

const Analytics: React.FC = () =>{
    useEffect(() => {
    // Google Analytics 4;
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Load Google Analytics;
            script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      document.head.appendChild(script);

      // Initialize GA;
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });

      // Track page views;
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname,
      });
    }

    // Track performance metrics;
    if (typeof window !== 'undefined' && 'performance' in window) {
                              if (window.gtag) {
              window.gtag('event', 'timing_complete', {
                name: 'load',
                value: Math.round(loadTime),
              });
            }
          }
        }
      });

      observer.observe({ entryTypes: ['navigation'] });
    }

    // Track user interactions;
          }
    }
    // Track button clicks;
        buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
                        trackInteraction('click', 'button', text);
      });
    });

    // Track form submissions;
        forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
                        trackInteraction('form_submit', 'form', formName);
      });
    });

    // Track scroll depth;
              if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        trackInteraction('scroll', 'engagement', `${scrollPercent}%`);
      }
    }
    window.addEventListener('scroll', trackScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', trackScroll);
    }
  }, [pathname]);

  return null;
}
// Extend Window interface for TypeScript;
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default Analytics