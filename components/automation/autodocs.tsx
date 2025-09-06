import React from 'react';

interface AutodocsProps {
  className?: string;
}

const Autodocs: React.FC<AutodocsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Autodocs</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Autodocs;