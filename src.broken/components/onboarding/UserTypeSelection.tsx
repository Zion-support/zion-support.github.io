import React from 'react';

interface UserTypeSelectionProps {
  className?: string;
}

const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UserTypeSelection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UserTypeSelection;