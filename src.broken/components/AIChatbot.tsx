import React from 'react';

interface AIChatbotProps {
  className?: string;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AIChatbot</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AIChatbot;