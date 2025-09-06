import React from 'react';

interface Signup.specProps {
  className?: string;
}

const Signup.spec: React.FC<Signup.specProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Signup.spec</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Signup.spec;