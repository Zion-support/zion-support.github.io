import React from 'react';

/**
 * October 2025 Customer Experience Revolution Banner
 * 
 * Advertises the new AI-Powered Customer Experience content:
 * - Blog: AI-Powered Customer Experience Revolution guide
 * - Case Study: $8.3B Fortune 100 retail success story
 * - Services: Customer Experience AI Services offering
 * 
 * Key metrics: $8.3B revenue, 247% conversion lift, 94% satisfaction, 11.5x ROI
 */
const October2025CustomerExperienceBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900/30 via-teal-900/30 to-cyan-900/30 backdrop-blur-sm border-y border-emerald-500/20">
      <div className="container mx-auto px-6">
        {/* Header Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6 animate-pulse">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW: October 2025 Customer Experience Revolution
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            AI-Powered Customer Experience: $8.3B Success Story
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover how Fortune 500 companies achieve <strong className="text-emerald-400">247% conversion increases</strong>, 
            {' '}<strong className="text-teal-400">$8.3B revenue growth</strong>, and{' '}
            <strong className="text-cyan-400">11.5x ROI</strong> through strategic AI-powered customer experience transformation.
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
            <div className="bg-emerald-500/10 backdrop-blur-lg rounded-xl p-5 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-3xl font-extrabold text-emerald-400 mb-2">$8.3B</div>
              <div className="text-sm text-emerald-300">Revenue Increase</div>
            </div>
            <div className="bg-teal-500/10 backdrop-blur-lg rounded-xl p-5 border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300">
              <div className="text-3xl font-extrabold text-teal-400 mb-2">247%</div>
              <div className="text-sm text-teal-300">Conversion Lift</div>
            </div>
            <div className="bg-cyan-500/10 backdrop-blur-lg rounded-xl p-5 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">94%</div>
              <div className="text-sm text-cyan-300">Satisfaction Score</div>
            </div>
            <div className="bg-blue-500/10 backdrop-blur-lg rounded-xl p-5 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">11.5x</div>
              <div className="text-sm text-blue-300">Return on Investment</div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Hyper-Personalization</h3>
            <p className="text-gray-300 mb-6">
              Real-time 1:1 personalization across every touchpoint with &lt;50ms latency. 
              Deploy 50K+ predictions/second with AI-powered recommendation engines.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Product recommendations (collaborative + content-based)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Dynamic content personalization (5,000+ variants)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Behavioral prediction (89% accuracy)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Real-time A/B testing at scale</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-5xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold text-white mb-4">Predictive Intelligence</h3>
            <p className="text-gray-300 mb-6">
              Anticipate customer needs before they're expressed. Deploy 47 production ML models 
              for churn prediction, lifetime value forecasting, and next-best-action.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-1">✓</span>
                <span>Churn prediction (14-day warning, 91% accuracy)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-1">✓</span>
                <span>Customer lifetime value (85% accuracy)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-1">✓</span>
                <span>Purchase intent scoring (real-time)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 mt-1">✓</span>
                <span>Optimal engagement timing per customer</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold text-white mb-4">Omnichannel Orchestration</h3>
            <p className="text-gray-300 mb-6">
              Seamless experiences across 12+ channels with unified customer intelligence. 
              Coordinate journeys in real-time with AI-powered decisioning.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Unified 360° customer view (150M profiles)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Real-time journey orchestration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Cross-channel attribution modeling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>BOPIS, endless aisle, mobile integration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="/blog/ai-2025-oct-customer-experience-revolution"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              📖 Read Complete Guide →
            </a>
            <a
              href="/case-studies/ai-2025-oct-retail-cx-transformation-8-3-billion-success"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
            >
              💰 View $8.3B Case Study →
            </a>
            <a
              href="/services/ai-customer-experience-services"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              🚀 Explore CX Services →
            </a>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-gray-400 max-w-3xl mx-auto">
            <strong className="text-emerald-400">Just Published:</strong> Comprehensive enterprise guide featuring 
            real-time CDP architecture, AI personalization engines, 47 production ML models, omnichannel orchestration, 
            and proven implementation roadmap. Learn from Fortune 100 success achieving <strong>$8.3B revenue increase</strong> in Year 1.
          </p>
        </div>

        {/* Technology Stack Highlights */}
        <div className="mt-12 pt-8 border-t border-emerald-500/20">
          <h3 className="text-center text-xl font-bold text-emerald-400 mb-6">Technology Stack & Capabilities</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-emerald-500/10 px-4 py-2 rounded-full text-sm text-emerald-300 border border-emerald-500/30">
              Real-Time CDP (Kafka + Flink)
            </span>
            <span className="bg-teal-500/10 px-4 py-2 rounded-full text-sm text-teal-300 border border-teal-500/30">
              Deep Learning Recommendations
            </span>
            <span className="bg-cyan-500/10 px-4 py-2 rounded-full text-sm text-cyan-300 border border-cyan-500/30">
              47 Production ML Models
            </span>
            <span className="bg-blue-500/10 px-4 py-2 rounded-full text-sm text-blue-300 border border-blue-500/30">
              &lt;50ms Decision Latency
            </span>
            <span className="bg-indigo-500/10 px-4 py-2 rounded-full text-sm text-indigo-300 border border-indigo-500/30">
              Omnichannel Orchestration
            </span>
            <span className="bg-purple-500/10 px-4 py-2 rounded-full text-sm text-purple-300 border border-purple-500/30">
              AI-Powered Support (78% Automation)
            </span>
            <span className="bg-pink-500/10 px-4 py-2 rounded-full text-sm text-pink-300 border border-pink-500/30">
              99.99% Uptime SLA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025CustomerExperienceBanner;
