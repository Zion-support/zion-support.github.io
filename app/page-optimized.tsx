import React from 'react';

export default function PageOptimized() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Optimized Page</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                This is an optimized version of the page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
