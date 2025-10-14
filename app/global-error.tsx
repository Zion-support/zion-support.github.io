import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function GlobalError() {
  return (
    <>
      <Helmet>
        <title>Error - Zion Tech Group</title>
        <meta name="description" content="Global error page - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Global Error
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Something went wrong globally. Please try again later.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
}