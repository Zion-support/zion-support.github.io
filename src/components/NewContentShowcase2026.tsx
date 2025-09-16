import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Globe, Star, Sparkles, TrendingUp, Users } from 'lucide-react';

const NewContentShowcase2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Star className="w-5 h-5" />
            New Content Showcase 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Latest Technology Insights
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Stay ahead with the most cutting-edge content covering AI breakthroughs, quantum computing, and revolutionary tech solutions.
          </p>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group bg-gradient-to-br from-blue-800/20 to-purple-800/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Consciousness Revolution</h3>
            <p className="text-gray-300 mb-6">
              Explore how AI systems are developing consciousness and self-awareness, transforming the way we interact with technology.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                to="/ai-revolutionary-breakthrough-2026" 
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
              >
                Read More <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
              <span className="text-sm text-gray-400">5 min read</span>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-purple-800/20 to-pink-800/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Quantum Supremacy Achieved</h3>
            <p className="text-gray-300 mb-6">
              Discover how quantum computers are solving problems that were previously impossible, revolutionizing cryptography and optimization.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                to="/quantum-computing-revolution-2026" 
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
              >
                Read More <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
              <span className="text-sm text-gray-400">7 min read</span>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-green-800/20 to-blue-800/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Advanced Tech Integration</h3>
            <p className="text-gray-300 mb-6">
              Learn how to integrate AI, quantum computing, and advanced automation for comprehensive business transformation.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                to="/advanced-tech-solutions-2026" 
                className="text-green-400 hover:text-green-300 font-semibold transition-colors duration-300"
              >
                Read More <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
              <span className="text-sm text-gray-400">6 min read</span>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-blue-500/20">
          <h3 className="text-3xl font-bold text-center mb-12">Content Impact Metrics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">50K+</div>
              <div className="text-gray-300">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Reader Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">200+</div>
              <div className="text-gray-300">Expert Contributors</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Content Updates</div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive access to the latest technology insights, AI breakthroughs, and quantum computing developments delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;