import React from 'react';

interface ChatWidgetProps {
  className?: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ChatWidget</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ChatWidget;