<<<<<<< HEAD
<<<<<<< HEAD
import React, { Suspense } from 'react';
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

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
<<<<<<< HEAD
=======


import React from 'react'
}
import React, { Suspense, lazy } from 'react';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  children, 
  fallback = <LoadingSpinner /> 
}) => {
  return (
    <Suspense fallback={fallback}>;
      <Component {...props} />;
    </Suspense>);
}
;
export default LazyComponent;
import React from 'react'
},
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyComponent;
<<<<<<< HEAD
=======

  return (

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
