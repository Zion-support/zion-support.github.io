'use client';
import ErrorBoundary from '../components/ErrorBoundary';

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
        
      </main>
    </div>
  );
}

export default function FiveGMobileApplications() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              5G Mobile Applications
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Building next-generation mobile applications powered by 5G technology
            </p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}


