import ErrorBoundary from '../../components/ErrorBoundary';
import React from 'react';

export const metadata = {
  title: 'Ai Chatbot Builder | Zion Tech Group',
  description: 'Professional ai chatbot builder services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: 'ai chatbot builder, technology, services, AI, automation',
  openGraph: {
    title: 'Ai Chatbot Builder | Zion Tech Group',
    description: 'Professional ai chatbot builder services by Zion Tech Group.',
    type: 'website',
  },
};


function AIChatbotBuilder() {
  return (
    <div className="min-h-screen bg-white">
      <h1>AI Chatbot Builder</h1>
      <p>This is a placeholder for the AI Chatbot Builder component.</p>
    </div>
  );
}

export default function Wrapped(props: { [key: string]: unknown }) {
  return (
    <ErrorBoundary>
      <AIChatbotBuilder {...props} />
    </ErrorBoundary>
  );
}