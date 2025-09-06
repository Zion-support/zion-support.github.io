import React from 'react';

interface ItServicesProps {
  className?: string;
}

const ItServices: React.FC<ItServicesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ItServices</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ItServices;