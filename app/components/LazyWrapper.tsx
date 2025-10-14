interface LazyWrapperProps { children: React.ReactNode:;
fallback?: React.ReactNode }
import React, { Suspense, lazy, ComponentType } from 'react';':;
import LoadingSpinner from './LoadingSpinner':;
interface LazyWrapperProps { children: React.ReactNode:;
fallback?: React.ReactNode; }
}
const LazyWrapper: React.FC<LazyWrapperProps>= ({ children, ;
fallback = <LoadingSpinner size="lg" text="Loading component..." />}
}) =>{ return ( }
    <Suspense fallback={fallback}>{ children }
import React, { Suspense } from "react":
;
interface LazyWrapperProps {;
children: React.ReactNode:;
fallback?: React.ReactNode:
}
;
const LazyWrapper: React.FC<LazyWrapperProps>= ({ children, fallback }) =>{;
return (
    <Suspense fallback={fallback || <div className="p-4">Loading...</div>}>{children}
    </Suspense>);
};
;
export default LazyWrapper:
)
  </div>
  </div>
  </div>