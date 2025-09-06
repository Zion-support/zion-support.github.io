import React from 'react';

interface AvatarProps {
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Avatar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Avatar;