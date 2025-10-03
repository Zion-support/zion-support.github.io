// import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Rocket, Shield, TrendingUp, ArrowRight, Star } from 'lucide-react';

const October2025NewContentMasterBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-fuchsia-900 to-pink-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center px-8 py-3 rounded-full text-base font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-gray-900 shadow-2xl animate-pulse">
            <Star className="w-6 h-6 mr-3" />
            ⭐ OCTOBER 1, 2025 - MAJOR CONTENT DROP - THREE NEW BREAKTHROUGH RELEASES! ⭐
          </span>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
              Latest AI Breakthroughs
            </span>
            <span className="block mt-3">Just Released Today!</span>
          </h1>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Discover our newest enterprise AI innovations delivering <span className="font-bold text-yellow-300">$55.8B combined value</span> with <span className="font-bold text-yellow-300">1,840% ROI</span> across Fortune 500 companies
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Service */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/30 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mb-6 mx-auto">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center">
              Digital Transformation Platform
            </h3>
            <p className="text-gray-300 mb-6 text-center leading-relaxed">
              Complete enterprise transformation solution with $47.2B cumulative value across 180+ Fortune 500 implementations
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">ROI</span>
                <span className="text-lg font-bold text-green-400">1,840%</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Value</span>
                <span className="text-lg font-bold text-blue-400">$47.2B</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Time</span>
                <span className="text-lg font-bold text-purple-400">90-180d</span>
              </div>
            </div>
            <Link
              to="/services/ai-2025-october-digital-transformation-platform-services"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
            >
              Explore Platform
            </Link>
          </div>

          {/* Card 2: Blog Post */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/30 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-xl mb-6 mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center">
              AI Security & Trust Framework
            </h3>
            <p className="text-gray-300 mb-6 text-center leading-relaxed">
              Build secure, compliant AI systems protecting $847B in enterprise value with 99.97% threat prevention rate
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Detection</span>
                <span className="text-lg font-bold text-red-400">99.97%</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Compliance</span>
                <span className="text-lg font-bold text-green-400">100%</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Breaches</span>
                <span className="text-lg font-bold text-blue-400">Zero</span>
              </div>
            </div>
            <Link
              to="/blog/ai-2025-oct-01-enterprise-ai-security-trust-framework"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
            >
              Read Article
            </Link>
          </div>

          {/* Card 3: Case Study */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/30 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl mb-6 mx-auto">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center">
              Fortune 500 Success Story
            </h3>
            <p className="text-gray-300 mb-6 text-center leading-relaxed">
              How GlobalTech Solutions transformed operations and created $8.4B in value with 1,838% ROI in just 18 months
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Value</span>
                <span className="text-lg font-bold text-green-400">$8.4B</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">ROI</span>
                <span className="text-lg font-bold text-yellow-400">1,838%</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Timeline</span>
                <span className="text-lg font-bold text-purple-400">18 months</span>
              </div>
            </div>
            <Link
              to="/case-studies/ai-2025-oct-fortune-500-digital-transformation-8-4-billion-success"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg"
            >
              View Case Study
            </Link>
          </div>
        </div>

        {/* Combined Value Proposition */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-10 border-2 border-yellow-400/40 mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Combined Impact
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">$55.8B</div>
                <div className="text-sm text-gray-300">Total Value</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">180+</div>
                <div className="text-sm text-gray-300">F500 Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">1,840%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">99.99%</div>
                <div className="text-sm text-gray-300">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-5 text-xl font-bold text-gray-900 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-xl hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-110"
          >
            <Sparkles className="w-6 h-6 mr-3" />
            Start Your Transformation Today
            <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
          <p className="mt-6 text-gray-300 text-lg">
            Schedule a complimentary transformation assessment with our experts
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025NewContentMasterBanner;
