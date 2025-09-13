import React from 'react';
import { Link } from 'react-router-dom';

const NewContent2026PromotionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-blue-600/90 to-indigo-600/90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/30">
            <span className="text-white text-sm font-medium">🚀 NEW FOR 2026</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Revolutionary AI Content & Tools
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Discover our latest breakthrough content: AI Implementation Mastery Guide, Quantum-AI Case Studies, and Interactive ROI Calculator
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Implementation Guide 2026</h3>
              <p className="text-blue-100 text-sm mb-4">
                Master quantum-AI fusion with our comprehensive roadmap to 15,000x performance improvements
              </p>
              <Link 
                to="/resources/ai-implementation-mastery-2026"
                className="text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors"
              >
                Explore Guide →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum-AI Case Study</h3>
              <p className="text-blue-100 text-sm mb-4">
                See how a Fortune 500 company achieved $2.3B in savings with quantum-AI breakthrough technology
              </p>
              <Link 
                to="/case-studies/quantum-ai-breakthrough-enterprise-transformation"
                className="text-green-400 hover:text-green-300 font-medium text-sm transition-colors"
              >
                Read Case Study →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI ROI Calculator</h3>
              <p className="text-blue-100 text-sm mb-4">
                Calculate your potential returns with our interactive ROI calculator based on proven methodologies
              </p>
              <Link 
                to="/tools/ai-roi-calculator-2026"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
              >
                Calculate ROI →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15,000x</div>
              <div className="text-blue-200 text-sm">Performance Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-200 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$2.3B</div>
              <div className="text-blue-200 text-sm">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">6,800%</div>
              <div className="text-blue-200 text-sm">ROI Achieved</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/resources/ai-implementation-mastery-2026"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Implementation Guide
            </Link>
            <Link 
              to="/tools/ai-roi-calculator-2026"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30"
            >
              Calculate Your ROI
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm">
            <div className="flex items-center space-x-2">
              <span>✓</span>
              <span>Fortune 500 Proven</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✓</span>
              <span>Real-World Results</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✓</span>
              <span>Industry Leading</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026PromotionBanner;