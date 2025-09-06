import React from 'react';

interface SocialLoginProps {
  className?: string;
}

const SocialLogin: React.FC<SocialLoginProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SocialLogin</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SocialLogin;