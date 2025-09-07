
pr-12243

import React from 'react'
}
import React, { Suspense, lazy } from 'react';
import React, { Suspense, ReactNode } from 'react';
import LoadingSpinner from '../LoadingSpinner';
pr-12243

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;

<<<<<<< HEAD

export const LazyComponent: React.FC<LazyComponentProps> = ({
  component;
  fallback;

  ...props
=======
>>>>>>> origin/main
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyComponent;
<<<<<<< HEAD

=======
import React from 'react';
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-e9d8
=======

pr-12243
>>>>>>> origin/main
