// import React from 'react';

export default function January2026LatestTrendsBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50 border-b border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Trending Banner */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              📈 January 2026 Latest Trends
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Trending AI Innovations
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Stay ahead of the curve with the latest AI trends and breakthrough technologies 
            that are reshaping enterprise computing in 2026.
          </p>

          {/* Trending Topics */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-white mb-3">Predictive AI Analytics</h3>
              <p className="text-gray-300 text-sm mb-4">
                Advanced predictive models with 99.7% accuracy for business forecasting 
                and strategic decision-making.
              </p>
              <div className="text-xs text-indigo-300">
                <strong>Trending:</strong> 340% increase in enterprise adoption
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-3">Edge AI Computing</h3>
              <p className="text-gray-300 text-sm mb-4">
                Distributed AI processing at the edge delivering real-time insights 
                with ultra-low latency and privacy protection.
              </p>
              <div className="text-xs text-purple-300">
                <strong>Trending:</strong> 280% growth in edge deployments
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Security Governance</h3>
              <p className="text-gray-300 text-sm mb-4">
                Comprehensive AI governance frameworks ensuring ethical AI deployment 
                and regulatory compliance across enterprises.
              </p>
              <div className="text-xs text-pink-300">
                <strong>Trending:</strong> 420% increase in governance implementations
              </div>
            </div>
          </div>

          {/* Innovation Spotlight */}
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-indigo-400">🚀 Innovation Spotlight</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-3 text-purple-400">Autonomous Business Intelligence</h4>
                <p className="text-gray-300 mb-4">
                  AI systems that automatically analyze business data, generate insights, 
                  and recommend strategic actions without human intervention.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Real-time decision automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Predictive business modeling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Automated report generation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-cyan-400">Neuromorphic Computing</h4>
                <p className="text-gray-300 mb-4">
                  Brain-inspired computing architectures that process information 
                  like neural networks with unprecedented efficiency and speed.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>1000x energy efficiency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Parallel processing capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Adaptive learning systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Market Insights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-extrabold text-green-400 mb-2">$2.4T</div>
              <div className="text-gray-300 text-sm">Global AI Market Value by 2026</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">87%</div>
              <div className="text-gray-300 text-sm">Enterprises Adopting AI by 2026</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">$15M</div>
              <div className="text-gray-300 text-sm">Average Enterprise AI Investment</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Explore All Trends
            </a>
            <a 
              href="/contact" 
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Trend Analysis
            </a>
            <a 
              href="/services" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              AI Implementation Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}