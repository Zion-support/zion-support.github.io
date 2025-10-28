'use client';

import React, { memo } from 'react';

interface InteractiveAIROICalculatorProps {
  className?: string;
  children?: React.ReactNode;
}

const InteractiveAIROICalculator: React.FC<InteractiveAIROICalculatorProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`interactive-ai-roi-calculator ${className}`}>
      {children}
    </div>
  );
});

InteractiveAIROICalculator.displayName = 'InteractiveAIROICalculator';

export default InteractiveAIROICalculator;