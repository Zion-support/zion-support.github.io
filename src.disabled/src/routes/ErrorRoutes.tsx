import React from 'react';

interface ErrorRoutesProps {
  className?: string;
}

const ErrorRoutes: React.FC<ErrorRoutesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorRoutes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorRoutes;