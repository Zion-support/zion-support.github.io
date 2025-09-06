import React from 'react';

interface TeamPageProps {
  className?: string;
}

const TeamPage: React.FC<TeamPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TeamPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TeamPage;