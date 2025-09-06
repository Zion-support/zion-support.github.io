import React from 'react';

interface ReferralLeaderboardProps {
  className?: string;
}

const ReferralLeaderboard: React.FC<ReferralLeaderboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReferralLeaderboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReferralLeaderboard;