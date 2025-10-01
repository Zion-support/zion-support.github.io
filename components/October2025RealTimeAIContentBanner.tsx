import React from "react";

/**
 * October 1, 2025 - Real-Time Customer Experience AI Content Banner
 * 
 * Features the latest content:
 * - Blog: Real-Time Customer Experience Optimization Revolution
 * - Case Study: Global Retail $8.7B Success Story
 * - Service: Real-Time Customer Experience AI Platform
 */
export default function October2025RealTimeAIContentBanner() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-cyan-900/40 via-blue-900/40 to-indigo-900/40 backdrop-blur-sm border-y border-cyan-500/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Badge */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-500/50 mb-6 animate-pulse shadow-lg shadow-cyan-500/20">
            <span className="text-2xl">⚡</span>
            <span className="text-cyan-300 font-black text-xl tracking-wider uppercase">
              🚀 BREAKING: October 1, 2025 — NEW Real-Time AI Content LIVE NOW!
            </span>
            <span className="text-2xl">⚡</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent leading-tight">
            Real-Time AI Customer Experience Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto mb-4 font-semibold">
            Discover How Leading Enterprises Achieve Sub-50ms AI Intelligence
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-cyan-500/20 px-4 py-2 rounded-full text-cyan-300 font-bold text-sm border border-cyan-500/30">
              ⚡ <50ms Response Time
            </span>
            <span className="bg-blue-500/20 px-4 py-2 rounded-full text-blue-300 font-bold text-sm border border-blue-500/30">
              💰 $8.7B Revenue Impact
            </span>
            <span className="bg-indigo-500/20 px-4 py-2 rounded-full text-indigo-300 font-bold text-sm border border-indigo-500/30">
              📈 156% Conversion Increase
            </span>
            <span className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 font-bold text-sm border border-purple-500/30">
              🎯 11.2x ROI
            </span>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Blog Post Card */}
          <div className="group bg-gradient-to-br from-cyan-950/80 to-blue-950/80 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-2">
            <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">📰</div>
            <div className="inline-block bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-xs font-bold mb-3 border border-cyan-500/30">
              NEW BLOG POST
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
              Real-Time Customer Experience Optimization: The 2025 Revolution
            </h3>
            <p className="text-cyan-200 mb-6 text-sm leading-relaxed">
              Comprehensive guide to deploying real-time AI systems that deliver sub-100ms personalization, 
              predictive engagement, and proven business results. Learn the architecture, best practices, 
              and implementation roadmap.
            </p>
            <ul className="text-cyan-300 text-sm mb-6 space-y-2">
              <li>✅ Edge AI Processing Architecture</li>
              <li>✅ Streaming ML Pipelines</li>
              <li>✅ Neural Contextual Understanding</li>
              <li>✅ Privacy-First Design Patterns</li>
              <li>✅ Enterprise Implementation Roadmap</li>
            </ul>
            <a 
              href="/blog/ai-2025-oct-01-real-time-customer-experience-revolution"
              className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 text-center"
            >
              Read Full Article →
            </a>
          </div>

          {/* Case Study Card */}
          <div className="group bg-gradient-to-br from-blue-950/80 to-indigo-950/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-2">
            <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">🏆</div>
            <div className="inline-block bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-xs font-bold mb-3 border border-blue-500/30">
              NEW SUCCESS STORY
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
              Global Retail Giant: $8.7B Success with Real-Time AI
            </h3>
            <p className="text-blue-200 mb-6 text-sm leading-relaxed">
              Fortune 100 retailer transforms 5,000+ stores with real-time AI, achieving unprecedented 
              results in just 6 months. Complete breakdown of strategy, implementation, and measurable impact.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                <div className="text-2xl font-extrabold text-blue-300">$8.7B</div>
                <div className="text-blue-400 text-xs">Annual Revenue Impact</div>
              </div>
              <div className="bg-indigo-500/10 rounded-lg p-3 border border-indigo-500/20">
                <div className="text-2xl font-extrabold text-indigo-300">11.2x</div>
                <div className="text-indigo-400 text-xs">First Year ROI</div>
              </div>
              <div className="bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/20">
                <div className="text-2xl font-extrabold text-cyan-300">156%</div>
                <div className="text-cyan-400 text-xs">Conversion Increase</div>
              </div>
              <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                <div className="text-2xl font-extrabold text-purple-300">73%</div>
                <div className="text-purple-400 text-xs">Satisfaction Boost</div>
              </div>
            </div>
            <a 
              href="/case-studies/ai-2025-oct-global-retail-real-time-ai-8-7-billion-success"
              className="inline-block w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 text-center"
            >
              Read Case Study →
            </a>
          </div>

          {/* Service Offering Card */}
          <div className="group bg-gradient-to-br from-indigo-950/80 to-purple-950/80 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 transform hover:-translate-y-2">
            <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <div className="inline-block bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-xs font-bold mb-3 border border-indigo-500/30">
              NEW SERVICE OFFERING
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
              Real-Time Customer Experience AI Platform
            </h3>
            <p className="text-indigo-200 mb-6 text-sm leading-relaxed">
              Enterprise-grade platform delivering sub-50ms AI intelligence at scale. Complete solution 
              including edge AI infrastructure, multi-model orchestration, and omnichannel experiences.
            </p>
            <ul className="text-indigo-300 text-sm mb-6 space-y-2">
              <li>⚡ Edge AI Infrastructure</li>
              <li>🔄 Real-Time Data Pipelines</li>
              <li>🧠 Multi-Model AI Orchestration</li>
              <li>🌐 Omnichannel Experience Platform</li>
              <li>📊 Business Intelligence & Analytics</li>
              <li>🔐 Enterprise Security & Compliance</li>
            </ul>
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg p-4 mb-6 border border-indigo-500/30">
              <div className="text-lg font-bold text-white mb-2">Platform Highlights</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-indigo-300">✓ 90-180 Day Deployment</div>
                <div className="text-indigo-300">✓ 8.3x Average ROI</div>
                <div className="text-indigo-300">✓ Millions of TPS</div>
                <div className="text-indigo-300">✓ 99.97% Uptime</div>
              </div>
            </div>
            <a 
              href="/services/real-time-customer-experience-ai-platform"
              className="inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 text-center"
            >
              Explore Platform →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-950/60 via-blue-950/60 to-indigo-950/60 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Customer Experience?
          </h3>
          <p className="text-cyan-200 text-lg mb-6 max-w-3xl mx-auto">
            Join Fortune 500 leaders achieving unprecedented results with real-time AI. 
            Start with a risk-free 90-day pilot and experience the future of customer engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Schedule Free Consultation
            </a>
            <a 
              href="/services/real-time-customer-experience-ai-platform"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              View Platform Details
            </a>
            <a 
              href="/case-studies/ai-2025-oct-global-retail-real-time-ai-8-7-billion-success"
              className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              See $8.7B Success Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
