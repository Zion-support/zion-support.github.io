import React from 'react';

interface ProfileProps {
  className?: string;
}

const Profile: React.FC<ProfileProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Profile</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Profile;