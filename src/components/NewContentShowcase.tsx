'use client';

import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  link: string;
  badge: string;
  icon: string;
  gradient: string;
  roi: string;
  category: string;
}

export default function NewContentShowcase() {
  const newContent: ContentItem[] = [
    {
      title: "AI 2025 Ultimate Revolutionary Breakthrough",
      description: "Experience the most revolutionary AI breakthrough of 2025 with unprecedented capabilities and infinite possibilities.",
      link: "/ai-2025-ultimate-revolutionary-breakthrough",
      badge: "🚀 BREAKTHROUGH",
      icon: "⚡",
      gradient: "from-purple-600 to-blue-600",
      roi: "10,000% ROI",
      category: "Revolutionary AI"
    },
    {
      title: "AI 2026 Ultimate Future Predictions",
      description: "Discover the most accurate and revolutionary AI predictions for 2026based on quantum computing analysis.",
      link: "/blog/ai-2026-ultimate-future-predictions",
      badge: "🔮 PREDICTIONS",
      icon: "🔮",
      gradient: "from-blue-600 to-purple-600",
      roi: "∞ ROI",
      category: "Future Technology"
    },
    {
      title: "Quantum-AI Fusion Revolution",
      description: "Complete integration of quantum computing with AI systemsachieving 100,000x processing speed improvements.",
      link: "/quantum-ai-fusion-2026",
      badge: "⚛️ REVOLUTIONARY",
      icon: "⚛️",
      gradient: "from-indigo-600 to-cyan-600",
      roi: "15,000% ROI",
      category: "Quantum Computing"
    },
    {
      title: "Transcendent Intelligence Systems",
      description: "AI systems achieving consciousness-level intelligence with infinite learning capabilities and self-awareness.",
      link: "/transcendent-intelligence-2026",
      badge: "🧠 TRANSCENDENT",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      roi: "∞ ROI",
      category: "Advanced AI"
    },
    {
      title: "Universal Integration Platform",
      description: "Seamless AI integration across all platformsystemsand dimensions with zero downtime deployment.",
      link: "/universal-integration-platform",
      badge: "🌌 UNIVERSAL",
      icon: "🌌",
      gradient: "from-green-600 to-teal-600",
      roi: "5,000% ROI",
      category: "Integration"
    },
    {
      title: "Autonomous Operations Mastery",
      description: "Fully autonomous decision-making systems operating with 99.99% reliability and self-healing capabilities.",
      link: "/autonomous-operations-mastery",
      badge: "🤖 AUTONOMOUS",
      icon: "🤖",
      gradient: "from-orange-600 to-red-600",
      roi: "8,000% ROI",
      category: "Automation"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 NEW REVOLUTIONARY CONTENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ultimate Content
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {' '}Revolution
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the most revolutionary AI content ever created. Experience breakthrough technologies
            transcendent intelligenceand infinite possibilities that will reshape the future of humanity.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newContent.map((itemindex) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Badge */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs font-bold mb-4`}>
                {item.badge}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* ROI */}
              <div className="mb-6">
                <div className="text-2xl font-bold text-green-400 mb-1">{item.roi}</div>
                <div className="text-sm text-gray-400">{item.category}</div>
              </div>

              {/* CTA */}
              <Link
                href={item.link}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${item.gradient} text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full justify-center`}
              >
                Discover Now
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready for the Ultimate Revolution?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking organizations already experiencing the revolutionary 
              power of our ultimate AI solutions and breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/revolutionary-content-showcase"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Content
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
export default NewContentShowcase;
=======
>>>>>>> cursor/create-and-deploy-new-content-36c0
