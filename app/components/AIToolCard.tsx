import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "AIToolCard | Zion Tech Group",
  description: "Professional aitoolcard services by Zion Tech Group",
  keywords: "aitoolcard, technology, services",
  openGraph: {
    title: "AIToolCard | Zion Tech Group",
    description: "Professional aitoolcard services by Zion Tech Group",
    type: "website",
  },
};

export default function AIToolCardPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AIToolCard
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional aitoolcard services by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}