import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Terms of Service - Zion Tech Group | Terms and Conditions"
        description="Read our terms of service and conditions for using our technology solutions and services."
        keywords="terms of service, terms and conditions, legal terms, service agreement"
        canonical="https://ziontechgroup.com/terms"
      />
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Terms of Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Read our terms of service and conditions for using our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
