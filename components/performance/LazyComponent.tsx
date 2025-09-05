<<<<<<< HEAD
import React from 'react';

interface LazyComponentProps {

export default function LazyComponent({ }: LazyComponentProps) {
  return (
    <div>
      <h1>LazyComponent</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
=======
import React, { Suspense, lazy } from 'react'
interface LazyComponentProps {
  component: () => Promise<{ default: React.ComponentType<unknown> }>
  fallback?: React.ReactNode
  [key: string]: unknown;
}

export const "LazyComponent": React.FC<LazyComponentProps> = ({ 
  component, 
  fallback = <div>Loading...</div>,
  ...props 
}) => {
  const LazyLoadedComponent = lazy(component)
  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
    </Suspense>
  )
}
export default LazyComponent
import React,{ Suspense,lazy } from 'react' interface LazyComponentProps { component: () => Promise<{ default: React.ComponentType<unknown> }> fallback?: React.ReactNode [key: string]: unknown } export const LazyComponent: React.FC<LazyComponentProps> = ({ component,fallback = <div>Loading...</div>,...props }) => { const LazyLoadedComponent = lazy(component) return ( <Suspense fallback={fallback}> <LazyLoadedComponent {...props} /> </Suspense> ) } export default LazyComponent
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
>>>>>>> cursor/expand-services-advertise-and-build-project-22c3
