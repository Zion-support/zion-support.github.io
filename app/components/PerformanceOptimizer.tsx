'use client';
import React, { useEffect, useState } from 'react';
import { performanceUtils } from './performanceUtils';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableMonitoring?: boolean;
  enableImageOptimization?: boolean;
  enableFontOptimization?: boolean;
  enableThirdPartyOptimization?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableMonitoring = true,
  enableImageOptimization = true,
  enableFontOptimization = true,
  enableThirdPartyOptimization = true
}) => {
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    const optimize = () => {
      if (enableMonitoring) {
        performanceUtils.monitorWebVitals();
      }

      if (enableImageOptimization) {
        performanceUtils.optimizeImages();
      }

      if (enableFontOptimization) {
        performanceUtils.optimizeFonts();
      }

      if (enableThirdPartyOptimization) {
        performanceUtils.optimizeThirdPartyScripts();
      }

      setIsOptimized(true);
    };

    // Run optimizations after component mount
    const timer = setTimeout(optimize, 100);

    return () => {
      clearTimeout(timer);
      performanceUtils.cleanup();
    };
  }, [enableMonitoring, enableImageOptimization, enableFontOptimization, enableThirdPartyOptimization]);

  // Preload critical resources
  useEffect(() => {
    const criticalResources = [
      { href: '/fonts/inter-var.woff2', as: 'font' },
      { href: '/css/critical.css', as: 'style' }
    ];

    criticalResources.forEach(resource => {
      performanceUtils.preloadResource(resource.href, resource.as);
    });
  }, []);

  return (
    <div className="performance-optimizer">
      {children}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white text-xs p-2 rounded">
          Performance: {isOptimized ? 'Optimized' : 'Loading...'}
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;