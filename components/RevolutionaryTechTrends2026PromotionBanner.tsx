"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
ArrowRightTrendingUpZapBrainCpuGlobeShieldRocket

const RevolutionaryTechTrends2026PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentTrendsetCurrentTrend] = useState(0);

  const trends = [
    {
      title: 'Quantum Computing',
      description: '1M qubits achieved',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Neural Interfaces',
      description: 'Direct brain control',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Autonomous Systems',
      description: '95% efficiency',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Edge AI',
      description: 'Real-time processing',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTrend((prev) => (prev + 1) % trends.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const currentTrendData = trends[currentTrend];
  const IconComponent = currentTrendData.icon;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border border-blue-500/30 rounded-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              Revolutionary Tech Trends 2026
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              The Future is
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Now
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover groundbreaking technologies reshaping our world and creating unprecedented opportunities
            </p>
          </div>

          {/* Trend Showcase */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Current Trend Display */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 h-80 flex flex-col justify-center items-center text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${currentTrendData.color} flex items-center justify-center mb-6 transform transition-all duration-500 hover:scale-110`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {currentTrendData.title}
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  {currentTrendData.description}
                </p>
                <div className="flex gap-2">
                  {trends.map((_index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTrend ? 'bg-blue-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Trend List */}
            <div className="space-y-4">
              {trends.map((trendindex) => {
                const IconComponent = trend.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      index === currentTrend
                        ? 'bg-blue-500/20 border-blue-400/50'
                        : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-700/30'
                    }`}
                    onClick={() => setCurrentTrend(index)}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${trend.color} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">
                        {trend.title}
                      </h4>
                      <p className="text-gray-400">
                        {trend.description}
                      </p>
                    </div>
                    {index === currentTrend && (
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$15T</div>
              <div className="text-gray-400">Market Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500M+</div>
              <div className="text-gray-400">Jobs Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1000x</div>
              <div className="text-gray-400">Speed Increase</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/revolutionary-tech-trends-2026"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Explore All Trends
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechTrends2026PromotionBanner;