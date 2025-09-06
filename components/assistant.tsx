import React from 'react';

interface AssistantProps {
  className?: string;
}

const Assistant: React.FC<AssistantProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Assistant</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Assistant;