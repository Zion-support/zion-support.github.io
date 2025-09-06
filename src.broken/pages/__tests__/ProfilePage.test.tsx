import React from 'react';

interface ProfilePage.testProps {
  className?: string;
}

const ProfilePage.test: React.FC<ProfilePage.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfilePage.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfilePage.test;