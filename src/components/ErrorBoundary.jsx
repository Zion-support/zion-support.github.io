import React from 'react';

export default function ErrorBoundaryFallback({ error, resetError, retryCount = 0 }) {
  const maxRetries = 3;
  const handleRetry = () => {
    if (retryCount < maxRetries) {
      resetError();
    }
  };
  return (
    <div className="max-w-xl mx-auto p-6 text-gray-900">
      <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
      {error && (
        <pre className="text-red-500 whitespace-pre-wrap text-sm mb-4">
          {String(error)}
        </pre>
      )}
      <button onClick={handleRetry} className="px-4 py-2 bg-blue-600 text-white rounded">
        Retry
      </button>
    </div>
  );
}