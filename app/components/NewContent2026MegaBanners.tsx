import React from 'react';
import Link from 'next/link';

export function AI2026ContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content 2026
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Breakthrough Technologies & Success Stories
            </span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover the latest AI breakthroughs, quantum computing advances, and autonomous business systems 
            that are transforming enterprises in 2026. Get exclusive insights and proven strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-autonomous-business-systems-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-yellow-300 transition-colors">
                    AI Autonomous Business Systems
                  </h3>
                  <p className="text-sm opacity-80">Complete Enterprise Guide</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Learn how AI autonomous systems achieve 400% ROI, 85% automation, and complete business transformation.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-computing-breakthrough-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-yellow-300 transition-colors">
                    Quantum Computing Breakthrough
                  </h3>
                  <p className="text-sm opacity-80">Revolutionary Applications</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Explore quantum AI breakthroughs achieving 1000x performance improvements and solving impossible problems.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-manufacturing-transformation-mega-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏭</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-yellow-300 transition-colors">
                    Manufacturing Mega Success
                  </h3>
                  <p className="text-sm opacity-80">500% ROI Case Study</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                See how a Fortune 500 company achieved 500% ROI, 90% efficiency gains, and $200M annual savings.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4">
            <Link
              href="/blog"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All 2026 Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIEnterpriseAutomationRevolutionBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">ENTERPRISE AUTOMATION REVOLUTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Enterprise Automation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Revolution 2026
              </span>
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Transform your enterprise with autonomous AI systems that achieve 400% ROI, 
              85% process automation, and complete business transformation. Join the revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/blog/ai-autonomous-business-systems-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-300 mb-2">400%</div>
              <div className="text-sm opacity-80">ROI in 12 months</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-300 mb-2">85%</div>
              <div className="text-sm opacity-80">Process Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-300 mb-2">70%</div>
              <div className="text-sm opacity-80">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-pink-300 mb-2">90%</div>
              <div className="text-sm opacity-80">Efficiency Gains</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIQuantumComputingBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">QUANTUM COMPUTING BREAKTHROUGH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Quantum Computing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Breakthrough 2026
            </span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover revolutionary quantum AI technologies achieving 1000x performance improvements, 
            solving previously impossible problems, and transforming enterprise applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
              <span className="text-3xl">⚛️</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Quantum Machine Learning</h3>
            <p className="text-gray-300 mb-4">
              1000x faster training times with 99.9% prediction accuracy using quantum algorithms.
            </p>
            <div className="text-purple-300 font-semibold">Learn More →</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Quantum Optimization</h3>
            <p className="text-gray-300 mb-4">
              Solve complex combinatorial problems in seconds with quantum optimization algorithms.
            </p>
            <div className="text-blue-300 font-semibold">Learn More →</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
              <span className="text-3xl">🧠</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Quantum Neural Networks</h3>
            <p className="text-gray-300 mb-4">
              Process 10^15 operations per second with quantum neural network architectures.
            </p>
            <div className="text-green-300 font-semibold">Learn More →</div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog/ai-quantum-computing-breakthrough-2026"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
          >
            Explore Quantum AI Breakthroughs
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AIMegaTransformationSuccessBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">MEGA TRANSFORMATION SUCCESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Manufacturing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Mega Success 2026
              </span>
            </h2>
            <p className="text-xl opacity-90 mb-8">
              See how a Fortune 500 manufacturing company achieved 500% ROI, 90% efficiency gains, 
              and $200M annual savings through comprehensive AI transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-manufacturing-transformation-mega-success-2026"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                View Success Story
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Get Similar Results
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">ROI Achievement</h3>
                <div className="text-3xl font-bold text-yellow-300">500%</div>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-yellow-300 to-orange-300 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Efficiency Gains</h3>
                <div className="text-3xl font-bold text-cyan-300">90%</div>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-300 to-blue-300 h-2 rounded-full" style={{width: '90%'}}></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Annual Savings</h3>
                <div className="text-3xl font-bold text-green-300">$200M</div>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-300 to-teal-300 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AI2026InnovationShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">2026 INNOVATION SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Innovation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              Showcase 2026
            </span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Explore the latest AI innovations, breakthrough technologies, and revolutionary solutions 
            that are reshaping industries and transforming business operations in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Autonomous AI</h3>
            <p className="text-sm text-gray-300">Self-managing systems</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚛️</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Quantum AI</h3>
            <p className="text-sm text-gray-300">Quantum computing</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏭</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Smart Manufacturing</h3>
            <p className="text-sm text-gray-300">Intelligent production</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Neural Networks</h3>
            <p className="text-sm text-gray-300">Advanced learning</p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg"
            >
              Explore All Innovations
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Implement AI Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}