import ErrorBoundary from '../../components/ErrorBoundary';
import React from 'react';

export const metadata = {
  title: 'Ai Analytics Dashboard | Zion Tech Group',
  description: 'Professional ai analytics dashboard services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: 'ai analytics dashboard, technology, services, AI, automation',
  openGraph: {
    title: 'Ai Analytics Dashboard | Zion Tech Group',
    description: 'Professional ai analytics dashboard services by Zion Tech Group.',
    type: 'website',
  },
};


function AIAnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <h1>AI Analytics Dashboard</h1>
      <p>This is a placeholder for the AI Analytics Dashboard component.</p>
    </div>
  );
}

export default function Wrapped(props: { [key: string]: unknown }) {
  return (
    <ErrorBoundary>
      <AIAnalyticsDashboard {...props} />
    </ErrorBoundary>
  );
}