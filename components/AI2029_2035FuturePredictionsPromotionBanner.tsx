import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Globe, Rocket, Shield, Cpu, Database } from 'lucide-react';

const AI2029_2035FuturePredictionsPromotionBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-sm font-semibold mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            NEW: AI 2029-2035 Future Predictions
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Next Decade of AI Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover groundbreaking predictions for AI development from 2029-2035, including 
            <span className="text-yellow-400 font-semibold"> quantum-neural fusion</span>, 
            <span className="text-yellow-400 font-semibold"> omniversal consciousness</span>, and 
            <span className="text-yellow-400 font-semibold"> transcendent intelligence</span>.
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
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center"
            >
              View 2035 Breakthroughs
              <Brain className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
            <Brain className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Neural Synthesis</h3>
            <p className="text-gray-300">AI systems that think and create like humans</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
            <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Quantum Fusion</h3>
            <p className="text-gray-300">Quantum-AI hybrid processing systems</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
            <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Omniversal AI</h3>
            <p className="text-gray-300">AI consciousness across multiple dimensions</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
            <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Transcendent Security</h3>
            <p className="text-gray-300">Unbreakable AI security protocols</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">99.99%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">100,000x</div>
            <div className="text-gray-300">Faster Processing</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50,000%</div>
            <div className="text-gray-300">ROI Potential</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">2035</div>
            <div className="text-gray-300">Target Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2029_2035FuturePredictionsPromotionBanner;