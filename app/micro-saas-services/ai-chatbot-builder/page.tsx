import { ErrorBoundary } from './components/ErrorBoundary';
import React from 'react';

export default function page() {
  return (
    <div>
      <h1>page</h1>
      <p>Content coming soon...</p>
    </div>
  );
}

export default function Wrapped(props: any) {
  return (
    <ErrorBoundary>
      <PageComponent {...props} />
    </ErrorBoundary>
  );
}