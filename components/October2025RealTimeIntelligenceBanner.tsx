import React from 'react';

export default function October2025RealTimeIntelligenceBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900/40 via-cyan-900/40 to-blue-900/40 backdrop-blur-sm border-b border-cyan-500/30">
      <div className="container mx-auto px-6">
        {/* Breaking News Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/40 backdrop-blur-lg animate-pulse">
            <span className="text-cyan-300 font-extrabold text-xl tracking-wider uppercase">
              🚀 BREAKING NEWS: OCTOBER 1, 2025 - REAL-TIME INTELLIGENCE REVOLUTION
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent leading-tight">
            Real-Time AI Orchestration: Sub-50ms Intelligence at Scale
          </h2>
          <p className="text-2xl md:text-3xl text-cyan-100 font-semibold mb-4">
            $2.4B Value Creation • 10M+ Events/Second • 99.94% Uptime
          </p>
          <p className="text-xl text-cyan-200 max-w-4xl mx-auto">
            Fortune 500 companies are revolutionizing decision-making with real-time AI systems 
            that process and respond to business events in under 50 milliseconds. Discover the 
            architecture patterns, deployment strategies, and proven ROI of 8-12x.
          </p>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">⚡</div>
            <div className="text-3xl font-extrabold text-cyan-300 mb-2">47ms</div>
            <div className="text-sm text-cyan-200 font-medium">Median Decision Latency</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30 hover:border-blue-300/60 transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">🎯</div>
            <div className="text-3xl font-extrabold text-blue-300 mb-2">99.94%</div>
            <div className="text-sm text-blue-200 font-medium">Platform Uptime SLA</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">💰</div>
            <div className="text-3xl font-extrabold text-cyan-300 mb-2">$2.4B</div>
            <div className="text-sm text-cyan-200 font-medium">Average ROI Created</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30 hover:border-blue-300/60 transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">📊</div>
            <div className="text-3xl font-extrabold text-blue-300 mb-2">10M+</div>
            <div className="text-sm text-blue-200 font-medium">Events per Second</div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Blog Post */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold mb-4 uppercase tracking-wider">
              📘 Technical Guide
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Real-Time AI Orchestration: Enterprise Implementation Guide
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Comprehensive guide to deploying real-time AI systems with proven architecture patterns, 
              infrastructure requirements, and production deployment strategies. Includes real-world 
              success story achieving 92% fraud detection rate with 43ms latency.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">Event-Driven Architecture</span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs">Microservices AI</span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">Production MLOps</span>
            </div>
            <a
              href="/blog/ai-2025-oct-real-time-ai-orchestration-enterprise-guide"
              className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-cyan-500/50"
            >
              Read Technical Guide →
            </a>
          </div>

          {/* Case Study */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-4 uppercase tracking-wider">
              💰 $87B Success Story
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Pharmaceutical AI: $87 Billion Drug Discovery Transformation
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Fortune 100 pharmaceutical leader reduces drug development time by 65%, identifies 23 
              promising candidates, and creates $87B in pipeline value using AI-powered drug discovery 
              platform. Includes complete technical architecture and implementation roadmap.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs">65% Faster Development</span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">23 Clinical Candidates</span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs">$87B Pipeline Value</span>
            </div>
            <a
              href="/case-studies/ai-2025-oct-pharmaceutical-ai-drug-discovery-87-billion-success"
              className="inline-block w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-blue-500/50"
            >
              View Success Story →
            </a>
          </div>

          {/* Service */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold mb-4 uppercase tracking-wider">
              🚀 New Service Launch
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Real-Time AI Orchestration Platform Services
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Enterprise-grade real-time AI orchestration platform with sub-50ms latency, 99.95% uptime 
              SLA, and proven 8-12x ROI. Includes assessment, design, deployment, and managed services 
              with 24/7 support and continuous optimization.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">24/7 Support</span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs">99.95% Uptime</span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">8-12x ROI</span>
            </div>
            <a
              href="/services/ai-2025-october-real-time-orchestration-platform"
              className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-cyan-500/50"
            >
              Explore Services →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30">
            <p className="text-lg text-cyan-200 mb-4">
              <strong className="text-cyan-100">Ready to deploy real-time AI intelligence?</strong> 
              <br />Schedule a complimentary architecture review and ROI assessment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                Schedule Consultation →
              </a>
              <a
                href="/demo"
                className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Watch Platform Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
