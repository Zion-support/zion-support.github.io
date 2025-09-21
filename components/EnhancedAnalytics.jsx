import React, { useEffect } from 'react';

export const EnhancedAnalytics = () => {
  useEffect(() => {
    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track performance metrics
    const trackPerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0];
            const paint = performance.getEntriesByType('paint');
            
            if (navigation && paint) {
              const metrics = {
                page_load_time: navigation.loadEventEnd - navigation.fetchStart,
                dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
                first_contentful_paint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
                largest_contentful_paint: 0
              };

              // Track LCP if available
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                  const entries = list.getEntries();
                  const lastEntry = entries[entries.length - 1];
                  metrics.largest_contentful_paint = lastEntry.startTime;
                  
                  // Send to analytics
                  if (window.gtag) {
                    window.gtag('event', 'web_vitals', {
                      event_category: 'Performance',
                      event_label: 'LCP',
                      value: Math.round(metrics.largest_contentful_paint)
                    });
                  }
                });
                
                try {
                  observer.observe({ entryTypes: ['largest-contentful-paint'] });
                } catch (e) {
                  // LCP not supported
                }
              }

              // Send performance metrics
              if (window.gtag) {
                Object.entries(metrics).forEach(([key, value]) => {
                  window.gtag('event', 'web_vitals', {
                    event_category: 'Performance',
                    event_label: key,
                    value: Math.round(value)
                  });
                });
              }
            }
          }, 0);
        });
      }
    };

    // Track user interactions
    const trackInteractions = () => {
      if (typeof window !== 'undefined') {
        // Track clicks on important elements
        document.addEventListener('click', (e) => {
          const element = e.target;
          const tagName = element.tagName.toLowerCase();
          
          if (tagName === 'a') {
            const href = element.getAttribute('href');
            const text = element.textContent?.trim();
            
            if (window.gtag && href) {
              window.gtag('event', 'click', {
                event_category: 'Navigation',
                event_label: text || href,
                value: href
              });
            }
          }
          
          if (element.classList.contains('cta-button')) {
            if (window.gtag) {
              window.gtag('event', 'click', {
                event_category: 'CTA',
                event_label: element.textContent?.trim() || 'CTA Button'
              });
            }
          }
        });

        // Track form submissions
        document.addEventListener('submit', (e) => {
          const form = e.target;
          if (window.gtag && form.tagName.toLowerCase() === 'form') {
            window.gtag('event', 'form_submit', {
              event_category: 'Form',
              event_label: form.id || form.className || 'Unknown Form'
            });
          }
        });

        // Track scroll depth
        let maxScroll = 0;
        const trackScrollDepth = () => {
          const scrollPercent = Math.round(
            (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
          );
          
          if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            // Track milestone scroll depths
            if (maxScroll >= 25 && maxScroll < 50) {
              if (window.gtag) {
                window.gtag('event', 'scroll', {
                  event_category: 'Engagement',
                  event_label: '25%',
                  value: 25
                });
              }
            } else if (maxScroll >= 50 && maxScroll < 75) {
              if (window.gtag) {
                window.gtag('event', 'scroll', {
                  event_category: 'Engagement',
                  event_label: '50%',
                  value: 50
                });
              }
            } else if (maxScroll >= 75 && maxScroll < 90) {
              if (window.gtag) {
                window.gtag('event', 'scroll', {
                  event_category: 'Engagement',
                  event_label: '75%',
                  value: 75
                });
              }
            } else if (maxScroll >= 90) {
              if (window.gtag) {
                window.gtag('event', 'scroll', {
                  event_category: 'Engagement',
                  event_label: '90%',
                  value: 90
                });
              }
            }
          }
        };

        window.addEventListener('scroll', trackScrollDepth, { passive: true });
      }
    };

    // Track time on page
    const trackTimeOnPage = () => {
      if (typeof window !== 'undefined') {
        const startTime = Date.now();
        
        window.addEventListener('beforeunload', () => {
          const timeOnPage = Date.now() - startTime;
          
          if (window.gtag && timeOnPage > 1000) { // Only track if user spent more than 1 second
            window.gtag('event', 'page_view_time', {
              event_category: 'Engagement',
              event_label: 'Time on Page',
              value: Math.round(timeOnPage / 1000) // Convert to seconds
            });
          }
        });
      }
    };

    // Initialize tracking
    trackPageView();
    trackPerformance();
    trackInteractions();
    trackTimeOnPage();

    // Track errors
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (e) => {
        if (window.gtag) {
          window.gtag('event', 'exception', {
            description: e.message,
            fatal: false
          });
        }
      });

      window.addEventListener('unhandledrejection', (e) => {
        if (window.gtag) {
          window.gtag('event', 'exception', {
            description: e.reason?.toString() || 'Unhandled Promise Rejection',
            fatal: false
          });
        }
      });
    }
  }, []);

  return null; // This component doesn't render anything
};