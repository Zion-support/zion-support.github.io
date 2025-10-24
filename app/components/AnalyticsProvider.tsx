import React from 'react';
<<<<<<< HEAD
interface AnalyticsproviderProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Analyticsprovider({ className = '', children, ...props }: AnalyticsproviderProps) {
  return (
    <div className={`analyticsprovider-component ${className}`} {...props}>
      {children}
    </div>
  );
}
=======

const AnalyticsProvider: React.FC = () => {
  return (
    <div className="analyticsprovider">
      <h2>AnalyticsProvider</h2>
      <p>AnalyticsProvider component.</p>
    </div>
  );
};

export default AnalyticsProvider;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
