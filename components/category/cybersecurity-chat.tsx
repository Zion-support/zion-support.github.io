import React from 'react';

interface Cybersecurity-chatProps {
  className?: string;
}

const Cybersecurity-chat: React.FC<Cybersecurity-chatProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Cybersecurity-chat</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Cybersecurity-chat;