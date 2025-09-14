'use client';

import React, { useEffect, useState } from 'react';
import { Zap, Clock, TrendingUp } from 'lucide-react';

const PerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    performanceScore: 0
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      
      const loadTime = navigation ? Math.round(navigation.loadEventEnd - navigation.loadEventStart) : 0;
      const fcpTime = fcp ? Math.round(fcp.startTime) : 0;
      
      // Calculate performance score
      let score = 100;
      if (fcpTime > 1800) score -= 20;
      if (fcpTime > 3000) score -= 30;
      if (loadTime > 2000) score -= 20;
      if (loadTime > 4000) score -= 30;
      
      setMetrics({
        loadTime,
        firstContentfulPaint: fcpTime,
        performanceScore: Math.max(0, score)
      });
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-6 text-center">Performance Metrics</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <Clock className="w-8 h-8 mx-auto mb-2" />
          <div className="text-2xl font-bold">{metrics.loadTime}ms</div>
          <div className="text-sm opacity-90">Load Time</div>
        </div>
        
        <div className="text-center">
          <Zap className="w-8 h-8 mx-auto mb-2" />
          <div className="text-2xl font-bold">{metrics.firstContentfulPaint}ms</div>
          <div className="text-sm opacity-90">First Paint</div>
        </div>
        
        <div className="text-center">
          <TrendingUp className="w-8 h-8 mx-auto mb-2" />
          <div className="text-2xl font-bold">{metrics.performanceScore}/100</div>
          <div className="text-sm opacity-90">Performance Score</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;