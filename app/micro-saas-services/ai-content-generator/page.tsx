import ErrorBoundary from '../../components/ErrorBoundary';
import React from 'react';

export const metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Professional services by Zion Tech Group.',
}



function AIContentGenerator() {
  return (
    <div className="min-h-screen bg-white">
      <h1>AI Content Generator</h1>
      <p>This is a placeholder for the AI Content Generator component.</p>
    </div>
  );
}

export default function Wrapped(props: any) {
  return (
    <ErrorBoundary>
      <AIContentGenerator {...props} />
    </ErrorBoundary>
  );
}