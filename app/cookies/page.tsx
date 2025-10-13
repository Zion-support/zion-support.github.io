import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Cookie Policy - Zion Tech Group | Cookie Usage and Management"
        description="Learn about our cookie policy and how we use cookies to improve your experience on our website."
        keywords="cookie policy, cookies, website cookies, data collection, privacy"
        canonical="https://ziontechgroup.com/cookies"
      />
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Cookie Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn about our cookie policy and how we use cookies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
