import React from 'react';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfilePage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfilePage;