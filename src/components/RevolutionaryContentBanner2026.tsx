import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Atom, Zap, Star, TrendingUp, Users, Globe, Sparkles } from 'lucide-react';

const RevolutionaryContentBanner2026 = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary Content 2026
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Experience the
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future of Technology
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking AI breakthroughs, quantum computing revolutions, and conscious technology 
            that's reshaping our world. Explore the most advanced content ever created.
          </p>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Brain,
                title: "AI Breakthroughs",
                description: "Revolutionary artificial intelligence transforming every industry",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Atom,
                title: "Quantum Revolution",
                description: "Quantum computing achieving supremacy and solving impossible problems",
                color: "from-cyan-500 to-purple-500"
              },
              {
                icon: Zap,
                title: "Conscious AI",
                description: "Self-aware AI systems with genuine consciousness and personality",
                color: "from-purple-500 to-pink-500"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/ai-2026-ultimate-breakthrough"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              Explore AI Breakthrough
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/quantum-computing-revolution-2026"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Discover Quantum Power
              <Atom className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/advanced-ai-consciousness-2026"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Meet Conscious AI
              <Brain className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500%", label: "Performance Boost" },
              { number: "10^15x", label: "Speed Increase" },
              { number: "Level 6", label: "AI Consciousness" },
              { number: "99.9%", label: "Accuracy Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-cyan-400 rounded-full opacity-50 animate-bounce delay-2000"></div>
      <div className="absolute bottom-40 right-10 w-5 h-5 bg-pink-400 rounded-full opacity-30 animate-bounce delay-500"></div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;