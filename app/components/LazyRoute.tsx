'use client'
import React from 'react';

interface LazyRouteProps {
  className?: string;
}

const LazyRoute: React.FC<LazyRouteProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Lazy Route</h2>
      <p className="text-gray-600">This is a placeholder component for Lazy Route.</p>
    </div>
  );
};

export default LazyRoute;
