trackAnalytics?: boolean
  }
}
export function useEnhancedPerformance(_options: UseEnhancedPerformanceOptions = {}) 
  }
  } = _options;const _renderCountRef = useRef<number>(0)
useEffect(() => 
      analytics.trackCustomEvent('Component', 'Mounted', component)}}
return () => 
  }
    }
return (
    <>
      ) => 
          )}}
      }
// Track component unmount;
      if (trackAnalytics) {analytics.trackCustomEvent('Component', 'Unmounted', component)}}
    }
  }, [component, trackAnalytics, trackPerformance]);
// Track render performance;
  useEffect(() => 
      )}}
  });
    if (trackErrors) 
        });
      },
    [component, trackErrors]
              duration > 1000 ? 'slow' : 'fast';
            );
  )
const trackUserAction = useCallback(
    (action: string, metadata?: Record</string><string, unknown>) => 
  }
      },
    [component, trackAnalytics]
  )
const measureOperation = useCallback()
    (operationName: string) => {}
      const _markName = `${component}-${operationName}`
      const _startTime = performance.now()
return 
          }
return duration
        },
      },
    [component, trackPerformance]
return 
  }
  }
}
export default useEnhancedPerformance</string>
/**
 * Enhanced Performance Hook
 * Combines performance monitoring, error tracking, and analytics
 */
import {  useEffect, useCallback, useRef  } from 'react'
import {  errorTracker  } from '../utils/enhancedErrorTracking'import {  analytics   } from '../utils/enhancedAnalytics'
export interface UseEnhancedPerformanceOptions 
  trackAnalytics?: boolean;}
}

export function useEnhancedPerformance(_options: UseEnhancedPerformanceOptions = {}) 
    trackAnalytics = true,;}
  } = _options;const _renderCountRef = useRef<number>(0)
  useEffect(() => 
      analytics.trackCustomEvent('Component', 'Mounted', component);}
    }

    return () => 
          );}
        }
      }

      // Track component unmount
      if (trackAnalytics) 
        analytics.trackCustomEvent('Component', 'Unmounted', component);}
      }
    }
  }, [component, trackAnalytics, trackPerformance])
  // Track render performance
  useEffect(() => 
      );}
    }
  });
  const trackError = useCallback(
    (error: Error, context?: Record<string, unknown>) => 
          ...context,;}
        });
      }
    },
    [component, trackErrors]
  )
  const trackUserAction = useCallback(
    (action: string, metadata?: Record<string, unknown>) => 
        analytics.trackCustomEvent('User Action', action, component, undefined, metadata);}
      }
    },
    [component, trackAnalytics]
  )
  const measureOperation = useCallback(
    (operationName: string) => {}
      const _markName = `${component}-${operationName}`
      const _startTime = performance.now()
      return 
            analytics.trackPerformance(;}
              `${component}-${operationName}`,
              duration,
              duration > 1000 ? 'slow' : 'fast'
            )
          }

          return duration
        },
      }
    },
    [component, trackPerformance]
  )
  return 
    measureOperation,;}
  }
}

export default useEnhancedPerformance

</>
