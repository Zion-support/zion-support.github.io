import React, { Suspense, lazy } from 'react';
interface LazyComponentProps {component: () => Promise<{ default: React.ComponentType<any> }>;
<<<<<<< HEAD




=======
  fallback?: React.ReactNode;
  [key: string]: any;
}
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
