import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RevolutionaryContentBanner() {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    {
      title: "AI Innovation Hub 2026",
      description: "Explore revolutionary AI breakthroughs and cutting-edge innovations",
      link: "/ai-innovation-hub-2026",
      icon: "🚀",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Technology Showcase 2026", 
      description: "Experience interactive demos of breakthrough technologies",
      link: "/revolutionary-technology-showcase-2026",
      icon: "⚡",
      color: "from-cyan-600 to-purple-600"
    },
    {
      title: "AI Mastery Academy 2026",
      description: "Master the future of AI with world-class education",
      link: "/ai-mastery-academy-2026", 
      icon: "🎓",
      color: "from-green-600 to-teal-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🎉 <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Revolutionary Content Launch 2026</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest innovations, interactive showcases, and cutting-edge educational content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <Link 
              key={index}
              href={feature.link}
              className={`group relative overflow-hidden rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                index === currentFeature 
                  ? 'border-cyan-400 bg-gradient-to-br from-cyan-900/50 to-purple-900/50' 
                  : 'border-white/20 bg-white/5 hover:border-cyan-400/50'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-300" 
                   style={{ background: `linear-gradient(135deg, ${feature.color})` }}></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-cyan-400 text-sm font-medium">
                  <span>Explore Now</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-2xl mb-2">🧠</div>
            <h4 className="text-white font-semibold mb-1">Neural Interfaces</h4>
            <p className="text-gray-400 text-xs">99.7% accuracy</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
            <div className="text-2xl mb-2">⚛️</div>
            <h4 className="text-white font-semibold mb-1">Quantum AI</h4>
            <p className="text-gray-400 text-xs">1000x faster</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-400/50 transition-all duration-300">
            <div className="text-2xl mb-2">🤖</div>
            <h4 className="text-white font-semibold mb-1">AI Consciousness</h4>
            <p className="text-gray-400 text-xs">Level 7 achieved</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-pink-400/50 transition-all duration-300">
            <div className="text-2xl mb-2">🔬</div>
            <h4 className="text-white font-semibold mb-1">Molecular Computing</h4>
            <p className="text-gray-400 text-xs">Atomic scale</p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full px-6 py-3">
            <span className="text-white font-semibold">New Content Added Daily</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-32 w-12 h-12 bg-green-400/20 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 bg-pink-400/20 rounded-full animate-pulse delay-3000"></div>
    </div>
  );
}