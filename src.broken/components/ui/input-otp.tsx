import React from 'react';

interface Input-otpProps {
  className?: string;
}

const Input-otp: React.FC<Input-otpProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Input-otp</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Input-otp;