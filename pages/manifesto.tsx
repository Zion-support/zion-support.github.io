import React from 'react';

interface ManifestoProps {
  className?: string;
}

const Manifesto: React.FC<ManifestoProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Manifesto</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Manifesto;