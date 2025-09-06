import React from 'react';

interface RoutesProps {
  className?: string;
}

const Routes: React.FC<RoutesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Routes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Routes;