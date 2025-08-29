import React from 'react';
import { Link } from 'react-router-dom';

export const EnhancedInnovativeServicesShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enhanced <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Innovative Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our next-generation technology solutions designed for the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-3">Digital Transformation</h3>
            <p className="text-gray-300 mb-4">Complete business transformation with cutting-edge technology</p>
            <Link to="/services/digital-transformation" className="text-cyan-400 hover:text-cyan-300">
              Learn More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold text-white mb-3">Cloud Solutions</h3>
            <p className="text-gray-300 mb-4">Scalable cloud infrastructure and DevOps automation</p>
            <Link to="/services/cloud-devops" className="text-cyan-400 hover:text-cyan-300">
              Learn More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
            <p className="text-gray-300 mb-4">Advanced security and compliance solutions</p>
            <Link to="/services/cybersecurity" className="text-cyan-400 hover:text-cyan-300">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedInnovativeServicesShowcase;