'use client';
import React, { useEffect } from 'react'.
import React, { Helmet } from 'react-helmet-async'.
import React, { ArrowRight, CheckCircle, Star, Users, Award, TrendingUp } from 'lucide-react'.
interface PerformanceOptimizerProps {
  children: React.ReactNode.,
  enableImageOptimization?: boolean.,
  enableLazyLoading?: boolean.,
  enablePreloading?: boolean.,
  enableCodeSplitting?: boolean,;
};
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ ,
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true.
  }) => {
  useEffect(() => {;
    // Preload critical resources;
    if (enablePreloading) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload'.
      preloadLink.href = '/fonts/inter.woff2'.
      preloadLink.as = 'font'.
      preloadLink.type = 'font/woff2'.
      preloadLink.crossOrigin = 'anonymous'.
      document.head.appendChild(preloadLink);
    };
  }, [enablePreloading]);
  return (
    <div className="performance-optimizer">
      {children};
    </div>
  );
  );
};
"
export default PerformanceOptimizer;""