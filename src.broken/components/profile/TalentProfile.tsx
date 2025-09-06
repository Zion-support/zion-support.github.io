import React from 'react';

interface TalentProfileProps {
  className?: string;
}

const TalentProfile: React.FC<TalentProfileProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentProfile</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentProfile;