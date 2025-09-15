import React from 'react';
import Link from 'next/link';

const AutonomousEnterprise2026Banner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-900 via-teal-900 to-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🤖 AUTONOMOUS ENTERPRISE 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Self-Managing Business Systems
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your enterprise with fully autonomous AI systems that manage, optimize, 
            and evolve your business processes without human intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚙️</div>
            <h3 className="text-lg font-bold mb-3">Self-Managing Operations</h3>
            <p className="text-gray-300 text-sm">
              Automatic resource allocation, real-time process adjustment, and predictive maintenance.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-lg font-bold mb-3">Intelligent Decisions</h3>
            <p className="text-gray-300 text-sm">
              Strategic decision-making, risk assessment, and market opportunity identification.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-lg font-bold mb-3">Continuous Learning</h3>
            <p className="text-gray-300 text-sm">
              Self-improving algorithms that adapt and evolve without human intervention.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-lg font-bold mb-3">Unlimited Scaling</h3>
            <p className="text-gray-300 text-sm">
              Scale your business operations without limits or bottlenecks.
            </p>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-lg text-gray-300">Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-lg text-gray-300">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">400%</div>
              <div className="text-lg text-gray-300">ROI in 18 Months</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <h3 className="text-xl font-bold mb-4 text-green-400">Manufacturing Excellence</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Smart factories with autonomous production lines</li>
              <li>• 99.99% quality standards maintained automatically</li>
              <li>• Self-optimizing supply chains</li>
              <li>• 95% equipment failure prevention</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Financial Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Autonomous trading outperforming humans by 300%</li>
              <li>• Real-time risk management</li>
              <li>• 99% customer inquiry automation</li>
              <li>• Automatic regulatory compliance</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2026-autonomous-enterprise-systems"
              className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Learn More
            </Link>
            <Link
              href="/services/autonomous-enterprise-systems"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors text-lg"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-colors text-lg"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousEnterprise2026Banner;