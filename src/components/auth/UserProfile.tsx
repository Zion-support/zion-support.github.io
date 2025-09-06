import React from 'react';

interface UserProfileProps {
  className?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UserProfile</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UserProfile;