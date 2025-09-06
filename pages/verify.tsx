import React from 'react';

interface VerifyProps {
  className?: string;
}

const Verify: React.FC<VerifyProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Verify</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Verify;