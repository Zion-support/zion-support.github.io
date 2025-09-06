import React from 'react';

interface SimpleSignupProps {
  className?: string;
}

const SimpleSignup: React.FC<SimpleSignupProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SimpleSignup</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SimpleSignup;