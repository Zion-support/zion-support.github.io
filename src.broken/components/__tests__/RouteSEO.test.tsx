import React from 'react';

interface RouteSEO.testProps {
  className?: string;
}

const RouteSEO.test: React.FC<RouteSEO.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RouteSEO.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RouteSEO.test;