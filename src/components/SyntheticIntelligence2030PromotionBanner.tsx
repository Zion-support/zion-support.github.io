import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const SyntheticIntelligence2030PromotionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🧬 SYNTHETIC INTELLIGENCE 2030</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Business Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the next evolutionary leap in AI—systems that createmodifyand improve themselves. 
            Unlock autonomous evolutioncreative problem-solvingand unprecedented innovation capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-lg font-bold mb-3">Self-Modifying</h3>
            <p className="text-gray-300 text-sm mb-4">
              AI systems that write and optimize their own algorithms autonomously.
            </p>
            <div className="text-xl font-bold text-green-400">Autonomous Evolution</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-lg font-bold mb-3">Creative AI</h3>
            <p className="text-gray-300 text-sm mb-4">
              Generate novel solutions and approaches to complex business challenges.
            </p>
            <div className="text-xl font-bold text-blue-400">Innovation Engine</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-lg font-bold mb-3">AI Creation</h3>
            <p className="text-gray-300 text-sm mb-4">
              Create specialized AI systems for specific tasks and business functions.
            </p>
            <div className="text-xl font-bold text-purple-400">Self-Replication</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-bold mb-3">Adaptive Intelligence</h3>
            <p className="text-gray-300 text-sm mb-4">
              Continuously adapt to changing business environments and requirements.
            </p>
            <div className="text-xl font-bold text-yellow-400">Dynamic Learning</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Synthetic Intelligence Business Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">🏭</div>
              <h4 className="text-lg font-bold mb-2">Manufacturing</h4>
              <p className="text-gray-300 text-sm">
                Autonomous production optimization and self-evolving manufacturing processes.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-lg font-bold mb-2">Finance</h4>
              <p className="text-gray-300 text-sm">
                Autonomous trading systems and self-improving risk management platforms.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg font-bold mb-2">Healthcare</h4>
              <p className="text-gray-300 text-sm">
                Drug discovery automation and self-evolving diagnostic systems.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 mb-8">
            <h3 className="text-2xl font-bold mb-4">Expected Impact by 2030</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">1000%</div>
                <div className="text-sm text-gray-300">Faster Innovation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">99%</div>
                <div className="text-sm text-gray-300">Less Human Intervention</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10,000%</div>
                <div className="text-sm text-gray-300">Early Adopter ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">$100B</div>
                <div className="text-sm text-gray-300">Market Opportunity</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog/synthetic-intelligence-2030-business-revolution"
              className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Read Full Guide
            </a>
            <a
              href="/services/synthetic-intelligence"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-900 transition-colors text-lg"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-colors text-lg"
            >
              Start Revolution
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticIntelligence2030PromotionBanner;