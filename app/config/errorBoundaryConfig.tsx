import React from 'react';

export const errorBoundaryConfig = {
  fallback: (error: Error) => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
        <p className="text-gray-600 mb-4">An error occurred in the application.</p>
        <pre className="text-sm text-gray-500">{error.message}</pre>
      </div>
    </div>
  )
};