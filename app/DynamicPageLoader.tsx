import React, { Suspense, lazy } from 'react';
// Loading component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-white text-xl">Loading page...</div>
  </div>
);
// Dynamic page loader that loads pages on demand
const DynamicPageLoader: React.FC<{ pagePath: string }> = ({ pagePath }) => { // Create a dynamic import based on the current path
  const PageComponent = React.useMemo(() => {
    try {
      return lazy(() => import(`./${pagePath }`));
    } catch (error) { console.error('Error loading page:', error);
      return lazy(() => import('./404')); }
  }, [pagePath]);
  return (
    <Suspense fallback={ <PageLoader /> }>
      <PageComponent />
    </Suspense>
  );
};
export default DynamicPageLoader;