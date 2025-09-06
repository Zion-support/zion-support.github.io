import React from 'react';

interface ProfileDetailProps {
  className?: string;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileDetail</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileDetail;