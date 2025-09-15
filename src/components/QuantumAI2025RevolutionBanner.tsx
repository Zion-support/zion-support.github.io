import React from 'react';
import Link from 'next/link';

const QuantumAI2025RevolutionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220%200%2060%2060%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill="%23ffffff" fill-opacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW: QUANTUM AI REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Quantum AI Transformation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Achieve 2000% ROI
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how Fortune 500 companies are achieving unprecedented success with quantum AI. 
            Complete implementation guide with real-world case studies and proven results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Content Cards */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Quantum Machine Learning Guide</h3>
            <p className="text-gray-300 mb-4">
              Complete guide to quantum machine learning implementation in 2025. 
              Revolutionary capabilities and business transformation strategies.
            </p>
            <Link 
              href="/blog/ai-2025-quantum-machine-learning-revolution-ultimate-guide"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Read Guide →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Generative AI Revolution</h3>
            <p className="text-gray-300 mb-4">
              Ultimate breakthrough guide to generative AI enterprise implementation. 
              Transform your business with cutting-edge AI capabilities.
            </p>
            <Link 
              href="/blog/ai-2025-generative-ai-enterprise-revolution-ultimate-breakthrough"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Explore Now →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">💎</div>
            <h3 className="text-xl font-bold mb-3">2000% ROI Success Story</h3>
            <p className="text-gray-300 mb-4">
              Real Fortune 500 case study: How quantum AI transformation delivered 
              $1.05 billion in annual savings and 2000% ROI.
            </p>
            <Link 
              href="/case-studies/ai-2025-quantum-ai-transformation-2000-roi-success-story"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2000%</div>
            <div className="text-sm text-gray-300">ROI Achievement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">$1.05B</div>
            <div className="text-sm text-gray-300">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">18</div>
            <div className="text-sm text-gray-300">Months to ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Quantum AI Journey
            </Link>
            <Link
              href="/services/quantum-ai"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Explore Quantum AI Services
            </Link>
          </div>
          <p className="text-sm text-gray-300 mt-4">
            Join leading enterprises transforming their business with quantum AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuantumAI2025RevolutionBanner;