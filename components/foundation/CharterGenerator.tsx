import React from 'react';

interface CharterGeneratorProps {
  className?: string;
}

const CharterGenerator: React.FC<CharterGeneratorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CharterGenerator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CharterGenerator;