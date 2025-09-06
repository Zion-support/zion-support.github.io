import React from 'react';

interface AiAssistantProps {
  className?: string;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AiAssistant</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AiAssistant;