<<<<<<< HEAD
import React, { Suspense, lazy } from 'react',

interface LazyComponentProps {
  component: () => Promise<{ default: React.ComponentType<any> }>,
  fallback?: React.ReactNode,
  [key: string]: any
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  component, 
  fallback = <div>Loading...</div>, 
  ...props 
}) => {
  const LazyLoadedComponent = lazy(component),
=======
import React, {_Suspense, _lazy} from 'react';

interface LazyComponentProps {_component: () => Promise<{ default: React.ComponentType<any>}>;
  fallback?: React.ReactNode;
  [key: string]: unknown;
}

const LazyComponent: React.FC<LazyComponentProps> = (_{_component, _fallback = <div>Loading...</div>, _...props}) => {_const _LazyLoadedComponent = lazy(component);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {_...props} />
    </Suspense>
  )
},

export default LazyComponent,