"use client";
'use client';

import React, { useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const InnovationHub2025Banner = () => {
  const [hoveredInnovation, setHoveredInnovation] = useState<number | null>(null);

  const innovations = [
    {
      title: 'AI Consciousness',
      description: 'Self-aware artificial intelligence systems',
      icon: '🧠',
      color: 'from-purple-500 to-indigo-500',
      stats: '99.9% accuracy',
      link: '/ai-consciousness'
    },
    {
      title: 'Quantum Networks',
      description: 'Ultra-secure quantum communication',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      stats: 'Unbreakable encryption',
      link: '/quantum-networks'
    },
    {
      title: 'Neural Enhancement',
      description: 'Cognitive augmentation technology',
      icon: '🔗',
      color: 'from-emerald-500 to-teal-500',
      stats: '300% brain boost',
      link: '/neural-enhancement'
    },
    {
      title: 'Autonomous Cities',
      description: 'Self-managing smart city systems',
      icon: '🏙️',
      color: 'from-orange-500 to-red-500',
      stats: 'Zero human intervention',
      link: '/autonomous-cities'
    },
    {
      title: 'Synthetic Reality',
      description: 'Blended physical and digital worlds',
      icon: '🌐',
      color: 'from-pink-500 to-purple-500',
      stats: 'Seamless integration',
      link: '/synthetic-reality'
    },
    {
      title: 'Predictive Analytics',
      description: 'Future forecasting with AI',
      icon: '🔮',
      color: 'from-yellow-500 to-orange-500',
      stats: '95% prediction accuracy',
      link: '/predictive-analytics'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-indigo-400/30">
            <span className="text-sm font-medium">🚀 INNOVATION HUB 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Innovation Ecosystem
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the interconnected network of breakthrough technologies that are reshaping our world and creating new paradigms of human achievement.
          </p>
        </div>

        {/* Innovation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 ${
                hoveredInnovation === index ? 'transform scale-105' : 'hover:transform hover:scale-102'
              }`}
              onMouseEnter={() => setHoveredInnovation(index)}
              onMouseLeave={() => setHoveredInnovation(null)}
            >
              <div className={`bg-gradient-to-br ${innovation.color} p-8 rounded-2xl h-full transition-all duration-300 ${
                hoveredInnovation === index ? 'shadow-2xl' : 'shadow-lg'
              }`}>
                <div className="text-center">
                  <div className="text-6xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {innovation.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
                  
                  <p className="text-white/90 mb-4 text-sm leading-relaxed">
                    {innovation.description}
                  </p>
                  
                  <div className="bg-white/20 rounded-full px-4 py-2 mb-4">
                    <span className="text-sm font-semibold">{innovation.stats}</span>
                  </div>
                  
                  <a
                    href={innovation.link}
                    className="inline-flex items-center text-white font-semibold hover:underline transition-all duration-300"
                  >
                    Explore Innovation →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Innovation Stats */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/20 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Innovation Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">500+</div>
              <div className="text-sm opacity-90">Active Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-sm opacity-90">Researchers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">1000%</div>
              <div className="text-sm opacity-90">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-sm opacity-90">Innovation Cycle</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-8 rounded-2xl backdrop-blur-sm border border-indigo-400/20">
            <h3 className="text-2xl font-bold mb-4">Join the Innovation Revolution</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Be part of the most advanced innovation ecosystem on the planet. Connect with leading researchers, access cutting-edge technologies, and shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/innovation-hub"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Join Innovation Hub
              </a>
              <a
                href="/innovation-projects"
                className="border-2 border-indigo-400 text-indigo-400 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300"
              >
                Explore Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationHub2025Banner;