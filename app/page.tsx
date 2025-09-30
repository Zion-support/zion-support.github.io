import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Transformation Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Transform your enterprise with AI. Achieve 400% ROI, 90% automation, and 99.9% reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">400%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-600">Process Automation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">System Reliability</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW CONTENT BANNER */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl animate-bounce">🚀</span>
            <h2 className="text-3xl font-bold">NEW CONTENT JUST PUBLISHED!</h2>
            <span className="text-3xl animate-bounce">✨</span>
          </div>
          <p className="text-center text-xl opacity-90">
            Fresh insights on AI Orchestration, Federated Learning, Code Generation & Real-Time Analytics
          </p>
        </div>
      </section>

      {/* Featured New Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Latest AI Insights for 2026</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Cutting-edge guides to transform your enterprise with next-generation AI technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* AI Orchestration Platforms */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    🆕 NEW
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  AI Orchestration Platforms 2026
                </h3>
                <p className="text-sm opacity-90">
                  Unified control for multi-agent systems
                </p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-purple-600">60%</div>
                    <div className="text-xs text-gray-600">Cost Cut</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600">99.9%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-green-600">10x</div>
                    <div className="text-xs text-gray-600">Faster</div>
                  </div>
                </div>
                <Link 
                  href="/blog/ai-orchestration-platforms-2026"
                  className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm"
                >
                  Read Now →
                </Link>
              </div>
            </div>

            {/* Federated Learning */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    🆕 NEW
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Federated Learning 2026
                </h3>
                <p className="text-sm opacity-90">
                  Privacy-preserving AI at enterprise scale
                </p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-green-600">95%</div>
                    <div className="text-xs text-gray-600">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-emerald-600">100%</div>
                    <div className="text-xs text-gray-600">Private</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600">70%</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>
                <Link 
                  href="/blog/federated-learning-2026"
                  className="block w-full bg-green-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
                >
                  Read Now →
                </Link>
              </div>
            </div>

            {/* AI Code Generation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    🆕 NEW
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  AI Code Generation 2026
                </h3>
                <p className="text-sm opacity-90">
                  10x developer productivity with AI
                </p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-indigo-600">10x</div>
                    <div className="text-xs text-gray-600">Speed</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-purple-600">80%</div>
                    <div className="text-xs text-gray-600">Debug</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600">90%</div>
                    <div className="text-xs text-gray-600">Quality</div>
                  </div>
                </div>
                <Link 
                  href="/blog/ai-code-generation-2026"
                  className="block w-full bg-indigo-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-sm"
                >
                  Read Now →
                </Link>
              </div>
            </div>

            {/* Real-Time AI Analytics */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    🆕 NEW
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Real-Time AI Analytics 2026
                </h3>
                <p className="text-sm opacity-90">
                  Instant insights from streaming data
                </p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-blue-600">&lt;100ms</div>
                    <div className="text-xs text-gray-600">Latency</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-cyan-600">1B+</div>
                    <div className="text-xs text-gray-600">Events/s</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-green-600">99.99%</div>
                    <div className="text-xs text-gray-600">Accurate</div>
                  </div>
                </div>
                <Link 
                  href="/blog/real-time-ai-analytics-2026"
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  Read Now →
                </Link>
              </div>
            </div>

          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link 
              href="/blog" 
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105 shadow-lg"
            >
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* More Featured Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Essential AI Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* AI Transformation Guide */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Essential Guide
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  AI Transformation 2026: Complete Implementation Guide
                </h3>
                <p className="opacity-90">
                  Master enterprise AI with proven strategies and achieve 400% ROI.
                </p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">400%</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">90%</div>
                    <div className="text-sm text-gray-600">Automation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">99.9%</div>
                    <div className="text-sm text-gray-600">Reliability</div>
                  </div>
                </div>
                <Link 
                  href="/blog/ai-transformation-2026-complete-guide"
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Read Complete Guide
                </Link>
              </div>
            </div>

            {/* Success Story */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Success Story
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  AI Transformation Mega Success: 500% ROI Case Study
                </h3>
                <p className="opacity-90">
                  Fortune 500 manufacturing breakthrough with $200M annual savings.
                </p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">500%</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">95%</div>
                    <div className="text-sm text-gray-600">Automation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$200M</div>
                    <div className="text-sm text-gray-600">Savings</div>
                  </div>
                </div>
                <Link 
                  href="/case-studies/ai-transformation-mega-success-2026"
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  View Case Study
                </Link>
              </div>
            </div>

            {/* AI Enterprise Adoption */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Essential
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  AI Enterprise Adoption 2025: Complete Implementation Guide
                </h3>
                <p className="opacity-90">
                  Master AI enterprise adoption with proven strategies and ROI frameworks.
                </p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">300%</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">80%</div>
                    <div className="text-sm text-gray-600">Adoption</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-gray-600">Success</div>
                  </div>
                </div>
                <Link 
                  href="/blog/ai-enterprise-adoption-2025"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies achieving unprecedented success with our AI transformation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}