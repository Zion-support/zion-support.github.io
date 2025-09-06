import React from 'react';

interface TalentCardProps {
  className?: string;
}

const TalentCard: React.FC<TalentCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentCard;