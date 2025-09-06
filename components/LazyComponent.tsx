<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { Suspense, lazy } from 'react',
interface LazyComponentProps {
  component: () => Promise<{ default: React.ComponentType < any> }>,
  fallback?: React.ReactNode,
  [key: string]: any;
}
const LazyComponent: React.FC < LazyComponentProps> = ({
  component,
  fallback = <div > Loading...</div>,
  ...props;
}) => {
  const LazyLoadedComponent = lazy (component),
  return (
    <Suspense fallback={fallback}>;
      <LazyLoadedComponent {...props} />;
    </Suspense>);
},
<<<<<<< HEAD
export default LazyComponent;
=======

export default LazyComponent;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
