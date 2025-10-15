import React from 'react';

const FiveGSolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">5G Solutions</h1>
          <p className="text-xl text-gray-300 mb-12">
            Next-generation 5G network solutions for your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">5G Infrastructure</h3>
            <p className="text-gray-300">
              Complete 5G network infrastructure design and deployment.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">5G Applications</h3>
            <p className="text-gray-300">
              Custom 5G applications and IoT solutions for your industry.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">5G Optimization</h3>
            <p className="text-gray-300">
              Network optimization and performance monitoring for 5G networks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveGSolutionsPage;
