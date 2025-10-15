import React from 'react';
import SEOHead from '../components/SEOHead';

const CloudMigrationProPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Cloud Migration Pro - Zion Tech Group"
        description="Professional cloud migration services with zero-downtime migration, data security, and seamless transition to cloud platforms."
        keywords="cloud migration, cloud migration services, cloud transition, cloud migration pro, cloud migration planning"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cloud Migration Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional cloud migration services with zero-downtime migration, data security, and seamless transition to cloud platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Coming Soon
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudMigrationProPage;
