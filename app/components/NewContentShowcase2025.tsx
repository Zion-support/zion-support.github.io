import React from 'react';
import Link from 'next/link';

const NewContentShowcase2025: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            <span className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></span>
            NEW CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore our latest insights into the most cutting-edge AI technologies and transformations 
            that are reshaping industries in 2025.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Revolutionary Breakthrough Blog */}
          <Link 
            href="/blog/ai-2025-revolutionary-breakthrough-ultimate-automation-revolution"
            className="group"
          >
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-2 animate-pulse">BREAKING</span>
                    <span className="text-sm text-gray-300">Blog Post</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                    AI 2025: Revolutionary Breakthrough Guide
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    Complete guide to the revolutionary AI automation breakthrough transforming businesses worldwide with 1000%+ ROI
                  </p>
                </div>
                <div className="text-4xl ml-4">🚀</div>
              </div>
              <div className="flex items-center text-purple-400 font-semibold text-sm">
                <span>Read Now</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* 2000% ROI Case Study */}
          <Link 
            href="/case-studies/ai-2025-revolutionary-breakthrough-2000-roi-success-story"
            className="group"
          >
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-8 border border-green-400/30 hover:border-green-400/60 transition-all duration-300 transform hover:scale-105 h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-2">FEATURED</span>
                    <span className="text-sm text-gray-300">Case Study</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                    2000% ROI Success Story
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    Fortune 500 company achieves unprecedented success with revolutionary AI implementation
                  </p>
                </div>
                <div className="text-4xl ml-4">💰</div>
              </div>
              <div className="flex items-center text-green-400 font-semibold text-sm">
                <span>View Success</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Quantum AI Guide */}
          <Link 
            href="/blog/quantum-ai-2025-business-transformation-complete-guide"
            className="group"
          >
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-2">NEW</span>
                    <span className="text-sm text-gray-300">Complete Guide</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                    Quantum AI Transformation
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    Master quantum AI implementation for unprecedented business transformation with 1500% ROI
                  </p>
                </div>
                <div className="text-4xl ml-4">⚛️</div>
              </div>
              <div className="flex items-center text-cyan-400 font-semibold text-sm">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Success Metrics */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Proven Success Metrics
              </span>
            </h3>
            <p className="text-gray-200 text-lg">
              Our revolutionary content is based on real-world transformations with measurable results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-400/30">
              <div className="text-4xl font-bold text-green-400 mb-2">2000%</div>
              <div className="text-sm text-gray-300 mb-2">Highest ROI</div>
              <div className="text-xs text-gray-400">Revolutionary Breakthrough</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-400/30">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.8B</div>
              <div className="text-sm text-gray-300 mb-2">Revenue Generated</div>
              <div className="text-xs text-gray-400">Single Implementation</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-400/30">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300 mb-2">Success Rate</div>
              <div className="text-xs text-gray-400">Across All Projects</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl p-6 border border-cyan-400/30">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-sm text-gray-300 mb-2">Companies</div>
              <div className="text-xs text-gray-400">Transformed</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join the companies achieving 2000% ROI with our revolutionary AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Newsletter Signup */}
        <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Stay Updated with Latest Breakthroughs</h4>
            <p className="text-gray-300 mb-6">Get the latest revolutionary content and success stories delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;