'use client';
import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { PageLoader } from './LoadingStates';
import ErrorBoundary from './ErrorBoundary';

// Dynamic route handler that loads pages based on the current path
const DynamicRouteHandler: React.FC = () => {
  const params = useParams();
  const path = window.location.pathname;
  
  // Remove leading slash and convert to page path
  const pagePath = path.replace(/^\//, '');
  
  // Handle root path
  if (pagePath === '') {
    const HomePage = lazy(() => import('../page'));
    return (
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <HomePage />
        </Suspense>
      </ErrorBoundary>
    );
  }
  
  // Handle nested routes (e.g., /ai-services/business-intelligence)
  const pathSegments = pagePath.split('/');
  const isNestedRoute = pathSegments.length > 1;
  
  if (isNestedRoute) {
    const [parentPath, childPath] = pathSegments;
    const fullPath = `${parentPath}/${childPath}`;
    
    try {
      const PageComponent = lazy(() => import(`../${fullPath}/page`));
      return (
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <PageComponent />
          </Suspense>
        </ErrorBoundary>
      );
    } catch (error) {
      // If the nested route doesn't exist, try the parent route
      try {
        const PageComponent = lazy(() => import(`../${parentPath}/page`));
        return (
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <PageComponent />
            </Suspense>
          </ErrorBoundary>
        );
      } catch (parentError) {
        return <NotFoundPage />;
      }
    }
  }
  
  // Handle single-level routes
  try {
    const PageComponent = lazy(() => import(`../${pagePath}/page`));
    return (
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <PageComponent />
        </Suspense>
      </ErrorBoundary>
    );
  } catch (error) {
    return <NotFoundPage />;
  }
};

// 404 Not Found Page
const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="text-6xl font-bold text-cyan-400 mb-4">404</div>
        <h1 className="text-2xl font-semibold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default DynamicRouteHandler;