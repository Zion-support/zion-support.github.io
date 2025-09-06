import React from 'react';

interface TeamStatsProps {
  className?: string;
}

const TeamStats: React.FC<TeamStatsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TeamStats</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TeamStats;