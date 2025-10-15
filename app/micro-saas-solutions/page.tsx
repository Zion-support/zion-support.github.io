import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSAASSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS solutions for specific business needs and workflows." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized software solutions for specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom SaaS Development</h3>
              <p className="text-gray-600">
                Build custom SaaS applications tailored to your specific business requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SaaS Integration</h3>
              <p className="text-gray-600">
                Integrate existing SaaS solutions with your business systems and workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;