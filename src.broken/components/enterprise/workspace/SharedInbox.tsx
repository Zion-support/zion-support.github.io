import React from 'react';

interface SharedInboxProps {
  className?: string;
}

const SharedInbox: React.FC<SharedInboxProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SharedInbox</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SharedInbox;