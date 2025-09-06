import React from 'react';

interface ProfileRatingsProps {
  className?: string;
}

const ProfileRatings: React.FC<ProfileRatingsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileRatings</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileRatings;