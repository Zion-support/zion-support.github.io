import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGSolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="5G Solutions - Zion Tech Group | Next-Generation Connectivity"
        description="Explore our 5G solutions and next-generation connectivity services for modern businesses."
        keywords="5G solutions, next-generation connectivity, wireless technology, IoT, smart cities"
        canonical="https://ziontechgroup.com/5g-solutions"
      />
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                5G Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Next-generation connectivity solutions for the future of business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveGSolutionsPage;
