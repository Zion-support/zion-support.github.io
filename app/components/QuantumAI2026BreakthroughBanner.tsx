import React from 'react';
import Link from 'next/link';

const QuantumAI2026BreakthroughBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 QUANTUM AI BREAKTHROUGH 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Quantum Computing Revolution is Here
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how quantum-enhanced AI is transforming businesses with 10,000x faster processing, 
            99.9% accuracy, and unprecedented competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-yellow-400 mb-2">10,000x</div>
            <div className="text-lg mb-4">Faster Problem Solving</div>
            <div className="text-sm opacity-80">
              Complex optimization problems solved in minutes instead of years
            </div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-lg mb-4">Predictive Accuracy</div>
            <div className="text-sm opacity-80">
              Unprecedented accuracy in market forecasting and risk assessment
            </div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-400 mb-2">940%</div>
            <div className="text-lg mb-4">ROI Achievement</div>
            <div className="text-sm opacity-80">
              Proven ROI results from quantum AI implementations
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">📖 Latest Quantum AI Content</h3>
            <div className="space-y-4">
              <Link 
                href="/blog/ai-2026-quantum-computing-breakthrough" 
                className="block p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="font-semibold text-lg mb-2">
                  AI 2026: The Quantum Computing Breakthrough
                </div>
                <div className="text-sm opacity-80">
                  Discover how quantum-AI convergence is revolutionizing business operations
                </div>
              </Link>
              <Link 
                href="/blog/ai-2026-enterprise-automation-mastery" 
                className="block p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="font-semibold text-lg mb-2">
                  Enterprise Automation Mastery Guide
                </div>
                <div className="text-sm opacity-80">
                  Complete transformation guide for autonomous business operations
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">💼 Success Stories & Resources</h3>
            <div className="space-y-4">
              <Link 
                href="/case-studies/quantum-ai-financial-services-transformation-2026" 
                className="block p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="font-semibold text-lg mb-2">
                  Quantum AI Financial Services Case Study
                </div>
                <div className="text-sm opacity-80">
                  How Global Financial Corp achieved 940% ROI with quantum AI
                </div>
              </Link>
              <Link 
                href="/resources/quantum-ai-implementation-master-guide-2026" 
                className="block p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="font-semibold text-lg mb-2">
                  Quantum AI Implementation Master Guide
                </div>
                <div className="text-sm opacity-80">
                  Complete guide to implementing quantum AI in your organization
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Start Your Quantum AI Transformation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuantumAI2026BreakthroughBanner;