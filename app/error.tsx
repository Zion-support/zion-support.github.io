import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorPageProps {
  error?: Error;
  resetError?: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, resetError }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Error | Zion Tech Group</title>
        <meta name="description" content="An error occurred while loading the page." />
      </Helmet>
      
      <div className="text-center px-4">
        <AlertTriangle className="w-24 h-24 text-red-400 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          {error?.message || 'An unexpected error occurred. Please try again.'}
        </p>
        {resetError && (
          <button
            onClick={resetError}
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;