import React from 'react';

interface RedeemTokensCardProps {
  className?: string;
}

const RedeemTokensCard: React.FC<RedeemTokensCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RedeemTokensCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RedeemTokensCard;