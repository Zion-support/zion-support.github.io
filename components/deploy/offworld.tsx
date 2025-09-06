import React from 'react';

interface OffworldProps {
  className?: string;
}

const Offworld: React.FC<OffworldProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Offworld</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Offworld;