import React from 'react';

interface CommunityDiscussionProps {
  className?: string;
}

const CommunityDiscussion: React.FC<CommunityDiscussionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CommunityDiscussion</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CommunityDiscussion;