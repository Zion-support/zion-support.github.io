import React from 'react';

interface Accessibility.testProps {
  className?: string;
}

const Accessibility.test: React.FC<Accessibility.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Accessibility.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Accessibility.test;