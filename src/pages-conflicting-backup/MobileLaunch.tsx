import React from 'react';
import { Helmet } from 'react-helmet-async';

const MobileLaunch: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mobile Launch - Zion Tech Group</title>
        <meta name="description" content="Launch Zion Tech Group's mobile applications. Access our services on the go with our mobile apps." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Mobile Launch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch our mobile applications and access Zion Tech Group services on the go.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Mobile launch page coming soon. We're building comprehensive mobile applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileLaunch;