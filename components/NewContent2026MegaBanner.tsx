import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, TrendingUp, Users } from 'lucide-react';

export default function NewContent2026MegaBanner() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Star className="w-4 h-4" />
            NEW 2026 BREAKTHROUGH CONTENT
            <Star className="w-4 h-4" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Just Released
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionary AI Content & Success Stories
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI innovations, $25M+ ROI case studies, and breakthrough technologies 
            that are transforming industries in 2026
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Autonomous Enterprise */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">BREAKTHROUGH</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
              AI Autonomous Enterprise 2026
            </h3>
            <p className="text-blue-100 mb-6">
              Complete guide to transforming your enterprise with autonomous AI systems achieving $25M+ ROI and 95% automation.
            </p>
            <div className="flex gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">$25M</div>
                <div className="text-xs text-blue-200">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">95%</div>
                <div className="text-xs text-blue-200">Automation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">300%</div>
                <div className="text-xs text-blue-200">Productivity</div>
              </div>
            </div>
            <Link
              href="/blog/ai-autonomous-enterprise-transformation-2026"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Read Guide
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Quantum Computing */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">REVOLUTIONARY</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
              AI Quantum Hybrid Computing 2026
            </h3>
            <p className="text-blue-100 mb-6">
              Revolutionary quantum-classical hybrid systems delivering 1000x performance improvements in AI optimization and machine learning.
            </p>
            <div className="flex gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">1000x</div>
                <div className="text-xs text-blue-200">Faster</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400">95%</div>
                <div className="text-xs text-blue-200">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">$50M+</div>
                <div className="text-xs text-blue-200">Savings</div>
              </div>
            </div>
            <Link
              href="/blog/ai-quantum-hybrid-computing-2026"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore Quantum AI
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Success Story */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">FEATURED</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
              $25M ROI Success Story
            </h3>
            <p className="text-blue-100 mb-6">
              See how a Fortune 500 company achieved complete autonomous operations with $25M ROI, 95% automation, and 300% productivity gains.
            </p>
            <div className="flex gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">$25M</div>
                <div className="text-xs text-blue-200">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">95%</div>
                <div className="text-xs text-blue-200">Automation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">18</div>
                <div className="text-xs text-blue-200">Months</div>
              </div>
            </div>
            <Link
              href="/case-studies/ai-autonomous-enterprise-success-2026"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Case Study
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-blue-100 mb-6">
              Join thousands of companies already using our AI solutions to achieve breakthrough results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                📞 Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                ✉️ Get Free Consultation
              </a>
            </div>
            <div className="mt-4 text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>⏰ Available 24/7 for urgent consultations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}