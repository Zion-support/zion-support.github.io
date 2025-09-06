import React from 'react';

interface GradientHeading.testProps {
  className?: string;
}

const GradientHeading.test: React.FC<GradientHeading.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GradientHeading.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GradientHeading.test;