import React from 'react';

interface AvatarMenuProps {
  className?: string;
}

const AvatarMenu: React.FC<AvatarMenuProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AvatarMenu</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AvatarMenu;