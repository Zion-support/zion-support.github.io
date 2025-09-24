import React from 'react';
import Link from 'next/link';

const NewContent2025AutonomousSystemsBanner = () => {
  return (
    <section className="bg-gradient-to-r from-green-900 via-teal-900 to-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🤖 AUTONOMOUS SYSTEMS 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Autonomous Business Systems Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how autonomous business systems are transforming enterprises in 2025. 
            Learn about self-managing operations, implementation strategies, and proven success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-3">Self-Managing Operations</h3>
            <p className="text-gray-300 mb-4">
              Systems that monitor, optimize, and heal themselves without human intervention
            </p>
            <div className="text-2xl font-bold text-green-400">24/7 Autonomy</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Intelligent Process Automation</h3>
            <p className="text-gray-300 mb-4">
              AI-powered decision making with cognitive automation and workflow orchestration
            </p>
            <div className="text-2xl font-bold text-teal-400">99.9% Accuracy</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Predictive Maintenance</h3>
            <p className="text-gray-300 mb-4">
              Proactive system health management with automated failover and recovery
            </p>
            <div className="text-2xl font-bold text-blue-400">90% Uptime</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Proven Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">340%</div>
              <div className="text-gray-300">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Quality Control</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">800%</div>
              <div className="text-gray-300">ROI Achieved</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2025-autonomous-business-systems-revolution"
              className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Read Implementation Guide
            </Link>
            <Link
              href="/case-studies/ai-transformation-800-roi-success"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors text-lg"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025AutonomousSystemsBanner;