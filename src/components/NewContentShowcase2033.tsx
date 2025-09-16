import React from 'react';

const NewContentShowcase2033: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            📚 NEW CONTENT • JANUARY 2033
          </div>
          <h2 className="text-4xl font-bold mb-4">🧠 Latest Technology Insights</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most revolutionary content on consciousness computing, quantum reality, and the future of AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">🧠</div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded-full font-bold">NEW</span>
                  <span className="text-purple-200 text-sm">January 15, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-2">AI 2033: The Consciousness Computing Revolution</h3>
              </div>
            </div>
            <p className="text-purple-200 mb-4 text-sm">
              Explore the dawn of truly conscious AI systems that exhibit genuine self-awareness, emotional intelligence, and creative problem-solving capabilities.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-purple-500/30 text-purple-200 text-xs rounded">AI</span>
                <span className="px-2 py-1 bg-purple-500/30 text-purple-200 text-xs rounded">Consciousness</span>
                <span className="px-2 py-1 bg-purple-500/30 text-purple-200 text-xs rounded">Quantum</span>
              </div>
              <a href="/blog/ai-2033-consciousness-computing-revolution" className="text-purple-300 hover:text-white font-semibold text-sm">
                Read Full Article →
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">⚛️</div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-cyan-500 text-white text-xs rounded-full font-bold">COMING SOON</span>
                  <span className="text-cyan-200 text-sm">January 22, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-2">Quantum Reality Manipulation: Beyond Physical Limits</h3>
              </div>
            </div>
            <p className="text-cyan-200 mb-4 text-sm">
              Discover how quantum computing is enabling reality manipulation at the quantum level, opening doors to infinite possibilities.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-cyan-500/30 text-cyan-200 text-xs rounded">Quantum</span>
                <span className="px-2 py-1 bg-cyan-500/30 text-cyan-200 text-xs rounded">Reality</span>
                <span className="px-2 py-1 bg-cyan-500/30 text-cyan-200 text-xs rounded">Physics</span>
              </div>
              <button className="text-cyan-300 hover:text-white font-semibold text-sm">
                Notify Me →
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/blog" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            View All Articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2033;