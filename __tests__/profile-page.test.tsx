import React from 'react';

interface Profile-page.testProps {
  className?: string;
}

const Profile-page.test: React.FC<Profile-page.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Profile-page.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Profile-page.test;