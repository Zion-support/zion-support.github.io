import React from 'react';

interface TalentDetail.testProps {
  className?: string;
}

const TalentDetail.test: React.FC<TalentDetail.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentDetail.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentDetail.test;
