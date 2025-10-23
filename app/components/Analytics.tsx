"use client";
import React from 'react';

interface AnalyticsProps {
  className?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>Analytics</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default Analytics;