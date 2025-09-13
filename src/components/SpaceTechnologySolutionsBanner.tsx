import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Satellite, Orbit, Zap, ArrowRight, Sparkles, Globe } from 'lucide-react';

const SpaceTechnologySolutionsBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 py-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-violet-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Rocket className="w-5 h-5 text-violet-400" />
              <span className="text-sm font-medium text-white">Space Technology</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Space Technology Solutions
            <span className="block bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Beyond Earth's Boundaries
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Pioneering the next frontier of space exploration with cutting-edge AI-powered technology solutions. 
            From satellite networks to interplanetary communication, we're making space accessible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-violet-500/20 rounded-lg mb-4 mx-auto">
                <Satellite className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Satellite Networks</h3>
              <p className="text-gray-300 text-sm">
                Advanced satellite constellations for global connectivity
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4 mx-auto">
                <Orbit className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Orbital Systems</h3>
              <p className="text-gray-300 text-sm">
                AI-powered orbital mechanics and space traffic management
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-500/20 rounded-lg mb-4 mx-auto">
                <Globe className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Interplanetary AI</h3>
              <p className="text-gray-300 text-sm">
                Autonomous systems for deep space exploration and colonization
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/space-technology-solutions-2025" 
              className="group bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/space-ai-revolution-2025" 
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center space-x-2"
            >
              <span>Space AI Revolution</span>
              <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>🚀 Next-gen space technology • 🌌 AI-powered exploration • ⚡ Interplanetary solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceTechnologySolutionsBanner;