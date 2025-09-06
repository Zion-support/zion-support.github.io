import React from 'react';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoginCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoginCard;