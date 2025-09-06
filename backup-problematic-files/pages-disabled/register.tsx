import React from 'react';

interface RegisterProps {
  className?: string;
}

const Register: React.FC<RegisterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Register</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Register;