import ErrorBoundary from '../../components/ErrorBoundary';
import React from 'react';

export const metadata = {
  title: 'Ai Content Generator | Zion Tech Group',
  description: 'Professional ai content generator services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: 'ai content generator, technology, services, AI, automation',
  openGraph: {
    title: 'Ai Content Generator | Zion Tech Group',
    description: 'Professional ai content generator services by Zion Tech Group.',
    type: 'website',
  },
};



function AIContentGenerator() {
  return (
    <div className="min-h-screen bg-white">
      <h1>AI Content Generator</h1>
      <p>This is a placeholder for the AI Content Generator component.</p>
    </div>
  );
}

export default function Wrapped(props: { [key: string]: unknown }) {
  return (
    <ErrorBoundary>
      <AIContentGenerator {...props} />
    </ErrorBoundary>
  );
}