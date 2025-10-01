import React from 'react';

export default function December2025ContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 mb-8">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🌟 DECEMBER 2025 CONTENT SHOWCASE
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Technologies
            <br />
            <span className="text-3xl md:text-4xl text-gray-300 font-normal">Transforming Enterprise Operations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Explore cutting-edge AI solutions that are revolutionizing how organizations operate, 
            from edge computing to autonomous cloud management and intelligent business process automation.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Edge Intelligence */}
          <div className="group">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Edge Intelligence Revolution</h3>
                  <p className="text-blue-300 text-sm">Real-Time Decision Making at Scale</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform your operations with edge AI that delivers sub-millisecond response times, 
                99.9% uptime, and autonomous decision-making capabilities at the network edge.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-500/10 rounded-lg p-3 text-center">
                  <div className="text-blue-400 font-bold text-lg">&lt;1ms</div>
                  <div className="text-blue-300 text-xs">Response Time</div>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3 text-center">
                  <div className="text-blue-400 font-bold text-lg">99.9%</div>
                  <div className="text-blue-300 text-xs">Uptime</div>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3 text-center">
                  <div className="text-blue-400 font-bold text-lg">90%</div>
                  <div className="text-blue-300 text-xs">Bandwidth Savings</div>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3 text-center">
                  <div className="text-blue-400 font-bold text-lg">70%</div>
                  <div className="text-blue-300 text-xs">Energy Savings</div>
                </div>
              </div>
              <a 
                href="/blog/ai-2025-december-edge-intelligence-revolution"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                Read Full Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Autonomous Cloud Operations */}
          <div className="group">
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">☁️</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Autonomous Cloud Operations</h3>
                  <p className="text-purple-300 text-sm">Self-Managing Infrastructure Revolution</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Achieve unprecedented reliability with self-managing cloud infrastructure that 
                delivers 99.99% uptime, intelligent resource optimization, and predictive scaling.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-500/10 rounded-lg p-3 text-center">
                  <div className="text-purple-400 font-bold text-lg">99.99%</div>
                  <div className="text-purple-300 text-xs">Uptime</div>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-3 text-center">
                  <div className="text-purple-400 font-bold text-lg">40%</div>
                  <div className="text-purple-300 text-xs">Cost Reduction</div>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-3 text-center">
                  <div className="text-purple-400 font-bold text-lg">10x</div>
                  <div className="text-purple-300 text-xs">Faster Scaling</div>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-3 text-center">
                  <div className="text-purple-400 font-bold text-lg">Zero</div>
                  <div className="text-purple-300 text-xs">Touch Operations</div>
                </div>
              </div>
              <a 
                href="/blog/ai-2025-december-autonomous-cloud-operations"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Explore Platform
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Intelligent Automation Platform - Full Width */}
        <div className="group mb-16">
          <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-blue-900/40 backdrop-blur-lg rounded-3xl p-12 border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🤖</div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Intelligent Automation Platform</h3>
                    <p className="text-indigo-300 text-lg">Next-Generation Business Process Revolution</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Revolutionize your business processes with intelligent automation that achieves 
                  95% automation rates, 99.8% accuracy, and 80% cost reduction across all operations.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-indigo-500/10 rounded-lg p-4 text-center">
                    <div className="text-indigo-400 font-bold text-xl">95%</div>
                    <div className="text-indigo-300 text-sm">Automation Rate</div>
                  </div>
                  <div className="bg-indigo-500/10 rounded-lg p-4 text-center">
                    <div className="text-indigo-400 font-bold text-xl">99.8%</div>
                    <div className="text-indigo-300 text-sm">Accuracy</div>
                  </div>
                  <div className="bg-indigo-500/10 rounded-lg p-4 text-center">
                    <div className="text-indigo-400 font-bold text-xl">80%</div>
                    <div className="text-indigo-300 text-sm">Cost Reduction</div>
                  </div>
                </div>
                <a 
                  href="/blog/ai-2025-december-intelligent-automation-platform"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
                >
                  Discover Platform
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50">
                  <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      <span className="text-gray-300">Cognitive Process Automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      <span className="text-gray-300">Intelligent Decision Making</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      <span className="text-gray-300">End-to-End Orchestration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      <span className="text-gray-300">Self-Learning Systems</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      <span className="text-gray-300">24/7 Autonomous Operations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading enterprises that are already leveraging these revolutionary AI technologies 
              to achieve unprecedented efficiency, reliability, and cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 text-lg"
              >
                Schedule Consultation
              </a>
              <a 
                href="/services" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 text-lg"
              >
                Explore Solutions
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}