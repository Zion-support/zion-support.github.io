import React from 'react';

interface TeamPageProps {
  className?: string;
  children?: React.ReactNode;
}

const TeamPage: React.FC<TeamPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`teampage ${className}`}>
      {children}
    </div>
  );
};

export default TeamPage;