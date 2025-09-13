'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EnhancedContentShowcaseBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const featuredContent = [
    {
      title: "AI Innovation Hub 2026",
      subtitle: "Advanced Technology Solutions",
      description: "Revolutionary AI consciousness, quantum computing, and neural interfaces",
      link: "/ai-innovation-hub-2026-advanced",
      icon: "🚀",
      gradient: "from-cyan-500 to-purple-600",
      hoverGradient: "from-cyan-400 to-purple-500",
      features: ["AI Consciousness", "Quantum Computing", "Neural Interfaces"]
    },
    {
      title: "AI Services Showcase",
      subtitle: "Comprehensive Solutions",
      description: "Complete portfolio of AI services and implementation guides",
      link: "/ai-services-comprehensive-showcase-2026",
      icon: "⚛️",
      gradient: "from-purple-500 to-pink-600",
      hoverGradient: "from-purple-400 to-pink-500",
      features: ["Automation", "Analytics", "Edge Computing"]
    },
    {
      title: "Revolutionary Tech",
      subtitle: "Breakthrough Innovations",
      description: "Next-generation autonomous systems and advanced AI technologies",
      link: "/revolutionary-technology-showcase-2026",
      icon: "🧠",
      gradient: "from-green-500 to-blue-600",
      hoverGradient: "from-green-400 to-blue-500",
      features: ["Autonomous Systems", "Predictive AI", "Advanced Automation"]
    },
    {
      title: "Quantum Computing",
      subtitle: "Quantum AI Solutions",
      description: "Breakthrough quantum algorithms and exponential processing power",
      link: "/quantum-computing-solutions-showcase-2026",
      icon: "📊",
      gradient: "from-orange-500 to-red-600",
      hoverGradient: "from-orange-400 to-red-500",
      features: ["Quantum AI", "Optimization", "Cryptography"]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary Content 2026
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive collection of cutting-edge AI technologies, breakthrough innovations, 
              and revolutionary solutions designed to transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredContent.map((content, index) => (
              <Link
                key={index}
                href={content.link}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 
                  transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2
                  ${hoveredCard === index ? `border-opacity-50` : 'hover:border-opacity-30'}
                  hover:bg-white/10
                `}>
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {content.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {content.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-3 group-hover:text-white transition-colors">
                      {content.subtitle}
                    </p>
                    <p className="text-xs text-gray-400 mb-4 line-clamp-2">
                      {content.description}
                    </p>
                    
                    <div className="space-y-1 mb-4">
                      {content.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-xs text-cyan-400">
                          ✨ {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className={`
                      bg-gradient-to-r ${content.gradient} text-white px-4 py-2 rounded-lg 
                      text-sm font-semibold transition-all duration-300
                      group-hover:${content.hoverGradient} group-hover:shadow-lg
                    `}>
                      Explore Now →
                    </div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className={`
                  absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300
                  bg-gradient-to-r ${content.gradient} blur-xl -z-10
                `} />
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4">
              <Link 
                href="/ai-innovation-hub-2026-advanced"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 Start Your AI Journey
              </Link>
              <Link 
                href="/content-showcase"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                📚 View All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}