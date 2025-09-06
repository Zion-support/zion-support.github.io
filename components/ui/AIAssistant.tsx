import React from 'react';

interface AIAssistantProps {
  className?: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AIAssistant</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AIAssistant;