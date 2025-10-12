/**
 * Enhanced Performance Hook
 * Combines performance monitoring, error tracking, and analytics
 */
import { useEffect, useCallback, useRef } from 'react';
import { errorTracker } from '../utils/enhancedErrorTracking';
import { analytics } from '../utils/enhancedAnalytics';
  component?: string;
  trackErrors?: boolean;
  trackPerformance?: boolean;
  trackAnalytics?: boolean;

    trackAnalytics = true
  } = _options;
  const mountTimeRef = useRef<number>(0);
  const renderCountRef = useRef<number>(0);
    mountTimeRef.current = performance.now();
    renderCountRef.current = 0;
    // Track component mount
      analytics.trackCustomEvent('Component', 'Mounted', component);

      // Track component unmount duration
        const duration = performance.now() - mountTimeRef.current;
          // Long-lived component
            Math.round(duration)
          );

      // Track component unmount
        analytics.trackCustomEvent('Component', 'Unmounted', component);

    };
  }, [component, trackAnalytics, trackPerformance]);
  // Track render performance
    renderCountRef.current++;
      // Many re-renders detected
        renderCountRef.current
      );

  });

        });

    [component, trackErrors]
  );

        analytics.trackCustomEvent('User Action', action, component, undefined, metadata);

    [component, trackAnalytics]
  );

      const startTime = performance.now();
          const duration = performance.now() - startTime;
              duration > 1000 ? 'slow' : 'fast'
            );

          return duration;

      };
    [component, trackPerformance]
  );
    measureOperation
  };

export default useEnhancedPerformance;
