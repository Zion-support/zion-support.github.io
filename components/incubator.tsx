import React from 'react';

interface IncubatorProps {
  className?: string;
}

const Incubator: React.FC<IncubatorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Incubator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Incubator;