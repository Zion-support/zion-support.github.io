import React from 'react';

interface Site-mapProps {
  className?: string;
}

const Site-map: React.FC<Site-mapProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Site-map</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Site-map;