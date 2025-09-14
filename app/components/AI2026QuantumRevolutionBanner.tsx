import React from 'react';
import Link from 'next/link';

const AI2026QuantumRevolutionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 AI 2026 BREAKTHROUGH</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Quantum Computing Revolution
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of AI with quantum-enhanced processing power. 
            Solve complex business challenges 1000x faster with our revolutionary quantum AI solutions.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">1000x Performance</h3>
            <p className="text-blue-100">
              Quantum-powered AI processing that delivers unprecedented speed and accuracy for complex optimization problems.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-3">Quantum-Safe Security</h3>
            <p className="text-blue-100">
              Future-proof encryption and security protocols designed for the quantum computing era.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Enterprise Ready</h3>
            <p className="text-blue-100">
              Production-ready quantum AI systems that integrate seamlessly with your existing infrastructure.
            </p>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white border-opacity-20">
          <h3 className="text-2xl font-bold text-center mb-8">Proven Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">99.9%</div>
              <div className="text-sm text-blue-200">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">$2.8B</div>
              <div className="text-sm text-blue-200">Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">340%</div>
              <div className="text-sm text-blue-200">ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300 mb-2">24/7</div>
              <div className="text-sm text-blue-200">Autonomous Operation</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2026-quantum-computing-revolution"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Full Article →
            </Link>
            <Link
              href="/resources/ai-2026-implementation-ultimate-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Implementation Guide
            </Link>
          </div>
          
          <p className="text-blue-200 text-sm">
            Join 500+ enterprises already transforming with quantum AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2026QuantumRevolutionBanner;