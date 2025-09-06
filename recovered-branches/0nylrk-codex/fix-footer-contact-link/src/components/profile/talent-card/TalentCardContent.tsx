import React from 'react';

interface TalentCardContentProps {
  className?: string;
}

const TalentCardContent: React.FC<TalentCardContentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentCardContent</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentCardContent;