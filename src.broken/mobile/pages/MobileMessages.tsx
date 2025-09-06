import React from 'react';

interface MobileMessagesProps {
  className?: string;
}

const MobileMessages: React.FC<MobileMessagesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileMessages</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileMessages;