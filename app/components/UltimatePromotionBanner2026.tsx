import React from 'react';
import Link from 'next/link';
import { ArrowRight, Award, Rocket, Target, Trophy, Zap } from 'lucide-react';

const UltimatePromotionBanner2026 = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full px-8 py-3 mb-8 font-bold text-lg">
            <Trophy className="w-6 h-6 mr-3" />
            🏆 ULTIMATE 2026 AI BREAKTHROUGH CONTENT
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            The Future of AI is Here
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-5xl mx-auto leading-relaxed">
            Revolutionary AI content that reveals the secrets to unprecedented success. 
            Join thousands of leaders who are transforming their businesses with cutting-edge AI strategies.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl mb-4">💰</div>
            <div className="text-4xl font-bold text-green-400 mb-2">$2.8B+</div>
            <div className="text-gray-200">Total Value Created</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl mb-4">📈</div>
            <div className="text-4xl font-bold text-blue-400 mb-2">450%</div>
            <div className="text-gray-200">Average ROI</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl mb-4">🎯</div>
            <div className="text-4xl font-bold text-purple-400 mb-2">99.7%</div>
            <div className="text-gray-200">Success Rate</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚡</div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">18 Mo</div>
            <div className="text-gray-200">To Full ROI</div>
          </div>
        </div>

        {/* Featured Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-3xl p-10 border border-white border-opacity-20">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">🚀</div>
                <div>
                  <h3 className="text-3xl font-bold text-yellow-400 mb-2">Enterprise AI Transformation</h3>
                  <div className="flex items-center text-green-400">
                    <Award className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Most Popular Guide</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                The complete roadmap to AI success. Learn from Fortune 500 companies how to achieve 
                300-500% ROI with proven AI implementation strategies.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-500 bg-opacity-20 rounded-lg p-3">
                  <div className="text-green-400 font-bold">400% ROI</div>
                  <div className="text-sm text-gray-300">Average Return</div>
                </div>
                <div className="bg-blue-500 bg-opacity-20 rounded-lg p-3">
                  <div className="text-blue-400 font-bold">85% Efficiency</div>
                  <div className="text-sm text-gray-300">Improvement</div>
                </div>
              </div>
              <Link 
                href="/blog/ai-2025-enterprise-transformation-complete-guide"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Read Complete Guide
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>

            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-3xl p-10 border border-white border-opacity-20">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">⚛️</div>
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400 mb-2">Quantum AI Breakthrough</h3>
                  <div className="flex items-center text-blue-400">
                    <Rocket className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Revolutionary Technology</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Discover how quantum computing is revolutionizing AI. Learn about the breakthrough 
                that's solving impossible problems and creating unprecedented opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-500 bg-opacity-20 rounded-lg p-3">
                  <div className="text-purple-400 font-bold">1000x Faster</div>
                  <div className="text-sm text-gray-300">Processing Speed</div>
                </div>
                <div className="bg-cyan-500 bg-opacity-20 rounded-lg p-3">
                  <div className="text-cyan-400 font-bold">99.8% Accuracy</div>
                  <div className="text-sm text-gray-300">Prediction Rate</div>
                </div>
              </div>
              <Link 
                href="/blog/ai-2025-quantum-computing-breakthrough"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Quantum AI
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
          </div>

          {/* Right Column - Resources */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-3xl p-10 border border-white border-opacity-20">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">📊</div>
                <div>
                  <h3 className="text-3xl font-bold text-green-400 mb-2">Success Case Study</h3>
                  <div className="flex items-center text-yellow-400">
                    <Target className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Real Results</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                From $50M annual loss to $200M profit in just 18 months. This Fortune 500 
                manufacturing company's transformation story will inspire your AI journey.
              </p>
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-4 mb-6">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">$250M</div>
                  <div className="text-sm opacity-90">Total Financial Impact</div>
                </div>
              </div>
              <Link 
                href="/case-studies/enterprise-ai-transformation-success-story"
                className="inline-flex items-center bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Read Success Story
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>

            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-3xl p-10 border border-white border-opacity-20">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">🎯</div>
                <div>
                  <h3 className="text-3xl font-bold text-orange-400 mb-2">Implementation Checklist</h3>
                  <div className="flex items-center text-red-400">
                    <Zap className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Step-by-Step Guide</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                The definitive checklist for AI implementation success. Don't miss any critical steps 
                in your transformation journey. Used by 500+ successful companies.
              </p>
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-4 mb-6">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
              </div>
              <Link 
                href="/resources/ai-implementation-checklist-2025"
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Checklist
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-12 border border-white border-opacity-20">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of leaders who are already achieving unprecedented success with AI. 
            Get expert guidance and proven strategies for your transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/consultation"
              className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Rocket className="w-6 h-6 mr-3" />
              Start Your AI Journey
            </Link>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-purple-900 px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-8 text-lg">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fortune 500</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Enterprise</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Startups</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Government</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimatePromotionBanner2026;