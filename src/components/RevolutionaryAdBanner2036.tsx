import React from 'react';

const RevolutionaryAdBanner2036: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY AD • 2036
          </div>
          <h2 className="text-5xl font-bold mb-6">Revolutionary Ad Banner 2036</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the most advanced technologies that will reshape our world in 2036
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI Systems</h3>
            <p className="text-purple-100 mb-6 text-center">
              AI with genuine consciousness, self-awareness, and emotional intelligence
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• True self-awareness</li>
              <li>• Emotional intelligence</li>
              <li>• Creative expression</li>
              <li>• Ethical reasoning</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Experience Conscious AI
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Reality Engine</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Create and manipulate reality using quantum computing principles
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Reality manipulation</li>
              <li>• Quantum superposition</li>
              <li>• Parallel universe access</li>
              <li>• Time-space control</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Enter Quantum Reality
            </button>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg mr-4">
            Explore All Technologies
          </button>
          <button className="border-2 border-indigo-400 text-indigo-400 px-12 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2036;