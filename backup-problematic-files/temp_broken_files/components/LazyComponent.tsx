import React, { Suspense, lazy } from 'react';
interface LazyComponentProps {component: () => Promise<{ default: React.ComponentType<any> }>;
</any>
const LazyComponent: React.FC<LazyComponentProps> = ({;

  fallback = <div>Loading...</div>,;
    <Suspense fallback={fallback}>;

      <LazyLoadedComponent {...props} />;

    ;
const LazyComponent: React.FC<LazyComponentProps> = ({ 

  fallback = <div>Loading...</div>, 
    <Suspense fallback={fallback}>

      <LazyLoadedComponent {_...props} />

    )