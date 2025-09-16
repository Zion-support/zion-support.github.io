import React from 'react';
import { Link } from 'react-router-dom';

const UltimateContentShowcase2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold text-white mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            ULTIMATE CONTENT • 2026
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Content Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced AI solutions, breakthrough technologies, and cutting-edge innovations that will shape the future.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🧠</div>
            <h4 className="text-xl font-bold mb-4">AI Consciousness Test</h4>
            <p className="mb-6 opacity-90">Test the consciousness level of our AI systems</p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Start Test
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">⚡</div>
            <h4 className="text-xl font-bold mb-4">Quantum Computing</h4>
            <p className="mb-6 opacity-90">Explore quantum computing breakthroughs</p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <h4 className="text-xl font-bold mb-4">Space Technology</h4>
            <p className="mb-6 opacity-90">Advanced space exploration technologies</p>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Explore
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link 
            to="/services" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;