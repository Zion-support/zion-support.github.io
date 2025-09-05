<<<<<<< HEAD
import React, { Suspense, lazy } from 'react';
;
interface LazyComponentProps {;
  component:() => Promise<{ default:React.ComponentType<any> }>;
  fallback?:React.ReactNode;
  [key:string]:any;
}
;
const LazyComponent:React.FC<LazyComponentProps> = ({ ;
  component, ;
  fallback = <div>Loading...</div>, ;
  ...props ;
}) => {;
  const LazyLoadedComponent = lazy(component);
  ;
  return (;
    <Suspense fallback={fallback}>;
      <LazyLoadedComponent {...props} />;
    </Suspense>;
  );
};
;
export default LazyComponent;
=======
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
  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {_...props} />
    </Suspense>
  )
},

export default LazyComponent,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
