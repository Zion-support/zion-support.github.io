import React from 'react';

interface ProtectedRoute.testProps {
  className?: string;
}

const ProtectedRoute.test: React.FC<ProtectedRoute.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProtectedRoute.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProtectedRoute.test;