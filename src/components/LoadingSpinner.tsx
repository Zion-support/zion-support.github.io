import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="ml-4 text-lg text-gray-600">Loading...</p>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
      <div className="w-16 h-16 border-8 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-xl font-semibold">Loading content...</p>
    </div>
  );
}