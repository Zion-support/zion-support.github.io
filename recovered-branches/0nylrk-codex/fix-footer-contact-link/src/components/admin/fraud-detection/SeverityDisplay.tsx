import React from 'react';

interface SeverityDisplayProps {
  className?: string;
}

const SeverityDisplay: React.FC<SeverityDisplayProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SeverityDisplay</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SeverityDisplay;