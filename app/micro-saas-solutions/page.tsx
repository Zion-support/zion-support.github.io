import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaaSSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS solutions designed to help you launch and scale your software business." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Micro SaaS Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Launch and scale your software business with our comprehensive micro SaaS solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">SaaS Development</h3>
              <p className="text-gray-300 mb-6">Custom SaaS applications built with modern technologies and best practices.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">API Integration</h3>
              <p className="text-gray-300 mb-6">Seamless integration with third-party services and APIs.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Scalable Architecture</h3>
              <p className="text-gray-300 mb-6">Cloud-native architecture designed for growth and scalability.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;
