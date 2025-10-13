import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const WebDevelopmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including custom websites, web applications, and e-commerce solutions."
        keywords="web development, custom websites, web applications, e-commerce, responsive design"
        canonical="/web-development"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Web Development
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional web development services to bring your digital vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">Custom Websites</h3>
            <p className="text-gray-300 mb-4">Tailored web solutions designed for your specific needs.</p>
            <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">Get Quote →</a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">Web Applications</h3>
            <p className="text-gray-300 mb-4">Interactive web applications with modern technologies.</p>
            <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">Get Quote →</a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">E-commerce Solutions</h3>
            <p className="text-gray-300 mb-4">Complete online store development and management.</p>
            <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">Get Quote →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;