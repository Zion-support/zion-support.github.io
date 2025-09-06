import React from 'react';

interface TrustScoreBadgeProps {
  className?: string;
}

const TrustScoreBadge: React.FC<TrustScoreBadgeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TrustScoreBadge</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TrustScoreBadge;