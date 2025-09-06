import React from 'react';

interface CommunityContextProps {
  className?: string;
}

const CommunityContext: React.FC<CommunityContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CommunityContext</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CommunityContext;