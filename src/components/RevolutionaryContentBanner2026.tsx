import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Globe, Star, Sparkles } from 'lucide-react';

const RevolutionaryContentBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-5 h-5" />
            Revolutionary Content 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Discover the Future of Technology
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore groundbreaking AI breakthroughs, quantum computing revolutions, and advanced tech solutions that are reshaping our world.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Revolutionary Breakthrough</h3>
            <p className="text-gray-300 mb-6">
              Discover the next evolution of artificial intelligence with conscious AI systems and quantum neural networks.
            </p>
            <Link 
              to="/ai-revolutionary-breakthrough-2026" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
            >
              Explore AI Breakthrough <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing Revolution</h3>
            <p className="text-gray-300 mb-6">
              Experience the unprecedented power of quantum computing that's solving impossible problems and revolutionizing industries.
            </p>
            <Link 
              to="/quantum-computing-revolution-2026" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
            >
              Discover Quantum Power <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Advanced Tech Solutions</h3>
            <p className="text-gray-300 mb-6">
              Comprehensive technology solutions integrating AI, quantum computing, and advanced automation for business transformation.
            </p>
            <Link 
              to="/advanced-tech-solutions-2026" 
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300"
            >
              Explore Solutions <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ai-revolutionary-breakthrough-2026" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              Start Exploring <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;