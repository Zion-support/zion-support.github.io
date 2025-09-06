import React from 'react';

interface ProfileLoadingStateProps {
  className?: string;
}

const ProfileLoadingState: React.FC<ProfileLoadingStateProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileLoadingState</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileLoadingState;