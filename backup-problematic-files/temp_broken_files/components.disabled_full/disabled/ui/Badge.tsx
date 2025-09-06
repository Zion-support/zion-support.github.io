import React from 'react';

interface BadgeProps {
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Badge</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Badge;