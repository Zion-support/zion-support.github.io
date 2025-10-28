import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

    })
    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })
    return () => observer.disconnect()
  }, [])
  return (
    <div className="min-h-screen bg-white">
        {children}
      {process.env.NODE_ENV === 'development' && (
        <div className="container mx-auto px-4">
          
        </div>
      </div></div>
      </div></div><div>
          Images: {optimizationMetrics.imagesOptimized}
        </div></div>
          <div>Scripts: {optimizationMetrics.scriptsOptimized}</div>
          <div>CSS: {optimizationMetrics.cssOptimized}</div>
          <div>Total: {optimizationMetrics.totalSavings}</div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceOptimizer;
