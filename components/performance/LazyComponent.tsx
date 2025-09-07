<<<<<<< HEAD
<<<<<<< HEAD
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
}) => {
  const LazyLoadedComponent = lazy(component);
=======
import React, { Suspense } from 'react';
ursor/automate-test-improve-and-merge-code-646c;
import React from 'react';
}
import React, { Suspense, lazy } from 'react';
import React, { Suspense, ReactNode } from 'react';
import LoadingSpinner from '../LoadingSpinner';
interface LazyComponentProps  {children: ReactNode;
  fallback?: ReactNode;
}const LazyComponent: React.FC<LazyComponentProps> = ({children,fallback = <LoadingSpinner />;
}) => {return (<Suspense fallback={fallback}>;
      <Component {...props} />;
    </Suspense>)}export default LazyComponent;
},<Suspense fallback={fallback}>;
      {children}
    </Suspense>;
  )}export default LazyComponent;ursor/automate-test-improve-and-merge-code-646c;
  return (

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
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
}
=======
import React from 'react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
};

export default LazyComponent;


import React from 'react'
}
import React, { Suspense, lazy } from 'react';

<<<<<<< HEAD

import React from 'react'
}
import React, { Suspense, lazy } from 'react';

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
}
>>>>>>> origin/main

  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
    </Suspense>
  );
};

<<<<<<< HEAD
export default LazyComponent;
=======
import React from 'react';
};
>>>>>>> pr-11992
=======
import React from 'react';
},
>>>>>>> origin/merge-automation-changes
=======

  return (

=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
