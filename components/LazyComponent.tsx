import React, { Suspense, lazy } from 'react';
interface LazyComponentProps {
  component: () => Promise<{ default: React.ComponentType<any> }>,
  fallback?: React.ReactNode,
  [key: string]: any
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  component, 
  fallback = $2;
  ...props 
}) => {
  const LazyLoadedComponent = lazy($2);
  return (
    <Suspense fallback = $2;
export default LazyComponent,