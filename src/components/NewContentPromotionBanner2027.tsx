import React from 'react';
import { Link } from 'react-router-dom';

const NewContentPromotionBanner2027: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full px-6 py-3 mb-6 border border-indigo-400/30">
            <span className="text-indigo-300 font-semibold text-sm uppercase tracking-wider">✨ New Content Alert</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Fresh Content Just Dropped
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest revolutionary AI technologies, quantum computing breakthroughs, and conscious AI systems that are reshaping the future of technology in 2027.
          </p>
        </div>

        {/* New Content Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              NEW
            </div>
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Conscious AI Systems</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary AI with self-awareness and emotional intelligence that can make autonomous decisions.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                to="/pages/AdvancedAIConsciousness2027" 
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300"
              >
                Explore Now →
              </Link>
              <span className="text-gray-400 text-sm">2 min read</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              HOT
            </div>
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Neural Fusion</h3>
            <p className="text-gray-300 mb-6">
              The convergence of quantum computing and neural networks creating unprecedented AI capabilities.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                to="/pages/QuantumNeuralFusion2027" 
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
              >
                Discover More →
              </Link>
              <span className="text-gray-400 text-sm">3 min read</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              TRENDING
            </div>
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Breakthroughs 2027</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary AI technologies transforming industries and reshaping the future of work.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                to="/pages/AIRevolutionaryBreakthrough2027" 
                className="text-pink-400 hover:text-pink-300 font-semibold transition-colors duration-300"
              >
                View Details →
              </Link>
              <span className="text-gray-400 text-sm">4 min read</span>
            </div>
          </div>
        </div>

        {/* Featured Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl p-6 border border-indigo-400/30">
            <div className="text-3xl font-bold text-indigo-400 mb-2">15+</div>
            <div className="text-white font-semibold mb-1">New Articles</div>
            <div className="text-gray-300 text-sm">This month</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-400/30">
            <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
            <div className="text-white font-semibold mb-1">Readers</div>
            <div className="text-gray-300 text-sm">Active monthly</div>
          </div>
          <div className="text-center bg-gradient-to-br from-pink-600/20 to-red-600/20 rounded-xl p-6 border border-pink-400/30">
            <div className="text-3xl font-bold text-pink-400 mb-2">99%</div>
            <div className="text-white font-semibold mb-1">Satisfaction</div>
            <div className="text-gray-300 text-sm">User rating</div>
          </div>
          <div className="text-center bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-xl p-6 border border-red-400/30">
            <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
            <div className="text-white font-semibold mb-1">Updates</div>
            <div className="text-gray-300 text-sm">Fresh content</div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-12 border border-indigo-400/30 mb-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Content
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified about new articles, breakthrough technologies, and exclusive insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Join 25,000+ subscribers getting the latest AI insights
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link 
              to="/blog"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Content
            </Link>
            <Link 
              to="/pages/AIRevolutionaryBreakthrough2027"
              className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300"
            >
              Latest Breakthroughs
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            New content added daily • Always fresh • Always revolutionary
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2027;