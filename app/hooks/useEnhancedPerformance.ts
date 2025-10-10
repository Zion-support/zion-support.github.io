/**
 * Enhanced Performance Hook
 * Combines performance monitoring, error tracking, and analytics
 */;
;
;
;
import { useEffect, useCallback, useRef  } from 'react'
import { errorTracker  } from '../utils/enhancedErrorTracking'import { analytics  } from '../utils/enhancedAnalytics'
export interface UseEnhancedPerformanceOptions {
  component?: string
  trackErrors?: boolean
  trackPerformance?: boolean
  trackAnalytics?: boolean}
}
export function useEnhancedPerformance(_options: UseEnhancedPerformanceOptions = {}) {
  ;

const {
    component = 'Unknown',
    trackErrors = true,
    trackPerformance = true,
    trackAnalytics = true,}
  } = _options;const _renderCountRef;

export default useEnhancedPerformance;