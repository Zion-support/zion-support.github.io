import ErrorBoundary from '../../components/ErrorBoundary';
import React from 'react';

export const metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Professional services by Zion Tech Group.',
}



function AIEmailAssistant() {
  return (
    <div className="min-h-screen bg-white">
      <h1>AI Email Assistant</h1>
      <p>This is a placeholder for the AI Email Assistant component.</p>
    </div>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <ErrorBoundary>
      <AIEmailAssistant {...props} />
    </ErrorBoundary>
  );
}