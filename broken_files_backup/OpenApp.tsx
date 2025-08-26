import React from 'react';
import { Helmet } from 'react-helmet-async';
const OpenApp: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Open App - Zion Tech Group</title>
        <meta name="description" content="Open Zion Tech Group applications. Access our web and mobile apps for seamless service delivery." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Open App</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch and access Zion Tech Group applications for seamless service delivery.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              App launcher coming soon. We're building comprehensive application access.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default OpenApp;