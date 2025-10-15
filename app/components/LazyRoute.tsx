import React from 'react';

interface LazyRouteProps {
  className?: string;
  children?: React.ReactNode;
}

const LazyRoute: React.FC<LazyRouteProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`lazyroute ${className}`}>
      {children}
    </div>
  );
};

export default LazyRoute;