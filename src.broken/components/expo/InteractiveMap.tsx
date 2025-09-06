import React from 'react';

interface InteractiveMapProps {
  className?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InteractiveMap</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InteractiveMap;