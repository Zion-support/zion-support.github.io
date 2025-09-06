import React from 'react';

interface AnalyticsChartProps {
  className?: string;
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AnalyticsChart</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AnalyticsChart;