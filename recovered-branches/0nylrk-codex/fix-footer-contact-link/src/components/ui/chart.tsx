import React from 'react';

interface ChartProps {
  className?: string;
}

const Chart: React.FC<ChartProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Chart</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Chart;