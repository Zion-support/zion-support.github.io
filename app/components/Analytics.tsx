'use client';

import React from 'react';

interface AnalyticsProps {
  trackingId?: string;
  className?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId, className }) => {
  if (!trackingId) return null;

  return (
    <div className={className}>
      {/* Analytics implementation */}
    </div>
  );
};

export default Analytics;
