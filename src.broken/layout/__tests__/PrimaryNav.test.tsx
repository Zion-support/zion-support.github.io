import React from 'react';

interface PrimaryNav.testProps {
  className?: string;
}

const PrimaryNav.test: React.FC<PrimaryNav.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PrimaryNav.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PrimaryNav.test;