import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Loading...</h2>
        <p className="text-gray-600">
          Please wait while we load the content.
        </p>
      </div>
    </div>
  );
}