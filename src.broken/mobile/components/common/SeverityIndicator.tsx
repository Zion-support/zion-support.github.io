import React from 'react';

interface SeverityIndicatorProps {
  className?: string;
}

const SeverityIndicator: React.FC<SeverityIndicatorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SeverityIndicator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SeverityIndicator;