import React from 'react';

interface ConversationDetailViewProps {
  className?: string;
}

const ConversationDetailView: React.FC<ConversationDetailViewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ConversationDetailView</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ConversationDetailView;