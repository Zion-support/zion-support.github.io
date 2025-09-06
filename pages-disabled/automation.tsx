import React from 'react';

interface AutomationProps {
  className?: string;
}

const Automation: React.FC<AutomationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Automation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Automation;