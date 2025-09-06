import React from 'react';

interface FeatureUsageChartProps {
  className?: string;
}

const FeatureUsageChart: React.FC<FeatureUsageChartProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FeatureUsageChart</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FeatureUsageChart;