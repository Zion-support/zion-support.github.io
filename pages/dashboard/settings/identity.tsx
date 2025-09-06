import React from 'react';

interface IdentityProps {
  className?: string;
}

const Identity: React.FC<IdentityProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Identity</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Identity;