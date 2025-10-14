<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
'use client';
const EnhancedFooter: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Enhanced Footer - Zion Tech Group</title>
        <meta name="description" content="Professional enhanced footer services by Zion Tech Group." />
      </Helmet>
      { /* Hero Section */ }
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Enhanced Footer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional enhanced footer services
            designed to help your business grow and succeed.
          </p>
        </div>
      </section>
    </div>
  );
}
};
export default EnhancedFooter;
export default EnhancedFooter;
'
=======
import React from "react";

const EnhancedFooter: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-white">Enhanced Footer</h2>
      <p className="text-gray-300">This is the enhanced footer component.</p>
    </div>
  );
};

export default EnhancedFooter;
>>>>>>> origin/main
