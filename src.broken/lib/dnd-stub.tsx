import React from 'react';

interface Dnd-stubProps {
  className?: string;
}

const Dnd-stub: React.FC<Dnd-stubProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Dnd-stub</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Dnd-stub;