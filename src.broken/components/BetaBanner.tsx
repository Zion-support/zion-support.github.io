import React from 'react';

interface BetaBannerProps {
  className?: string;
}

const BetaBanner: React.FC<BetaBannerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BetaBanner</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BetaBanner;