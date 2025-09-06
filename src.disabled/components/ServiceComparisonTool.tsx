import React from 'react';

interface ServiceComparisonToolProps {
  className?: string;
}

const ServiceComparisonTool: React.FC<ServiceComparisonToolProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceComparisonTool</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceComparisonTool;