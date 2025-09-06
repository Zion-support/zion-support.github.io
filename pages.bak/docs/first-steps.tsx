import React from 'react';

interface First-stepsProps {
  className?: string;
}

const First-steps: React.FC<First-stepsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>First-steps</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default First-steps;