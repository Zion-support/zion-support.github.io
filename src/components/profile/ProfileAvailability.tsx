import React from 'react';

interface ProfileAvailabilityProps {
  className?: string;
}

const ProfileAvailability: React.FC<ProfileAvailabilityProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileAvailability</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileAvailability;