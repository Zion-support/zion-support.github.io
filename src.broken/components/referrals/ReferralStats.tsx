import React from 'react';

interface ReferralStatsProps {
  className?: string;
}

const ReferralStats: React.FC<ReferralStatsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReferralStats</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReferralStats;