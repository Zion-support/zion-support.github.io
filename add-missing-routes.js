import React from 'react';

interface add-missing-routesProps {
  className?: string;
  children?: React.ReactNode;
}

const add-missing-routes: React.FC<add-missing-routesProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`add-missing-routes ${className}`}>
      {children}
    </div>
  );
};

export default add-missing-routes;