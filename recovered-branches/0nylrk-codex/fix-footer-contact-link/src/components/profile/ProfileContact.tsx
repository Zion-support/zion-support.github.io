import React from 'react';

interface ProfileContactProps {
  className?: string;
}

const ProfileContact: React.FC<ProfileContactProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileContact</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileContact;