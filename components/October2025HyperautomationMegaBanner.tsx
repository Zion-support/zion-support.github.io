import React from "react";

/**
 * October 2025 Hyperautomation Revolution Banner
 * Promotes new breakthrough content on AI Hyperautomation and Intelligent Process Orchestration
 * Features: $2.8B success story, 92% automation rate, Fortune 500 transformation
 */
export default function October2025HyperautomationMegaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900/40 via-teal-900/40 to-cyan-900/40 py-16 border-b border-emerald-500/30">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Announcement Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border border-emerald-500/50 mb-6 animate-pulse">
            <span className="text-3xl">🚀</span>
            <span className="text-emerald-300 font-bold text-xl tracking-wider uppercase">
              BREAKING: OCTOBER 1, 2025 - AI HYPERAUTOMATION REVOLUTION!
            </span>
            <span className="text-3xl">⚡</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent leading-tight">
            Fortune 500 Achieves $2.8B Savings Through AI Hyperautomation
          </h2>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-teal-200 mb-8 font-semibold max-w-5xl mx-auto">
            92% Automation Rate • 10x Efficiency • 99.8% Compliance • 6-Month ROI
          </p>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-10">
            <div className="bg-emerald-500/20 backdrop-blur-lg rounded-xl p-4 border border-emerald-500/40">
              <div className="text-3xl font-extrabold text-emerald-300 mb-1">$2.8B</div>
              <div className="text-xs text-emerald-200">Annual Savings</div>
            </div>
            <div className="bg-teal-500/20 backdrop-blur-lg rounded-xl p-4 border border-teal-500/40">
              <div className="text-3xl font-extrabold text-teal-300 mb-1">92%</div>
              <div className="text-xs text-teal-200">Automation Rate</div>
            </div>
            <div className="bg-cyan-500/20 backdrop-blur-lg rounded-xl p-4 border border-cyan-500/40">
              <div className="text-3xl font-extrabold text-cyan-300 mb-1">10x</div>
              <div className="text-xs text-cyan-200">Efficiency Gains</div>
            </div>
            <div className="bg-blue-500/20 backdrop-blur-lg rounded-xl p-4 border border-blue-500/40">
              <div className="text-3xl font-extrabold text-blue-300 mb-1">99.8%</div>
              <div className="text-xs text-blue-200">Compliance</div>
            </div>
            <div className="bg-indigo-500/20 backdrop-blur-lg rounded-xl p-4 border border-indigo-500/40">
              <div className="text-3xl font-extrabold text-indigo-300 mb-1">4.5mo</div>
              <div className="text-xs text-indigo-200">ROI Payback</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-300 max-w-5xl mx-auto mb-10 leading-relaxed">
            <strong className="text-emerald-300">JUST PUBLISHED:</strong> Discover how a global Fortune 500 bank transformed 
            operations with intelligent process orchestration, achieving unprecedented automation rates and massive cost savings. 
            Learn the complete implementation journey, technical architecture, and proven methodologies behind this 
            revolutionary transformation. <strong className="text-cyan-300">Plus: Get our comprehensive hyperautomation 
            consulting services guide and ROI calculator!</strong>
          </p>
        </div>

        {/* Technology Highlights */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 mb-10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🎯 Revolutionary Capabilities Covered
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h4 className="text-xl font-bold text-emerald-300 mb-2">Intelligent Process Orchestration</h4>
              <p className="text-gray-300 text-sm">
                AI-driven workflow automation with real-time decision-making, self-healing capabilities, 
                and 99.99% uptime across 500+ automated processes
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📄</div>
              <h4 className="text-xl font-bold text-teal-300 mb-2">Document Intelligence</h4>
              <p className="text-gray-300 text-sm">
                Computer vision and NLP processing 5M+ documents monthly with 99.8% accuracy 
                across 50+ document types and 25 languages
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h4 className="text-xl font-bold text-cyan-300 mb-2">Cognitive Automation</h4>
              <p className="text-gray-300 text-sm">
                AI agents with autonomous decision-making, continuous learning, and 
                explainable AI for complete audit trail and compliance
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Highlights */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 mb-10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            ⚡ Real-World Implementation Results
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-emerald-300 mb-3">📊 Customer Onboarding</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ 8-12 days → <strong className="text-emerald-300">15 minutes</strong> processing time</li>
                <li>✅ 15% → <strong className="text-emerald-300">2%</strong> abandonment rate</li>
                <li>✅ $185 → <strong className="text-emerald-300">$12</strong> cost per account</li>
                <li>✅ <strong className="text-emerald-300">99.9% accuracy</strong> with real-time verification</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-teal-300 mb-3">🏠 Mortgage Processing</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ 45 days → <strong className="text-teal-300">3 days</strong> processing time</li>
                <li>✅ $8,500 → <strong className="text-teal-300">$1,200</strong> cost per mortgage</li>
                <li>✅ 78% → <strong className="text-teal-300">96%</strong> straight-through processing</li>
                <li>✅ <strong className="text-teal-300">$3.65B annual savings</strong> on 500K mortgages</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-cyan-300 mb-3">🔐 Fraud Detection</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ 48 hours → <strong className="text-cyan-300">15 seconds</strong> investigation time</li>
                <li>✅ $450M → <strong className="text-cyan-300">$85M</strong> annual fraud losses (<strong>81% reduction</strong>)</li>
                <li>✅ <strong className="text-cyan-300">97.8% detection accuracy</strong> with AI models</li>
                <li>✅ 12% → <strong className="text-cyan-300">0.5%</strong> false positive rate</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-blue-300 mb-3">💬 Customer Service</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ 25,000 → <strong className="text-blue-300">8,000</strong> agents (redeployed 17K)</li>
                <li>✅ 2.5 hours → <strong className="text-blue-300">8 minutes</strong> resolution time</li>
                <li>✅ 68% → <strong className="text-blue-300">94%</strong> first-contact resolution</li>
                <li>✅ <strong className="text-blue-300">$1.26B annual savings</strong> + 24/7 availability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 mb-10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            📚 Complete Content Suite Available Now
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="bg-emerald-500/20 px-4 py-2 rounded-full text-emerald-300 text-sm font-semibold border border-emerald-500/40">
              Process Mining & Discovery
            </span>
            <span className="bg-teal-500/20 px-4 py-2 rounded-full text-teal-300 text-sm font-semibold border border-teal-500/40">
              Intelligent Document Processing
            </span>
            <span className="bg-cyan-500/20 px-4 py-2 rounded-full text-cyan-300 text-sm font-semibold border border-cyan-500/40">
              Cognitive Automation
            </span>
            <span className="bg-blue-500/20 px-4 py-2 rounded-full text-blue-300 text-sm font-semibold border border-blue-500/40">
              Agentic AI Systems
            </span>
            <span className="bg-indigo-500/20 px-4 py-2 rounded-full text-indigo-300 text-sm font-semibold border border-indigo-500/40">
              Enterprise Architecture
            </span>
            <span className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 text-sm font-semibold border border-purple-500/40">
              Change Management
            </span>
            <span className="bg-pink-500/20 px-4 py-2 rounded-full text-pink-300 text-sm font-semibold border border-pink-500/40">
              ROI & Business Case
            </span>
            <span className="bg-rose-500/20 px-4 py-2 rounded-full text-rose-300 text-sm font-semibold border border-rose-500/40">
              Implementation Roadmap
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="/blog/ai-2025-oct-hyperautomation-intelligent-orchestration-revolution"
            className="group relative bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 transform hover:-translate-y-1 text-lg"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>📖 Read Complete Technical Guide</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <a
            href="/case-studies/fortune-500-hyperautomation-2-8-billion-success"
            className="group relative bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-teal-500/50 transform hover:-translate-y-1 text-lg"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>💰 View $2.8B Success Story</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <a
            href="/services/ai-hyperautomation-consulting-2025"
            className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-1 text-lg"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>🚀 Explore Consulting Services</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>

        {/* Additional Resources */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 mb-4">Additional Resources:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-emerald-400 hover:text-emerald-300 underline transition-colors text-sm">
              Download ROI Calculator
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-teal-400 hover:text-teal-300 underline transition-colors text-sm">
              Schedule Free Assessment
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 underline transition-colors text-sm">
              Watch Demo Video
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-blue-400 hover:text-blue-300 underline transition-colors text-sm">
              Contact Our Experts
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-300 mb-1">200+</div>
              <div className="text-sm text-gray-400">Fortune 500 Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-300 mb-1">$50B+</div>
              <div className="text-sm text-gray-400">Cumulative Value Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-300 mb-1">95%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-300 mb-1">500+</div>
              <div className="text-sm text-gray-400">AI/Automation Specialists</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
