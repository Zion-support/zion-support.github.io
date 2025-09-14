import React from 'react';
import Link from 'next/link';

const SyntheticIntelligence2025Banner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 NEW BREAKTHROUGH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Synthetic Intelligence Revolution 2025-2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the next evolution of AI that's achieving 2,500% ROI for Fortune 500 companies. 
            Self-evolving algorithms, quantum-enhanced neural networks, and autonomous business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2,500%</div>
            <div className="text-lg font-semibold mb-2">ROI Achievement</div>
            <div className="text-sm opacity-80">Fortune 500 companies achieving unprecedented returns</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-green-400 mb-2">99.7%</div>
            <div className="text-lg font-semibold mb-2">Accuracy Rate</div>
            <div className="text-sm opacity-80">Self-evolving AI decision making</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-blue-400 mb-2">500%</div>
            <div className="text-lg font-semibold mb-2">Faster Innovation</div>
            <div className="text-sm opacity-80">AI-generated product development</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-5 rounded-xl p-8 border border-white border-opacity-10">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Revolutionary Capabilities</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Self-evolving algorithms that improve themselves
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Quantum-enhanced neural networks
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Multi-modal intelligence synthesis
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Autonomous system orchestration
              </li>
            </ul>
          </div>
          
          <div className="bg-white bg-opacity-5 rounded-xl p-8 border border-white border-opacity-10">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Business Impact</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                340% average efficiency improvement
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                95% reduction in operational costs
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                99.5% equipment uptime achievement
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Autonomous business transformation
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-2026-synthetic-intelligence-revolution-ultimate-breakthrough"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Read Full Guide
            </Link>
            <Link
              href="/case-studies/ai-2025-2026-synthetic-intelligence-fortune-500-2500-roi-success"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
            <Link
              href="/resources/ai-2025-2026-synthetic-intelligence-implementation-ultimate-master-guide"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Implementation Guide
            </Link>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-lg mb-4">
              <strong>Limited Time:</strong> Get our complete Synthetic Intelligence Implementation Toolkit 
              with proven methodologies, ROI calculators, and step-by-step roadmaps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticIntelligence2025Banner;