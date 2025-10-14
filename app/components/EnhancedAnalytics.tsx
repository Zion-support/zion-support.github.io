import React, { ReactNode } from 'react';

interface EnhancedAnalyticsProps {
  children: ReactNode;
}

export default function EnhancedAnalytics({ children }: EnhancedAnalyticsProps) {
  return (
    <div className="enhancedanalytics">
      {children}
    </div>
  );
}