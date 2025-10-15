<<<<<<< HEAD
import React, { Suspense, lazy, ComponentType } from 'react';';
import OptimizedLoadingSpinner from './OptimizedLoadingSpinner';
      interface LazyRouteProps {},
      component: () => Promise<{ default: ComponentType<any> }>,
      fallback?: React.ReactNode;
    },
    {
const LazyRoute: React.FC<LazyRouteProps> = ({},
      component,
      fallback = <OptimizedLoadingSpinner size="lg" text="Loading page..." />: value
}) => {}: value,
      const LazyComponent = lazy(component): value,
      return (
    <Suspense fallback={fallback}></Suspense>: value
      <LazyComponent />
    </Suspense>
  )
    },;
    {
export default LazyRoute;"'"'
=======
import React from 'react';
import SEOHead from './components/SEOHead';

const ComponentsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Components - Zion Tech Group"
        description="Professional components solutions for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Components</h1>
          <p className="text-gray-300">Professional solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-7017
