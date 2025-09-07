import React, { JSX, Suspense, lazy } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';

// Lazy load components for better performance
const HomePage = lazy(() => import('./pages/index'));

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <main className="min-h-screen">
          <HomePage />
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}