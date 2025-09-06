<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, { lazy, Suspense } from 'react';

interface LazyComponentProps {
  component: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  [key: string]: any;
}

export const LazyComponent: React.FC<LazyComponentProps> = ({
  component,
  fallback = <div>Loading...</div>,
  ...props
}) => {
  const LazyLoadedComponent = lazy(component);
  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
=======
import React from 'react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
};
import React, { Suspense, lazy } from 'react';
;

=======

import React from 'react'
}
import React, { Suspense, lazy } from 'react';


<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface LazyComponentProps {
  component: ComponentType < Record < string, unknown>>;
  fallback?: ReactNode;
  [key: string]: unknown
}


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

  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
>>>>>>> origin/main
    </Suspense>
  );
<<<<<<< HEAD
}
=======
};

<<<<<<< HEAD
export default LazyComponent;
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
export default LazyComponent;
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
};
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import React from 'react',;
},

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import React from 'react';
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
