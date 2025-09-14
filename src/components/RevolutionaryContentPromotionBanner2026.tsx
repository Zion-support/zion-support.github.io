import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Star, Sparkles, TrendingUp } from 'lucide-react';

const RevolutionaryContentPromotionBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-yellow-200 text-sm font-medium">🚀 Revolutionary 2026 Content</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary AI Breakthroughs
            </span>
            <br />
            <span className="text-white">Now Available</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the most advanced AI technologies that are reshaping human-computer interaction, 
            quantum computing, and the future of intelligence itself.
          </p>

          {/* Content Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Neural Interfaces</h3>
              <p className="text-gray-300 text-sm mb-4">
                Direct brain-to-AI communication with unprecedented cognitive enhancement
              </p>
              <Link
                href="/blog/ai-2026-neural-interface-breakthrough"
                className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
              >
                Read More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum AI</h3>
              <p className="text-gray-300 text-sm mb-4">
                Superintelligence systems that transcend classical computation limits
              </p>
              <Link
                href="/blog/quantum-ai-superintelligence-2026"
                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Read More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
              <p className="text-gray-300 text-sm mb-4">
                Complete enterprise roadmap for quantum AI superintelligence deployment
              </p>
              <Link
                href="/resources/quantum-ai-superintelligence-implementation-guide-2026"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
              >
                Download Guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-center">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <div>
                <div className="text-2xl font-bold text-white">99%</div>
                <div className="text-sm text-gray-400">Engagement Rate</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-400">Readers</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <div>
                <div className="text-2xl font-bold text-white">5.0</div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <Brain className="w-5 h-5" />
              Explore All Content
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-white/10 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
            >
              <Star className="w-5 h-5" />
              Download Resources
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Bottom Text */}
          <p className="text-sm text-gray-400 mt-6">
            Join thousands of AI professionals discovering the future of technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentPromotionBanner2026;