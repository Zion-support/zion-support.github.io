import React from 'react';
import React from 'react';
import React from 'react';

export default function AIServicesPage() {
  return (
    <>
      <SEOHead 
        title="AIServicesPage - Zion Tech Group"
        description="Learn more about our AIServicesPage services at Zion Tech Group."
        keywords="AIServicesPage, zion tech group, AI solutions, IT services"
      />
      
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AIServicesPage</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under construction. Please check back soon.
          </p>
          <Link 
            to="/" 
            className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}
