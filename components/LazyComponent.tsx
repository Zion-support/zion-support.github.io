<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
