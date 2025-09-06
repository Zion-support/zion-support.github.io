import React from 'react';

interface TalentCardHeaderProps {
  className?: string;
}

const TalentCardHeader: React.FC<TalentCardHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentCardHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentCardHeader;