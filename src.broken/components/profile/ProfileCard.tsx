import React from 'react';

interface ProfileCardProps {
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileCard;