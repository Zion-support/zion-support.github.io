import React from 'react';

interface ChatAssistantProps {
  className?: string;
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ChatAssistant</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ChatAssistant;