import React from 'react';

interface UserLeaderboardProps {
  className?: string;
}

const UserLeaderboard: React.FC<UserLeaderboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UserLeaderboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UserLeaderboard;