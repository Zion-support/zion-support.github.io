import React from 'react';
import Head from 'next/head';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Professional support services for your business." />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Support
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional support services for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Technical Support</h3>
            <p className="text-gray-300">
              24/7 technical support for all our services.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
            <p className="text-gray-300">
              Comprehensive documentation and guides.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Community</h3>
            <p className="text-gray-300">
              Join our community for help and discussions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
