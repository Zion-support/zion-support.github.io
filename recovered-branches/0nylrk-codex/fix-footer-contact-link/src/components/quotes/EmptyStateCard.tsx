import React from 'react';

interface EmptyStateCardProps {
  className?: string;
}

const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EmptyStateCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EmptyStateCard;