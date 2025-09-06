import React from 'react';

interface EmptyMatchesCardProps {
  className?: string;
}

const EmptyMatchesCard: React.FC<EmptyMatchesCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EmptyMatchesCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EmptyMatchesCard;