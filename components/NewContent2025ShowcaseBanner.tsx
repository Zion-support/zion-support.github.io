import React from 'react';
import Link from 'next/link';

export default function NewContent2025ShowcaseBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🚀 NEW CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content & Resources
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover our latest breakthrough content on Quantum AIAutonomous Systemsand Enterprise Transformation. 
            Stay ahead with cutting-edge AI knowledge and implementation guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* New Blog Posts */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-4">Latest Blog Posts</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-400 pl-4">
                <h4 className="font-semibold text-yellow-300">AI 2025 Next-Generation Autonomous Systems</h4>
                <p className="text-sm opacity-80">Revolutionary autonomous AI systems transforming industries</p>
                <Link href="/blog/ai-2025-next-generation-autonomous-systems" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                  Read More →
                </Link>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-purple-300">Quantum AI 2025 Business Breakthrough</h4>
                <p className="text-sm opacity-80">Ultimate competitive advantage with quantum AI</p>
                <Link href="/blog/quantum-ai-2025-business-breakthrough" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* New Resources */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-2xl font-bold mb-4">Implementation Guides</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-blue-300">AI 2025 Enterprise Transformation Roadmap</h4>
                <p className="text-sm opacity-80">Complete implementation guide for AI transformation</p>
                <Link href="/resources/ai-2025-enterprise-transformation-roadmap" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  Get Guide →
                </Link>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-300">Quantum AI Implementation Checklist</h4>
                <p className="text-sm opacity-80">Comprehensive checklist for quantum AI success</p>
                <Link href="/resources/quantum-ai-implementation-checklist-2025" className="text-green-400 hover:text-green-300 text-sm font-medium">
                  Get Checklist →
                </Link>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-sm">5,800% Average ROI</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm">99.9% Operational Accuracy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">98% Cost Reduction</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Zero Security Breaches</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6">
              Get expert consultation and implementation support for your AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">$25B+</div>
            <div className="text-sm opacity-80">Client Value Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-sm opacity-80">Successful Implementations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.8%</div>
            <div className="text-sm opacity-80">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-sm opacity-80">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}