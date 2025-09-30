import React from 'react';
import Link from 'next/link';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              That Transforms Businesses
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Discover cutting-edge AI insights, case studies, and implementation guides that deliver 300% ROI and $50M+ savings
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">AI Enterprise Transformation</h3>
            <p className="text-blue-100 mb-6">
              Complete 2026 implementation guide achieving 300% ROI and 90% efficiency gains
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span>ROI Achieved:</span>
                <span className="font-bold text-green-400">300%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Efficiency Gain:</span>
                <span className="font-bold text-green-400">90%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Annual Savings:</span>
                <span className="font-bold text-green-400">$50M+</span>
              </div>
            </div>
            <Link
              href="/blog/ai-enterprise-transformation-2026"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            >
              Read Full Guide →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Multimodal AI Integration</h3>
            <p className="text-blue-100 mb-6">
              Revolutionary text, image, voice, and video AI integration for 250% efficiency gains
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span>Efficiency Gain:</span>
                <span className="font-bold text-green-400">250%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Accuracy Rate:</span>
                <span className="font-bold text-green-400">95%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Cost Reduction:</span>
                <span className="font-bold text-green-400">60%</span>
              </div>
            </div>
            <Link
              href="/blog/ai-multimodal-integration-2025"
              className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300"
            >
              Explore Integration →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Supply Chain Optimization</h3>
            <p className="text-blue-100 mb-6">
              Real case study: 60% cost reduction and 90% efficiency improvement saving $12M annually
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span>Cost Reduction:</span>
                <span className="font-bold text-green-400">60%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Efficiency Gain:</span>
                <span className="font-bold text-green-400">90%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Annual Savings:</span>
                <span className="font-bold text-green-400">$12M</span>
              </div>
            </div>
            <Link
              href="/case-studies/ai-supply-chain-optimization-2025"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📈</span>
              <span className="font-semibold">Proven Results</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="font-semibold">300% ROI</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <span className="font-semibold">$50M+ Savings</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}