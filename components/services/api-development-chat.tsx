import React from 'react';

interface Api-development-chatProps {
  className?: string;
}

const Api-development-chat: React.FC<Api-development-chatProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Api-development-chat</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Api-development-chat;