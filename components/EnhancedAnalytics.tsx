'use client';

import { useEffect } from 'react';

const EnhancedAnalytics = () => {
  useEffect(() => {
    // Google Analytics 4
    const initGA4 = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: {
            'custom_parameter_1': 'roi_metrics',
            'custom_parameter_2': 'content_engagement'
          }
        });
      }
    };

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
          content_group1: 'AI Solutions',
          content_group2: 'Technology Consulting'
        });
      }
    };

    // Track user engagement
    const trackEngagement = () => {
      let engagementTime = 0;
      const startTime = Date.now();

      const trackEngagementTime = () => {
        engagementTime = Date.now() - startTime;
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'engagement_time', {
            engagement_time_msec: engagementTime,
            page_title: document.title,
            page_location: window.location.href
          });
        }
      };

      // Track engagement on page unload
      window.addEventListener('beforeunload', trackEngagementTime);
      
      // Track engagement every 30 seconds
      const interval = setInterval(() => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'engagement_pulse', {
            engagement_time_msec: Date.now() - startTime,
            page_title: document.title
          });
        }
      }, 30000);

      return () => {
        clearInterval(interval);
        window.removeEventListener('beforeunload', trackEngagementTime);
      };
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      let scrollCheckpoints = [25, 50, 75, 90, 100];
      let triggeredCheckpoints = new Set();

      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / documentHeight) * 100);
        
        maxScroll = Math.max(maxScroll, scrollPercent);

        scrollCheckpoints.forEach(checkpoint => {
          if (scrollPercent >= checkpoint && !triggeredCheckpoints.has(checkpoint)) {
            triggeredCheckpoints.add(checkpoint);
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'scroll_depth', {
                scroll_depth_percent: checkpoint,
                page_title: document.title,
                page_location: window.location.href
              });
            }
          }
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    // Track CTA clicks
    const trackCTAClicks = () => {
      const ctaButtons = document.querySelectorAll('[data-cta], .cta-button, [href*="contact"], [href*="consultation"]');
      
      ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          const ctaText = e.target.textContent || e.target.innerText || 'Unknown CTA';
          const ctaLocation = e.target.closest('section')?.className || 'Unknown Section';
          
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'cta_click', {
              cta_text: ctaText,
              cta_location: ctaLocation,
              page_title: document.title,
              page_location: window.location.href
            });
          }
        });
      });
    };

    // Track content engagement
    const trackContentEngagement = () => {
      const contentCards = document.querySelectorAll('[data-content-card], .content-card, .blog-card');
      
      contentCards.forEach(card => {
        card.addEventListener('click', (e) => {
          const contentTitle = e.target.closest('[data-content-card]')?.querySelector('h3, h2, .title')?.textContent || 'Unknown Content';
          const contentType = e.target.closest('[data-content-card]')?.dataset.contentType || 'Unknown Type';
          
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'content_click', {
              content_title: contentTitle,
              content_type: contentType,
              page_title: document.title,
              page_location: window.location.href
            });
          }
        });
      });
    };

    // Initialize all tracking
    initGA4();
    trackPageView();
    const cleanupEngagement = trackEngagement();
    const cleanupScroll = trackScrollDepth();
    
    // Track interactions after DOM is ready
    setTimeout(() => {
      trackCTAClicks();
      trackContentEngagement();
    }, 1000);

    // Cleanup function
    return () => {
      cleanupEngagement();
      cleanupScroll();
    };
  }, []);

  return null;
};

export default EnhancedAnalytics;