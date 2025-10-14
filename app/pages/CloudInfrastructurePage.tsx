import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudInfrastructurePage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Cloud Infrastructure Page - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure page services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Infrastructure Page
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional cloud infrastructure page services
            </p>
            <div className="bg-slate-800 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-gray-300">
                This page is currently under development. Please check back soon for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CloudInfrastructurePage;