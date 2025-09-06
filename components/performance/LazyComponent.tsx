<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React from 'react'
};
import React, { Suspense, lazy } from 'react';


interface LazyComponentProps {
  component: ComponentType<Record<string, unknown>>;
  fallback?: ReactNode;
  [key: string]: unknown,
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  component: Component, 
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded" />,
  ...props 
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import React, { Suspense, lazy } from 'react';

interface LazyComponentProps {
  component: () => Promise<{ default: React.ComponentType<unknown> }>,
  fallback?: React.ReactNode;
  [key: string]: unknown,
}

export const LazyComponent: React.FC<LazyComponentProps> = ({
  component;
  fallback = <div>Loading...</div>;
  ...props
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}) => {
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyComponent;
<<<<<<< HEAD


=======
<<<<<<< HEAD


=======
=======
import React from 'react';
};
>>>>>>> pr-11992
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
