import React from 'react';

interface TalentDetailsProps {
  className?: string;
}

const TalentDetails: React.FC<TalentDetailsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentDetails</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentDetails;