import React from 'react';

interface Clickable-badgeProps {
  className?: string;
}

const Clickable-badge: React.FC<Clickable-badgeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Clickable-badge</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Clickable-badge;