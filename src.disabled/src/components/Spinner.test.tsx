import React from 'react';

interface Spinner.testProps {
  className?: string;
}

const Spinner.test: React.FC<Spinner.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Spinner.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Spinner.test;