import React from 'react';

interface ProfileErrorStateProps {
  className?: string;
}

const ProfileErrorState: React.FC<ProfileErrorStateProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileErrorState</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileErrorState;