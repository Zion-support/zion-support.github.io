import React from 'react';

const CloudSolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Cloud Solutions</h1>
          <p className="text-xl text-gray-300 mb-12">
            Scalable cloud infrastructure and services for your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Cloud Migration</h3>
            <p className="text-gray-300">
              Seamless migration to cloud infrastructure with minimal downtime.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Cloud Management</h3>
            <p className="text-gray-300">
              Comprehensive cloud management and optimization services.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Hybrid Cloud</h3>
            <p className="text-gray-300">
              Hybrid cloud solutions for maximum flexibility and security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSolutionsPage;
