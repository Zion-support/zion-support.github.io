import React from 'react';

interface ChatBotPanelProps {
  className?: string;
}

const ChatBotPanel: React.FC<ChatBotPanelProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ChatBotPanel</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ChatBotPanel;