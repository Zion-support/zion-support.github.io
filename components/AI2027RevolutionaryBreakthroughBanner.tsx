import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp } from 'lucide-react';

const AI2027RevolutionaryBreakthroughBanner: React.FC = () => {
  const breakthroughFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Neural Synthesis Technology",
      description: "Revolutionary AI that synthesizes human-like reasoning with quantum processing power"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning-Fast Processing",
      description: "Process complex data 1000x faster than traditional AI systems"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Automation",
      description: "Achieve 99.9% accuracy in autonomous decision-making processes"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Exponential Growth",
      description: "Transform your business with AI that learns and evolves continuously"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            AI 2027 Revolutionary Breakthrough
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of AI is
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Here Today
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the most advanced AI breakthrough in history. Our revolutionary neural synthesis technology 
            combines quantum computing with artificial intelligence to create unprecedented capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/ai-2027-revolutionary-breakthrough" 
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Breakthrough
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/demo" 
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center"
            >
              Watch Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {breakthroughFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-purple-400 mb-4 group-hover:text-yellow-400 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">1000x</div>
            <div className="text-gray-300">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Continuous Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2027RevolutionaryBreakthroughBanner;