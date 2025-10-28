import ErrorBoundary from '../../components/ErrorBoundary';
import React from 'react';

export const metadata = {
  title: 'Ai Lead Generation | Zion Tech Group',
  description: 'Professional ai lead generation services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: 'ai lead generation, technology, services, AI, automation',
  openGraph: {
    title: 'Ai Lead Generation | Zion Tech Group',
    description: 'Professional ai lead generation services by Zion Tech Group.',
    type: 'website',
  },
};



function AILeadGeneration() {
  return (
    <div className="min-h-screen bg-white">
      <h1>AI Lead Generation</h1>
      <p>This is a placeholder for the AI Lead Generation component.</p>
    </div>
  );
}

export default function Wrapped(props: { [key: string]: unknown }) {
  return (
    <ErrorBoundary>
      <AILeadGeneration {...props} />
    </ErrorBoundary>
  );
}