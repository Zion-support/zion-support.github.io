import React from 'react';

interface ProtectedRouteProps {
  className?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProtectedRoute</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProtectedRoute;