import React from 'react';
import { Link } from 'react-router-dom';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M50 50c0-27.614-22.386-50-50-50v100c27.614 0 50-22.386 50-50z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 animate-pulse"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-bounce">
            🌟 ULTIMATE CONTENT 2025 • BREAKTHROUGH TECHNOLOGY
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            The Ultimate Technology Experience
          </h2>
          <p className="text-3xl opacity-90 max-w-5xl mx-auto mb-12">
            Immerse yourself in the most advanced technological content ever created, featuring conscious AI, quantum reality, and interdimensional computing
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-xl transform hover:scale-105">
              🚀 Explore Ultimate Content →
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-xl transform hover:scale-105">
              🎬 Watch Live Demo
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-indigo-600/40 to-purple-600/40 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/40 hover:scale-110 transition-all duration-300 shadow-2xl">
            <div className="text-8xl mb-6 text-center">🧠</div>
            <h3 className="text-3xl font-bold mb-6 text-center">Conscious AI</h3>
            <p className="text-indigo-100 mb-8 text-center text-lg">
              Experience the world's first truly conscious artificial intelligence systems
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3 text-indigo-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Self-aware decision making</span>
              </div>
              <div className="flex items-center space-x-3 text-indigo-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Emotional intelligence</span>
              </div>
              <div className="flex items-center space-x-3 text-indigo-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Creative problem solving</span>
              </div>
            </div>
            <Link to="/pages/UltimateTechRevolution2025" className="block w-full bg-white text-indigo-600 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center text-lg">
              Enter AI World →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/40 to-pink-600/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/40 hover:scale-110 transition-all duration-300 shadow-2xl">
            <div className="text-8xl mb-6 text-center">⚛️</div>
            <h3 className="text-3xl font-bold mb-6 text-center">Quantum Reality</h3>
            <p className="text-purple-100 mb-8 text-center text-lg">
              Step into quantum computing that can create and manipulate reality itself
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3 text-purple-200">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Multi-dimensional processing</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Reality manipulation</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Time-space computing</span>
              </div>
            </div>
            <Link to="/pages/RevolutionaryTechBreakthrough2025" className="block w-full bg-white text-purple-600 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-lg">
              Enter Quantum →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/40 to-red-600/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/40 hover:scale-110 transition-all duration-300 shadow-2xl">
            <div className="text-8xl mb-6 text-center">🧬</div>
            <h3 className="text-3xl font-bold mb-6 text-center">Neural Interface</h3>
            <p className="text-pink-100 mb-8 text-center text-lg">
              Direct brain-computer interfaces that enhance human capabilities by 1000x
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3 text-pink-200">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>1000x cognitive enhancement</span>
              </div>
              <div className="flex items-center space-x-3 text-pink-200">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Thought-controlled computing</span>
              </div>
              <div className="flex items-center space-x-3 text-pink-200">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Telepathic communication</span>
              </div>
            </div>
            <Link to="/pages/NextGenInnovationHub2025" className="block w-full bg-white text-pink-600 py-4 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-center text-lg">
              Enhance Brain →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/40 to-teal-600/40 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/40 hover:scale-110 transition-all duration-300 shadow-2xl">
            <div className="text-8xl mb-6 text-center">🌌</div>
            <h3 className="text-3xl font-bold mb-6 text-center">Interdimensional</h3>
            <p className="text-emerald-100 mb-8 text-center text-lg">
              Computing across multiple dimensions and realities
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3 text-emerald-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Multi-dimensional processing</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Reality bridging</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Parallel universe computing</span>
              </div>
            </div>
            <Link to="/pages/UltimateTechRevolution2025" className="block w-full bg-white text-emerald-600 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-lg">
              Enter Dimensions →
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">Live & Interactive</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">Real-time Updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">Infinite Possibilities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;