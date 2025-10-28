'use client';

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          You're Offline
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Please check your internet connection and try again.
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

