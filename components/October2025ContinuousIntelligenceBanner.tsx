import React from "react";

/**
 * October 2025 Continuous Intelligence Platform Banner
 * 
 * Promotes the latest content on Continuous Intelligence:
 * - Blog post on CI Platform Revolution
 * - Case study: $4.2B retail transformation
 * - Service page: CI Platform Services
 * 
 * Featured prominently on homepage with engaging animations and CTAs
 */

const October2025ContinuousIntelligenceBanner: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Breaking News Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/40 backdrop-blur-sm animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 font-bold text-lg tracking-wider uppercase">
              ⚡ BREAKING: OCTOBER 1, 2025 — CONTINUOUS INTELLIGENCE REVOLUTION — ABSOLUTE #1 PRIORITY! ⚡
            </span>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent leading-tight">
            Continuous Intelligence Platform Revolution
          </h2>
          <p className="text-2xl md:text-3xl text-cyan-100 font-semibold mb-4">
            Real-Time AI Decisions at Enterprise Scale
          </p>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            <span className="font-bold text-cyan-300">JUST PUBLISHED:</span> Discover how Fortune 50 enterprises are achieving <span className="text-white font-bold">$4.2B+ value creation</span>, <span className="text-white font-bold">19.1x ROI</span>, and <span className="text-white font-bold">97% prediction accuracy</span> through autonomous AI decision-making
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30">
            <div className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-2">$4.2B</div>
            <div className="text-sm md:text-base text-cyan-100 font-semibold">Revenue Increase</div>
            <div className="text-xs text-cyan-200/70 mt-1">Annual value created</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30 hover:border-blue-300/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
            <div className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-2">19.1x</div>
            <div className="text-sm md:text-base text-blue-100 font-semibold">Return on Investment</div>
            <div className="text-xs text-blue-200/70 mt-1">First-year ROI</div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl p-6 border border-indigo-400/30 hover:border-indigo-300/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30">
            <div className="text-4xl md:text-5xl font-extrabold text-indigo-300 mb-2">97%</div>
            <div className="text-sm md:text-base text-indigo-100 font-semibold">Prediction Accuracy</div>
            <div className="text-xs text-indigo-200/70 mt-1">Up from 71%</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30 hover:border-purple-300/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <div className="text-4xl md:text-5xl font-extrabold text-purple-300 mb-2">0.3s</div>
            <div className="text-sm md:text-base text-purple-100 font-semibold">Decision Latency</div>
            <div className="text-xs text-purple-200/70 mt-1">150x faster</div>
          </div>
        </div>

        {/* Revolutionary Capabilities */}
        <div className="mb-12 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-cyan-200">
            🚀 Revolutionary Capabilities Transforming Enterprises
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-white mb-3">Real-Time Intelligence</h4>
              <p className="text-cyan-100 mb-4">
                Process billions of events per second with sub-50ms latency. Transform streaming data into instant insights and autonomous actions.
              </p>
              <ul className="text-sm text-cyan-200/80 space-y-2">
                <li>✓ 45M events/second capacity</li>
                <li>✓ Sub-second decision-making</li>
                <li>✓ 99.97% system uptime</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-5xl mb-4">🧠</div>
              <h4 className="text-xl font-bold text-white mb-3">Autonomous AI Decisions</h4>
              <p className="text-blue-100 mb-4">
                AI makes and executes thousands of decisions autonomously—pricing, inventory, marketing, operations—without human intervention.
              </p>
              <ul className="text-sm text-blue-200/80 space-y-2">
                <li>✓ 2.1M autonomous decisions/day</li>
                <li>✓ Multi-objective optimization</li>
                <li>✓ Explainable AI reasoning</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-400/50 transition-all duration-300">
              <div className="text-5xl mb-4">🔄</div>
              <h4 className="text-xl font-bold text-white mb-3">Continuous Learning</h4>
              <p className="text-indigo-100 mb-4">
                Models automatically retrain on latest data, improving accuracy every day. Closed-loop feedback from every decision outcome.
              </p>
              <ul className="text-sm text-indigo-200/80 space-y-2">
                <li>✓ Nightly model retraining</li>
                <li>✓ A/B testing framework</li>
                <li>✓ Adaptive to market changes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fortune 50 Success Story Highlight */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30 mb-12 max-w-5xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="text-6xl">🏆</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">
                Fortune 50 Retailer: $4.2B Revenue Transformation
              </h3>
              <p className="text-cyan-100 mb-4">
                A global retailer with $127B revenue deployed Continuous Intelligence across pricing, inventory, and customer experience—achieving extraordinary results in just 12 months.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-cyan-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-cyan-300">$6.7B</div>
                  <div className="text-sm text-cyan-100">Total Value Created</div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-300">1.9 mo</div>
                  <div className="text-sm text-blue-100">Payback Period</div>
                </div>
                <div className="bg-indigo-500/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-indigo-300">+18 pts</div>
                  <div className="text-sm text-indigo-100">Customer Satisfaction</div>
                </div>
              </div>
              <a
                href="/case-studies/fortune-50-retail-continuous-intelligence-4-2-billion-success"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
              >
                Read Full Case Study →
              </a>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-12 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-200">
            🌍 Transforming Industries Worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: "🛒", name: "Retail", value: "$4.2B" },
              { icon: "🏭", name: "Manufacturing", value: "$1.8B" },
              { icon: "💰", name: "Financial Services", value: "$680M" },
              { icon: "🏥", name: "Healthcare", value: "$2.1B" },
              { icon: "🚚", name: "Logistics", value: "$670M" }
            ].map((industry, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center">
                <div className="text-4xl mb-2">{industry.icon}</div>
                <div className="text-sm font-semibold text-white mb-1">{industry.name}</div>
                <div className="text-xs text-cyan-300 font-bold">{industry.value} value</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-6">
            Transform Your Enterprise with Continuous Intelligence
          </h3>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join Fortune 50 leaders achieving 10-25x ROI through real-time, autonomous AI decision-making. Start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/blog/ai-2025-oct-continuous-intelligence-platform-revolution"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 text-lg"
            >
              📚 Read Technical Deep-Dive →
            </a>
            <a
              href="/services/continuous-intelligence-platform-services"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 text-lg"
            >
              🚀 Explore CI Platform Services →
            </a>
            <a
              href="/contact?campaign=continuous-intelligence"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1 text-lg"
            >
              💬 Get Free Assessment →
            </a>
          </div>
        </div>

        {/* Value Proposition Footer */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-cyan-100 text-lg mb-3">
              <span className="font-bold text-white">🎯 Free 2-Week Assessment:</span> Identify $50M-$500M+ in Continuous Intelligence opportunities for your enterprise
            </p>
            <p className="text-blue-200 text-sm">
              ✓ No cost, no obligation • ✓ Detailed ROI projections • ✓ 90-day implementation roadmap • ✓ Executive-ready business case
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-cyan-200/70 text-sm mb-3">
            TRUSTED BY FORTUNE 50 ENTERPRISES • 50+ SUCCESSFUL DEPLOYMENTS • $47B+ CUMULATIVE VALUE CREATED • 18.7x AVERAGE ROI
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-blue-300/60">
            <span>✓ 100% Success Rate</span>
            <span>✓ 97% Client Satisfaction</span>
            <span>✓ Zero Failed Deployments</span>
            <span>✓ 15+ Years Enterprise AI Expertise</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025ContinuousIntelligenceBanner;
