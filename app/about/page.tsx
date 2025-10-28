import React from 'react';

import { ErrorBoundary } from '../components/ErrorBoundary';



export default function Wrapped(props: any) {
  return (
    <ErrorBoundary>
      <AboutPage {...props} />
    </ErrorBoundary>
  );
}
