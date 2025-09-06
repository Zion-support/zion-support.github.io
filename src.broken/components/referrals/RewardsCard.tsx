import React from 'react';

interface RewardsCardProps {
  className?: string;
}

const RewardsCard: React.FC<RewardsCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RewardsCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RewardsCard;