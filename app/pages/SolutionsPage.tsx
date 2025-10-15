import React from 'react';

const SolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Solutions</h1>
          <p className="text-xl text-gray-300 mb-12">
            Comprehensive AI and IT solutions for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
            <p className="text-gray-300">
              Advanced artificial intelligence solutions to automate and optimize your business processes.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">IT Solutions</h3>
            <p className="text-gray-300">
              Comprehensive IT services including infrastructure, security, and digital transformation.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
            <p className="text-gray-300">
              Scalable cloud infrastructure and services to support your business growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
