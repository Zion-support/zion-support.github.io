import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface ErrorProps {
  error?: Error;
  resetError?: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, resetError }) => {
  return (
    <>
      <Helmet>
        <title>Error - Zion Tech Group</title>
        <meta name="description" content="An error occurred on Zion Tech Group website." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center">
            <ExclamationTriangleIcon className="mx-auto h-12 w-12 text-red-500" />
            <h1 className="mt-4 text-3xl font-bold text-gray-900">
              Oops! Something went wrong
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              We're sorry, but something unexpected happened.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Error Details
              </h2>
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                  <p className="text-sm text-red-800">
                    {error.message || 'An unknown error occurred'}
                  </p>
                </div>
              )}
              
              <div className="space-y-4">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <ArrowPathIcon className="h-4 w-4 mr-2" />
                  Reload Page
                </button>
                
                <button
                  onClick={() => window.history.back()}
                  className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Go Back
                </button>
                
                {resetError && (
                  <button
                    onClick={resetError}
                    className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Try Again
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;