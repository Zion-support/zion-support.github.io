import React, { Suspense, lazy } from 'react';
interface LazyComponentProps {component: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  [key: string]: any;
}
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
