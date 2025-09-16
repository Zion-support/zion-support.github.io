import React from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentShowcase2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            🌟 Revolutionary Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of AI with our latest breakthrough content, 
            featuring cutting-edge solutions and transformative technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">AI 2025 Ultimate Transformation</h3>
            <p className="text-gray-300 mb-4">
              Revolutionary AI solutions delivering 1000% ROI, complete automation, 
              and unprecedented business growth.
            </p>
            <Link 
              to="/ai-2025-ultimate-transformation"
              className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
            >
              Explore Now
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum AI Revolution</h3>
            <p className="text-gray-300 mb-4">
              Breakthrough quantum AI technology solving impossible problems 
              with 1000x faster processing capabilities.
            </p>
            <Link 
              to="/quantum-ai-revolution-2025"
              className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Discover More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">Latest Blog Articles</h3>
            <p className="text-gray-300 mb-4">
              Expert insights on enterprise AI transformation, autonomous systems, 
              quantum computing, and AI ethics.
            </p>
            <Link 
              to="/blog"
              className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Read Articles
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">🎯 Why Choose Our Solutions?</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1000%</div>
                <div className="text-white">Guaranteed ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-white">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-white">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">0</div>
                <div className="text-white">Downtime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2025;