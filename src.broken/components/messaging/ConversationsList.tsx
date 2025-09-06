import React from 'react';

interface ConversationsListProps {
  className?: string;
}

const ConversationsList: React.FC<ConversationsListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ConversationsList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ConversationsList;