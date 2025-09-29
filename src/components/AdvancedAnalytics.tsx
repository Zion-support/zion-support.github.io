import React, { useEffect } from 'react';

interface AdvancedAnalyticsProps {
  enableConversionTracking?: boolean;
  enablePerformanceTracking?: boolean;
  enableErrorTracking?: boolean;
}

const AdvancedAnalytics: React.FC<AdvancedAnalyticsProps> = () => {
  useEffect(() => {
    // no-op stub to satisfy imports in App during build
  }, []);
  return null;
};

export default AdvancedAnalytics;

