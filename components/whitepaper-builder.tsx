import React from 'react';

interface Whitepaper-builderProps {
  className?: string;
}

const Whitepaper-builder: React.FC<Whitepaper-builderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Whitepaper-builder</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Whitepaper-builder;