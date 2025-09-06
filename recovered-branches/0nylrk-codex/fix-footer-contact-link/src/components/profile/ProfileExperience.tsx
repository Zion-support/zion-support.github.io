import React from 'react';

interface ProfileExperienceProps {
  className?: string;
}

const ProfileExperience: React.FC<ProfileExperienceProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileExperience</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileExperience;