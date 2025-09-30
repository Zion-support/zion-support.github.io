import React from 'react';

export default function October2025NewContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-pink-900/50 border-y border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🎯 NEW OCTOBER 2025 CONTENT RELEASED
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Latest AI Breakthroughs & Success Stories
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10">
            Discover our newest content featuring revolutionary enterprise intelligence solutions, 
            $4.2 billion success stories, and comprehensive implementation guides
          </p>

          {/* Content Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Blog Post Card */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-6">📖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Intelligence Revolution</h3>
              <p className="text-gray-300 mb-6">
                Complete guide to the October 2025 breakthroughs: 97% efficiency gains, 
                cognitive automation, and real-time intelligence across all industries.
              </p>
              <div className="space-y-2 mb-6 text-left">
                <div className="flex items-center gap-2 text-indigo-300">
                  <span className="text-xl">✓</span>
                  <span>Cognitive Process Automation</span>
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <span className="text-xl">✓</span>
                  <span>Real-Time Predictive Intelligence</span>
                </div>
                <div className="flex items-center gap-2 text-pink-300">
                  <span className="text-xl">✓</span>
                  <span>Autonomous Enterprise Orchestration</span>
                </div>
              </div>
              <a 
                href="/blog/ai-2025-october-enterprise-intelligence-revolution"
                className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Read Article →
              </a>
            </div>

            {/* Case Study Card */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-6">💎</div>
              <h3 className="text-2xl font-bold text-white mb-4">$4.2B Fortune 500 Success</h3>
              <p className="text-gray-300 mb-6">
                Detailed case study of the most successful enterprise AI deployment in history. 
                4-month implementation, 2,800% ROI, industry leadership achieved.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-emerald-300">$4.2B</div>
                  <div className="text-xs text-emerald-200">Value Generated</div>
                </div>
                <div className="bg-cyan-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-cyan-300">2,800%</div>
                  <div className="text-xs text-cyan-200">ROI Achieved</div>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-300">97%</div>
                  <div className="text-xs text-purple-200">Efficiency Gain</div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-300">4 Months</div>
                  <div className="text-xs text-blue-200">Implementation</div>
                </div>
              </div>
              <a 
                href="/case-studies/fortune-500-october-2025-enterprise-intelligence-4-2-billion-success"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                View Case Study →
              </a>
            </div>

            {/* Service Card */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Intelligence Platform</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive platform overview with pricing, capabilities, and implementation 
                approach. Start your transformation journey today.
              </p>
              <div className="space-y-2 mb-6 text-left">
                <div className="flex items-center gap-2 text-emerald-300">
                  <span className="text-xl">✓</span>
                  <span>Cognitive Automation Engine</span>
                </div>
                <div className="flex items-center gap-2 text-teal-300">
                  <span className="text-xl">✓</span>
                  <span>Real-Time Intelligence Hub</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-300">
                  <span className="text-xl">✓</span>
                  <span>Autonomous Operations Center</span>
                </div>
              </div>
              <a 
                href="/services/ai-2025-october-enterprise-intelligence-platform"
                className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Explore Platform →
              </a>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-indigo-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎉 Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              Schedule your free AI readiness assessment and discover how our October 2025 
              Enterprise Intelligence Platform can deliver unprecedented results for your organization
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Get Free Assessment →
              </a>
              <a 
                href="/services/ai-2025-october-enterprise-intelligence-platform"
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View Full Platform Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
