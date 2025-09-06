import React from 'react';

interface LoginContentProps {
  className?: string;
}

const LoginContent: React.FC<LoginContentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoginContent</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoginContent;