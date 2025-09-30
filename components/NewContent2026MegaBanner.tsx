import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content & Solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Now Available
            </span>
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover our latest AI innovations, success stories, and transformation guides. 
            Get exclusive access to cutting-edge content that's transforming businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Enterprise Guide</h3>
                <p className="text-sm opacity-75">Complete Implementation</p>
              </div>
            </div>
            <p className="text-sm mb-4 opacity-90">
              Master AI enterprise transformation with proven strategies and achieve 300% ROI.
            </p>
            <Link
              href="/blog/ai-enterprise-transformation-2026"
              className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              Read Guide →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">$50M Success Story</h3>
                <p className="text-sm opacity-75">Fortune 500 Case Study</p>
              </div>
            </div>
            <p className="text-sm mb-4 opacity-90">
              See how a Fortune 500 company achieved massive savings and 90% efficiency gain.
            </p>
            <Link
              href="/case-studies/ai-enterprise-transformation-mega-success-2026"
              className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              View Case Study →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Services</h3>
                <p className="text-sm opacity-75">Enterprise Solutions</p>
              </div>
            </div>
            <p className="text-sm mb-4 opacity-90">
              Transform your business with our comprehensive AI enterprise transformation services.
            </p>
            <Link
              href="/services/ai-enterprise-transformation"
              className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              Explore Services →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-sm font-semibold">Get Started Today</span>
            <Link
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}