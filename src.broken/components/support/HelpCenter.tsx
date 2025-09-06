import React from 'react';

interface HelpCenterProps {
  className?: string;
}

const HelpCenter: React.FC<HelpCenterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HelpCenter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HelpCenter;