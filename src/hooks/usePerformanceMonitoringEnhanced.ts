
'use client'
import { useEffect, useCallback } from 'react';

export const _usePerformanceMonitoring = () => {// TODO: Add content;}

}
  const reportWebVitals = useCallback((metri)
  O: Add content;}
}
    const body = JSON.stringify(metric);
    const url = '/api/analytics';
  O: Add content;}
}
      navigator.sendBeacon(url, body);
  O: Add content;}
}
  O: Add content;}
}
        // Analytics reporting failed;
      });
    }
  }, []);
  O: Add content;}
}
  O: Add content;}
}
      // Monitor Core Web Vitals;
  O: Add content;}
}
  O: Add content;}
}
  O: Add content;}
};

  name: entry.name,
            value: entry.startTime,
            timestamp: Date.now()
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] }

  )
      return () => observer.disconnect()
  }, [reportWebVitals])
  return { reportWebVitals }
}



