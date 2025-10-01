import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025EnterpriseAITransformationSuiteBanner() {
  return (
    <div className="bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 border-t-4 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400 mb-6">
            <span className="text-amber-300 text-sm font-bold animate-pulse">
              🏢 ENTERPRISE REVOLUTION: OCTOBER 1, 2025 - JUST LAUNCHED
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Enterprise AI Transformation Suite
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 bg-clip-text text-transparent mb-6">
            Complete AI-Powered Digital Transformation in 90 Days
          </h3>

          {/* Value Props */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-amber-400/30">
              <div className="text-4xl font-bold text-amber-300 mb-2">$127B</div>
              <div className="text-white text-sm">Total Value Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-amber-400/30">
              <div className="text-4xl font-bold text-orange-300 mb-2">8,500+</div>
              <div className="text-white text-sm">Enterprise Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-amber-400/30">
              <div className="text-4xl font-bold text-red-300 mb-2">94.7%</div>
              <div className="text-white text-sm">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-amber-400/30">
              <div className="text-4xl font-bold text-amber-400 mb-2">1,247%</div>
              <div className="text-white text-sm">Average ROI</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            All-in-one platform for complete enterprise AI transformation. From strategy to deployment, 
            we provide everything you need: AI readiness assessment, custom model development, 
            infrastructure setup, training, and ongoing support. Transform your entire organization in 90 days.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 my-12 text-left">
            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-6 border border-amber-400/30">
              <div className="text-2xl mb-3">📊</div>
              <h4 className="text-lg font-bold text-white mb-2">Comprehensive Assessment</h4>
              <p className="text-gray-300 text-sm">
                AI readiness evaluation across all business units and processes
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-6 border border-orange-400/30">
              <div className="text-2xl mb-3">🛠️</div>
              <h4 className="text-lg font-bold text-white mb-2">Turnkey Implementation</h4>
              <p className="text-gray-300 text-sm">
                Full deployment with custom models, infrastructure, and training
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-amber-500/20 rounded-lg p-6 border border-red-400/30">
              <div className="text-2xl mb-3">📈</div>
              <h4 className="text-lg font-bold text-white mb-2">Guaranteed Results</h4>
              <p className="text-gray-300 text-sm">
                ROI guarantee with continuous optimization and support
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog/ai-2025-oct-enterprise-transformation-suite"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all shadow-lg"
            >
              📚 Explore Solution
            </Link>
            <Link
              to="/case-studies/ai-2025-oct-global-enterprise-127-billion-transformation"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 border-2 border-amber-400 transform hover:scale-105 transition-all"
            >
              💎 $127B Success Stories
            </Link>
            <Link
              to="/services/enterprise-ai-transformation"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-amber-500 text-white font-bold rounded-lg hover:from-red-600 hover:to-amber-600 transform hover:scale-105 transition-all shadow-lg"
            >
              🚀 Schedule Consultation
            </Link>
          </div>

          {/* Trust Signal */}
          <div className="mt-12 pt-8 border-t border-amber-400/30">
            <p className="text-amber-200 text-sm mb-4">
              ⭐ Trusted by 8,500+ enterprises worldwide | 94.7% transformation success rate
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-xs">
              <span>✓ White Glove Service</span>
              <span>✓ ROI Guarantee</span>
              <span>✓ 90-Day Deployment</span>
              <span>✓ Ongoing Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
