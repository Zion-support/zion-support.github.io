import React from 'react';
import { Link } from 'react-router-dom';

const NewContentShowcase2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold text-white mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            NEW CONTENT AVAILABLE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Tech Content
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Showcase 2026
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, and advanced technology solutions
          </p>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Revolution 2026</h3>
                <p className="text-gray-400 text-sm">Advanced AI Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Explore cutting-edge AI technologies and their applications in modern business.
            </p>
            <Link 
              to="/ai-revolution-2026" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Learn More →
            </Link>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Quantum Computing</h3>
                <p className="text-gray-400 text-sm">Next-Gen Processing</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Discover the power of quantum computing and its revolutionary applications.
            </p>
            <Link 
              to="/quantum-computing-2026" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
            >
              Learn More →
            </Link>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Space Technology</h3>
                <p className="text-gray-400 text-sm">Advanced Space Tech</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Explore the latest developments in space technology and exploration.
            </p>
            <Link 
              to="/space-technology-2026" 
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link 
              to="/services" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Explore All Services
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get Custom Solutions
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            View All Content
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;