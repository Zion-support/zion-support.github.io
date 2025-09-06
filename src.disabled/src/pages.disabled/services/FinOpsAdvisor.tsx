import React from 'react';

interface FinOpsAdvisorProps {
  className?: string;
}

const FinOpsAdvisor: React.FC<FinOpsAdvisorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FinOpsAdvisor</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FinOpsAdvisor;