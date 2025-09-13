'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Cpu, Database, Cloud, Lock, Zap, Target } from 'lucide-react';

const RevolutionaryTechBanner2026 = () => {
  const technologies = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Neural Processing",
      description: "Advanced neural networks with 1000x processing power"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Quantum Database",
      description: "Revolutionary data storage and retrieval systems"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Edge Computing",
      description: "Distributed computing at the edge of networks"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero Trust Security",
      description: "Military-grade security protocols"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.1"/%3E%3C/svg%3E')] opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            REVOLUTIONARY TECH 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Next Generation of
            <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"> Technology</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Experience breakthrough innovations that will reshape the digital landscape and unlock unprecedented possibilities for your business.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-500 mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">10x Performance</h3>
              <p className="text-gray-300">Revolutionary speed improvements</p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">99.9% Accuracy</h3>
              <p className="text-gray-300">Unprecedented precision levels</p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Future-Ready</h3>
              <p className="text-gray-300">Built for tomorrow's challenges</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/revolutionary-tech-2026" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            Explore Revolutionary Tech
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTechBanner2026;