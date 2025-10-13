import React from 'react';

<<<<<<< HEAD
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
=======
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsProps {
  children: React.ReactNode;
}

export default function Analytics({ children }: AnalyticsProps) {
  return <>{children}</>;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
}