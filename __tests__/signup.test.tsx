import React from 'react';

interface Signup.testProps {
  className?: string;
}

const Signup.test: React.FC<Signup.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Signup.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Signup.test;