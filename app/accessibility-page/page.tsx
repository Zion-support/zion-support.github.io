import React from 'react';
import { Helmet } from 'react-helmet-async';

const AccessibilityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Accessibility solutions for modern businesses" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Accessibility</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Making technology accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityPage;
