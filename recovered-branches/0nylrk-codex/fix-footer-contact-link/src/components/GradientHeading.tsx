import React from 'react';

interface GradientHeadingProps {
  className?: string;
}

const GradientHeading: React.FC<GradientHeadingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GradientHeading</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GradientHeading;