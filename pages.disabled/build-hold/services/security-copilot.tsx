import React from 'react';

interface Security-copilotProps {
  className?: string;
}

const Security-copilot: React.FC<Security-copilotProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Security-copilot</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Security-copilot;