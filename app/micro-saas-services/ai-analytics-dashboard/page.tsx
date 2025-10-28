import ErrorBoundary from '../../components/ErrorBoundary';
import React from 'react';

export const metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Professional services by Zion Tech Group.',
}


function AIAnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <h1>AI Analytics Dashboard</h1>
      <p>This is a placeholder for the AI Analytics Dashboard component.</p>
    </div>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <ErrorBoundary>
      <AIAnalyticsDashboard {...props} />
    </ErrorBoundary>
  );
}