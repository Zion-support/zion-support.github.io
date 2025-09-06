import React from 'react';

interface StepsProps {
  className?: string;
}

const Steps: React.FC<StepsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Steps</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Steps;