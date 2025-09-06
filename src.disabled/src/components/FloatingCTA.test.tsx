import React from 'react';

interface FloatingCTA.testProps {
  className?: string;
}

const FloatingCTA.test: React.FC<FloatingCTA.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FloatingCTA.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FloatingCTA.test;