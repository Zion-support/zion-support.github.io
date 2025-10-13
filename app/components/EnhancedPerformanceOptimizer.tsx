import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Award, TrendingUp } from 'lucide-react';
  useEffect(() => {
    // Preload critical resources.
    if (enablePreloading) {
      const preloadLink = document.createElement('link').
      preloadLink.rel = 'preload'.
      preloadLink.href = '/fonts/inter.woff2'.
      preloadLink.as = 'font'.
      preloadLink.type = 'font/woff2'.
      preloadLink.crossOrigin = 'anonymous'.
      document.head.appendChild(preloadLink).
    }
  }, [enablePreloading]).

  return (
    <div className="performance-optimizer">
      {children}
  );
};

export default PerformanceOptimizer.
