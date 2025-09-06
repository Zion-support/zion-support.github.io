import React from 'react';

interface ChatInputProps {
  className?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ChatInput</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ChatInput;