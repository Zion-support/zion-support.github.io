import React from 'react';

interface LoginModalProps {
  className?: string;
}

const LoginModal: React.FC<LoginModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoginModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoginModal;