import React, { lazy, Suspense } from 'react';
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-white text-xl">Loading page...</div>
  </div>
);

// Dynamic page loader that loads pages on demand
const DynamicPageLoader: React.FC<{ pagePath: string }> = ({ pagePath }) => {
  // const location = useLocation(); // Removed unused variable

  // Create a dynamic import based on the current path
  const PageComponent = React.useMemo(() => {
    try {
      // Convert path to component path
      const componentPath = pagePath === '/' ? './page' : `./${pagePath.replace(/^\//, '').replace(/\//g, '/')}/page`;
      return lazy(() => import(componentPath));
    } catch (error) {
      console.error('Error loading page:', error);
      // Fallback to 404 page
      return lazy(() => import('./404/page'));
    }
  }, [pagePath]);

  return (
    <Suspense fallback={<PageLoader />}>
      <PageComponent />
    </Suspense>
  );
};

export default DynamicPageLoader;