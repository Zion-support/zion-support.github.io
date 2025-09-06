import React from 'react';

interface UserBadgesProps {
  className?: string;
}

const UserBadges: React.FC<UserBadgesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UserBadges</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UserBadges;