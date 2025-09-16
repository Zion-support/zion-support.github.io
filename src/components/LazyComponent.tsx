<<<<<<< HEAD
import React from 'react';

const LazyComponent: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">LazyComponent</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default LazyComponent;
=======
import React{ SuspenselazyComponentType } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  [key: string]: any;
}

export default function LazyComponent({ 
  component
  fallback = <LoadingSpinner size="md" text="Loading..." />,
  ...props 
}: LazyComponentProps) {
  const LazyLoadedComponent = lazy(component);
  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
  );
}
// Pre-configured lazy components for common use cases
export const LazyROICalculator = (props: any) => (
  <LazyComponent 
    component={() => import('./ROICalculator')} 
    fallback={<LoadingSpinner size="lg" text="Loading ROI Calculator..." />}
    {...props}
  />
);
export const LazyStructuredData = (props: any) => (
  <LazyComponent 
    component={() => import('./StructuredData')} 
    fallback={null}
    {...props}
  />
);
export const LazyInteractiveWidget = (props: any) => (
  <LazyComponent 
    component={() => import('./InteractiveContentDiscoveryWidget')} 
    fallback={<LoadingSpinner size="lg" text="Loading Interactive Widget..." />}
    {...props}
  />
);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
