import React from 'react';
import Link from 'next/link';

export default function NewContent2025Banner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 JANUARY 2025 CONTENT DROP</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            New AI Resources
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Just Released!
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Discover our latest AI implementation guides, enterprise case studies, and comprehensive checklists 
            to accelerate your AI transformation in 2025.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🎯 Explore All New Content
            </Link>
            <Link
              href="/resources/ai-implementation-master-checklist-2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 text-lg"
            >
              📋 Download Master Checklist
            </Link>
          </div>
          
          {/* Featured content grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/blog/ai-2025-enterprise-ai-maturity-assessment" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2">AI Maturity Assessment</h3>
                <p className="text-sm opacity-90 mb-3">Comprehensive framework to evaluate your organization's AI readiness</p>
                <div className="text-xs bg-white/20 px-3 py-1 rounded-full inline-block">
                  Strategy Guide
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-2025-global-logistics-transformation-success" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">🚛</div>
                <h3 className="text-lg font-semibold mb-2">$2.3B Logistics Success</h3>
                <p className="text-sm opacity-90 mb-3">How a Fortune 500 company achieved massive AI transformation</p>
                <div className="text-xs bg-white/20 px-3 py-1 rounded-full inline-block">
                  Case Study
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-implementation-master-checklist-2025" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-lg font-semibold mb-2">Master Checklist</h3>
                <p className="text-sm opacity-90 mb-3">200+ point checklist for successful AI implementation</p>
                <div className="text-xs bg-white/20 px-3 py-1 rounded-full inline-block">
                  Implementation
                </div>
              </div>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-80">New Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-sm opacity-80">Checklist Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$2.3B</div>
              <div className="text-sm opacity-80">Proven ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}