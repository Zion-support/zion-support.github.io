"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Zap, Brain, Cpu, Globe, Shield, Rocket } from 'lucide-react';

const RevolutionaryTechTrends2026 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTrend, setActiveTrend] = useState(0);

  const trends = [
    {
      title: 'Quantum Computing Revolution',
      description: 'Breakthrough quantum processors achieving 1 million qubits',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      impact: '1000x faster computation',
      applications: ['Drug Discovery', 'Climate Modeling', 'Cryptography']
    },
    {
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces for seamless interaction',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      impact: 'Thought-to-action in 0.1ms',
      applications: ['Medical Rehabilitation', 'Gaming', 'Communication']
    },
    {
      title: 'Autonomous Everything',
      description: 'Self-managing systems across all industries',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      impact: '95% operational efficiency',
      applications: ['Transportation', 'Manufacturing', 'Healthcare']
    },
    {
      title: 'Edge AI Dominance',
      description: 'AI processing at the edge of networks',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      impact: 'Real-time decision making',
      applications: ['IoT', 'Autonomous Vehicles', 'Smart Cities']
    },
    {
      title: 'Global AI Ecosystem',
      description: 'Interconnected AI systems worldwide',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      impact: 'Unified intelligence network',
      applications: ['Climate Solutions', 'Global Health', 'Space Exploration']
    },
    {
      title: 'Quantum Security',
      description: 'Unbreakable encryption for the quantum age',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500',
      impact: '100% secure communications',
      applications: ['Banking', 'Government', 'Military']
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTrend((prev) => (prev + 1) % trends.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentTrend = trends[activeTrend];
  const IconComponent = currentTrend.icon;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border border-blue-500/30 rounded-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-lg font-medium mb-6">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              Revolutionary Tech Trends 2026
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Future is
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Now
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the groundbreaking technologies that are reshaping our world and creating unprecedented opportunities for innovation and growth
            </p>
          </div>

          {/* Main Trend Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Current Trend Display */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-10 h-96 flex flex-col justify-center items-center text-center">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${currentTrend.color} flex items-center justify-center mb-8 transform transition-all duration-500 hover:scale-110 shadow-2xl`}>
                  <IconComponent className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {currentTrend.title}
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {currentTrend.description}
                </p>
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl px-6 py-3 mb-6">
                  <span className="text-blue-200 font-semibold text-lg">
                    {currentTrend.impact}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {currentTrend.applications.map((app, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Trend Navigation */}
            <div className="space-y-4">
              {trends.map((trend, index) => {
                const IconComponent = trend.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-6 p-6 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                      index === activeTrend
                        ? 'bg-blue-500/20 border-blue-400/50 shadow-lg shadow-blue-500/20'
                        : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-700/30'
                    }`}
                    onClick={() => setActiveTrend(index)}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${trend.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {trend.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {trend.description}
                      </p>
                    </div>
                    {index === activeTrend && (
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-3">$15T</div>
              <div className="text-gray-400 text-lg">Market Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-3">500M+</div>
              <div className="text-gray-400 text-lg">Jobs Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-3">95%</div>
              <div className="text-gray-400 text-lg">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-3">1000x</div>
              <div className="text-gray-400 text-lg">Speed Increase</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Shape the Future?
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of innovators who are already leveraging these revolutionary technologies to transform their businesses
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/revolutionary-tech-trends-2026"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Explore All Trends
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-200 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechTrends2026;