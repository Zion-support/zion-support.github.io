import React from 'react';

interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Analytics({ className = '', children }: AnalyticsProps) {
  return (
    <div className={`${className}`}>
=======
export default function Analytics({ className = '', children, ...props }: AnalyticsProps) {
  return (
    <div className={`analytics-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
}