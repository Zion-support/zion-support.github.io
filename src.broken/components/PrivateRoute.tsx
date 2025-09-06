import React from 'react';

interface PrivateRouteProps {
  className?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PrivateRoute</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PrivateRoute;