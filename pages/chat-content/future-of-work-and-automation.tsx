import React from 'react';

interface FutureOfWorkAndAutomationProps {
  className?: string;
}

const FutureOfWorkAndAutomation: React.FC<FutureOfWorkAndAutomationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FutureOfWorkAndAutomation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FutureOfWorkAndAutomation;