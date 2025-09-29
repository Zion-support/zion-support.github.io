import React from 'react';
import Link from 'next/link';

export function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full -translate-y-32"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 REVOLUTIONARY 2026 CONTENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Future of AI is Here
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Transform Your Business Today
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Discover the mega trends, success stories, and breakthrough technologies 
            that are reshaping enterprise AI in 2026. Join the AI revolution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Mega Trends Article */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔮</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Mega Trends 2026</h3>
                <p className="text-blue-100 text-sm">Complete Enterprise Guide</p>
              </div>
            </div>
            <p className="text-white/90 mb-4 text-sm">
              Discover the 15 mega trends reshaping enterprise AI. From autonomous operations to quantum computing, 
              learn how to capitalize on $50B+ market opportunities.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-xs">
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-300">$50B+</div>
                  <div className="text-blue-100">Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-300">300%</div>
                  <div className="text-blue-100">Growth</div>
                </div>
              </div>
              <span className="text-xs text-white/70">45 min read</span>
            </div>
            <Link
              href="/blog/ai-2026-mega-trends"
              className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors group-hover:scale-105 transform"
            >
              Read Mega Trends →
            </Link>
          </div>

          {/* Success Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">$25M Success Story</h3>
                <p className="text-green-100 text-sm">Fortune 500 Case Study</p>
              </div>
            </div>
            <p className="text-white/90 mb-4 text-sm">
              See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 
              99% automation, 90% cost reduction, and complete business revolution.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-xs">
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-300">$25M</div>
                  <div className="text-green-100">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-300">99%</div>
                  <div className="text-green-100">Automation</div>
                </div>
              </div>
              <span className="text-xs text-white/70">30 min read</span>
            </div>
            <Link
              href="/case-studies/ai-transformation-mega-success-2026"
              className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors group-hover:scale-105 transform"
            >
              View Success Story →
            </Link>
          </div>

          {/* Implementation Guide */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Implementation Playbook</h3>
                <p className="text-purple-100 text-sm">Step-by-Step Guide</p>
              </div>
            </div>
            <p className="text-white/90 mb-4 text-sm">
              Complete guide to enterprise AI implementation with proven frameworks, 
              strategies, and real-world case studies for guaranteed success.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-xs">
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-300">95%</div>
                  <div className="text-purple-100">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-300">18mo</div>
                  <div className="text-purple-100">Timeline</div>
                </div>
              </div>
              <span className="text-xs text-white/70">25 min read</span>
            </div>
            <Link
              href="/blog/ai-implementation-playbook-2026"
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors group-hover:scale-105 transform"
            >
              Get Playbook →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Join thousands of companies already achieving breakthrough results with AI. 
              Get your personalized transformation roadmap today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Your AI Roadmap
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore All Content
              </Link>
            </div>
            <div className="mt-6 text-sm text-white/70">
              <p>📞 Call +1 302 464 0950 | 📧 kleber@ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Revolutionary2026ContentBanner;