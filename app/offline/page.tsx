import React from 'react';

const OfflinePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">You&apos;re Offline</h1>
        <p className="text-gray-600 mb-8">
          It looks like you&apos;re not connected to the internet. Please check your connection and try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default OfflinePage;