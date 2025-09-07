<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react'
}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import React, { Suspense, lazy } from 'react';

}

export const LazyComponent: React.FC<LazyComponentProps> = ({
  component;
  fallback = <div>Loading...</div>;
  ...props
}) => {
  const LazyLoadedComponent = lazy(component);
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import React from 'react'
}
import React, { Suspense, lazy } from 'react';

import React from 'react';
};
import React, { Suspense, lazy } from 'react';
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
interface LazyComponentProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  fallback = <div className='flex items-center justify-center p-4'>Loading...</div>, 
  children 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
import React, { useState, useEffect } from 'react'
}
<<<<<<< HEAD
import React from 'react';
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
};

export default LazyComponent;


import React from 'react
}
import React, { Suspense, lazy } from react';

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

import React from 'react'
}
import React, { Suspense, lazy } from 'react';

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
}
<<<<<<< HEAD

  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
};
import React, { Suspense, lazy } from 'react';
interface LazyComponentProps {;
  component: ComponentType<Record<string, unknown>>;
  fallback?: ReactNode;
  [key: string]: unknown,;
}
const LazyComponent: React.FC<LazyComponentProps> = ({ ;
  component: Component, ;
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded" />,;
  ...props ;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (

    <Suspense fallback={fallback}>
      {children}
>>>>>>> origin/resolved-merge-conflicts
    </Suspense>
  );
};

<<<<<<< HEAD
export default LazyComponent;
import React from 'react';
};
=======
<<<<<<< HEAD
export default LazyComponent;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import React from 'react';
},

  return (

<<<<<<< HEAD
=======
=======
export default LazyComponent;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======

import React from 'react',;
},

import React from 'react';
}



<<<<<<< HEAD

import React from 'react',;
},



import React from 'react';
}



=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const LazyComponent: React.FC < LazyComponentProps> = ({
  component: Component,
  fallback = <div className="animate - pulse bg - gray - 200 h - 32 rounded" />,
  ...props;
  return (
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
