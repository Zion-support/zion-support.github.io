import React from 'react';

interface BadgesProps {
  className?: string;
}

const Badges: React.FC<BadgesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Badges</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Badges;