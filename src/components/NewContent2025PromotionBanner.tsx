import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Brain, Zap } from 'lucide-react';

const NewContent2025PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Header */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              🚀 NEW CONTENT 2025 🚀
            </h2>
            <Sparkles className="h-8 w-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Discover the latest AI breakthroughs, implementation guides, and success stories that are revolutionizing business in 2025
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Blog Post Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-lg font-semibold">AI Business Revolution</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Complete guide to autonomous business operations with AI, neural networks, and quantum computing
              </p>
              <Link 
                href="/blog/ai-2025-autonomous-business-revolution-complete-guide"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-transform duration-300"
              >
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Case Study Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="text-lg font-semibold">$10B ROI Success</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Fortune 500 company achieves $10 billion ROI with comprehensive AI transformation in 2025
              </p>
              <Link 
                href="/case-studies/fortune-500-ai-transformation-2025-10-billion-roi"
                className="inline-flex items-center text-green-400 hover:text-green-300 group-hover:translate-x-1 transition-transform duration-300"
              >
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Implementation Guide Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-lg font-semibold">Implementation Guide</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Step-by-step master guide to implementing AI technologies in 2025 with proven methodologies
              </p>
              <Link 
                href="/resources/ai-2025-implementation-guide"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 group-hover:translate-x-1 transition-transform duration-300"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-white/90 mb-6">
              Join thousands of companies already revolutionizing their operations with our proven AI implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
              >
                Get Expert Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300 inline-flex items-center justify-center"
              >
                Explore All Resources
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">500%</div>
              <div className="text-gray-300 text-sm">Efficiency Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">$10B+</div>
              <div className="text-gray-300 text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">99.9%</div>
              <div className="text-gray-300 text-sm">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">95%</div>
              <div className="text-gray-300 text-sm">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025PromotionBanner;