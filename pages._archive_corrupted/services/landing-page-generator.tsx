import React from 'react';

interface Landing-page-generatorProps {
  className?: string;
}

const Landing-page-generator: React.FC<Landing-page-generatorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Landing-page-generator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Landing-page-generator;