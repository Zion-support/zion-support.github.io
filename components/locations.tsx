import React from 'react';

interface LocationsProps {
  className?: string;
}

const Locations: React.FC<LocationsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Locations</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Locations;