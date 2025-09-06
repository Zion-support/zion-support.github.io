import React from 'react';

interface IntercomChatProps {
  className?: string;
}

const IntercomChat: React.FC<IntercomChatProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>IntercomChat</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default IntercomChat;