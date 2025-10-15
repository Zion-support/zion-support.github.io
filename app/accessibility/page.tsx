import React from 'react';

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Page
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            This page is currently under development.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-500">
              Content will be available soon. Please check back later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
