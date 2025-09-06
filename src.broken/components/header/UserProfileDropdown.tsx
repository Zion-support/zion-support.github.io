import React from 'react';

interface UserProfileDropdownProps {
  className?: string;
}

const UserProfileDropdown: React.FC<UserProfileDropdownProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UserProfileDropdown</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UserProfileDropdown;