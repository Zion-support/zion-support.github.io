import React from 'react';
import Link from 'next/link';

<<<<<<< HEAD
export default function NewContentPromotionBanner2025() {
  return (
    <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          🚀 New Content Revolution 2025
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover our latest breakthrough content showcasing the future of AI, quantum computing, and neural interfaces.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Link 
          href="/ai-2025-enterprise-automation-revolution" 
          className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            AI 2025 Enterprise Automation Revolution
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Transform your enterprise with revolutionary AI automation solutions delivering 99.9% accuracy and 2,500% ROI.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
              99.9% Accuracy
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
              10,000x Faster
            </span>
          </div>
          <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
            Explore Now →
          </div>
        </Link>
        
        <Link 
          href="/quantum-computing-breakthrough-2025" 
          className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
            Quantum Computing Breakthrough 2025
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Experience quantum supremacy with error-corrected quantum computers achieving impossible computational feats.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
              Quantum Supremacy
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
              Error-Corrected
            </span>
          </div>
          <div className="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
            Explore Now →
          </div>
        </Link>
        
        <Link 
          href="/ai-2026-neural-interface-revolution" 
          className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
            AI 2026 Neural Interface Revolution
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Breakthrough neural interfaces enabling direct human-AI consciousness communication and collaboration.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
              Neural Networks
            </span>
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
              Consciousness Integration
            </span>
          </div>
          <div className="text-indigo-400 font-semibold group-hover:text-indigo-300 transition-colors">
            Explore Now →
          </div>
        </Link>
      </div>
      
      <div className="text-center mt-8">
        <Link 
          href="/content-showcase-2025" 
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          View All New Content
        </Link>
      </div>
    </div>
=======
interface NewContentPromotionBanner2025Props {
  variant?: 'featured' | 'compact' | 'hero';
  className?: string;
}

export default function NewContentPromotionBanner2025({ 
  variant = 'featured', 
  className = '' 
}: NewContentPromotionBanner2025Props) {
  const content = {
    featured: {
      title: "🚀 NEW: AI 2025 Enterprise Success Stories",
      subtitle: "Real companies, real results. See how leading enterprises achieved 300%+ ROI through AI transformation.",
      cta: "Read Success Stories",
      href: "/blog/ai-2025-enterprise-success-stories",
      bgColor: "bg-gradient-to-r from-green-500 to-blue-600",
      textColor: "text-white"
    },
    compact: {
      title: "✨ New Content: AI Success Stories",
      subtitle: "300%+ ROI case studies now available",
      cta: "Explore",
      href: "/blog/ai-2025-enterprise-success-stories",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-600",
      textColor: "text-white"
    },
    hero: {
      title: "🎯 BREAKING: AI 2025 Quantum Computing Breakthrough",
      subtitle: "Discover the revolutionary quantum computing breakthroughs transforming AI capabilities. 1000x faster processing, 99.9% error correction, and unlimited possibilities.",
      cta: "Explore Quantum Future",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      bgColor: "bg-gradient-to-r from-indigo-600 to-purple-700",
      textColor: "text-white"
    }
  };

  const currentContent = content[variant];

  if (variant === 'hero') {
    return (
      <section className={`py-16 ${currentContent.bgColor} ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <span className="text-sm font-semibold text-white">NEW CONTENT</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {currentContent.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              {currentContent.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={currentContent.href}
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                {currentContent.cta}
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                View All Content
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`${currentContent.bgColor} ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">
                {currentContent.title}
              </h3>
              <p className="text-sm text-white/90">
                {currentContent.subtitle}
              </p>
            </div>
            <Link
              href={currentContent.href}
              className="mt-4 sm:mt-0 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              {currentContent.cta}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-12 ${currentContent.bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-semibold text-white">NEW CONTENT</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {currentContent.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={currentContent.href}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {currentContent.cta}
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
>>>>>>> main
  );
}