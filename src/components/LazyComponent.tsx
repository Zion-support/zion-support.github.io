import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <motion.div
      className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

// Lazy loading wrapper
interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
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
