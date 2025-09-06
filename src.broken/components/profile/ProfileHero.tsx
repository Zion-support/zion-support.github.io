import React from 'react';

interface ProfileHeroProps {
  className?: string;
}

const ProfileHero: React.FC<ProfileHeroProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileHero</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileHero;