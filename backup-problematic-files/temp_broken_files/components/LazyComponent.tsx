import React, { Suspense, lazy } from 'react';
interface LazyComponentProps {component: () => Promise<{ default: React.ComponentType<any> }>;
<<<<<<< HEAD
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
=======
</any>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const LazyComponent: React.FC<LazyComponentProps> = ({;

  fallback = <div>Loading...</div>,;
    <Suspense fallback={fallback}>;

      <LazyLoadedComponent {...props} />;
<<<<<<< HEAD
    </Suspense>;
  );
}
export default LazyComponent;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    ;
const LazyComponent: React.FC<LazyComponentProps> = ({ 

<<<<<<< HEAD
export default LazyComponent,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  fallback = <div>Loading...</div>, 
    <Suspense fallback={fallback}>

      <LazyLoadedComponent {_...props} />

    )
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
