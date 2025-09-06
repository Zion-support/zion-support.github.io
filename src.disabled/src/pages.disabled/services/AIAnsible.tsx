import React from 'react';

interface AIAnsibleProps {
  className?: string;
}

const AIAnsible: React.FC<AIAnsibleProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AIAnsible</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AIAnsible;