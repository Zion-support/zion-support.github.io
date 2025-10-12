import React, { Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from './Navigation';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';

// Lazy load the actual page component
const LazyPageComponent = lazy(() => {
  const location = window.location.pathname;
  const pagePath = location.replace(/^\//, '').replace(/\/$/, '');
  
  // Try to import the page component
  return import(`../${pagePath}/page.tsx`).catch(() => {
    // If the page doesn't exist, return a default 404 component
    return import('./NotFoundPage');
  });
});

const DynamicPage: React.FC = () => {
  const location = useLocation();
  const pagePath = location.pathname.replace(/^\//, '').replace(/\/$/, '');
  
  // Generate page title and description based on the path
  const generatePageInfo = (path: string) => {
    const segments = path.split('/');
    const lastSegment = segments[segments.length - 1];
    
    // Convert kebab-case to Title Case
    const title = lastSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      title: `${title} - Zion Tech Group`,
      description: `Professional ${title.toLowerCase()} services and solutions by Zion Tech Group. Transform your business with cutting-edge technology.`,
      keywords: `${title.toLowerCase()}, AI solutions, IT services, technology, Zion Tech Group`
    };
  };

  const pageInfo = generatePageInfo(pagePath);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>{pageInfo.title}</title>
        <meta name="description" content={pageInfo.description} />
        <meta name="keywords" content={pageInfo.keywords} />
      </Helmet>
      
      <Navigation />
      
      <Suspense fallback={<LoadingSpinner size="lg" text="Loading page..." />}>
        <LazyPageComponent />
      </Suspense>
      
      <Footer />
    </div>
  );
};

export default DynamicPage;