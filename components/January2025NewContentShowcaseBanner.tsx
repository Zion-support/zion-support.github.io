import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, BookOpen, Brain, Zap, TrendingUp, Star, Sparkles } from 'lucide-react';

export default function January2025NewContentShowcaseBanner() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
              New Content Alert
            </span>
            <Sparkles className="h-6 w-6 text-yellow-400" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            January 2025 Content Revolution
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover groundbreaking insights on Autonomous Enterprise Revolution and Quantum Computing Breakthroughs
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Blog Post 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-blue-200 text-sm font-medium">Featured Article</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
              Autonomous Enterprise Revolution
            </h3>
            
            <p className="text-blue-100 mb-6 leading-relaxed">
              Explore how AI is transforming business operations in 2025. Learn about real-time decision making, 
              autonomous security, and predictive analytics that are reshaping enterprise operations.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-blue-200">
                <Calendar className="h-4 w-4" />
                <span>January 15, 2025</span>
              </div>
              <Link 
                href="/blog/ai-2025-january-autonomous-enterprise-revolution"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-purple-200 text-sm font-medium">Breakthrough Technology</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
              Quantum Computing Breakthrough
            </h3>
            
            <p className="text-purple-100 mb-6 leading-relaxed">
              Discover the dawn of practical Quantum AI in enterprise applications. Learn about exponential speedup, 
              parallel processing, and optimization mastery that's revolutionizing business operations.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-purple-200">
                <Calendar className="h-4 w-4" />
                <span>January 20, 2025</span>
              </div>
              <Link 
                href="/blog/ai-2025-january-quantum-computing-breakthrough"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Case Study and Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Case Study */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6" />
              <span className="text-green-200 text-sm font-medium">Success Story</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Fortune 500 Quantum AI Transformation
            </h3>
            
            <p className="text-green-100 mb-6 leading-relaxed">
              Discover how a leading manufacturing company achieved $180M in annual savings and 340% ROI 
              through quantum AI implementation. Real results, real impact.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">$180M</div>
                <div className="text-xs text-green-200">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">340%</div>
                <div className="text-xs text-green-200">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">8mo</div>
                <div className="text-xs text-green-200">Payback</div>
              </div>
            </div>
            
            <Link 
              href="/content/case-studies/fortune-500-quantum-ai-transformation"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Services */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6" />
              <span className="text-orange-200 text-sm font-medium">New Service</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Quantum AI Consulting Services
            </h3>
            
            <p className="text-orange-100 mb-6 leading-relaxed">
              Transform your business with quantum intelligence. Our expert team helps enterprises 
              harness quantum computing for optimization, machine learning, and competitive advantage.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Optimization</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs">ML Solutions</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Security</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Integration</span>
            </div>
            
            <Link 
              href="/content/services/quantum-ai-consulting"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-lg">Stay Ahead of the Curve</span>
              <Star className="h-6 w-6 text-yellow-400" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and discover how Zion Tech Group can help your organization 
              achieve unprecedented competitive advantage through cutting-edge AI and quantum computing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Explore All Content
                <BookOpen className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}