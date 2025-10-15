import React from 'react';

const MicroSaaSSolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Micro SaaS Solutions</h1>
          <p className="text-xl text-gray-300 mb-12">
            Scalable micro SaaS applications for modern businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Custom SaaS Apps</h3>
            <p className="text-gray-300">
              Tailored SaaS applications built for your specific business needs.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">API Integration</h3>
            <p className="text-gray-300">
              Seamless integration with existing systems and third-party APIs.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
            <p className="text-gray-300">
              Cloud-native architecture designed for growth and scalability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaaSSolutionsPage;
