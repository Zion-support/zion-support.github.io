'use client';
import React, { useEffect } from 'react';

interface EnhancedAnalyticsProps {
  children: React.ReactNode;
  enableTracking?: boolean;
  enablePerformanceMonitoring?: boolean;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  children,
  enableTracking = true,
  enablePerformanceMonitoring = true
}) => {
  useEffect(() => {
    if (enableTracking && typeof window !== 'undefined') {
      // Initialize analytics tracking
      console.log('Analytics initialized');
    }
  }, [enableTracking]);

  return <>{children}</>;
};

export default EnhancedAnalytics;
