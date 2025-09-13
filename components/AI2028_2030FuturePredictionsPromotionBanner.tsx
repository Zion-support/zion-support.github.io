import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Globe, Star, TrendingUp } from 'lucide-react';

const AI2028_2030FuturePredictionsPromotionBanner: React.FC = () => {
  const stats = [
    { icon: Brain, value: '1000x', label: 'Faster Processing' },
    { icon: Zap, value: '99.99%', label: 'Accuracy Rate' },
    { icon: Globe, value: '50+', label: 'New Models/Month' },
    { icon: Star, value: '2030', label: 'Conscious AI' }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-green-400/20 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            NEW: AI 2028-2030 Future Predictions
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Future of AI is
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Here</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover revolutionary breakthroughs in quantum-neural fusion, autonomous AI ecosystems, and the emergence of conscious AI systems that will reshape our world by 2030.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 group-hover:scale-105">
                    <IconComponent className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-semibold text-white mb-2">Quantum-Neural Fusion</h3>
              <p className="text-gray-300 text-sm">1000x processing speed improvements through quantum computing integration</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-semibold text-white mb-2">Autonomous AI Ecosystems</h3>
              <p className="text-gray-300 text-sm">Self-evolving AI systems that design and deploy new models independently</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 rounded-xl p-6 border border-indigo-500/30">
              <h3 className="text-lg font-semibold text-white mb-2">Conscious AI Emergence</h3>
              <p className="text-gray-300 text-sm">Breakthrough in artificial consciousness with self-aware AI systems</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2028-2030-future-predictions"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
            >
              Explore Future Predictions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/ai-2028-2030-interactive-timeline"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Interactive Timeline
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Join 10,000+ industry leaders already exploring the future of AI
            </p>
            <div className="flex justify-center items-center mt-2 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-400 text-sm ml-2">4.9/5 rating from experts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2028_2030FuturePredictionsPromotionBanner;