import React from 'react';

interface AuthButtonsProps {
  className?: string;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AuthButtons</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AuthButtons;