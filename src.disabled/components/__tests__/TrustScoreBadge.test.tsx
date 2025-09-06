import React from 'react';

interface TrustScoreBadge.testProps {
  className?: string;
}

const TrustScoreBadge.test: React.FC<TrustScoreBadge.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TrustScoreBadge.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TrustScoreBadge.test;