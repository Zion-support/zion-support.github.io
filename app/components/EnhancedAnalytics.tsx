import React from "react";

interface EnhancedAnalyticsProps {
  children: React.ReactNode;
}

const EnhancedAnalytics = ({ children }: EnhancedAnalyticsProps) => {
  return (
    <div className="enhanced-analytics">
      {children}
    </div>
  );
};
export default EnhancedAnalytics;
