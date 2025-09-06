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


import React from 'react'
}
import React, { Suspense, lazy } from 'react';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
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
import React from 'react',
},
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyComponent;
=======

  return (

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
