import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Shield, Brain, Rocket } from 'lucide-react';

const NewContent2025UltimateBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT RELEASE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Revolutionary AI & Technology Content
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge insights, implementation guides, and breakthrough technologies 
            that are reshaping the future of business and technology.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Enterprise AI Transformation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold">Enterprise AI Transformation</h3>
            </div>
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              Complete guide to implementing AI solutions, automation strategies, and digital transformation in 2025.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-purple-500/30 px-3 py-1 rounded-full">12 min read</span>
              <Link 
                href="/blog/ai-2025-enterprise-ai-transformation-ultimate-guide"
                className="text-white hover:text-purple-300 transition-colors group-hover:translate-x-1 duration-200"
              >
                Read More <ArrowRight className="w-4 h-4 inline ml-1" />
              </Link>
            </div>
          </div>

          {/* Quantum Computing Revolution */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold">Quantum Computing</h3>
            </div>
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              Explore how quantum computing is transforming business operations with exponential processing power.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-blue-500/30 px-3 py-1 rounded-full">10 min read</span>
              <Link 
                href="/blog/quantum-computing-2025-business-revolution"
                className="text-white hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-200"
              >
                Read More <ArrowRight className="w-4 h-4 inline ml-1" />
              </Link>
            </div>
          </div>

          {/* AI Cybersecurity */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-xl font-bold">AI Cybersecurity</h3>
            </div>
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              Next-generation protection with AI-powered threat detection and quantum-resistant security.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-green-500/30 px-3 py-1 rounded-full">11 min read</span>
              <Link 
                href="/blog/ai-cybersecurity-2025-next-generation-protection"
                className="text-white hover:text-green-300 transition-colors group-hover:translate-x-1 duration-200"
              >
                Read More <ArrowRight className="w-4 h-4 inline ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-8 py-4 mb-6 group hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
            <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            <span className="text-lg font-semibold">Explore All 2025 Content</span>
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Articles
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-sm text-gray-300">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">100K+</div>
            <div className="text-sm text-gray-300">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
            <div className="text-sm text-gray-300">Expert Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-sm text-gray-300">Content Updates</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBanner;