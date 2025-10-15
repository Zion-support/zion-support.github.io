import React from 'react';

interface CommunityPageProps {
  className?: string;
  children?: React.ReactNode;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`communitypage ${className}`}>
      {children}
    </div>
  );
};

export default CommunityPage;