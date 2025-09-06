import React, { Suspense, lazy } from 'react';
interface LazyComponentProps {component: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  [key: string]: any;
}
<<<<<<< HEAD
<<<<<<< HEAD:components/LazyComponent.tsx
const LazyComponent: React.FC<LazyComponentProps> = ({component;
  fallback = <div>Loading...</div>;
  ...props;
}) => {const LazyLoadedComponent = lazy(component);
  return (;
    <Suspense fallback={fallback}>;
      <LazyLoadedComponent {...props} />;
    </Suspense>;
  );
}
export default LazyComponent;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
const LazyComponent: React.FC<LazyComponentProps> = ({;
  component,;
  fallback = <div>Loading...</div>,;
  ...props;
}) => {const LazyLoadedComponent = lazy(component);
  return (;
    <Suspense fallback={fallback}>;
      <LazyLoadedComponent {...props} />;
    </Suspense>;
  );
}
export default LazyComponent;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  component, 
  fallback = <div>Loading...</div>, 
  ...props 
}) => {
  const LazyLoadedComponent = lazy(component),  
  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {_...props} />
    </Suspense>
  )
},

export default LazyComponent,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
