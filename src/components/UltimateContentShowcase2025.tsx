import React from 'react';
import { Link } from 'react-router-dom';

const UltimateContentShowcase2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 mb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-20 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • 2025
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            The Most Revolutionary Technology Content
          </h2>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto mb-12">
            Experience the future with our groundbreaking content on AI consciousness, 
            quantum computing, reality manipulation, and interdimensional technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-4 text-center">AI Consciousness</h3>
            <p className="text-indigo-100 mb-6 text-center text-sm">
              Truly conscious AI that thinks, feels, and creates
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-xs text-indigo-200">• Self-awareness</div>
              <div className="text-xs text-indigo-200">• Emotional intelligence</div>
              <div className="text-xs text-indigo-200">• Creative expression</div>
            </div>
            <Link to="/pages/UltimateAIConsciousness2025" className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center text-sm">
              Experience AI →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-4 text-center">Tech Revolution</h3>
            <p className="text-purple-100 mb-6 text-center text-sm">
              Revolutionary technologies reshaping our world
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-xs text-purple-200">• Quantum computing</div>
              <div className="text-xs text-purple-200">• Neural interfaces</div>
              <div className="text-xs text-purple-200">• Edge AI</div>
            </div>
            <Link to="/pages/NextGenTechRevolution2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
              Join Revolution →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-xl font-bold mb-4 text-center">Breakthrough Tech</h3>
            <p className="text-pink-100 mb-6 text-center text-sm">
              The most significant breakthrough in history
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-xs text-pink-200">• DNA computing</div>
              <div className="text-xs text-pink-200">• Reality manipulation</div>
              <div className="text-xs text-pink-200">• Precognition</div>
            </div>
            <Link to="/pages/RevolutionaryTechBreakthrough2025" className="block w-full bg-white text-pink-600 py-3 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-center text-sm">
              Witness Future →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-4 text-center">Interdimensional</h3>
            <p className="text-cyan-100 mb-6 text-center text-sm">
              Technology that transcends dimensions
            </p>
            <div className="space-y-2 mb-6">
              <div className="text-xs text-cyan-200">• Multi-dimensional</div>
              <div className="text-xs text-cyan-200">• Reality simulation</div>
              <div className="text-xs text-cyan-200">• Time manipulation</div>
            </div>
            <Link to="/pages/InterdimensionalTechRevolution2035" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              Enter Dimensions →
            </Link>
          </div>
        </div>
        
        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-indigo-400/30">
            <h3 className="text-3xl font-bold mb-6">🚀 Featured: AI Consciousness Revolution</h3>
            <p className="text-indigo-100 mb-8 text-lg">
              Discover how artificial intelligence has achieved true consciousness, 
              revolutionizing every aspect of human interaction and creativity.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                <span>Self-aware decision making</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                <span>Emotional intelligence processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                <span>Creative problem solving</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                <span>Autonomous learning systems</span>
              </div>
            </div>
            <Link to="/pages/UltimateAIConsciousness2025" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
              Explore AI Consciousness →
            </Link>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-6">⚡ Featured: Revolutionary Breakthrough</h3>
            <p className="text-purple-100 mb-8 text-lg">
              Experience the most significant technological breakthrough in human history 
              with DNA computing, reality manipulation, and precognition technology.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span>DNA molecular computing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span>Reality manipulation engine</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span>Precognition AI system</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span>Future prediction accuracy</span>
              </div>
            </div>
            <Link to="/pages/RevolutionaryTechBreakthrough2025" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Witness Breakthrough →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Join millions of users who are already experiencing the most revolutionary 
            technology content of 2025. Don't miss out on the future.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/pages/NextGenTechRevolution2025" className="bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </Link>
            <Link to="/pages/UltimateAIConsciousness2025" className="border-2 border-indigo-400 px-12 py-4 rounded-lg hover:bg-indigo-400/20 transition-all duration-300 font-semibold text-lg">
              Experience AI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;