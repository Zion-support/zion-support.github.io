// import React from 'react';
import { Link } from 'react-router-dom';

export default function AutonomousBusinessIntelligenceBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8 animate-pulse">
            <span className="text-green-400 font-bold text-xl tracking-wider uppercase">
              🤖 Autonomous Business Intelligence
            </span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            99.9% Automation Breakthrough
          </h2>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Revolutionary autonomous BI system delivering real-time insights, predictive analytics, and $2.8B proven ROI
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">99.9%</div>
              <div className="text-xs text-green-300">Automation</div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30">
              <div className="text-2xl font-extrabold text-emerald-400 mb-1">$2.8B</div>
              <div className="text-xs text-emerald-300">Proven ROI</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">0.1s</div>
              <div className="text-xs text-cyan-300">Query Response</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30">
              <div className="text-2xl font-extrabold text-teal-400 mb-1">1000+</div>
              <div className="text-xs text-teal-300">Data Sources</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/blog/ai-2026-autonomous-business-intelligence-breakthrough" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Discover the Technology →
            </Link>
            <Link to="/case-studies/ai-2026-autonomous-bi-mega-success" 
              className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              View Success Stories →
            </Link>
            <Link to="/contact" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Free Trial
            </Link>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Self-Learning Analytics</h3>
              <p className="text-gray-300 text-sm">
                Continuously improves without human intervention, delivering increasingly accurate insights
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Intelligence</h3>
              <p className="text-gray-300 text-sm">
                Instant insights across all business functions with sub-second query response times
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Predictive Optimization</h3>
              <p className="text-gray-300 text-sm">
                Anticipates needs and takes proactive actions with 99.9% accuracy
              </p>
            </div>
          </div>
          
          {/* Industry Applications */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-5xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Revolutionary Across Industries</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Financial Services: 1000x faster fraud detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-gray-300">Retail: 99.8% accuracy in demand forecasting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Healthcare: Real-time patient analytics</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                  <span className="text-gray-300">Manufacturing: 99.9% defect detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Energy: 95% reduction in energy waste</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="text-gray-300">Logistics: Real-time supply chain optimization</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <div className="text-6xl text-green-400 mb-4">"</div>
            <p className="text-xl text-gray-300 mb-6 italic">
              "The autonomous BI system transformed our entire analytics operation. We achieved 99.9% automation with $2.8B ROI. This is the future of business intelligence."
            </p>
            <div className="text-green-400 font-semibold">
              — Fortune 100 CTO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}