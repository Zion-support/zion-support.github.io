import React from 'react';

interface FinanceProps {
  className?: string;
}

const Finance: React.FC<FinanceProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Finance</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Finance;