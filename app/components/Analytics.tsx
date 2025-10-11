'use client';
import React, {Suspense, lazy}from 'react';
interface AnalyticsProps {enableGoogleAnalytics?: boolean;}
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
  }
}
          }
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
