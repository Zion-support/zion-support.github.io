import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Zion Tech Group</title>
        <meta name="description" content="404 - Page not found - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              404 - Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The page you're looking for doesn't exist.
            </p>
            <button 
              onClick={() => window.history.back()}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;