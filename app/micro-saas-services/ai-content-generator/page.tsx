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

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <ErrorBoundary>
      <PageComponent {...props} />
    </ErrorBoundary>
  );
}