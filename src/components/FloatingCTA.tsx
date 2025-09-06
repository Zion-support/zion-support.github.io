import React from 'react';

interface FloatingCTAProps {
  className?: string;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FloatingCTA</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FloatingCTA;