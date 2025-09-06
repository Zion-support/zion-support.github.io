import React from 'react';

interface OrgChartProps {
  className?: string;
}

const OrgChart: React.FC<OrgChartProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OrgChart</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OrgChart;