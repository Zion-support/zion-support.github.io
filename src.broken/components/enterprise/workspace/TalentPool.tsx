import React from 'react';

interface TalentPoolProps {
  className?: string;
}

const TalentPool: React.FC<TalentPoolProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentPool</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentPool;