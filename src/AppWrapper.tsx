<<<<<<< HEAD

=======
<<<<<<< HEAD
import React, { Suspense } from 'react';
=======

>>>>>>> origin/cursor/build-and-fix-errors-c9ef
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { ErrorBoundary } from './components/ErrorBoundary';
import { FullPageSkeleton } from './components/LoadingSkeleton';
import App from './App';

export function AppWrapper() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}