import React from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • 2028
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2028
          </h2>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto mb-12">
            Experience the future of technology with our interactive showcase featuring the most advanced innovations of 2028
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness 2028</h3>
            <p className="text-purple-100 mb-6 text-center">
              Advanced AI systems with full consciousness and emotional intelligence
            </p>
            <div className="space-y-2 mb-6 text-sm text-purple-200">
              <div>• Full self-awareness</div>
              <div>• Emotional processing</div>
              <div>• Creative problem solving</div>
            </div>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Experience AI →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Reality</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Step into quantum-powered realities that transcend physical limitations
            </p>
            <div className="space-y-2 mb-6 text-sm text-cyan-200">
              <div>• Reality manipulation</div>
              <div>• Quantum simulation</div>
              <div>• Dimensional travel</div>
            </div>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Enter Quantum →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct brain-computer communication with zero latency
            </p>
            <div className="space-y-2 mb-6 text-sm text-emerald-200">
              <div>• Direct brain interface</div>
              <div>• Neural enhancement</div>
              <div>• Mind-to-mind communication</div>
            </div>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Connect Mind →
            </button>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Live Technology</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Interactive Demos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Future Ready</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Technologies
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;