import React from 'react';
import Link from 'next/link';

const AI2025NewContentPromotionBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 NEW CONTENT RELEASED
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            AI 2025: Next-Generation 
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
              Autonomous Systems
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Discover the revolutionary autonomous systems transforming industries with 
            <span className="font-bold text-yellow-300"> 8,500% ROI</span> and 
            <span className="font-bold text-green-300"> 99.9% accuracy</span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                BLOG POST
              </span>
              <span className="text-yellow-400 text-sm">NEW</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
              Next-Generation Autonomous Systems
            </h3>
            
            <p className="text-blue-100 mb-6">
              Explore revolutionary autonomous systems delivering unprecedented efficiency and ROI through self-healing infrastructure and predictive decision making.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span>99.7% uptime across all systems</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span>95% accuracy in predictive maintenance</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>300% improvement in efficiency</span>
              </div>
            </div>
            
            <Link 
              href="/blog/ai-2025-next-generation-autonomous-systems"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
            >
              Read Full Article
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-sm font-semibold">
                CASE STUDY
              </span>
              <span className="text-yellow-400 text-sm">BREAKTHROUGH</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-green-300 transition-colors">
              Global Supply Chain Transformation
            </h3>
            
            <p className="text-blue-100 mb-6">
              Discover how a Fortune 200 logistics company achieved 8,500% ROI with AI-powered supply chain optimization and autonomous decision making.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span>8,500% ROI in 18 months</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span>92% reduction in operational costs</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>99.8% delivery accuracy</span>
              </div>
            </div>
            
            <Link 
              href="/case-studies/ai-2025-global-supply-chain-transformation"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 group"
            >
              View Case Study
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Implementation Guide */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-sm font-semibold">
                IMPLEMENTATION GUIDE
              </span>
              <span className="text-yellow-400 text-sm">ESSENTIAL</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-300 transition-colors">
              Complete Implementation Guide
            </h3>
            
            <p className="text-blue-100 mb-6">
              Step-by-step guide to implementing AI 2025 autonomous systems for maximum ROI and operational efficiency with proven methodologies.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span>2,000-8,500% ROI guaranteed</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span>90-95% cost reduction</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>18-month implementation roadmap</span>
              </div>
            </div>
            
            <Link 
              href="/resources/ai-2025-autonomous-systems-implementation-guide"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 group"
            >
              Download Guide
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Ready to Transform Your Operations?
            </h3>
            
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of companies already achieving extraordinary results with AI 2025 autonomous systems. 
              Get your free consultation and ROI assessment today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-lg rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/tools/ai-2025-roi-calculator"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Calculate Your ROI
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                <span>Free ROI Assessment</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                <span>Custom Implementation Plan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025NewContentPromotionBanner;