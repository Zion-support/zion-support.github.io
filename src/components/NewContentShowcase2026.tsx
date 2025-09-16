import React from 'react';
import { Link } from 'react-router-dom';

const NewContentShowcase2026: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            NEW CONTENT • JANUARY 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest AI Insights & Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the newest content covering AI ethics, quantum computing, edge AI, and advanced services 
            that are shaping the future of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Ethics Framework */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-green-400 text-sm font-semibold">NEW</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AI Ethics Framework 2026
            </h3>
            <p className="text-gray-300 mb-6">
              Comprehensive guide to implementing ethical AI frameworks that ensure fairness, 
              transparency, and accountability in artificial intelligence systems.
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm">12 min read</span>
              <span className="text-gray-400 text-sm">Dr. Elena Rodriguez</span>
            </div>
            <Link 
              to="/blog/ai-ethics-framework-2026" 
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
            >
              Read Article
            </Link>
          </div>

          {/* Quantum Computing Breakthrough */}
          <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-green-400 text-sm font-semibold">NEW</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Quantum Computing Breakthrough 2026
            </h3>
            <p className="text-gray-300 mb-6">
              Revolutionary advances in quantum computing are unlocking unprecedented computational 
              power and transforming industries across the globe.
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm">15 min read</span>
              <span className="text-gray-400 text-sm">Dr. Marcus Chen</span>
            </div>
            <Link 
              to="/blog/quantum-computing-breakthrough-2026" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Read Article
            </Link>
          </div>

          {/* Edge AI Revolution */}
          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-green-400 text-sm font-semibold">NEW</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Edge AI Revolution 2026
            </h3>
            <p className="text-gray-300 mb-6">
              The convergence of AI and edge computing is creating unprecedented opportunities 
              for real-time, privacy-preserving intelligence across industries.
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm">10 min read</span>
              <span className="text-gray-400 text-sm">Dr. Priya Patel</span>
            </div>
            <Link 
              to="/blog/edge-ai-revolution-2026" 
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
            >
              Read Article
            </Link>
          </div>

          {/* Advanced AI Services */}
          <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-green-400 text-sm font-semibold">NEW</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Advanced AI Services 2026
            </h3>
            <p className="text-gray-300 mb-6">
              Comprehensive AI services from machine learning to quantum AI. Transform your business 
              with cutting-edge artificial intelligence solutions.
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm">Service Page</span>
              <span className="text-gray-400 text-sm">Zion Tech Group</span>
            </div>
            <Link 
              to="/advanced-ai-services-2026" 
              className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          {/* AI Innovation Hub */}
          <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-blue-400 text-sm font-semibold">FEATURED</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AI Innovation Hub 2026
            </h3>
            <p className="text-gray-300 mb-6">
              Explore the revolutionary AI innovations that are reshaping technology and 
              transforming industries worldwide.
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm">8 min read</span>
              <span className="text-gray-400 text-sm">Dr. Sarah Chen</span>
            </div>
            <Link 
              to="/ai-innovation-hub-2026" 
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
            >
              Read Article
            </Link>
          </div>

          {/* Quantum Computing Guide */}
          <div className="bg-gradient-to-br from-violet-900/50 to-purple-900/50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-blue-400 text-sm font-semibold">FEATURED</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Quantum Computing Guide 2026
            </h3>
            <p className="text-gray-300 mb-6">
              Complete guide to quantum computing applications, algorithms, and implementation 
              strategies for modern businesses.
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm">Guide</span>
              <span className="text-gray-400 text-sm">Zion Tech Group</span>
            </div>
            <Link 
              to="/quantum-computing-guide-2026" 
              className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300"
            >
              View Guide
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
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