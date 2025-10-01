import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025PredictiveAnalyticsRevolutionBanner() {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 border-t-4 border-emerald-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400 mb-6">
            <span className="text-emerald-300 text-sm font-bold animate-pulse">
              🚀 BREAKING: OCTOBER 1, 2025 - JUST PUBLISHED TODAY
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            AI-Powered Predictive Analytics Revolution
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent mb-6">
            Transform Business Intelligence with Real-Time Forecasting
          </h3>

          {/* Value Props */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-emerald-400/30">
              <div className="text-4xl font-bold text-emerald-300 mb-2">$24.8B</div>
              <div className="text-white text-sm">Market Value Created</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-emerald-400/30">
              <div className="text-4xl font-bold text-teal-300 mb-2">98.7%</div>
              <div className="text-white text-sm">Forecast Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-emerald-400/30">
              <div className="text-4xl font-bold text-cyan-300 mb-2">4,200+</div>
              <div className="text-white text-sm">Enterprise Deployments</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-emerald-400/30">
              <div className="text-4xl font-bold text-emerald-400 mb-2">2,847%</div>
              <div className="text-white text-sm">ROI Within 18 Months</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Revolutionary AI platform that predicts business outcomes with unprecedented accuracy. 
            Real-time insights, automated decision-making, and seamless integration with existing systems. 
            Transform data into competitive advantage.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 my-12 text-left">
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg p-6 border border-emerald-400/30">
              <div className="text-2xl mb-3">🔮</div>
              <h4 className="text-lg font-bold text-white mb-2">Real-Time Forecasting</h4>
              <p className="text-gray-300 text-sm">
                Sub-second predictions with 98.7% accuracy across 1,000+ business metrics
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg p-6 border border-teal-400/30">
              <div className="text-2xl mb-3">🎯</div>
              <h4 className="text-lg font-bold text-white mb-2">Automated Decision Intelligence</h4>
              <p className="text-gray-300 text-sm">
                AI-driven recommendations that optimize operations and maximize revenue
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-lg p-6 border border-cyan-400/30">
              <div className="text-2xl mb-3">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Seamless Integration</h4>
              <p className="text-gray-300 text-sm">
                Deploy in 48 hours with zero disruption to existing workflows
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog/ai-2025-oct-predictive-analytics-revolution"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all shadow-lg"
            >
              📚 Read Complete Guide
            </Link>
            <Link
              to="/case-studies/ai-2025-oct-fortune-500-predictive-analytics-24-8-billion-transformation"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 border-2 border-emerald-400 transform hover:scale-105 transition-all"
            >
              💎 $24.8B Success Story
            </Link>
            <Link
              to="/services/predictive-analytics-platform"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-emerald-600 transform hover:scale-105 transition-all shadow-lg"
            >
              🚀 Get Started
            </Link>
          </div>

          {/* Trust Signal */}
          <div className="mt-12 pt-8 border-t border-emerald-400/30">
            <p className="text-emerald-200 text-sm mb-4">
              ⭐ Deployed by 4,200+ enterprises globally | $24.8B in value creation
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-xs">
              <span>✓ Enterprise-Grade Security</span>
              <span>✓ 99.99% Uptime SLA</span>
              <span>✓ Real-Time Processing</span>
              <span>✓ Dedicated Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
