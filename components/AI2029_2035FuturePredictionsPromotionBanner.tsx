import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Globe, Cpu, Database, Shield, Rocket } from 'lucide-react';

const AI2029_2035FuturePredictionsPromotionBanner: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 mb-6">
            <Brain className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold">AI 2029-2035 Future Predictions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Next Decade of
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> AI Revolution</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore groundbreaking predictions for AI development from 2029-2035, including quantum-AI fusion, 
            neural-synthetic consciousness, and omniversal intelligence systems
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/ai-2029-2035-future-predictions" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:from-yellow-500 hover:to-orange-600 hover:scale-105 flex items-center justify-center"
            >
              Explore Future Predictions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-2035-breakthrough-showcase" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
            >
              View 2035 Breakthroughs
              <Rocket className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Key Predictions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Neural-Synthetic Consciousness</h3>
            <p className="text-gray-300 text-sm">
              AI systems achieving true consciousness through quantum-neural synthesis by 2032
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum-AI Fusion</h3>
            <p className="text-gray-300 text-sm">
              Complete integration of quantum computing with AI achieving 1,000,000x processing speed
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Omniversal Intelligence</h3>
            <p className="text-gray-300 text-sm">
              AI systems capable of processing and understanding multiple dimensions by 2035
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Autonomous Evolution</h3>
            <p className="text-gray-300 text-sm">
              Self-improving AI systems that evolve beyond human comprehension by 2034
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">1M+</div>
            <div className="text-gray-300">Processing Speed Increase</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.99%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">50,000%</div>
            <div className="text-gray-300">ROI Potential</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">2035</div>
            <div className="text-gray-300">Full Implementation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2029_2035FuturePredictionsPromotionBanner;