import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Support - Zion Tech Group | Customer Support and Help"
        description="Get help and support for your technology solutions. Contact our support team for assistance."
        keywords="support, customer support, help, technical support, assistance"
        canonical="https://ziontechgroup.com/support"
      />
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Support
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get help and support for your technology solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
