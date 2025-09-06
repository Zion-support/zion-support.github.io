import React from 'react';

interface ConversationItemProps {
  className?: string;
}

const ConversationItem: React.FC<ConversationItemProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ConversationItem</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ConversationItem;