import React from 'react';
import Link from 'next/link';

export function AI2026ContentShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            NEW 2026 CONTENT
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Now Live
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover groundbreaking AI insights, breakthrough technologies, and real-world success stories 
            that are transforming industries in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-enterprise-automation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 group-hover:border-cyan-400/50">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                AI Enterprise Automation 2026
              </h3>
              <p className="text-blue-100 mb-6">
                Complete transformation guide with 300% ROI strategies, cutting-edge technologies, 
                and real-world implementation roadmaps.
              </p>
              <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300">
                Read Full Guide →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-computing-breakthrough-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 group-hover:border-purple-400/50">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                Quantum AI Breakthrough
              </h3>
              <p className="text-blue-100 mb-6">
                Revolutionary quantum computing integration achieving 1000x processing speed 
                and solving previously impossible problems.
              </p>
              <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300">
                Explore Breakthrough →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/fortune-500-ai-transformation-success" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 group-hover:border-green-400/50">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">
                Fortune 500 Success Story
              </h3>
              <p className="text-blue-100 mb-6">
                See how a Fortune 500 company achieved 300% ROI and $12M annual savings 
                through comprehensive AI transformation.
              </p>
              <div className="flex items-center text-green-400 font-semibold group-hover:text-green-300">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore All 2026 Content
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AIEnterpriseAutomationRevolutionBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              BREAKTHROUGH TECHNOLOGY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Enterprise Automation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Revolution 2026
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Transform your enterprise with cutting-edge AI automation that delivers 300% ROI, 
              70% cost reduction, and 90% efficiency gains. The future of business is here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-enterprise-automation-2026"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Read Full Guide
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Implementation Help
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">300%</div>
              <div className="text-blue-100">ROI Achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">70%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">90%</div>
              <div className="text-blue-100">Efficiency Gains</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-blue-100">Process Automation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIQuantumComputingBreakthroughBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            QUANTUM BREAKTHROUGH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Quantum Computing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Breakthrough 2026
            </span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Experience the revolutionary power of quantum-enhanced AI achieving 1000x processing speed 
            and solving previously impossible problems across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">1000x Faster</h3>
            <p className="text-purple-100 text-sm">Processing speed compared to classical computers</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">99.9% Accuracy</h3>
            <p className="text-purple-100 text-sm">Quantum machine learning precision</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-2">$50B+ Value</h3>
            <p className="text-purple-100 text-sm">Market value created across industries</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog/ai-quantum-computing-breakthrough-2026"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Quantum AI Breakthrough
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AIMegaTransformationSuccessBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              SUCCESS STORY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Fortune 500 AI
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Transformation Success
              </span>
            </h2>
            <p className="text-xl text-green-100 mb-8">
              See how a Fortune 500 manufacturing company achieved 300% ROI and $12M annual savings 
              through comprehensive AI transformation. Real results, real impact.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">300%</div>
                <div className="text-green-100 text-sm">ROI in 8 months</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">$12M</div>
                <div className="text-green-100 text-sm">Annual savings</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/fortune-500-ai-transformation-success"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                View Case Study
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Get Your Assessment
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
              <ul className="space-y-3 text-green-100">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>95% process automation rate</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>85% reduction in unplanned downtime</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>99.7% quality control accuracy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>90% reduction in customer service tickets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AI2026InnovationShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
            INNOVATION SHOWCASE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Innovation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
              Showcase 2026
            </span>
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Explore the latest AI innovations, breakthrough technologies, and cutting-edge solutions 
            that are reshaping the future of business and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-lg font-bold mb-2">Autonomous Systems</h3>
            <p className="text-indigo-100 text-sm">Self-managing AI systems</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-bold mb-2">Edge Computing</h3>
            <p className="text-indigo-100 text-sm">Sub-50ms response times</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-lg font-bold mb-2">Multimodal AI</h3>
            <p className="text-indigo-100 text-sm">Text, voice, and video processing</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🔬</div>
            <h3 className="text-lg font-bold mb-2">Quantum AI</h3>
            <p className="text-indigo-100 text-sm">1000x processing power</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore All Innovations
          </Link>
        </div>
      </div>
    </section>
  );
}