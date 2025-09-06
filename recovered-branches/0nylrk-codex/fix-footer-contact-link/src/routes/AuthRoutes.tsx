import React from 'react';

interface AuthRoutesProps {
  className?: string;
}

const AuthRoutes: React.FC<AuthRoutesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AuthRoutes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AuthRoutes;