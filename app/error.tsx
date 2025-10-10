'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <>
      <Helmet>
        <title>Error - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
          <p className="text-gray-600 mb-4">An error occurred while loading this page.</p>
          <button
            onClick={reset}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Try again
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;