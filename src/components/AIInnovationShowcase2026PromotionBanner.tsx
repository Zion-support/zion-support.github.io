"use client";
import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ArrowRightZapBrainRocketTrendingUpStar

const AIInnovationShowcase2026PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentInnovationsetCurrentInnovation] = useState(0);

  const innovations = [
    {
      title: 'Quantum-Neural Fusion',
      description: '10,000x processing speed',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Autonomous Operations',
      description: '85% cost reduction',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Neural Interfaces',
      description: 'Direct brain-computer connection',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Predictive Analytics',
      description: '98.7% accuracy',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentInnovation((prev) => (prev + 1) % innovations.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const currentInnovationData = innovations[currentInnovation];
  const IconComponent = currentInnovationData.icon;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border border-purple-500/30 rounded-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200 text-sm font-medium mb-4">
              <Star className="w-4 h-4 text-yellow-400" />
              AI Innovation Showcase 2026
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Revolutionary AI
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Breakthroughs
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of artificial intelligence with cutting-edge innovations that are transforming industries worldwide
            </p>
          </div>

          {/* Innovation Showcase */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Current Innovation Display */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 h-80 flex flex-col justify-center items-center text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${currentInnovationData.color} flex items-center justify-center mb-6 transform transition-all duration-500 hover:scale-110`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {currentInnovationData.title}
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  {currentInnovationData.description}
                </p>
                <div className="flex gap-2">
                  {innovations.map((_index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentInnovation ? 'bg-purple-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Innovation List */}
            <div className="space-y-4">
              {innovations.map((innovationindex) => {
                const IconComponent = innovation.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      index === currentInnovation
                        ? 'bg-purple-500/20 border-purple-400/50'
                        : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-700/30'
                    }`}
                    onClick={() => setCurrentInnovation(index)}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${innovation.color} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">
                        {innovation.title}
                      </h4>
                      <p className="text-gray-400">
                        {innovation.description}
                      </p>
                    </div>
                    {index === currentInnovation && (
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">AI Models</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98.7%</div>
              <div className="text-gray-400">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10,000x</div>
              <div className="text-gray-400">Speed Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/ai-innovation-showcase-2026"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Explore AI Innovations
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2026PromotionBanner;