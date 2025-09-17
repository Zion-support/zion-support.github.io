import React from 'react';

const EnhancedContentShowcase: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Enhanced Content Showcase</h2>
          <p className="text-xl opacity-90">
            Discover our most advanced technology solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
            <p className="opacity-90 mb-4">
              Cutting-edge artificial intelligence solutions for your business needs.
            </p>
            <a href="/pages/InnovativeServicesShowcase2025" className="text-blue-400 hover:text-blue-300 font-semibold">
              Learn More →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Blockchain</h3>
            <p className="opacity-90 mb-4">
              Secure, decentralized solutions powered by blockchain technology.
            </p>
            <a href="/pages/InnovationLanding2025" className="text-blue-400 hover:text-blue-300 font-semibold">
              Explore →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Cloud Services</h3>
            <p className="opacity-90 mb-4">
              Scalable cloud infrastructure and deployment solutions.
            </p>
            <a href="/pages/InnovativeServicesShowcase2025" className="text-blue-400 hover:text-blue-300 font-semibold">
              Discover →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;