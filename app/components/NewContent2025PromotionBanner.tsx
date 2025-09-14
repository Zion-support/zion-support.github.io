import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, BarChart3, FileText, Users } from 'lucide-react';

const NewContent2025PromotionBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Zap className="w-4 h-4 text-yellow-300 mr-2" />
            <span className="text-white text-sm font-medium">NEW CONTENT JANUARY 2025</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Just Released
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover breakthrough insights, implementation guides, and success stories that will transform your AI journey in 2025
          </p>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Edge Computing Revolution */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-green-300 mr-3" />
                <h3 className="text-white font-semibold text-lg">Edge Computing Revolution</h3>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                99% latency reduction with next-generation edge AI systems
              </p>
              <Link 
                href="/blog/ai-2025-edge-computing-revolution-next-generation"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-medium text-sm group"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quantum AI Hybrid Systems */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-purple-300 mr-3" />
                <h3 className="text-white font-semibold text-lg">Quantum AI Breakthrough</h3>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                The ultimate fusion of quantum computing and AI for impossible problem solving
              </p>
              <Link 
                href="/blog/quantum-ai-hybrid-systems-2026-breakthrough"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-medium text-sm group"
              >
                Explore Now
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Financial Services Success */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-300 mr-3" />
                <h3 className="text-white font-semibold text-lg">$5B ROI Success</h3>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                How a global financial institution achieved unprecedented results
              </p>
              <Link 
                href="/case-studies/global-financial-services-quantum-ai-transformation-2025-5-billion-roi"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-medium text-sm group"
              >
                View Case Study
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Tools and Resources */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Implementation Checklist */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-orange-300 mr-3" />
                <h3 className="text-white font-semibold text-lg">Implementation Master Checklist</h3>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                Complete step-by-step guide for successful AI deployment
              </p>
              <Link 
                href="/resources/ai-2025-implementation-master-checklist"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-medium text-sm group"
              >
                Download Guide
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* ROI Calculator */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-8 h-8 text-green-300 mr-3" />
                <h3 className="text-white font-semibold text-lg">Business Impact Calculator</h3>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                Quantify your AI transformation ROI and business impact
              </p>
              <Link 
                href="/tools/ai-2025-business-impact-calculator"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-medium text-sm group"
              >
                Calculate ROI
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-200 text-sm">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5</div>
              <div className="text-blue-200 text-sm">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">8</div>
              <div className="text-blue-200 text-sm">Tools & Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$50B+</div>
              <div className="text-blue-200 text-sm">Proven ROI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025PromotionBanner;