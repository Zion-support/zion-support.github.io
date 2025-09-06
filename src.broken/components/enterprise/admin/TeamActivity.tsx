import React from 'react';

interface TeamActivityProps {
  className?: string;
}

const TeamActivity: React.FC<TeamActivityProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TeamActivity</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TeamActivity;