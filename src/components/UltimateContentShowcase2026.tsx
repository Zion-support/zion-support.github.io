import React from 'react';
import { Link } from 'react-router-dom';

const UltimateContentShowcase2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      
      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Ultimate Content Showcase 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary technology solutions and insights for the future
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🧠</div>
            <h4 className="text-xl font-bold mb-4 text-white">AI Consciousness Test</h4>
            <p className="mb-6 opacity-90 text-gray-300">Test the consciousness level of our AI systems</p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Start Test
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">⚛️</div>
            <h4 className="text-xl font-bold mb-4 text-white">Quantum Computing Demo</h4>
            <p className="mb-6 opacity-90 text-gray-300">Witness quantum supremacy in action</p>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              View Demo
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <h4 className="text-xl font-bold mb-4 text-white">Space Technology</h4>
            <p className="mb-6 opacity-90 text-gray-300">Explore advanced space exploration technologies</p>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Explore
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
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