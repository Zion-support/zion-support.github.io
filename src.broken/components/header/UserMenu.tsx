import React from 'react';

interface UserMenuProps {
  className?: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UserMenu</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UserMenu;