import React from 'react';

interface IncidentCopilotProps {
  className?: string;
}

const IncidentCopilot: React.FC<IncidentCopilotProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>IncidentCopilot</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default IncidentCopilot;