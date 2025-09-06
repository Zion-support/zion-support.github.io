import React from 'react';

interface SupportChatbotProps {
  className?: string;
}

const SupportChatbot: React.FC<SupportChatbotProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SupportChatbot</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SupportChatbot;