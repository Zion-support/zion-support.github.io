import React from 'react';

interface BadgeEarnedProps {
  className?: string;
}

const BadgeEarned: React.FC<BadgeEarnedProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BadgeEarned</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BadgeEarned;