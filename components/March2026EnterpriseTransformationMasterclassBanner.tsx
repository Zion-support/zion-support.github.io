import React from 'react';

const March2026EnterpriseTransformationMasterclassBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 border border-indigo-500/20 rounded-2xl p-8 mb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)] animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">BREAKING: MARCH 2026 MASTERCLASS</span>
          </div>
          <div className="px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full">
            <span className="text-indigo-300 text-sm font-semibold">COMPLETE GUIDE</span>
          </div>
        </div>

        {/* Main content */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            🎓 Enterprise Transformation Masterclass
          </h2>
          <p className="text-xl text-purple-200 mb-4 leading-relaxed">
            Complete guide to enterprise-wide AI transformation with <span className="text-yellow-400 font-semibold">proven frameworks</span>, 
            <span className="text-yellow-400 font-semibold"> 100+ success stories</span>, and <span className="text-yellow-400 font-semibold">8-15x ROI</span> methodology.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-black/20 border border-indigo-500/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">$3.7B</div>
            <div className="text-sm text-purple-200">Fortune 100 Savings</div>
          </div>
          <div className="bg-black/20 border border-purple-500/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">15x</div>
            <div className="text-sm text-purple-200">ROI in 18 Months</div>
          </div>
          <div className="bg-black/20 border border-pink-500/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-pink-400">99.99%</div>
            <div className="text-sm text-purple-200">Uptime Achieved</div>
          </div>
          <div className="bg-black/20 border border-blue-500/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">100+</div>
            <div className="text-sm text-purple-200">Success Stories</div>
          </div>
        </div>

        {/* Transformation Phases */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">🚀 4-Phase Transformation Framework:</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <span className="text-indigo-300 font-semibold">Phase 1:</span>
                <span className="text-purple-200"> Assessment & Strategy (Weeks 1-4)</span>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <span className="text-purple-300 font-semibold">Phase 2:</span>
                <span className="text-purple-200"> Foundation Building (Months 2-4)</span>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <span className="text-pink-300 font-semibold">Phase 3:</span>
                <span className="text-purple-200"> Pilot Implementation (Months 5-8)</span>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
              <div>
                <span className="text-blue-300 font-semibold">Phase 4:</span>
                <span className="text-purple-200"> Enterprise Scaling (Months 9-24)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Success Stories */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">💎 Featured Success Stories:</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/20 border border-indigo-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-indigo-300 mb-2">Manufacturing</h4>
              <p className="text-sm text-purple-200 mb-2">Fortune 100 transformation across 450 facilities</p>
              <div className="text-lg font-bold text-green-400">$3.7B Annual Savings</div>
            </div>
            <div className="bg-black/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-300 mb-2">Financial Services</h4>
              <p className="text-sm text-purple-200 mb-2">Global digital transformation & AI integration</p>
              <div className="text-lg font-bold text-blue-400">$2.3B Efficiency Gains</div>
            </div>
            <div className="bg-black/20 border border-pink-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-pink-300 mb-2">Healthcare</h4>
              <p className="text-sm text-purple-200 mb-2">Clinical excellence & operational optimization</p>
              <div className="text-lg font-bold text-purple-400">$1.5B Cost Savings</div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-6 bg-black/20 border border-purple-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-3">📚 Masterclass Includes:</h3>
          <div className="grid md:grid-cols-2 gap-2 text-sm text-purple-200">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Comprehensive Assessment Framework</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span>Custom Transformation Roadmap</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span>Proven Implementation Methodologies</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
              <span>ROI Models & Financial Projections</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
              <span>Technology Stack Recommendations</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
              <span>Change Management Playbooks</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="/blog/ai-2026-march-enterprise-transformation-masterclass"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              📖 Read Complete Guide
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-purple-200 font-semibold rounded-lg transition-all duration-200"
            >
              🚀 Start Transformation
            </a>
          </div>
          <div className="text-sm text-purple-300">
            <div className="font-semibold">Published: March 15, 2026</div>
            <div className="text-xs text-purple-400">12 min read · Complete Guide</div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-6 pt-4 border-t border-purple-500/20 text-center">
          <p className="text-sm text-purple-300">
            <span className="font-semibold">Trusted by 100+ Fortune 500 companies</span> · 
            <span className="text-green-400"> $7.5B+ in proven ROI</span> · 
            <span className="text-blue-400"> 99.99% success rate</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default March2026EnterpriseTransformationMasterclassBanner;
