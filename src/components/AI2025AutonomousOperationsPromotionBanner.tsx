import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2025AutonomousOperationsPromotionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-green-900 via-teal-900 to-blue-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220%200%2060%2060%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill="%23ffffff" fill-opacity%3D%220.1%22%3E%3Cpath d="M30 0l30 30-30 30L0 30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🤖 AUTONOMOUS REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            AI 2025 Autonomous Business
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Operations Revolution
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of enterprise management with AI-powered autonomous business operations. 
            Self-managing systems that make independent decisions and continuously optimize performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-3">Self-Learning Systems</h3>
            <p className="text-gray-200 mb-4">
              AI systems that continuously learn and improve from every decision and outcome
            </p>
            <div className="text-2xl font-bold text-cyan-400">∞ Learning</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Independent Decisions</h3>
            <p className="text-gray-200 mb-4">
              Autonomous strategic thinking with real-time risk assessment and resource allocation
            </p>
            <div className="text-2xl font-bold text-green-400">Auto</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">End-to-End Control</h3>
            <p className="text-gray-200 mb-4">
              Complete workflow management from initiation to completion with cross-functional integration
            </p>
            <div className="text-2xl font-bold text-blue-400">100%</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Performance Monitoring</h3>
            <p className="text-gray-200 mb-4">
              Continuous monitoring and optimization of all operational metrics in real-time
            </p>
            <div className="text-2xl font-bold text-purple-400">24/7</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Autonomous Operations Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">60-80%</div>
                <div className="text-gray-200 mb-2">Reduction in Manual Process Time</div>
                <div className="text-sm text-gray-300">Automated routine operations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">90-95%</div>
                <div className="text-gray-200 mb-2">Reduction in Human Error Rates</div>
                <div className="text-sm text-gray-300">Consistent and reliable performance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50-70%</div>
                <div className="text-gray-200 mb-2">Improvement in Process Efficiency</div>
                <div className="text-sm text-gray-300">Optimized resource utilization</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/blog/ai-2025-autonomous-business-operations"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Autonomous Operations →
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-all duration-300"
            >
              Start Your Transformation
            </a>
          </div>
          
          <div className="text-sm text-gray-300">
            <p>🚀 Join the autonomous business revolution - the future of enterprise management is here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025AutonomousOperationsPromotionBanner;