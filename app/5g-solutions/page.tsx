import ErrorBoundary from '../components/ErrorBoundary';
import React from "react";

export const metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Professional page services and solutions by Zion Tech Group.',
  keywords: 'page, technology, services',
  openGraph: {
    title: 'Page | Zion Tech Group',
    description: 'Professional page services and solutions by Zion Tech Group.',
    type: 'website',
  },
};
function Page() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Page
          </h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600">
              This page is under development. Content will be added soon.
            </p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}