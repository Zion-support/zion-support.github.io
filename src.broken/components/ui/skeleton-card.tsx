import React from 'react';

interface Skeleton-cardProps {
  className?: string;
}

const Skeleton-card: React.FC<Skeleton-cardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Skeleton-card</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Skeleton-card;