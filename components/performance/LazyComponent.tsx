<<<<<<< HEAD

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

  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyComponent;

pr-12243
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
