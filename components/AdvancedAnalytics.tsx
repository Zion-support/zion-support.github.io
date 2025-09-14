'use client';

import { useEffect, useState } from 'react';

const AdvancedAnalytics = () => {
  const [sessionId] = useState(() => Math.random().toString(36).substr(2, 9));
  const [pageStartTime] = useState(() => Date.now());

  useEffect(() => {
    // Enhanced Analytics Implementation
    const initAnalytics = () => {
      // Google Analytics 4 Configuration
      const GA4_CONFIG = {
        measurement_id: 'G-XXXXXXXXXX', // Replace with actual GA4 ID
        custom_map: {
          'custom_parameter_1': 'roi_metrics',
          'custom_parameter_2': 'content_engagement',
          'custom_parameter_3': 'conversion_funnel',
          'custom_parameter_4': 'user_journey'
        }
      };

      // Initialize GA4
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA4_CONFIG.measurement_id, {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: GA4_CONFIG.custom_map,
          send_page_view: true
        });
      }

      // Enhanced Event Tracking
      const trackEvent = (eventName: string, parameters: any = {}) => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', eventName, {
            ...parameters,
            session_id: sessionId,
            timestamp: Date.now(),
            page_title: document.title,
            page_location: window.location.href
          });
        }
      };

      // User Engagement Tracking
      const trackEngagement = () => {
        let engagementTime = 0;
        let maxScroll = 0;
        let clickCount = 0;
        let formInteractions = 0;
        let videoViews = 0;
        let downloadCount = 0;

        // Time on page tracking
        const startTime = Date.now();
        const trackTimeOnPage = () => {
          engagementTime = Date.now() - startTime;
          trackEvent('engagement_time', {
            engagement_time_msec: engagementTime,
            time_on_page: Math.round(engagementTime / 1000)
          });
        };

        // Scroll depth tracking
        const trackScrollDepth = () => {
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
                trackEvent('scroll_depth', {
                  scroll_depth_percent: checkpoint,
                  max_scroll_depth: maxScroll
                });
              }
            });
          };

          window.addEventListener('scroll', handleScroll, { passive: true });
          return () => window.removeEventListener('scroll', handleScroll);
        };

        // Click tracking
        const trackClicks = () => {
          document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            clickCount++;

            // CTA tracking
            if (target.closest('[data-cta]') || target.closest('.cta-button')) {
              const ctaText = target.textContent || target.innerText || 'Unknown CTA';
              const ctaLocation = target.closest('section')?.className || 'Unknown Section';
              
              trackEvent('cta_click', {
                cta_text: ctaText,
                cta_location: ctaLocation,
                click_count: clickCount
              });
            }

            // Link tracking
            if (target.tagName === 'A') {
              const linkText = target.textContent || target.innerText;
              const linkUrl = target.getAttribute('href');
              
              trackEvent('link_click', {
                link_text: linkText,
                link_url: linkUrl,
                link_type: target.getAttribute('data-link-type') || 'internal'
              });
            }

            // Button tracking
            if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
              const buttonText = target.textContent || target.innerText;
              const buttonType = target.getAttribute('data-button-type') || 'unknown';
              
              trackEvent('button_click', {
                button_text: buttonText,
                button_type: buttonType,
                click_count: clickCount
              });
            }
          });
        };

        // Form interaction tracking
        const trackFormInteractions = () => {
          const forms = document.querySelectorAll('form');
          forms.forEach(form => {
            form.addEventListener('submit', (e) => {
              formInteractions++;
              const formName = form.getAttribute('name') || form.getAttribute('id') || 'Unknown Form';
              
              trackEvent('form_submit', {
                form_name: formName,
                form_interactions: formInteractions
              });
            });

            // Track form field interactions
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
              input.addEventListener('focus', () => {
                trackEvent('form_field_focus', {
                  field_name: input.getAttribute('name') || input.getAttribute('id'),
                  form_name: form.getAttribute('name') || form.getAttribute('id')
                });
              });
            });
          });
        };

        // Video tracking
        const trackVideoViews = () => {
          const videos = document.querySelectorAll('video');
          videos.forEach(video => {
            video.addEventListener('play', () => {
              videoViews++;
              trackEvent('video_play', {
                video_src: video.src,
                video_duration: video.duration,
                video_views: videoViews
              });
            });

            video.addEventListener('ended', () => {
              trackEvent('video_complete', {
                video_src: video.src,
                video_duration: video.duration
              });
            });
          });
        };

        // Download tracking
        const trackDownloads = () => {
          document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            
            if (link && link.href) {
              const href = link.href;
              const isDownload = link.hasAttribute('download') || 
                                href.includes('.pdf') || 
                                href.includes('.doc') || 
                                href.includes('.zip') ||
                                href.includes('download');
              
              if (isDownload) {
                downloadCount++;
                trackEvent('file_download', {
                  file_url: href,
                  file_name: link.getAttribute('download') || href.split('/').pop(),
                  download_count: downloadCount
                });
              }
            }
          });
        };

        // Content engagement tracking
        const trackContentEngagement = () => {
          const contentCards = document.querySelectorAll('[data-content-card], .content-card, .blog-card');
          
          contentCards.forEach(card => {
            card.addEventListener('click', (e) => {
              const contentTitle = card.querySelector('h3, h2, .title')?.textContent || 'Unknown Content';
              const contentType = card.getAttribute('data-content-type') || 'Unknown Type';
              const contentId = card.getAttribute('data-content-id') || 'Unknown ID';
              
              trackEvent('content_click', {
                content_title: contentTitle,
                content_type: contentType,
                content_id: contentId
              });
            });

            // Track content hover time
            let hoverStartTime = 0;
            card.addEventListener('mouseenter', () => {
              hoverStartTime = Date.now();
            });

            card.addEventListener('mouseleave', () => {
              if (hoverStartTime > 0) {
                const hoverTime = Date.now() - hoverStartTime;
                if (hoverTime > 1000) { // Only track if hovered for more than 1 second
                  trackEvent('content_hover', {
                    content_title: card.querySelector('h3, h2, .title')?.textContent || 'Unknown Content',
                    hover_duration: hoverTime
                  });
                }
              }
            });
          });
        };

        // Error tracking
        const trackErrors = () => {
          window.addEventListener('error', (e) => {
            trackEvent('javascript_error', {
              error_message: e.message,
              error_filename: e.filename,
              error_lineno: e.lineno,
              error_colno: e.colno
            });
          });

          window.addEventListener('unhandledrejection', (e) => {
            trackEvent('promise_rejection', {
              error_message: e.reason?.message || 'Unknown promise rejection',
              error_stack: e.reason?.stack
            });
          });
        };

        // Performance tracking
        const trackPerformance = () => {
          window.addEventListener('load', () => {
            // Core Web Vitals
            if ('PerformanceObserver' in window) {
              const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                  if (entry.entryType === 'largest-contentful-paint') {
                    trackEvent('core_web_vital', {
                      metric_name: 'LCP',
                      metric_value: entry.startTime,
                      metric_rating: entry.startTime < 2500 ? 'good' : entry.startTime < 4000 ? 'needs_improvement' : 'poor'
                    });
                  }
                  
                  if (entry.entryType === 'first-input') {
                    const fid = entry.processingStart - entry.startTime;
                    trackEvent('core_web_vital', {
                      metric_name: 'FID',
                      metric_value: fid,
                      metric_rating: fid < 100 ? 'good' : fid < 300 ? 'needs_improvement' : 'poor'
                    });
                  }
                  
                  if (entry.entryType === 'layout-shift') {
                    trackEvent('core_web_vital', {
                      metric_name: 'CLS',
                      metric_value: entry.value,
                      metric_rating: entry.value < 0.1 ? 'good' : entry.value < 0.25 ? 'needs_improvement' : 'poor'
                    });
                  }
                });
              });

              observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
            }

            // Page load metrics
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            if (navigation) {
              trackEvent('page_load_metrics', {
                dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                load_complete: navigation.loadEventEnd - navigation.loadEventStart,
                total_load_time: navigation.loadEventEnd - navigation.fetchStart,
                time_to_first_byte: navigation.responseStart - navigation.fetchStart,
                dom_processing: navigation.domComplete - navigation.domLoading
              });
            }
          });
        };

        // Initialize all tracking
        const cleanupScroll = trackScrollDepth();
        trackClicks();
        trackFormInteractions();
        trackVideoViews();
        trackDownloads();
        trackContentEngagement();
        trackErrors();
        trackPerformance();

        // Track page unload
        window.addEventListener('beforeunload', trackTimeOnPage);

        // Return cleanup function
        return () => {
          cleanupScroll();
          window.removeEventListener('beforeunload', trackTimeOnPage);
        };
      };

      // Initialize engagement tracking
      const cleanup = trackEngagement();

      // Track page view
      trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
        referrer: document.referrer,
        session_id: sessionId
      });

      // Track session start
      trackEvent('session_start', {
        session_id: sessionId,
        timestamp: pageStartTime
      });

      return cleanup;
    };

    // Initialize analytics
    const cleanup = initAnalytics();

    // Cleanup on unmount
    return cleanup;
  }, [sessionId, pageStartTime]);

  return null;
};

export default AdvancedAnalytics;