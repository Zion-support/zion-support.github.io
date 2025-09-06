import React from 'react';

interface PageViewsChartProps {
  className?: string;
}

const PageViewsChart: React.FC<PageViewsChartProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PageViewsChart</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PageViewsChart;