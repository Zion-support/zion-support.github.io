/**
 * Enhanced Performance Hook
 * Combines performance monitoring, error tracking, and analytics
 */

import { useEffect, useCallback, useRef } from 'react';

export interface UseEnhancedPerformanceOptions {
  component?: string;
  trackErrors?: boolean;
  trackPerformance?: boolean;
  trackAnalytics?: boolean;
}

export function useEnhancedPerformance(
  options: UseEnhancedPerformanceOptions = {}
) {
  const {
    component = 'Unknown',
    trackPerformance = true,
  } = options;

  const measureOperation = useCallback(
    (operationName: string) => {
      const markName = `${component}-${operationName}`;
      if (typeof performance !== 'undefined' && performance.mark) {
        performance.mark(markName);
      }

      return {
        end: () => {
          let duration = 0;
          if (typeof performance !== 'undefined' && performance.mark && performance.measure) {
            try {
              performance.mark(`${markName}-end`);
              performance.measure(markName, markName, `${markName}-end`);
              const measure = performance.getEntriesByName(markName, 'measure')[0];
              duration = measure ? measure.duration : 0;
            } catch (e) {
              // Ignore measurement errors
            }
          }

          if (duration && trackPerformance) {
            console.log(
              `Performance: ${component}-${operationName}`,
              duration,
              duration > 1000 ? 'slow' : 'fast'
            );
          }
          return duration;
        },
      };
    },
    [component, trackPerformance]
  );

  return {
    measureOperation
  };
}

export default useEnhancedPerformance;