import React from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryAdBanner2034: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            ⚡ REVOLUTIONARY SHOWCASE • JANUARY 2034
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            🎮 Interactive Technology Showcase 2034
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
            Experience cutting-edge technologies with interactive demos, real-time processing, 
            and multi-dimensional technology demonstrations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-3 text-center group-hover:animate-bounce">🎮</div>
            <h3 className="text-lg font-bold mb-2 text-center">Interactive Demos</h3>
            <p className="text-cyan-200 text-sm mb-4 text-center">
              Hands-on demonstrations with real-time interaction
            </p>
            <Link 
              to="/pages/RevolutionaryTechShowcase2034" 
              className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm"
            >
              Try Demo →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-3 text-center group-hover:animate-pulse">⚡</div>
            <h3 className="text-lg font-bold mb-2 text-center">Real-time Processing</h3>
            <p className="text-purple-200 text-sm mb-4 text-center">
              Lightning-fast processing with instant results
            </p>
            <Link 
              to="/pages/RevolutionaryTechShowcase2034" 
              className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm"
            >
              Experience Speed →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-3 text-center group-hover:animate-spin">🌌</div>
            <h3 className="text-lg font-bold mb-2 text-center">Multi-dimensional Tech</h3>
            <p className="text-emerald-200 text-sm mb-4 text-center">
              Technology operating across multiple dimensions
            </p>
            <Link 
              to="/pages/RevolutionaryTechShowcase2034" 
              className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm"
            >
              Enter Dimensions →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-lg p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-3 text-center group-hover:animate-pulse">🚀</div>
            <h3 className="text-lg font-bold mb-2 text-center">Future Preview</h3>
            <p className="text-orange-200 text-sm mb-4 text-center">
              Sneak peek at 2035+ technologies
            </p>
            <Link 
              to="/pages/UltimateTechBreakthrough2034" 
              className="block w-full bg-white text-orange-600 py-2 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center text-sm"
            >
              Preview Future →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center space-x-4">
            <Link 
              to="/pages/RevolutionaryTechShowcase2034" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Start Interactive Demo →
            </Link>
            <Link 
              to="/pages/ComprehensiveServices2034" 
              className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2034;