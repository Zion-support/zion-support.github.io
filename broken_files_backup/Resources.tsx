import React from 'react';
import { Helmet } from 'react-helmet-async';
const Resources: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Resources - Zion Tech Group</title>
        <meta name="description" content="Access valuable resources, tools, and insights from Zion Tech Group. Download whitepapers, guides, and more." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our library of resources, tools, and insights to help you stay ahead in technology.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Resources section coming soon. We're building a comprehensive library of valuable content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Resources;