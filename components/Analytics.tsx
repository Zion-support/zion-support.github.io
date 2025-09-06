import React from 'react';

interface AnalyticsProps {
  className?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Analytics</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Analytics;