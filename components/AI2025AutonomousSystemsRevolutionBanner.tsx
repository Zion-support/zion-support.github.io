import React from 'react';
import Link from 'next/link';

const AI2025AutonomousSystemsRevolutionBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-20 animate-ping"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">🚀 NEW BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            AI 2025: Autonomous Systems Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how autonomous AI systems are transforming enterprise operations with 
            <span className="text-yellow-300 font-semibold"> 340% ROI increases</span> and 
            <span className="text-green-300 font-semibold"> revolutionary breakthroughs</span> in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Key Benefits */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">Self-Evolving Neural Networks</h3>
            <p className="text-blue-200 mb-4">
              AI systems that modify their own architecture based on performancenabling continuous improvement without human intervention.
            </p>
            <div className="text-yellow-300 font-semibold">→ Learn More</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Quantum-Enhanced Processing</h3>
            <p className="text-blue-200 mb-4">
              Breakthrough in processing speed and accuracy through quantum computing integration for complex problem-solving.
            </p>
            <div className="text-yellow-300 font-semibold">→ Explore Now</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-3">Multi-Agent Orchestration</h3>
            <p className="text-blue-200 mb-4">
              Coordinated AI agents working together seamlessly with distributed decision-making across systems.
            </p>
            <div className="text-yellow-300 font-semibold">→ Discover</div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">340%</div>
            <div className="text-sm text-blue-200">ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">99.8%</div>
            <div className="text-sm text-blue-200">Faster Decisions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">93%</div>
            <div className="text-sm text-blue-200">Error Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">$2.1M</div>
            <div className="text-sm text-blue-200">Cost Savings</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog/ai-2025-enterprise-autonomous-systems-revolution-ultimate-guide"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Complete Guide
            </Link>
            <Link
              href="/services/ai-automation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Implementation Support
            </Link>
          </div>
          <p className="text-sm text-blue-200">
            Join 500+ enterprises already transforming with autonomous AI systems
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2025AutonomousSystemsRevolutionBanner;