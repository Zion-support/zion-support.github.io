import React from 'react';

interface AuthenticationProps {
  className?: string;
}

const Authentication: React.FC<AuthenticationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Authentication</h1>
      <p>This component is under development.</p>
    </div>
  );
