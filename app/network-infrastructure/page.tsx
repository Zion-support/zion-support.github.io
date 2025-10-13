import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const NetworkInfrastructurePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Network Infrastructure - Reliable Network Solutions"
        description="Design and implement robust network infrastructure solutions for your business with our expert team."
        keywords="network infrastructure, network solutions, network design, network implementation, network services"
        canonical="/network-infrastructure"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Network Infrastructure
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Design and implement robust network infrastructure solutions for your business with our expert team.
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300 text-lg">Service details coming soon. Contact us for more information.</p>
        </div>
      </div>
    </div>
  );
};

export default NetworkInfrastructurePage;