import React from 'react';

interface Research-developmentProps {
  className?: string;
}

const Research-development: React.FC<Research-developmentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Research-development</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Research-development;