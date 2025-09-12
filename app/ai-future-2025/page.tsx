import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function AIFuture2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="AI Future 2025 - Revolutionary Technology Showcase | Zion Tech Group"
        description="Explore the cutting-edge AI technologies shaping 2025: Quantum AI, Autonomous Systems, Edge Computing, and Next-Gen Machine Learning."
        keywords="AI 2025, quantum AI, autonomous systems, edge computing, machine learning, artificial intelligence future"
        url="/ai-future-2025"
      />
      
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">🚀 THE FUTURE IS NOW</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Future
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> 2025</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Step into the revolutionary world of AI technologies that are reshaping industries, 
              transforming businesses, and creating unprecedented opportunities for innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#technologies"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Explore Technologies
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section id="technologies" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary AI Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the cutting-edge AI technologies that are defining the future of business and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quantum AI */}
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-300 group">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Quantum AI</h3>
                <p className="text-gray-300 mb-6">
                  Harness the power of quantum computing to solve complex optimization problems 
                  and accelerate machine learning algorithms beyond classical limits.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-cyan-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    Quantum Machine Learning
                  </div>
                  <div className="flex items-center text-sm text-cyan-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    Optimization Algorithms
                  </div>
                  <div className="flex items-center text-sm text-cyan-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    Cryptography & Security
                  </div>
                </div>
                <Link
                  href="/case-studies/quantum-ai-financial-breakthrough-2026"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Autonomous Systems */}
              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 hover:border-green-400/60 transition-all duration-300 group">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4">Autonomous Systems</h3>
                <p className="text-gray-300 mb-6">
                  Build self-managing systems that adapt, learn, and optimize operations 
                  without human intervention across various industries.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-emerald-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                    Self-Healing Infrastructure
                  </div>
                  <div className="flex items-center text-sm text-emerald-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                    Predictive Maintenance
                  </div>
                  <div className="flex items-center text-sm text-emerald-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                    Autonomous Operations
                  </div>
                </div>
                <Link
                  href="/case-studies/autonomous-manufacturing-2025"
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Edge AI */}
              <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 hover:border-orange-400/60 transition-all duration-300 group">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Edge AI Computing</h3>
                <p className="text-gray-300 mb-6">
                  Deploy AI models directly on edge devices for real-time processing, 
                  reduced latency, and enhanced privacy in distributed systems.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-orange-300">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                    Real-time Processing
                  </div>
                  <div className="flex items-center text-sm text-orange-300">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                    Low Latency Inference
                  </div>
                  <div className="flex items-center text-sm text-orange-300">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                    Privacy-First AI
                  </div>
                </div>
                <Link
                  href="/case-studies/edge-ai-iot-transformation"
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Generative AI */}
              <div className="bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 hover:border-pink-400/60 transition-all duration-300 group">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold text-white mb-4">Generative AI</h3>
                <p className="text-gray-300 mb-6">
                  Create, innovate, and automate content generation with advanced AI models 
                  that understand context and produce high-quality outputs.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-pink-300">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                    Content Creation
                  </div>
                  <div className="flex items-center text-sm text-pink-300">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                    Code Generation
                  </div>
                  <div className="flex items-center text-sm text-pink-300">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                    Creative Automation
                  </div>
                </div>
                <Link
                  href="/tools/ai-content-generator"
                  className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Try Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* AI Ethics & Governance */}
              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-8 hover:border-indigo-400/60 transition-all duration-300 group">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Ethics & Governance</h3>
                <p className="text-gray-300 mb-6">
                  Implement responsible AI practices with comprehensive governance frameworks 
                  ensuring fairness, transparency, and accountability.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-indigo-300">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                    Bias Detection
                  </div>
                  <div className="flex items-center text-sm text-indigo-300">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                    Explainable AI
                  </div>
                  <div className="flex items-center text-sm text-indigo-300">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                    Compliance Frameworks
                  </div>
                </div>
                <Link
                  href="/resources/ai-ethics-guide-2025"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Read Guide
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* AI-Powered Analytics */}
              <div className="bg-gradient-to-br from-teal-900/50 to-cyan-900/50 backdrop-blur-sm border border-teal-500/30 rounded-2xl p-8 hover:border-teal-400/60 transition-all duration-300 group">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Transform data into actionable insights with advanced analytics platforms 
                  that predict trends and optimize business performance.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-teal-300">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                    Predictive Analytics
                  </div>
                  <div className="flex items-center text-sm text-teal-300">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                    Real-time Dashboards
                  </div>
                  <div className="flex items-center text-sm text-teal-300">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                    Automated Insights
                  </div>
                </div>
                <Link
                  href="/tools/ai-analytics-dashboard"
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  View Demo
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Roadmap */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Your AI Transformation Roadmap
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow our proven methodology to implement AI technologies successfully in your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Assessment</h3>
                <p className="text-gray-300">
                  Comprehensive analysis of your current infrastructure and AI readiness.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Strategy</h3>
                <p className="text-gray-300">
                  Custom AI strategy aligned with your business objectives and goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Implementation</h3>
                <p className="text-gray-300">
                  Phased deployment with continuous monitoring and optimization.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Optimization</h3>
                <p className="text-gray-300">
                  Ongoing refinement and scaling of AI systems for maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of forward-thinking companies already leveraging our AI solutions 
              to drive innovation and achieve unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Start Your AI Journey
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}