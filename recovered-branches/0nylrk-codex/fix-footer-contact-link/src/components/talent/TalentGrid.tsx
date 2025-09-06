import React from 'react';

interface TalentGridProps {
  className?: string;
}

const TalentGrid: React.FC<TalentGridProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentGrid</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentGrid;