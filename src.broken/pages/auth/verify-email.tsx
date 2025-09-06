import React from 'react';

interface Verify-emailProps {
  className?: string;
}

const Verify-email: React.FC<Verify-emailProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Verify-email</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Verify-email;