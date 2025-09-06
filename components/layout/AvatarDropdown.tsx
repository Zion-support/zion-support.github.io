import React from 'react';

interface AvatarDropdownProps {
  className?: string;
}

const AvatarDropdown: React.FC<AvatarDropdownProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AvatarDropdown</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AvatarDropdown;