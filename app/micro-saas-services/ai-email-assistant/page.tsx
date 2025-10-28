import ErrorBoundary from '../../components/ErrorBoundary';
import React from 'react';

export const metadata = {
  title: 'Ai Email Assistant | Zion Tech Group',
  description: 'Professional ai email assistant services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: 'ai email assistant, technology, services, AI, automation',
  openGraph: {
    title: 'Ai Email Assistant | Zion Tech Group',
    description: 'Professional ai email assistant services by Zion Tech Group.',
    type: 'website',
  },
};



function AIEmailAssistant() {
  return (
    <div className="min-h-screen bg-white">
      <h1>AI Email Assistant</h1>
      <p>This is a placeholder for the AI Email Assistant component.</p>
    </div>
  );
}

export default function Wrapped(props: { [key: string]: unknown }) {
  return (
    <ErrorBoundary>
      <AIEmailAssistant {...props} />
    </ErrorBoundary>
  );
}