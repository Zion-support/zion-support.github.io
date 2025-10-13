import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            404 - Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you are looking for could not be found.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;