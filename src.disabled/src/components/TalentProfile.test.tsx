import React from 'react';

interface TalentProfile.testProps {
  className?: string;
}

const TalentProfile.test: React.FC<TalentProfile.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentProfile.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentProfile.test;