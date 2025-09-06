import React from 'react';

interface Ai-ops-copilotProps {
  className?: string;
}

const Ai-ops-copilot: React.FC<Ai-ops-copilotProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Ai-ops-copilot</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Ai-ops-copilot;