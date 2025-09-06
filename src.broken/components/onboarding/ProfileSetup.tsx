import React from 'react';

interface ProfileSetupProps {
  className?: string;
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileSetup</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileSetup;