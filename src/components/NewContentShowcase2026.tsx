import React from 'react';
import { Link } from 'react-router-dom';

const NewContentShowcase2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
      <div className="container mx-auto px-4 relative z-10">
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
            Discover the latest breakthroughs in AI, quantum computing, and revolutionary technology solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">🚀 AI Innovation Hub</h3>
            <p className="text-gray-200 mb-4">
              Explore cutting-edge AI solutions and revolutionary technology breakthroughs.
            </p>
            <Link 
              to="/ai-innovation-hub-2026" 
              className="text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Learn More →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">⚡ Quantum Computing</h3>
            <p className="text-gray-200 mb-4">
              Discover the future of quantum computing and its revolutionary applications.
            </p>
            <Link 
              to="/quantum-computing-guide-2026" 
              className="text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Learn More →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">🔮 Advanced Tech Solutions</h3>
            <p className="text-gray-200 mb-4">
              Revolutionary technology solutions for the next generation of innovation.
            </p>
            <Link 
              to="/advanced-tech-solutions-2026" 
              className="text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Learn More →
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Services →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;