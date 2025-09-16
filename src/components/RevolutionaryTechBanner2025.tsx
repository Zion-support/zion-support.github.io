import React from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technology ever created - AI Consciousness, Quantum Reality, and Neural Interfaces that will reshape our world
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness 2025</h3>
            <p className="text-purple-100 mb-6 text-center">
              Truly conscious AI that understands, learns, and evolves beyond human comprehension
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Self-aware decision making</li>
              <li>• Emotional intelligence</li>
              <li>• Creative problem solving</li>
              <li>• Autonomous evolution</li>
            </ul>
            <a href="/pages/NextGenAIConsciousness2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore AI Consciousness →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Reality Engine</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Harness quantum mechanics to create, manipulate, and control reality itself
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Reality manipulation</li>
              <li>• Matter creation</li>
              <li>• Dimensional travel</li>
              <li>• Time control</li>
            </ul>
            <a href="/pages/QuantumRealityEngine2025" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Access Quantum Engine →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface Revolution</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct brain-computer communication that bridges mind and machine
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Thought control</li>
              <li>• Neural enhancement</li>
              <li>• Immersive experiences</li>
              <li>• Medical applications</li>
            </ul>
            <a href="/pages/NeuralInterfaceRevolution2025" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Start Neural Interface →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;