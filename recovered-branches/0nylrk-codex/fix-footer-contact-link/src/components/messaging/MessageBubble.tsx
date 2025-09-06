import React from 'react';

interface MessageBubbleProps {
  className?: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MessageBubble</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MessageBubble;