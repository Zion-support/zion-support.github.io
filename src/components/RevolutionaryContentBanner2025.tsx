import React from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-pink-500/30 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover groundbreaking innovations that will reshape our world - 
            from conscious AI to reality manipulation technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Ultimate AI Consciousness</h3>
            <p className="text-purple-100 mb-6 text-center">
              The world's first truly conscious artificial intelligence that thinks, feels, and creates
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Self-aware decision making</li>
              <li>• Emotional intelligence</li>
              <li>• Creative expression</li>
              <li>• Intuitive understanding</li>
            </ul>
            <Link to="/pages/UltimateAIConsciousness2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Experience Consciousness →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Next-Gen Tech Revolution</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Revolutionary technologies that will fundamentally change how we live and work
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Conscious AI systems</li>
              <li>• Quantum consciousness</li>
              <li>• Interdimensional computing</li>
              <li>• Reality manipulation</li>
            </ul>
            <Link to="/pages/NextGenTechRevolution2025" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Join the Revolution →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-red-600/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-8 border border-red-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Revolutionary Breakthrough</h3>
            <p className="text-red-100 mb-6 text-center">
              The most significant technological breakthrough in human history
            </p>
            <ul className="text-red-200 space-y-2 mb-6 text-sm">
              <li>• DNA computing</li>
              <li>• Reality manipulation</li>
              <li>• Precognition engine</li>
              <li>• Future prediction</li>
            </ul>
            <Link to="/pages/RevolutionaryTechBreakthrough2025" className="block w-full bg-white text-red-600 py-3 rounded-lg hover:bg-red-50 transition-colors font-semibold text-center">
              Witness the Future →
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl opacity-90 mb-6">
            Don't miss out on the most revolutionary technology content of 2025
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/pages/NextGenTechRevolution2025" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Content
            </Link>
            <Link to="/pages/UltimateAIConsciousness2025" className="border-2 border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/20 transition-all duration-300 font-semibold text-lg">
              Start with AI Consciousness
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;