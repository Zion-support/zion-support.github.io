import React from 'react';

interface ProfileSkillsProps {
  className?: string;
}

const ProfileSkills: React.FC<ProfileSkillsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileSkills</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileSkills;