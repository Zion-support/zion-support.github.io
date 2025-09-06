import React from 'react';

interface HiringAnalyticsProps {
  className?: string;
}

const HiringAnalytics: React.FC<HiringAnalyticsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HiringAnalytics</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HiringAnalytics;