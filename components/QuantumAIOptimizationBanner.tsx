import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Star, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

export default function QuantumAIOptimizationBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-green-400 to-teal-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              ⚛️ QUANTUM BREAKTHROUGH
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              1000x SPEED
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            AI Quantum Optimization 2026
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              1000x Speed Revolution
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most significant computational breakthrough in human history. 
            Quantum-enhanced AI is delivering 1000x faster optimization, $12M+ additional returns, 
            and breakthrough capabilities in complex problem-solving for enterprise applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/blog/ai-quantum-optimization-2026"
              className="bg-gradient-to-r from-green-400 to-teal-500 text-black hover:from-green-500 hover:to-teal-600 px-8 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-6 h-6 inline mr-2" />
              Explore Quantum AI
            </Link>
            <Link
              href="/case-studies/ai-quantum-optimization-2026"
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-8 py-4 rounded-lg font-semibold text-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              <DollarSign className="w-6 h-6 inline mr-2" />
              View $12M Success Story
            </Link>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-4xl font-bold text-green-400 mb-2">1000x</div>
            <div className="text-sm text-gray-200">Faster Processing</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-4xl font-bold text-blue-400 mb-2">$12M+</div>
            <div className="text-sm text-gray-200">Additional Returns</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.5%</div>
            <div className="text-sm text-gray-200">Accuracy Rate</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-4xl font-bold text-yellow-400 mb-2">18mo</div>
            <div className="text-sm text-gray-200">Payback Period</div>
          </div>
        </div>

        {/* Featured Applications */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <span className="text-3xl">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Financial Optimization</h3>
                <p className="text-sm text-gray-300">$12M+ Returns</p>
              </div>
            </div>
            <p className="text-gray-200 mb-4">
              Real-time portfolio optimization achieving 1000x faster calculations and 
              $12M+ additional returns through quantum-enhanced algorithms.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-yellow-400">1000x</div>
              <div className="text-sm text-gray-300">Faster</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span className="text-3xl">💊</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Drug Discovery</h3>
                <p className="text-sm text-gray-300">1000x Acceleration</p>
              </div>
            </div>
            <p className="text-gray-200 mb-4">
              Molecular simulation accelerating pharmaceutical research by 1000x, 
              enabling faster development of life-saving medications.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-green-400">1000x</div>
              <div className="text-sm text-gray-300">Acceleration</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span className="text-3xl">🌍</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Climate Modeling</h3>
                <p className="text-sm text-gray-300">Unprecedented Accuracy</p>
              </div>
            </div>
            <p className="text-gray-200 mb-4">
              Complex climate simulations with unprecedented accuracy and 1000x faster 
              processing for better climate change understanding.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-purple-400">99.5%</div>
              <div className="text-sm text-gray-300">Accuracy</div>
            </div>
          </div>
        </div>

        {/* Success Story Preview */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-center mb-8">Real-World Success Story</h3>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">💰</span>
            </div>
            <h4 className="text-2xl font-bold mb-4">Fortune 500 Financial Services</h4>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              A leading financial services company implemented quantum AI optimization for their 
              portfolio management system, achieving $12M+ in additional returns while reducing 
              risk exposure by 40% and improving transaction speed by 1000x.
            </p>
            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">$12M+</div>
                <div className="text-sm text-gray-300">Additional Returns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">40%</div>
                <div className="text-sm text-gray-300">Risk Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">1000x</div>
                <div className="text-sm text-gray-300">Speed Increase</div>
              </div>
            </div>
            <Link
              href="/case-studies/ai-quantum-optimization-2026"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              View Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Achieve 1000x Speed?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Discover how quantum AI optimization can transform your enterprise operations. 
            Get your personalized quantum AI strategy and implementation roadmap today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Your Quantum AI Strategy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}