import React from 'react';
import { Helmet } from 'react-helmet-async';
const Talents: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Browse Talents - Zion Tech Group</title>
        <meta name="description" content="Browse our comprehensive directory of technology professionals. Find the perfect talent for your project needs." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Talents</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive directory of technology professionals across all domains and skill levels.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Talents directory coming soon. We're building a comprehensive talent browsing platform.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Talents;