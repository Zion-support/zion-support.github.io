import ErrorBoundary from '../../components/ErrorBoundary';
import React from 'react';

export const metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Professional services by Zion Tech Group.',
}



function AILeadGeneration() {
  return (
    <div className="min-h-screen bg-white">
      <h1>AI Lead Generation</h1>
      <p>This is a placeholder for the AI Lead Generation component.</p>
    </div>
  );
}

export default function Wrapped(props: any) {
  return (
    <ErrorBoundary>
      <AILeadGeneration {...props} />
    </ErrorBoundary>
  );
}