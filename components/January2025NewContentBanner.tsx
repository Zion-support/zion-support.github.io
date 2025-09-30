import React from 'react';
import Link from 'next/link';

export default function January2025NewContentBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW: January 2025 AI Innovation Content
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Content: Multimodal & Edge AI Transformations
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-semibold max-w-4xl mx-auto">
            Discover cutting-edge insights on multimodal AI enterprise applications and industrial edge AI transformations that are revolutionizing business operations worldwide.
          </p>

          {/* Content Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Multimodal AI Article */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Multimodal AI Revolution</h3>
                  <p className="text-blue-400 font-semibold">Enterprise Transformation Guide</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Explore how multimodal AI is revolutionizing enterprise operations by combining text, images, audio, and video processing for unprecedented business insights and automation.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Computer Vision</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">NLP</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Audio Processing</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Business Automation</span>
              </div>
              <Link 
                href="/blog/ai-2025-multimodal-ai-enterprise-revolution"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105"
              >
                Read Full Article →
              </Link>
            </div>

            {/* Edge AI Article */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Edge AI Industrial Revolution</h3>
                  <p className="text-purple-400 font-semibold">Real-Time Intelligence Guide</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Discover how Edge AI is transforming industrial operations with real-time intelligence, predictive maintenance, and operational optimization at unprecedented scale.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Industrial IoT</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Predictive Maintenance</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Real-Time Processing</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Manufacturing</span>
              </div>
              <Link 
                href="/blog/ai-2025-edge-ai-industrial-transformation"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105"
              >
                Read Full Article →
              </Link>
            </div>
          </div>

          {/* Case Study Highlight */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">💰</div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">$15.2B Manufacturing Success Story</h3>
                <p className="text-green-400 font-semibold text-xl">Global Manufacturing Corporation</p>
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
              Learn how a Fortune 100 manufacturer achieved $15.2 billion in savings with AI-powered predictive maintenance, reducing downtime by 78% and improving maintenance efficiency by 156%.
            </p>
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-green-400 mb-1">$15.2B</div>
                <div className="text-sm text-green-300">Total Savings</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">78%</div>
                <div className="text-sm text-blue-300">Downtime Reduction</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">156%</div>
                <div className="text-sm text-purple-300">Efficiency Improvement</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-cyan-400 mb-1">624%</div>
                <div className="text-sm text-cyan-300">ROI</div>
              </div>
            </div>
            <Link 
              href="/case-studies/ai-2025-manufacturing-predictive-maintenance-15-billion-savings"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Read Full Case Study →
            </Link>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Explore All Articles
            </Link>
            <Link 
              href="/case-studies" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View Success Stories
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}