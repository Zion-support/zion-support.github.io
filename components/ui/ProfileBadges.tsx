import React from 'react';

interface ProfileBadgesProps {
  className?: string;
}

const ProfileBadges: React.FC<ProfileBadgesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileBadges</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileBadges;