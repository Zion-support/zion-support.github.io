import React from 'react';

interface UserProviderProps {
  className?: string;
}

const UserProvider: React.FC<UserProviderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UserProvider</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UserProvider;