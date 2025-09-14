import React from 'react';
import Link from 'next/link';

const AI2026AutonomousSystemsBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-900 via-teal-900 to-cyan-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🤖 AUTONOMOUS AI 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            Self-Managing Business Systems
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Deploy AI systems that run themselves. Self-optimizing, self-healing, and self-scaling 
            autonomous business operations that deliver unprecedented efficiency and growth.
          </p>
        </div>

        {/* Autonomous Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-lg font-bold mb-3">Self-Learning</h3>
            <p className="text-green-100 text-sm">
              Continuously improves from every interaction and data point.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚙️</div>
            <h3 className="text-lg font-bold mb-3">Self-Optimizing</h3>
            <p className="text-green-100 text-sm">
              Automatically adjusts parameters for maximum performance.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🔧</div>
            <h3 className="text-lg font-bold mb-3">Self-Healing</h3>
            <p className="text-green-100 text-sm">
              Detects and resolves issues without human intervention.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-lg font-bold mb-3">Self-Scaling</h3>
            <p className="text-green-100 text-sm">
              Automatically adjusts resources based on demand.
            </p>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white border-opacity-20">
          <h3 className="text-2xl font-bold text-center mb-8">Industry Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-xl font-bold mb-3">Manufacturing</h4>
              <p className="text-green-200 text-sm mb-4">
                Autonomous production lines with 99.5% quality consistency and zero unplanned downtime.
              </p>
              <div className="text-green-300 font-bold">45% Efficiency Increase</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="text-xl font-bold mb-3">Healthcare</h4>
              <p className="text-green-200 text-sm mb-4">
                Self-managing patient care systems with 98.5% diagnostic accuracy.
              </p>
              <div className="text-green-300 font-bold">40% Cost Reduction</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🏪</div>
              <h4 className="text-xl font-bold mb-3">Retail</h4>
              <p className="text-green-200 text-sm mb-4">
                Autonomous commerce operations with dynamic pricing and inventory management.
              </p>
              <div className="text-green-300 font-bold">25% Profit Increase</div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <h4 className="text-xl font-bold mb-4">Fortune 100 Success</h4>
            <p className="text-green-200 mb-4">
              "Our autonomous AI systems have transformed our operations. We've achieved 99.2% on-time delivery 
              and reduced costs by 45% while maintaining zero human intervention for 80% of our processes."
            </p>
            <div className="text-sm text-green-300 font-bold">- Global Manufacturing CEO</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <h4 className="text-xl font-bold mb-4">ROI Achievement</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-green-200">Implementation Cost:</span>
                <span className="text-white font-bold">$2.3M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-200">Annual Savings:</span>
                <span className="text-white font-bold">$8.7M</span>
              </div>
              <div className="flex justify-between border-t border-green-300 pt-2">
                <span className="text-green-200">ROI:</span>
                <span className="text-green-300 font-bold text-xl">378%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2026-autonomous-business-systems"
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More →
            </Link>
            <Link
              href="/case-studies/ai-2026-global-transformation-success"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-900 transition-all duration-300 transform hover:scale-105"
            >
              View Case Study
            </Link>
          </div>
          
          <p className="text-green-200 text-sm">
            Join 200+ enterprises with autonomous AI systems
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2026AutonomousSystemsBanner;