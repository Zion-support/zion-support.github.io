import React from 'react';

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Features</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Features;