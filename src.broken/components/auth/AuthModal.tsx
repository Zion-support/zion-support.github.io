import React from 'react';

interface AuthModalProps {
  className?: string;
}

const AuthModal: React.FC<AuthModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AuthModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AuthModal;