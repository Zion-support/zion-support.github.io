'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Helmet>
        <title>Error - Zion Tech Group</title>
        <meta name="description" content="An error occurred on the page" />
      </Helmet>
      
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Something went wrong!</h1>
          <p className="text-xl text-gray-600 mb-8">
            We apologize for the inconvenience. Please try again.
          </p>
          <button
            onClick={reset}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    </>
  );
}