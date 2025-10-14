'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

const EnhancedFooter: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Enhanced Footer - Zion Tech Group</title>
        <meta name="description" content="Professional enhanced footer services by Zion Tech Group." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Enhanced Footer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional footer solutions tailored to your business needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default EnhancedFooter;