import React from 'react';

interface DemosProps {
  className?: string;
}

const Demos: React.FC<DemosProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Demos</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Demos;