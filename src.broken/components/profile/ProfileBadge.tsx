import React from 'react';

interface ProfileBadgeProps {
  className?: string;
}

const ProfileBadge: React.FC<ProfileBadgeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileBadge</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileBadge;