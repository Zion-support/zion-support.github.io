import React from 'react';

interface TalentProfilePageProps {
  className?: string;
}

const TalentProfilePage: React.FC<TalentProfilePageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentProfilePage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentProfilePage;