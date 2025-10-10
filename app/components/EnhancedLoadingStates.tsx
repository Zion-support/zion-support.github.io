'use client';
import React from 'react';
    </div>
  </div>
);

    <div className="space-y-2">
      <div className="h-4 bg-gray-300/20 rounded"></div>
      <div className="h-4 bg-gray-300/20 rounded w-4/5"></div>
      <div className="h-4 bg-gray-300/20 rounded w-3/4"></div>
    </div>
  </div>
);

export const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
        <div className="w-8 h-8 bg-white rounded-lg"></div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h2>
      <p className="text-gray-300">Loading amazing solutions...</p>
      <div className="mt-4 flex justify-center">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce mr-2"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce mr-2" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  </div>
);

export const ErrorBoundaryFallback: React.FC<{ error?: Error }> = ({ error }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center max-w-md mx-auto p-8">
      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <div className="w-8 h-8 bg-white rounded-lg"></div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h2>
      <p className="text-gray-300 mb-6">
        We're sorry, but something unexpected happened. Please try refreshing the page.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
      >
        Refresh Page
      </button>
      {error && (
        <details className="mt-4 text-left">
          <summary className="text-gray-400 cursor-pointer">Error Details</summary>
          <pre className="text-xs text-gray-500 mt-2 p-2 bg-black/20 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  </div>
);