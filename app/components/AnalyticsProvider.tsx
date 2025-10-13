import React from 'react';

interface AnalyticsProviderProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function AnalyticsProvider({ className = '', children }: AnalyticsProviderProps) {
  return (
    <div className={`${className}`}>
=======
export default function AnalyticsProvider({ className = '', children, ...props }: AnalyticsProviderProps) {
  return (
    <div className={`analytics-provider-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
}