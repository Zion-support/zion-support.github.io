import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Brain, Atom, Rocket, TrendingUp } from 'lucide-react';
const NewContentPromotionBanner2027: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-6">
            <Star className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-sm font-medium">NEW CONTENT 2027</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary New Content
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, and advanced technology 
            that are reshaping the future of innovation.
          </p>
        </div>
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* AI Revolution */}
          <div className="group bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-300">AI Revolution 2027</h3>
                <p className="text-sm text-gray-400">Revolutionary Breakthrough</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Explore the most advanced AI systems that demonstrate consciousness-like behaviors 
              and are transforming every industry.
            </p>
            <Link 
              to="/ai-2027-revolutionary-breakthrough" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-transform duration-200"
            >
              Discover More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          {/* Quantum Computing */}
          <div className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-300">Quantum Computing</h3>
                <p className="text-sm text-gray-400">Revolution 2027</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Experience the power of quantum computing that's solving previously impossible 
              problems and unlocking new frontiers.
            </p>
            <Link 
              to="/quantum-computing-revolution-2027" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-transform duration-200"
            >
              Explore Quantum
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          {/* Tech Innovation */}
          <div className="group bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-300">Tech Innovation</h3>
                <p className="text-sm text-gray-400">Advanced 2027</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Discover cutting-edge technologies that are reshaping industries and 
              creating the future of innovation.
            </p>
            <Link 
              to="/advanced-tech-innovation-2027" 
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-1 transition-transform duration-200"
            >
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
        {/* Blog Posts */}
        <div className="bg-gradient-to-r from-gray-900/50 to-blue-900/50 rounded-2xl p-8 border border-gray-700/50 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-300">Latest Blog Posts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white group-hover:text-blue-300 transition-colors duration-200">
                    The AI Revolution: How 2027 is Reshaping Everything
                  </h4>
                  <p className="text-sm text-gray-400">January 15, 2027</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                From quantum-enhanced neural networks to conscious AI systems, discover 
                the most significant technological transformation in human history.
              </p>
              <Link 
                to="/blog/jan-2027-ai-revolution" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-transform duration-200"
              >
                Read Article
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                  <Atom className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white group-hover:text-purple-300 transition-colors duration-200">
                    Quantum Computing: The Next Frontier
                  </h4>
                  <p className="text-sm text-gray-400">January 20, 2027</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Explore the revolutionary power of quantum computing that's solving 
                previously impossible problems and unlocking new frontiers.
              </p>
              <Link 
                to="/blog/jan-2027-quantum-computing" 
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-transform duration-200"
              >
                Read Article
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 mb-6">
            <Zap className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-sm font-medium">Stay Updated with Latest Content</span>
          </div>
          <h3 className="text-3xl font-bold mb-4 text-white">
            Don't Miss Out on the Future
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are already exploring these revolutionary 
            technologies and shaping the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ai-innovation-hub-2026" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border border-blue-400 rounded-lg font-semibold hover:bg-blue-600/20 transition-all duration-300"
            >
              Get Notified
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

};

export default NewContentPromotionBanner2027;
