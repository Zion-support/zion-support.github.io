// import React from 'react';

const October2025RTDIContentShowcase: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(16 185 129) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 mb-6">
            <span className="text-emerald-400 font-bold">🎉 NEW CONTENT PUBLISHED</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">October 1, 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Real-Time Decision Intelligence
            </span>
            <br />
            <span className="text-white">Complete Knowledge Library</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive resources on transforming enterprise operations with millisecond decision-making—
            from strategy to implementation to proven success stories.
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Technical Article Card */}
          <div className="group relative bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-2xl border border-emerald-500/30 p-8 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 transform hover:-translate-y-2">
            <div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-xs font-bold text-emerald-300">📖 ARTICLE</span>
            </div>
            
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Real-Time Decision Intelligence Revolution
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Comprehensive guide to transforming enterprise operations with AI-powered, 
                millisecond decision-making capabilities. Technical architecture, implementation 
                framework, and business impact analysis.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Streaming architecture patterns</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">125 production ML models</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Industry applications & use cases</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Security & governance frameworks</span>
              </div>
            </div>

            <div className="pt-6 border-t border-emerald-500/20">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-400">Reading Time</div>
                  <div className="text-lg font-bold text-emerald-300">15 minutes</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Value Potential</div>
                  <div className="text-lg font-bold text-emerald-300">$2-5B</div>
                </div>
              </div>
              
              <a
                href="/blog/ai-2025-oct-01-real-time-decision-intelligence-revolution"
                className="block w-full text-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/50"
              >
                Read Article →
              </a>
            </div>
          </div>

          {/* Case Study Card */}
          <div className="group relative bg-gradient-to-br from-teal-900/40 to-cyan-900/40 backdrop-blur-lg rounded-2xl border border-teal-500/30 p-8 hover:border-teal-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20 transform hover:-translate-y-2">
            <div className="absolute top-4 right-4 bg-teal-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-xs font-bold text-teal-300">💼 CASE STUDY</span>
            </div>
            
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Fortune 500 Retailer: $4.7B Transformation
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Deep-dive into an 18-month enterprise-wide RTDI implementation across 12,500 locations 
                with 450,000 employees—delivering unprecedented operational excellence and business value.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-teal-400">💰</span>
                <span className="text-gray-300">$4.7B value creation</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-teal-400">📊</span>
                <span className="text-gray-300">1,382% ROI (13.8x return)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-teal-400">⚡</span>
                <span className="text-gray-300">98% faster decision cycles</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-teal-400">🎯</span>
                <span className="text-gray-300">99.97% system uptime</span>
              </div>
            </div>

            <div className="pt-6 border-t border-teal-500/20">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-400">Industry</div>
                  <div className="text-lg font-bold text-teal-300">Retail</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Timeline</div>
                  <div className="text-lg font-bold text-teal-300">18 months</div>
                </div>
              </div>
              
              <a
                href="/case-studies/ai-2025-oct-01-fortune-500-retail-rtdi-4-7-billion-success"
                className="block w-full text-center bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-500/50"
              >
                Read Case Study →
              </a>
            </div>
          </div>

          {/* Service Offering Card */}
          <div className="group relative bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-lg rounded-2xl border border-cyan-500/30 p-8 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2">
            <div className="absolute top-4 right-4 bg-cyan-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-xs font-bold text-cyan-300">🚀 SERVICES</span>
            </div>
            
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                RTDI Platform Services
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                End-to-end Real-Time Decision Intelligence platform implementation services—
                from strategy and architecture to deployment and ongoing optimization. Proven 
                methodologies with 50+ successful implementations.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-cyan-400">✓</span>
                <span className="text-gray-300">Strategy & roadmap development</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-cyan-400">✓</span>
                <span className="text-gray-300">Platform architecture & design</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-cyan-400">✓</span>
                <span className="text-gray-300">Full-stack implementation</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-cyan-400">✓</span>
                <span className="text-gray-300">24/7 managed services</span>
              </div>
            </div>

            <div className="pt-6 border-t border-cyan-500/20">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-400">Expected ROI</div>
                  <div className="text-lg font-bold text-cyan-300">500-1,500%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Payback</div>
                  <div className="text-lg font-bold text-cyan-300">12-18 mo</div>
                </div>
              </div>
              
              <a
                href="/services/real-time-decision-intelligence-platform-2025"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/50"
              >
                Explore Services →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 backdrop-blur-lg rounded-2xl border border-emerald-400/30 p-8 max-w-4xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Decision-Making?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Join the 50+ enterprises who have achieved 500-1,500% ROI with our proven RTDI platform.
              Schedule a free consultation to discuss your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?service=rtdi"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
              >
                <span>Schedule Consultation</span>
                <span className="text-xl">→</span>
              </a>
              <a
                href="/downloads/rtdi-overview.pdf"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <span>📥 Download Overview</span>
              </a>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-emerald-400">50+</div>
            <div className="text-sm text-gray-400">Implementations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-400">$12B+</div>
            <div className="text-sm text-gray-400">Value Created</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400">98%</div>
            <div className="text-sm text-gray-400">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">15+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025RTDIContentShowcase;
