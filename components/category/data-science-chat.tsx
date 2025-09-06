import React from 'react';

interface Data-science-chatProps {
  className?: string;
}

const Data-science-chat: React.FC<Data-science-chatProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Data-science-chat</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Data-science-chat;