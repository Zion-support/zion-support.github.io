import React from 'react';

interface TalentCardAvatarProps {
  className?: string;
}

const TalentCardAvatar: React.FC<TalentCardAvatarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentCardAvatar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentCardAvatar;