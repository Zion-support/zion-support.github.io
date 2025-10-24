import React from 'react';

interface InteractiveAIROICalculatorProps {
  className?: string;
  children?: React.ReactNode;
}

export const InteractiveAIROICalculator: React.FC<InteractiveAIROICalculatorProps> = ({ className = '', children }) => {
  return (
    <div className={`interactiveairoicalculator ${className}`}>
      {children}
    </div>
  );
};

export default InteractiveAIROICalculator;