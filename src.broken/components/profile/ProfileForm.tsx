import React from 'react';

interface ProfileFormProps {
  className?: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileForm;