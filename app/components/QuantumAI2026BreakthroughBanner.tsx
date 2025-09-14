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
              <div className="border-l-4 border-yellow-400 pl-4">
                <h4 className="font-semibold text-lg mb-2">Quantum AI Business Revolution</h4>
                <p className="text-sm opacity-80 mb-2">
                  Learn how Fortune 500 companies are achieving 400-600% ROI with quantum AI
                </p>
                <Link 
                  href="/blog/ai-2026-quantum-ai-business-revolution"
                  className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm"
                >
                  Read Full Guide →
                </Link>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-lg mb-2">Implementation Guide 2026</h4>
                <p className="text-sm opacity-80 mb-2">
                  Complete roadmap for quantum AI implementation in your organization
                </p>
                <Link 
                  href="/resources/quantum-ai-implementation-guide-2026"
                  className="text-green-400 hover:text-green-300 font-semibold text-sm"
                >
                  Download Guide →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">💼 Success Stories</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-lg mb-2">Fortune 500 Transformation</h4>
                <p className="text-sm opacity-80 mb-2">
                  $2.8B annual savings achieved in just 6 months
                </p>
                <Link 
                  href="/case-studies/quantum-ai-fortune-500-transformation-2026"
                  className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
                >
                  View Case Study →
                </Link>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-lg mb-2">Manufacturing Breakthrough</h4>
                <p className="text-sm opacity-80 mb-2">
                  567% ROI with quantum-optimized production lines
                </p>
                <Link 
                  href="/case-studies/quantum-ai-transformation-2026-ultimate-success"
                  className="text-purple-400 hover:text-purple-300 font-semibold text-sm"
                >
                  Read Success Story →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Quantum AI Consultation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Download Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumAI2026BreakthroughBanner;