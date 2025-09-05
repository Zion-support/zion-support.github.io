import React, {_Suspense, _lazy} from 'react';

interface LazyComponentProps {_component: () => Promise<{ default: React.ComponentType<any>}>;
  fallback?: React.ReactNode;
  [key: string]: unknown;
}

const LazyComponent: React.FC<LazyComponentProps> = (_{_component, _fallback = <div>Loading...</div>, _...props}) => {_const _LazyLoadedComponent = lazy(component);
  
  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {_...props} />
    </Suspense>
  );
};

export default LazyComponent;