<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { Suspense } from 'react';

interface LazyComponentProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  fallback = <div className="flex items-center justify-center p-4">Loading...</div>, 
  children 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyComponent;
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

import React from 'react'
}
import React, { Suspense, lazy } from 'react';
=======
import React, { Suspense, ReactNode } from 'react';
import LoadingSpinner from '../LoadingSpinner';
>>>>>>> main

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
  [key: string]: unknown
}

import React from 'react';
}

const LazyComponent: React.FC < LazyComponentProps> = ({
  component: Component,
  fallback = <div className="animate - pulse bg - gray - 200 h - 32 rounded" />,
  ...props;
=======
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  children, 
  fallback = <LoadingSpinner /> 
}) => {
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  return (
<<<<<<< HEAD
    <Suspense fallback={fallback}>;
      <Component {...props} />;
    </Suspense>);
}
;
export default LazyComponent;
import React from 'react',
},
<<<<<<< HEAD
=======
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
=======
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyComponent;
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
