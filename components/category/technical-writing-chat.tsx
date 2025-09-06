import React from 'react';

interface Technical-writing-chatProps {
  className?: string;
}

const Technical-writing-chat: React.FC<Technical-writing-chatProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Technical-writing-chat</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Technical-writing-chat;