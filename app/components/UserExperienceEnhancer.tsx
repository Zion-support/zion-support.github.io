'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface UserExperienceEnhancerProps {
  enableSmoothScrolling?: boolean;
  enableLoadingStates?: boolean;
  enableErrorBoundaries?: boolean;
  enableAnalytics?: boolean;
  enableNotifications?: boolean;
  enablePerformanceMonitoring?: boolean;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
  enableSmoothScrolling = true,
  enableLoadingStates = true,
  enableErrorBoundaries = true,
  enableAnalytics = true,
  enableNotifications = true,
  enablePerformanceMonitoring = true
}) => {
  const [isOnline, setIsOnline] = useState(true);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Smooth scrolling
  useEffect(() => {
    if (enableSmoothScrolling) {
      const style = document.createElement('style');
      style.textContent = `
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, [enableSmoothScrolling]);

  // Loading states management
  const setLoading = useCallback((key: string, loading: boolean) => {
    setLoadingStates(prev => ({ ...prev, [key]: loading }));
  }, []);

  // Global loading state
  useEffect(() => {
    if (enableLoadingStates) {
      const links = document.querySelectorAll('a[href]');
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/')) {
          link.addEventListener('click', () => {
            setLoading(`link-${href}`, true);
          });
        }
      });
    }
  }, [enableLoadingStates, setLoading]);

  // Error boundary enhancement
  useEffect(() => {
    if (enableErrorBoundaries) {
      const handleError = (event: ErrorEvent) => {
        console.error('Global error caught:', event.error);
        // Send error to monitoring service
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'exception', {
            description: event.error?.message || 'Unknown error',
            fatal: false
          });
        }
      };

      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        console.error('Unhandled promise rejection:', event.reason);
        // Send error to monitoring service
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'exception', {
            description: event.reason?.message || 'Unhandled promise rejection',
            fatal: false
          });
        }
      };

      window.addEventListener('error', handleError);
      window.addEventListener('unhandledrejection', handleUnhandledRejection);

      return () => {
        window.removeEventListener('error', handleError);
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      };
    }
  }, [enableErrorBoundaries]);

  // Analytics enhancement
  useEffect(() => {
    if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          (window as any).gtag('event', 'page_hidden', {
            event_category: 'User Engagement',
            event_label: 'Page Hidden'
          });
        } else {
          (window as any).gtag('event', 'page_visible', {
            event_category: 'User Engagement',
            event_label: 'Page Visible'
          });
        }
      };

      // Track scroll depth
      let maxScrollDepth = 0;
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        if (scrollPercent > maxScrollDepth) {
          maxScrollDepth = scrollPercent;
          
          if (maxScrollDepth >= 25 && maxScrollDepth < 50) {
            (window as any).gtag('event', 'scroll', {
              event_category: 'User Engagement',
              event_label: '25% Scrolled'
            });
          } else if (maxScrollDepth >= 50 && maxScrollDepth < 75) {
            (window as any).gtag('event', 'scroll', {
              event_category: 'User Engagement',
              event_label: '50% Scrolled'
            });
          } else if (maxScrollDepth >= 75 && maxScrollDepth < 90) {
            (window as any).gtag('event', 'scroll', {
              event_category: 'User Engagement',
              event_label: '75% Scrolled'
            });
          } else if (maxScrollDepth >= 90) {
            (window as any).gtag('event', 'scroll', {
              event_category: 'User Engagement',
              event_label: '90% Scrolled'
            });
          }
        }
      };

      // Track time on page
      const startTime = Date.now();
      const handleBeforeUnload = () => {
        const timeOnPage = Date.now() - startTime;
        (window as any).gtag('event', 'timing_complete', {
          name: 'time_on_page',
          value: Math.round(timeOnPage / 1000)
        });
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [enableAnalytics]);

  // Notifications
  useEffect(() => {
    if (enableNotifications && !isOnline) {
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-yellow-600 text-white p-3 rounded-lg shadow-lg z-50';
      notification.textContent = 'You are currently offline. Some features may not be available.';
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.remove();
      }, 5000);

      return () => {
        notification.remove();
      };
    }
  }, [isOnline, enableNotifications]);

  // Performance monitoring
  useEffect(() => {
    if (enablePerformanceMonitoring && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            (window as any).gtag('event', 'timing_complete', {
              name: 'lcp',
              value: Math.round(entry.startTime)
            });
          } else if (entry.entryType === 'first-input') {
            (window as any).gtag('event', 'timing_complete', {
              name: 'fid',
              value: Math.round(entry.processingStart - entry.startTime)
            });
          } else if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {
              (window as any).gtag('event', 'timing_complete', {
                name: 'cls',
                value: Math.round((entry as any).value * 1000)
              });
            }
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => {
        observer.disconnect();
      };
    }
  }, [enablePerformanceMonitoring]);

  return null;
};

export default UserExperienceEnhancer;