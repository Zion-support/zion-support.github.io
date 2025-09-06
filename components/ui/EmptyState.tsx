import React from 'react';

interface EmptyStateProps {
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EmptyState</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EmptyState;