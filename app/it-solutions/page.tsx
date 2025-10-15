import React from 'react';

const ITSolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">IT Solutions</h1>
          <p className="text-xl text-gray-300 mb-12">
            Comprehensive IT services and infrastructure solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Infrastructure Management</h3>
            <p className="text-gray-300">
              Complete IT infrastructure design, deployment, and management.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Network Security</h3>
            <p className="text-gray-300">
              Advanced network security solutions and monitoring systems.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
            <p className="text-gray-300">
              End-to-end digital transformation services for modern businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSolutionsPage;
