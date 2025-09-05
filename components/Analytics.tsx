import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && trackingId) {
      // Analytics initialized with tracking ID
    }
  }, [trackingId]);

  return null;
};

export default Analytics;
