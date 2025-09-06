import React from 'react';

interface DaoLeaderboardProps {
  className?: string;
}

const DaoLeaderboard: React.FC<DaoLeaderboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DaoLeaderboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DaoLeaderboard;