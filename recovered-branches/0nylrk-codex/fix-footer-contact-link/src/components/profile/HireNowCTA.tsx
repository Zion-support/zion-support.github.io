import React from 'react';

interface HireNowCTAProps {
  className?: string;
}

const HireNowCTA: React.FC<HireNowCTAProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HireNowCTA</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HireNowCTA;