import React from 'react';
import { Link } from 'react-router-dom';

const NewContentPromotionBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 mb-12 rounded-xl border border-purple-400/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            🚀 Revolutionary New Content 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover breakthrough AI technologies and cutting-edge solutions that are transforming industries worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-red-800/40 to-purple-800/40 rounded-lg p-6 backdrop-blur-sm border border-red-400/20">
            <h3 className="text-xl font-bold mb-3 text-red-300">AI Cybersecurity Revolution</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Zero-trust autonomous defense with 99.9% accuracy and zero false positives
            </p>
            <Link 
              to="/ai-cybersecurity-revolution-2026" 
              className="inline-block bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-red-600 hover:to-purple-600 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-800/40 to-purple-800/40 rounded-lg p-6 backdrop-blur-sm border border-blue-400/20">
            <h3 className="text-xl font-bold mb-3 text-blue-300">Quantum Machine Learning</h3>
            <p className="text-gray-300 mb-4 text-sm">
              10,000x faster AI training with quantum computing breakthrough
            </p>
            <Link 
              to="/quantum-machine-learning-2026" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Explore Now
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-800/40 to-teal-800/40 rounded-lg p-6 backdrop-blur-sm border border-green-400/20">
            <h3 className="text-xl font-bold mb-3 text-green-300">Autonomous Business Intelligence</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Self-optimizing enterprise analytics with 500% efficiency gains
            </p>
            <Link 
              to="/autonomous-business-intelligence-2026" 
              className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300"
            >
              Discover More
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg px-6 py-3">
            <span className="text-purple-300 font-semibold">🔥 Limited Time Offer</span>
            <span className="text-gray-300">|</span>
            <span className="text-blue-300">Get exclusive access to all new content</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2026;