import React from 'react';
import Link from 'next/link';

export default function LatestContentPromotionalBanner() {
  return (
    <div className="w-full bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-emerald-400 to-teal-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🔥 HOT NEW CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest AI Innovations
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              & Success Stories
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Stay ahead of the curve with our cutting-edge AI content, real-world case studies, 
            and breakthrough innovations that are reshaping industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Featured Blog Post */}
          <Link 
            href="/blog/ai-innovation-trends-2026"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW 2026
              </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                TREND ANALYSIS
              </span>
            </div>
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors">
              AI Innovation Trends 2026
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Discover the groundbreaking AI trends reshaping enterprise technology. From quantum computing 
              to autonomous systems, explore innovations driving digital transformation.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">340%</div>
                <div className="text-xs text-gray-400">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">$15M+</div>
                <div className="text-xs text-gray-400">Avg Savings</div>
              </div>
            </div>
            <div className="text-sm text-emerald-300 font-semibold group-hover:text-emerald-200 transition-colors">
              Read Full Analysis →
            </div>
          </Link>
          
          {/* Featured Case Study */}
          <Link 
            href="/case-studies/enterprise-ai-transformation-success-2026"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                SUCCESS STORY
              </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                $50M+ ROI
              </span>
            </div>
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors">
              Enterprise AI Transformation Success
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              See how a Fortune 500 company achieved $50M+ ROI in 12 months through comprehensive 
              AI transformation with autonomous systems and predictive analytics.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">$50M+</div>
                <div className="text-xs text-gray-400">Total ROI</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-teal-400">95%</div>
                <div className="text-xs text-gray-400">Automation</div>
              </div>
            </div>
            <div className="text-sm text-emerald-300 font-semibold group-hover:text-emerald-200 transition-colors">
              View Case Study →
            </div>
          </Link>
          
          {/* Featured Service */}
          <Link 
            href="/services/ai-business-intelligence-2026"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW SERVICE
              </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                2026 RELEASE
              </span>
            </div>
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors">
              AI Business Intelligence 2026
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Transform your data into strategic advantage with our advanced AI business intelligence 
              platform featuring real-time analytics and predictive modeling.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">340%</div>
                <div className="text-xs text-gray-400">Faster Insights</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-pink-400">$8M+</div>
                <div className="text-xs text-gray-400">Avg ROI</div>
              </div>
            </div>
            <div className="text-sm text-emerald-300 font-semibold group-hover:text-emerald-200 transition-colors">
              Learn More →
            </div>
          </Link>
        </div>
        
        {/* Quick Access Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          <Link 
            href="/blog/ai-quantum-computing-2026"
            className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center"
          >
            <div className="text-2xl mb-2">⚛️</div>
            <h3 className="font-bold text-sm mb-1">Quantum AI</h3>
            <p className="text-xs opacity-90">1000x faster</p>
            <div className="text-xs text-cyan-300 mt-2 font-semibold group-hover:text-cyan-200 transition-colors">NEW</div>
          </Link>
          
          <Link 
            href="/case-studies/ai-autonomous-enterprise-success-2026"
            className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center"
          >
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-bold text-sm mb-1">Autonomous AI</h3>
            <p className="text-xs opacity-90">95% automation</p>
            <div className="text-xs text-teal-300 mt-2 font-semibold group-hover:text-teal-200 transition-colors">SUCCESS</div>
          </Link>
          
          <Link 
            href="/blog/ai-sustainability-green-tech-2026"
            className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center"
          >
            <div className="text-2xl mb-2">🌱</div>
            <h3 className="font-bold text-sm mb-1">Green AI</h3>
            <p className="text-xs opacity-90">80% energy saved</p>
            <div className="text-xs text-green-300 mt-2 font-semibold group-hover:text-green-200 transition-colors">SUSTAINABLE</div>
          </Link>
          
          <Link 
            href="/case-studies/ai-neural-interface-success-2026"
            className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center"
          >
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="font-bold text-sm mb-1">Neural Interfaces</h3>
            <p className="text-xs opacity-90">99.9% accuracy</p>
            <div className="text-xs text-purple-300 mt-2 font-semibold group-hover:text-purple-200 transition-colors">BREAKTHROUGH</div>
          </Link>
          
          <Link 
            href="/blog/ai-space-tech-2026"
            className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center"
          >
            <div className="text-2xl mb-2">🌌</div>
            <h3 className="font-bold text-sm mb-1">Space AI</h3>
            <p className="text-xs opacity-90">Autonomous ops</p>
            <div className="text-xs text-indigo-300 mt-2 font-semibold group-hover:text-indigo-200 transition-colors">FUTURE</div>
          </Link>
          
          <Link 
            href="/services/ai-autonomous-infrastructure-platform"
            className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center"
          >
            <div className="text-2xl mb-2">🏗️</div>
            <h3 className="font-bold text-sm mb-1">Infrastructure</h3>
            <p className="text-xs opacity-90">Self-managing</p>
            <div className="text-xs text-orange-300 mt-2 font-semibold group-hover:text-orange-200 transition-colors">PLATFORM</div>
          </Link>
        </div>
        
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Join 25,000+ Enterprise Leaders</h3>
            <p className="text-gray-300 mb-6">
              Get exclusive access to cutting-edge AI insights, implementation strategies, and success stories 
              that are transforming businesses worldwide. Stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-emerald-400 to-teal-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-emerald-500 hover:to-teal-600 transition-all shadow-lg transform hover:scale-105"
              >
                📚 Explore All Content
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-900 transition-all transform hover:scale-105"
              >
                📊 View Success Stories
              </Link>
              <Link
                href="/services"
                className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-emerald-900 transition-all transform hover:scale-105"
              >
                🚀 Discover Services
              </Link>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="flex justify-center items-center gap-8 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Exclusive Content</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Real ROI Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Implementation Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}