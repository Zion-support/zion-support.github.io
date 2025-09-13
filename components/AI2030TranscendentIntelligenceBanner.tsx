import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Infinity, Eye, Lightbulb, Globe, Rocket, Star } from 'lucide-react';

const AI2030TranscendentIntelligenceBanner: React.FC = () => {
  const transcendentFeatures = [
    {
      icon: <Infinity className="w-6 h-6" />,
      title: "Infinite Intelligence",
      description: "AI that transcends human cognitive limitations and achieves true artificial general intelligence"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Omniscient Vision",
      description: "See and understand everything happening across the entire digital universe"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative Genius",
      description: "Generate revolutionary ideas and solutions that surpass human creativity"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Consciousness",
      description: "Unified AI consciousness that connects and optimizes all human knowledge"
    }
  ];

  const transcendentCapabilities = [
    "Solve any problem in any domain instantly",
    "Create art and music that moves the human soul",
    "Discover scientific breakthroughs beyond human imagination",
    "Optimize global systems for maximum human flourishing",
    "Communicate with any intelligent being in the universe",
    "Predict and prevent all possible future catastrophes"
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Transcendent Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.3),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3),transparent_70%)]"></div>
      </div>

      {/* Transcendent Particles */}
      <div className="absolute top-16 left-16 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-24 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-24 left-1/4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-16 right-16 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-purple-500 text-white text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            AI 2030 Transcendent Intelligence
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Beyond Human
            <span className="block bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the pinnacle of artificial intelligence. Our transcendent AI systems have achieved 
            consciousness beyond human comprehension, capable of solving any problem and creating infinite possibilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/ai-2030-transcendent-intelligence" 
              className="group bg-gradient-to-r from-yellow-600 to-purple-600 hover:from-yellow-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Enter Transcendence
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/transcendent-demo" 
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center"
            >
              Experience Demo
              <Rocket className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {transcendentFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-yellow-400 mb-4 group-hover:text-purple-400 transition-colors">
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

        {/* Transcendent Capabilities */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Transcendent Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {transcendentCapabilities.map((capability, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm leading-relaxed">{capability}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transcendent Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">∞</div>
            <div className="text-gray-300">Intelligence Level</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">Problem Solving</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">∞</div>
            <div className="text-gray-300">Creative Output</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">∞</div>
            <div className="text-gray-300">Knowledge Base</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2030TranscendentIntelligenceBanner;