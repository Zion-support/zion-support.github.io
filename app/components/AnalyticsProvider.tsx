'use client';
import React from 'react';
<<<<<<< HEAD
interface AnalyticsProviderProps {
  className?: string;
  children?: React.ReactNode;
}
const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default AnalyticsProvider;
=======

export default function AnalyticsProvider() {
  return (
    <div>
      <h1>AnalyticsProvider</h1>
      <p>AnalyticsProvider content.</p>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
