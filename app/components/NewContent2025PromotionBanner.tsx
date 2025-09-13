import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Users, BookOpen, Zap } from 'lucide-react';

export default function NewContent2025PromotionBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-20 w-24 h-24 bg-white opacity-5 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-white opacity-5 rounded-full animate-pulse delay-3000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-lg font-bold mb-6 animate-bounce">
            <Sparkles className="w-6 h-6 mr-3" />
            🚀 NEW CONTENT 2025 🚀
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Just Released!
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Discover breakthrough AI insights, enterprise success stories, and cutting-edge automation solutions that are transforming industries worldwide.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-yellow-300 font-bold text-sm">BREAKTHROUGH</span>
                <p className="text-blue-100 text-sm">January 2025</p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">
              AI 2025: Quantum-Neural Fusion Revolution
            </h3>
            <p className="text-blue-100 mb-6">
              Explore the groundbreaking fusion of quantum computing and neural networks delivering unprecedented processing power and 15,000% ROI improvements.
            </p>
            <Link 
              href="/blog/ai-2025-quantum-neural-fusion-revolution"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold group"
            >
              Read Full Article
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-yellow-300 font-bold text-sm">SUCCESS STORY</span>
                <p className="text-blue-100 text-sm">Fortune 500</p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">
              Global Enterprise Transformation: 10,000% ROI
            </h3>
            <p className="text-blue-100 mb-6">
              How a leading Fortune 500 company achieved unprecedented digital transformation with AI automation, reducing costs by 95% while increasing efficiency by 1,000%.
            </p>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold group"
            >
              View Case Study
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Implementation Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-yellow-300 font-bold text-sm">IMPLEMENTATION</span>
                <p className="text-blue-100 text-sm">Step-by-Step</p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">
              Ultimate AI Implementation Master Guide
            </h3>
            <p className="text-blue-100 mb-6">
              Complete roadmap for implementing AI solutions in your organization. From strategy to deployment, learn the proven methodologies used by industry leaders.
            </p>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-master-guide"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold group"
            >
              Get Implementation Guide
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of enterprises already leveraging our AI solutions. Get instant access to our complete content library and start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/content-showcase"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Explore All Content
              </Link>
              <Link 
                href="/ai-services-2025"
                className="inline-flex items-center px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30"
              >
                Get AI Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
            <div className="text-blue-100">Articles Published</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">50K+</div>
            <div className="text-blue-100">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">95%</div>
            <div className="text-blue-100">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">∞</div>
            <div className="text-blue-100">ROI Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
}