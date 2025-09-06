import React from 'react';

interface ServiceComparisonTool.testProps {
  className?: string;
}

const ServiceComparisonTool.test: React.FC<ServiceComparisonTool.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceComparisonTool.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceComparisonTool.test;