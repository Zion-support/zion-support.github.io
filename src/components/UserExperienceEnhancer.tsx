'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface UserExperienceEnhancerProps {
  enableSmoothScrolling?: boolean;
  enableLoadingStates?: boolean;
  enableErrorBoundaries?: boolean;
  enableAnalytics?: boolean;
  enableNotifications?: boolean;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps>= ({
  enableSmoothScrolling = true,
  enableLoadingStates = true,
  enableErrorBoundaries = true,
  enableAnalytics = true,
  enableNotifications = true;
}) => {
  const [isOnline, setIsOnline] = useState(true)
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  // Handle online/offline status;
  useEffect(() => {
            window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
  }, []);

  // Smooth scrolling;
  useEffect(() => {
    if (enableSmoothScrolling) {
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

  // Loading states management;
    }, []);

  // Global loading state;
  useEffect(() => {
    if (enableLoadingStates) {
      // Add loading state to all links;
            links.forEach(link => {
        link.addEventListener('click', (e) => {
                    if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
            setLoading(`link-${href}`, true);
          }
        });
      });
    }
  }, [enableLoadingStates, setLoading]);

  // Error boundary enhancement;
  useEffect(() => {
    if (enableErrorBoundaries) {
              // Send error to analytics if available;
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'exception', {
            description: event.error?.message || 'Unknown error',
            fatal: false;
          });
        }
      }
              if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'exception', {
            description: event.reason?.message || 'Unhandled promise rejection',
            fatal: false;
          });
        }
      }
      window.addEventListener('error', handleError);
      window.addEventListener('unhandledrejection', handleUnhandledRejection);

      return () => {
        window.removeEventListener('error', handleError);
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      }
    }
  }, [enableErrorBoundaries]);

  // Analytics enhancement;
  useEffect(() => {
    if (enableAnalytics && typeof window !== 'undefined') {
      // Track page visibility changes;
                }
        } else {
          if ('gtag' in window) {
            (window as any).gtag('event', 'page_visible', {
              event_category: 'engagement'
            });
          }
        }
      }
      // Track scroll depth;
                    if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          
          // Track milestone scroll depths
          if (maxScrollDepth >= 25 && maxScrollDepth < 50) {
            if ('gtag' in window) {
              (window as any).gtag('event', 'scroll', {
                event_category: 'engagement',
                value: 25;
              });
            }
          } else if (maxScrollDepth >= 50 && maxScrollDepth < 75) {
            if ('gtag' in window) {
              (window as any).gtag('event', 'scroll', {
                event_category: 'engagement',
                value: 50;
              });
            }
          } else if (maxScrollDepth >= 75 && maxScrollDepth < 90) {
            if ('gtag' in window) {
              (window as any).gtag('event', 'scroll', {
                event_category: 'engagement',
                value: 75;
              });
            }
          } else if (maxScrollDepth >= 90) {
            if ('gtag' in window) {
              (window as any).gtag('event', 'scroll', {
                event_category: 'engagement',
                value: 90;
              });
            }
          }
        }
      }
      // Track time on page;
                    if ('gtag' in window) {
          (window as any).gtag('event', 'timing_complete', {
            name: 'time_on_page',
            value: timeOnPage,
            event_category: 'engagement'
          });
        }
      }
      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      }
    }
  }, [enableAnalytics]);

  // Notifications;
  useEffect(() => {
    if (enableNotifications && !isOnline) {
      // Show offline notification;
            notification.className = 'fixed top-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-lg z-50';
      notification.textContent = 'You are currently offline. Some features may not be available.';
      document.body.appendChild(notification);

            }, 5000);

      return () => {
        clearTimeout(timer);
        notification.remove();
      }
    }
  }, [isOnline, enableNotifications]);

  // Performance monitoring;
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals;
                  }
          } else if (entry.entryType === 'first-input') {
            if ('gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                name: 'FID',
                value: Math.round(entry.processingStart - entry.startTime),
                event_category: 'Performance'
              });
            }
          } else if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {
              if ('gtag' in window) {
                (window as any).gtag('event', 'web_vitals', {
                  name: 'CLS',
                  value: Math.round((entry as any).value * 1000),
                  event_category: 'Performance'
                });
              }
            }
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => {
        observer.disconnect();
      }
    }
  }, []);

  return null;
}
export default UserExperienceEnhancer