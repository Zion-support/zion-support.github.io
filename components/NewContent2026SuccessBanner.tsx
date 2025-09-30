import React from 'react';
import Link from 'next/link';

export default function NewContent2026SuccessBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            New Success Story & Comprehensive Guide
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Fortune 500 AI Transformation:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
              $50M Savings Achieved
            </span>
          </h2>
          
          <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
            Discover how a Fortune 500 company achieved unprecedented results with our AI transformation services. 
            Plus, explore our comprehensive 2026 AI trends guide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Success Story Card */}
          <Link href="/case-studies/fortune-500-ai-transformation-success" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm opacity-75 ml-2">Fortune 500</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-300 transition-colors">
                Fortune 500 AI Transformation: $50M Savings Achieved
              </h3>
              
              <p className="text-lg mb-6 opacity-90">
                Learn how a leading Fortune 500 manufacturing company achieved $50M annual savings, 
                300% ROI, and 90% efficiency improvement through comprehensive AI transformation.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">$50M+</div>
                  <div className="text-sm opacity-75">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">300%</div>
                  <div className="text-sm opacity-75">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">90%</div>
                  <div className="text-sm opacity-75">Efficiency</div>
                </div>
              </div>
              
              <div className="flex items-center text-green-300 font-semibold group-hover:text-green-200 transition-colors">
                <span>Read Success Story</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Comprehensive Guide Card */}
          <Link href="/blog/ai-trends-2026-comprehensive-guide" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Comprehensive Guide
                  </span>
                  <span className="text-sm opacity-75 ml-2">25 min read</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                AI Trends 2026: Comprehensive Guide to Enterprise AI Transformation
              </h3>
              
              <p className="text-lg mb-6 opacity-90">
                Discover the top AI trends shaping 2026. From autonomous agents to quantum computing, 
                explore how these technologies are transforming enterprise operations.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span className="text-sm">Autonomous AI Agents Revolution</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                  <span className="text-sm">Quantum Computing Breakthrough</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span className="text-sm">Multimodal AI Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                  <span className="text-sm">Edge AI Computing</span>
                </div>
              </div>
              
              <div className="flex items-center text-blue-300 font-semibold group-hover:text-blue-200 transition-colors">
                <span>Read Comprehensive Guide</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4">
            <Link
              href="/services/ai-enterprise-transformation"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your AI Transformation
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Join Fortune 500 companies achieving $50M+ savings with AI transformation
          </p>
        </div>
      </div>
    </section>
  );
}