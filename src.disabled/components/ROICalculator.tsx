import React from 'react';

interface ROICalculatorProps {
  className?: string;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ROICalculator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ROICalculator;