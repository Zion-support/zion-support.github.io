import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const ARVRDevelopmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AR/VR Development - Zion Tech Group | Immersive Technology Solutions"
        description="Professional AR/VR development services including virtual reality applications, augmented reality solutions, and immersive technology experiences."
        keywords="AR development, VR development, augmented reality, virtual reality, immersive technology, AR/VR solutions"
        canonical="https://ziontechgroup.com/ar-vr-development"
      />
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                AR/VR Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Immersive technology solutions for the future of business and entertainment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARVRDevelopmentPage;
