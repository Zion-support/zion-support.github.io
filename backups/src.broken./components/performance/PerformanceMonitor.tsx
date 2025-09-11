import React, { useEffect, useState } from 'react';
;
type PerformanceMetrics = {};
};
;
export default function PerformanceMonitor() {};
  return null;
}
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
;
  useEffect(() => {};
        setMetrics({ firstContentfulPaintMs: Math.round((entry as PerformanceEntry).startTime) });,
}
    };
    try {};
      observer.observe({ type: 'paint', buffered: true } as PerformanceObserverInit);
      return () => observer.disconnect();,
} catch {};
}
  }, []);

  if (!metrics.firstContentfulPaintMs) return null;
  return (;
    <div className="fixed bottom-2 right-2 text-xs bg-black/60 text-white px-2 py-1 rounded">;
      FCP: {metrics.firstContentfulPaintMs} ms;
    </div>;
  )}

