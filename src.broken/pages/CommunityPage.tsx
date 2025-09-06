import React from 'react';

interface CommunityPageProps {
  className?: string;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CommunityPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CommunityPage;