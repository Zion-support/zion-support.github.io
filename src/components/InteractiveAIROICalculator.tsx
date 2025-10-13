import React from 'react';

interface InteractiveAIROICalculatorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function InteractiveAIROICalculator({ className = '', children }: InteractiveAIROICalculatorProps) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
      <h2 className="text-xl font-semibold mb-4">AI ROI Calculator</h2>
      {children}
    </div>
  );
}
