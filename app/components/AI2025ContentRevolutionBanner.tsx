import React from 'react';
import Link from 'next/link';

const AI2025ContentRevolutionBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🔥 AI 2025 CONTENT REVOLUTION</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Now Available
            </span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI insights, implementation guides, and real-world success stories 
            that are transforming businesses worldwide in 2025.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-sm opacity-90">New Articles</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-green-400 mb-2">5</div>
              <div className="text-sm opacity-90">Case Studies</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
              <div className="text-sm opacity-90">Resource Guides</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-purple-400 mb-2">340%</div>
              <div className="text-sm opacity-90">Avg ROI</div>
            </div>
          </div>
          
          {/* Featured Content Preview */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-6">Featured This Week</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-left">
                <div className="flex items-center mb-3">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
                  <span className="ml-2 text-sm opacity-75">Blog Post</span>
                </div>
                <h4 className="font-bold mb-2">Generative AI Enterprise Revolution</h4>
                <p className="text-sm opacity-90 mb-3">Complete guide to implementing generative AI with 340% ROI potential.</p>
                <Link href="/blog/ai-2025-generative-ai-enterprise-revolution-ultimate-guide" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
                  Read More →
                </Link>
              </div>
              
              <div className="text-left">
                <div className="flex items-center mb-3">
                  <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">HOT</span>
                  <span className="ml-2 text-sm opacity-75">Case Study</span>
                </div>
                <h4 className="font-bold mb-2">Manufacturing AI Transformation</h4>
                <p className="text-sm opacity-90 mb-3">How a Fortune 500 company achieved $50M+ in annual savings.</p>
                <Link href="/case-studies/global-manufacturing-ai-transformation" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
                  View Case Study →
                </Link>
              </div>
              
              <div className="text-left">
                <div className="flex items-center mb-3">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">GUIDE</span>
                  <span className="ml-2 text-sm opacity-75">Resource</span>
                </div>
                <h4 className="font-bold mb-2">AI Implementation Checklist</h4>
                <p className="text-sm opacity-90 mb-3">Step-by-step guide for successful AI implementation.</p>
                <Link href="/resources/ai-implementation-checklist-2025-ultimate" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
                  Download →
                </Link>
              </div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Get Expert Consultation
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <p className="text-sm opacity-75 mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-semibold">Fortune 500 Companies</div>
              <div className="text-sm font-semibold">Startups to Enterprises</div>
              <div className="text-sm font-semibold">Global Implementation</div>
              <div className="text-sm font-semibold">Proven Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025ContentRevolutionBanner;