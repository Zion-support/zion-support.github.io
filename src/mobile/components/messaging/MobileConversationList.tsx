import React from 'react';

interface MobileConversationListProps {
  className?: string;
}

const MobileConversationList: React.FC<MobileConversationListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileConversationList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileConversationList;