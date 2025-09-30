import React from 'react';
import Link from 'next/link';

const Ultimate2026ContentShowcaseBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 rounded-3xl shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.4),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.4),transparent_50%)]"></div>
      
      <div className="relative z-10 p-8 md:p-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3 animate-pulse"></span>
              ULTIMATE 2026 CONTENT COLLECTION
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
              Revolutionary AI Breakthroughs
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore the cutting-edge AI innovations, governance frameworks, and success stories 
              that are reshaping enterprise operations in 2026
            </p>
          </div>
          
          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Breakthrough Innovations */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI 2026 Breakthrough Innovations</h3>
                    <p className="text-blue-300">Revolutionary technologies reshaping enterprise</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Discover autonomous agent factories, quantum neural networks, and meta-cognitive reasoning 
                  systems that are driving unprecedented business transformation with 400% efficiency gains.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">400%</div>
                    <div className="text-sm text-gray-400">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">10,000x</div>
                    <div className="text-sm text-gray-400">Processing Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">95%</div>
                    <div className="text-sm text-gray-400">Automation</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="/blog/ai-2026-breakthrough-innovations"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Read Full Article
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link 
                    href="/case-studies/fortune-500-ai-2026-breakthrough-success"
                    className="inline-flex items-center px-6 py-3 border-2 border-blue-400 text-blue-300 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                  >
                    Success Story
                  </Link>
                </div>
              </div>
            </div>
            
            {/* AI Governance */}
            <div>
              <div className="bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AI Governance 2026</h3>
                    <p className="text-indigo-300 text-sm">Enterprise Safety Framework</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  Comprehensive guide to implementing robust AI governance, safety protocols, and compliance 
                  frameworks for enterprise organizations.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Risk Assessment & Monitoring</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Safety Controls & Safeguards</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Ethical AI Principles</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Compliance Framework</span>
                  </div>
                </div>
                
                <Link 
                  href="/blog/ai-governance-2026-enterprise-safety"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 w-full justify-center"
                >
                  Read Governance Guide
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Proven Results Across Industries</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">$2.3B</div>
                <div className="text-lg text-gray-300 mb-1">Cost Savings</div>
                <div className="text-sm text-gray-400">Fortune 500 implementation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">400%</div>
                <div className="text-lg text-gray-300 mb-1">Efficiency Gain</div>
                <div className="text-sm text-gray-400">Operational improvement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-lg text-gray-300 mb-1">Process Automation</div>
                <div className="text-sm text-gray-400">Manual task reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">85%</div>
                <div className="text-lg text-gray-300 mb-1">Decision Accuracy</div>
                <div className="text-sm text-gray-400">AI-driven insights</div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Enterprise?</h3>
              <p className="text-blue-100 mb-8 text-lg max-w-3xl mx-auto">
                Join leading organizations leveraging these breakthrough AI technologies to achieve 
                unprecedented business transformation and competitive advantage.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your AI Journey
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Explore Our Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ultimate2026ContentShowcaseBanner;