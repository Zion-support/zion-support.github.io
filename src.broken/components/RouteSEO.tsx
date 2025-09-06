import React from 'react';

interface RouteSEOProps {
  className?: string;
}

const RouteSEO: React.FC<RouteSEOProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RouteSEO</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RouteSEO;