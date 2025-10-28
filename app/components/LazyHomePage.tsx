'use client';
import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './LoadingSpinner';
// Lazy load the main page content
const HomePageContent = lazy(() => import('../page'));
const LazyHomePage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomePageContent />
    </Suspense>
  );
};
export default LazyHomePage;