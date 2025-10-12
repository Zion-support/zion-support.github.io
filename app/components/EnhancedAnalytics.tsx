import React from 'react';

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>; // Analytics provider wrapper
}