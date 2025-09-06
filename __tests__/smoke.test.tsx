import React from 'react';

interface Smoke.testProps {
  className?: string;
}

const Smoke.test: React.FC<Smoke.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Smoke.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Smoke.test;