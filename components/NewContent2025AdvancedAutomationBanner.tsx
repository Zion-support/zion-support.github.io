import React from 'react';
import Link from 'next/link';

const NewContent2025AdvancedAutomationBanner = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">⚡ ADVANCED AUTOMATION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Advanced Automation 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business operations with intelligent automation that learnsadapts
            and scales. Reduce costs by 60% while increasing productivity by 300%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2025-advanced-automation"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Automation Solutions
            </Link>
            <Link
              href="/demo/automation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Watch Demo
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-lg font-bold mb-2">RPA Bots</h3>
            <p className="text-sm opacity-90">
              Intelligent robotic process automation for repetitive tasks
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-lg font-bold mb-2">AI Decision Making</h3>
            <p className="text-sm opacity-90">
              Autonomous decision-making systems with human oversight
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-lg font-bold mb-2">Workflow Automation</h3>
            <p className="text-sm opacity-90">
              End-to-end workflow automation with intelligent routing
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-bold mb-2">Process Intelligence</h3>
            <p className="text-sm opacity-90">
              Continuous process optimization and performance monitoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025AdvancedAutomationBanner;