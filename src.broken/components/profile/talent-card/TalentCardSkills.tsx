import React from 'react';

interface TalentCardSkillsProps {
  className?: string;
}

const TalentCardSkills: React.FC<TalentCardSkillsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentCardSkills</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentCardSkills;