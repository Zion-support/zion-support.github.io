import React from 'react';

interface Reset-passwordProps {
  className?: string;
}

const Reset-password: React.FC<Reset-passwordProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Reset-password</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Reset-password;