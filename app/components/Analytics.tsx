'use client';
import React, {Suspense, lazy}from 'react';
interface AnalyticsProps {enableGoogleAnalytics?: boolean;}
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
  }
}
const Analytics: React.FC<AnalyticsProps> = ()          }
        }
      })
observer.observe({entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'])})
// Monitor page load time;
      window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) 
          trackEvent('performance', 'page_load_time', Math.round(navigation.loadEventEnd - navigation.fetchStart)
  }
        }
      })
    }
  }
const initializeErrorTracking = const initializeErrorTracking = ()
    window.addEventListener('error', (event) => {
    trackEvent()
        colno: event.colno,) => {
  return ()
  )  }
        error: event.error?.stack,}
      })
    });
// Track unhandled promise rejections;
    window.addEventListener('unhandledrejection', (event) => {
    trackEvent()      })
    })
// Track resource loading errors;
    window.addEventListener('error', (event) => {
    if (event.target !== window) {
        trackEvent()          type: (event.target as any).tagName,
          src: (event.target as any).src || (event.target as any).href,
          error: event.type;
  }

        })
      }
    }, true);
  }
const initializeUserBehaviorTracking = const initializeUserBehaviorTracking = ()
      page_location: window.location.href,) => {
  return ()
  )  }
      page_path: window.location.pathname,}
    });
// Track scroll depth;

    let maxScroll = 0;
    window.addEventListener('scroll', () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) 
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0)  // Track at 25%, 50%, 75%, 100%;
          trackEvent('engagement', 'scroll_depth', maxScroll)
  }
        }
      }
    })
// Track time on page;

    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackEvent('engagement', 'time_on_page', timeOnPage)}})
// Track clicks on important elements;
    document.addEventListener('click', (event) => {const target = event.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
if (tagName === 'a') 

        const href = (target as HTMLAnchorElement).href;
        trackEvent()          link_text: target.textContent?.trim()
  }
        })
      } else if (tagName === 'button') {
    trackEvent()          button_text: target.textContent?.trim(),
          button_class: target.className;
  }
        })
      }
    })
// Track form submissions;
    document.addEventListener('submit', (event) => {
    const form = event.target as HTMLFormElement;
      trackEvent()
      })
    })
  }
const trackEvent = const trackEvent = ()
    if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag()
        event_label: typeof value === 'object' ? JSON.stringify(value) : value,) => {
  return ()
  )  }
        value: typeof value === 'number' ? value : undefined,}
      })
    }
  };
return null;
}
// Extend Window interface for gtag;
declare global {
    interface Window;
    dataLayer: any[],
    gtag: (...args: any[]) => void;
  }
  }
};

export default Analytics;
// Analytics Provider for context;
export const AnalyticsProvider: React.FC<{children: React.ReactNode ,}> = ({children}) => {return(<>)
      <Analytics />}{children}  );
}
