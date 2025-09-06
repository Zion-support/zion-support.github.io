import React from 'react';

interface TalentDetailProps {
  className?: string;
}

const TalentDetail: React.FC<TalentDetailProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentDetail</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentDetail;