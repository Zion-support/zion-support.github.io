import React from 'react';
import { Helmet } from 'react-helmet-async';

const ITSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, system integration, and technical support." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services to support and enhance your business technology infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Infrastructure Management</h3>
              <p className="text-gray-300 mb-6">Complete management of your IT infrastructure and systems.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">System Integration</h3>
              <p className="text-gray-300 mb-6">Seamless integration of various systems and applications.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Technical Support</h3>
              <p className="text-gray-300 mb-6">24/7 technical support and maintenance services.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITSolutionsPage;
