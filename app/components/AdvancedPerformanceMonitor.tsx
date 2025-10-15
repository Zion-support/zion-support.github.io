import React from 'react';;';
import SEOHead from './components/SEOHead';

interface PerformanceMetrics {}
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  memory: {}
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  } | null;
  navigation: {}
    loadEventEnd: number;
    domContentLoadedEventEnd: number;
    domContentLoadedEventStart: number;
    loadEventStart: number;
  } | null;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`advanced-performance-monitor ${className}`}>
      {children}
    </div>
  );
};

export default AdvancedPerformanceMonitor;ursor/delete-records-a75eursor/fix-errors-and-merge-to-main-234b
      {children}
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-234b
=======
>>>>>>> main
export default ComponentsPage;'";'";
>>>>>>> main
