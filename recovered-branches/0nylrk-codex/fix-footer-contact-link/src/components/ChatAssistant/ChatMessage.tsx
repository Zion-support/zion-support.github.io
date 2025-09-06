import React from 'react';

interface ChatMessageProps {
  className?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ChatMessage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ChatMessage;