import React from 'react';

interface TalentProfilePage.storiesProps {
  className?: string;
}

const TalentProfilePage.stories: React.FC<TalentProfilePage.storiesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentProfilePage.stories</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentProfilePage.stories;