// import React from 'react';
import { Link } from 'react-router-dom';

export default function UltimateContentShowcase2026Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
            🚀 ULTIMATE 2026 CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover the most advanced AI breakthroughs, transformation success stories, and cutting-edge insights that are reshaping enterprise operations in 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <div className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">NEW</div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">AI 2026: The Next Generation Revolution</h3>
            <p className="text-blue-100 text-sm mb-4">
              Revolutionary breakthroughs in artificial intelligence are reshaping enterprise operations and unlocking unprecedented business value.
            </p>
            <Link to="/blog/ai-2026-next-generation-ai-revolution" 
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Read More →
            </Link>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <div className="bg-green-400 text-black px-2 py-1 rounded-full text-xs font-bold">MEGA SUCCESS</div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">$250M ROI Transformation Success</h3>
            <p className="text-blue-100 text-sm mb-4">
              How a Fortune 500 company achieved $250M in cost savings and 340% ROI through comprehensive AI transformation.
            </p>
            <Link to="/case-studies/ai-enterprise-transformation-mega-success-2026" 
              className="inline-flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors"
            >
              View Case Study →
            </Link>
          </div>

          {/* Interactive Calculator */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <div className="bg-purple-400 text-white px-2 py-1 rounded-full text-xs font-bold">INTERACTIVE</div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">AI ROI Calculator 2026</h3>
            <p className="text-blue-100 text-sm mb-4">
              Calculate your potential ROI from AI transformation with our advanced interactive calculator.
            </p>
            <Link to="/content-hub" 
              className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors"
            >
              Try Calculator →
            </Link>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">$250M</div>
            <p className="text-blue-100 text-sm">Average ROI</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">340%</div>
            <p className="text-blue-100 text-sm">Return on Investment</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
            <p className="text-blue-100 text-sm">Process Automation</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">1000x</div>
            <p className="text-blue-100 text-sm">Speed Improvement</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/content-hub"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🚀 Explore All Content
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              📞 Call +1 302 464 0950
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            Join 500+ companies already transforming with AI
          </p>
        </div>
      </div>
    </div>
  );
}