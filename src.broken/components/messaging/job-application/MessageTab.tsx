import React from 'react';

interface MessageTabProps {
  className?: string;
}

const MessageTab: React.FC<MessageTabProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MessageTab</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MessageTab;