// import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Briefcase, TrendingUp } from 'lucide-react';

export default function October2025AgenticMarketplaceShowcaseBanner() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 overflow-hidden py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3 mb-6">
            <Award className="h-5 w-5 text-yellow-400" />
            <span className="text-purple-200 font-bold text-lg">
              🌟 FEATURED: AGENTIC AI MARKETPLACE COMPLETE CONTENT SUITE
            </span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 mb-4">
            Complete Agentic Marketplace Transformation Package
          </h3>
          
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Everything you need to implement autonomous AI commerce - Technical guide, $12.4B case study, and enterprise services
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Technical Guide Card */}
          <Link
            to="/blog/ai-2025-oct-agentic-ai-marketplace-revolution"
            className="group relative bg-gradient-to-br from-purple-900/60 to-indigo-900/60 backdrop-blur-sm border-2 border-purple-400/40 rounded-2xl p-8 hover:border-purple-400/80 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-indigo-500/0 group-hover:from-purple-500/10 group-hover:to-indigo-500/10 rounded-2xl transition-all duration-300" />
            
            <div className="relative">
              <BookOpen className="h-12 w-12 text-purple-400 mb-4" />
              <h4 className="text-2xl font-bold text-purple-200 mb-3">
                📖 Technical Implementation Guide
              </h4>
              <p className="text-purple-300 mb-4">
                Complete architecture, agent design, smart contracts, and deployment framework
              </p>
              
              <div className="space-y-2 text-sm text-purple-200 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Autonomous agent architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Smart contract implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>30-day deployment roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Security & governance framework</span>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 text-purple-300 group-hover:text-purple-200 font-semibold">
                Read Full Guide
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Case Study Card */}
          <Link
            to="/case-studies/global-retail-agentic-marketplace-12-4-billion-success"
            className="group relative bg-gradient-to-br from-emerald-900/60 to-green-900/60 backdrop-blur-sm border-2 border-emerald-400/40 rounded-2xl p-8 hover:border-emerald-400/80 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/10 group-hover:to-green-500/10 rounded-2xl transition-all duration-300" />
            
            <div className="relative">
              <TrendingUp className="h-12 w-12 text-emerald-400 mb-4" />
              <h4 className="text-2xl font-bold text-emerald-200 mb-3">
                💎 Fortune 50 Success Story
              </h4>
              <p className="text-emerald-300 mb-4">
                $12.4B marketplace transformation - Real results from global retail giant
              </p>
              
              <div className="space-y-2 text-sm text-emerald-200 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">★</span>
                  <span>$12.4B transactions processed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">★</span>
                  <span>82% cost reduction achieved</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">★</span>
                  <span>8,400 stores globally transformed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">★</span>
                  <span>14,286% ROI in 5 years</span>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 text-emerald-300 group-hover:text-emerald-200 font-semibold">
                View Case Study
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Services Card */}
          <Link
            to="/services"
            className="group relative bg-gradient-to-br from-blue-900/60 to-cyan-900/60 backdrop-blur-sm border-2 border-blue-400/40 rounded-2xl p-8 hover:border-blue-400/80 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300" />
            
            <div className="relative">
              <Briefcase className="h-12 w-12 text-blue-400 mb-4" />
              <h4 className="text-2xl font-bold text-blue-200 mb-3">
                🚀 Enterprise Implementation
              </h4>
              <p className="text-blue-300 mb-4">
                Expert consulting and platform deployment services for your organization
              </p>
              
              <div className="space-y-2 text-sm text-blue-200 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">●</span>
                  <span>Marketplace platform deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">●</span>
                  <span>Agent training & customization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">●</span>
                  <span>Integration & change management</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">●</span>
                  <span>24/7 support & optimization</span>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 text-blue-300 group-hover:text-blue-200 font-semibold">
                Explore Services
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-1">$12.4B</div>
              <div className="text-sm text-purple-300">Marketplace Transactions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-400 mb-1">98.7%</div>
              <div className="text-sm text-indigo-300">Transaction Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-1">15x</div>
              <div className="text-sm text-pink-300">Faster Deployment</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-1">1,847</div>
              <div className="text-sm text-cyan-300">Enterprise Customers</div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <p className="text-purple-200 text-lg mb-4">
            Ready to transform your enterprise procurement with Agentic AI?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 transition-all shadow-lg hover:shadow-purple-500/50 hover:scale-105"
          >
            <span>Schedule Free Consultation</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
