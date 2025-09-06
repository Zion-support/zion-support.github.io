<<<<<<< HEAD
<<<<<<< HEAD

pr-12243

import React from 'react'
}
import React, { Suspense, lazy } from 'react';
import React, { Suspense, ReactNode } from 'react';
import LoadingSpinner from '../LoadingSpinner';
pr-12243
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  children, 
  fallback = <LoadingSpinner /> 
}) => {
  return (
<<<<<<< HEAD
=======
    <Suspense fallback={fallback}>;
      <Component {...props} />;
    </Suspense>);
}
;
export default LazyComponent;
import React from 'react',
},
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyComponent;
<<<<<<< HEAD

pr-12243
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
