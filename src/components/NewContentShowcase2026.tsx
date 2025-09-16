import React from 'react';
import { Link } from 'react-router-dom';

const NewContentShowcase2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold text-white mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            NEW CONTENT AVAILABLE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Tech Content
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              for 2026
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, and advanced technology
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Article 1 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm text-gray-300">NEW</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              AI Consciousness Breakthrough 2026
            </h3>
            <p className="text-gray-300 mb-4">
              Revolutionary advances in artificial consciousness that blur the lines between human and machine intelligence.
            </p>
            <Link
              to="/ai-consciousness-breakthrough-2026"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Read More →
            </Link>
          </div>

          {/* Featured Article 2 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm text-gray-300">HOT</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Quantum Computing Revolution
            </h3>
            <p className="text-gray-300 mb-4">
              The latest developments in quantum computing that promise to revolutionize everything from cryptography to drug discovery.
            </p>
            <Link
              to="/quantum-computing-revolution-2026"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Read More →
            </Link>
          </div>

          {/* Featured Article 3 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm text-gray-300">TRENDING</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Neural Interface Technology
            </h3>
            <p className="text-gray-300 mb-4">
              Breakthrough neural interfaces that enable direct communication between the human brain and computers.
            </p>
            <Link
              to="/neural-interface-technology-2026"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            View All Content
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;