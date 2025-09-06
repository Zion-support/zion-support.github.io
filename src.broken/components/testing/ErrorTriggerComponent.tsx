import React from 'react';

interface ErrorTriggerComponentProps {
  className?: string;
}

const ErrorTriggerComponent: React.FC<ErrorTriggerComponentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorTriggerComponent</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorTriggerComponent;