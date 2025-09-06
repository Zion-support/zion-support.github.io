import React from 'react';

interface ROICalculator.testProps {
  className?: string;
}

const ROICalculator.test: React.FC<ROICalculator.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ROICalculator.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ROICalculator.test;