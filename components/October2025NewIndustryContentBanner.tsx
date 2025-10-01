import React from "react";

/**
 * October 2025 New Industry Content Banner
 * Promotes latest supply chain, manufacturing, and financial services content
 */
export default function October2025NewIndustryContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900/30 via-teal-900/30 to-cyan-900/30 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="container mx-auto px-6">
        {/* Header Badge */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6 animate-pulse">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW OCTOBER 2025 INDUSTRY BREAKTHROUGHS - JUST PUBLISHED!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Transform Your Enterprise with AI Innovation
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover breakthrough solutions delivering $34B+ value creation, 35% cost reduction, and 99.97% accuracy across supply chain, manufacturing, and financial services
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Supply Chain Optimization */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="text-6xl mb-6">📦</div>
            <div className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
              NEW BLOG POST
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AI-Powered Supply Chain Optimization
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Discover how leading enterprises achieve <strong className="text-emerald-400">35% cost reduction</strong>, 
              <strong className="text-teal-400"> 99.2% on-time delivery</strong>, and 
              <strong className="text-cyan-400"> $18.7B savings</strong> through predictive analytics and autonomous routing.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>98.7% forecast accuracy with multimodal AI</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Real-time route optimization across 50K+ shipments</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>42% reduction in carbon emissions</span>
              </li>
            </ul>
            <a 
              href="/blog/ai-2025-oct-supply-chain-optimization-revolution"
              className="inline-block w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 text-center"
            >
              Read Full Article →
            </a>
          </div>

          {/* Computer Vision Manufacturing */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="text-6xl mb-6">👁️</div>
            <div className="inline-block bg-teal-500/20 text-teal-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
              NEW BLOG POST
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Advanced Computer Vision for Manufacturing
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Explore how AI-powered computer vision transforms quality control with <strong className="text-teal-400">99.97% defect detection</strong>, 
              <strong className="text-cyan-400"> real-time inspection</strong>, and 
              <strong className="text-emerald-400"> $12.5B quality savings</strong> globally.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-teal-400 font-bold">✓</span>
                <span>120 FPS inspection at production speeds</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-teal-400 font-bold">✓</span>
                <span>70% reduction in quality costs</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-teal-400 font-bold">✓</span>
                <span>Multi-spectral imaging with 0.05mm precision</span>
              </li>
            </ul>
            <a 
              href="/blog/ai-2025-oct-computer-vision-manufacturing-revolution"
              className="inline-block w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 text-center"
            >
              Explore Technology →
            </a>
          </div>

          {/* Financial Services Case Study */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            <div className="text-6xl mb-6">🏦</div>
            <div className="inline-block bg-cyan-500/20 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
              NEW CASE STUDY
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              $34B Digital Banking Transformation
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Learn how a global bank achieved <strong className="text-cyan-400">$34B value creation</strong>, 
              <strong className="text-emerald-400"> 10M new customers</strong>, and 
              <strong className="text-teal-400"> 287% mobile adoption</strong> through AI-powered digital banking.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>47% operational cost reduction</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>99.7% fraud detection accuracy</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Net Promoter Score +47 points improvement</span>
              </li>
            </ul>
            <a 
              href="/case-studies/financial-services-digital-banking-transformation-34-billion-success"
              className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 text-center"
            >
              View Case Study →
            </a>
          </div>
        </div>

        {/* Service Offering CTA */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                🚀 New: AI-Powered Supply Chain Services
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Transform your supply chain with our comprehensive AI optimization services. 
                Proven to deliver <strong className="text-emerald-400">35% cost reduction</strong> and 
                <strong className="text-teal-400"> 520% ROI</strong> in the first year.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold text-sm">✓</span>
                  <span>Predictive demand forecasting (98.7% accuracy)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold text-sm">✓</span>
                  <span>Autonomous route optimization</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold text-sm">✓</span>
                  <span>Intelligent inventory management</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold text-sm">✓</span>
                  <span>Supply chain digital twin & real-time intelligence</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <a 
                href="/services/supply-chain-ai-optimization-services"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 text-center text-lg"
              >
                Explore Our Services →
              </a>
              <a 
                href="/contact"
                className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center text-lg"
              >
                Schedule Free Consultation
              </a>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-emerald-500/10 rounded-lg p-3 text-center border border-emerald-500/20">
                  <div className="text-2xl font-bold text-emerald-400">35%</div>
                  <div className="text-xs text-gray-400">Cost Reduction</div>
                </div>
                <div className="bg-teal-500/10 rounded-lg p-3 text-center border border-teal-500/20">
                  <div className="text-2xl font-bold text-teal-400">99.2%</div>
                  <div className="text-xs text-gray-400">On-Time Delivery</div>
                </div>
                <div className="bg-cyan-500/10 rounded-lg p-3 text-center border border-cyan-500/20">
                  <div className="text-2xl font-bold text-cyan-400">520%</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Join leading enterprises transforming operations with AI innovation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/blog"
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors duration-200"
            >
              View All Insights →
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="/case-studies"
              className="text-teal-400 hover:text-teal-300 font-semibold transition-colors duration-200"
            >
              Explore Success Stories →
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="/services"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200"
            >
              Discover Our Services →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
