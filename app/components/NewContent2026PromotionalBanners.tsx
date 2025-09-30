import React from 'react';
import Link from 'next/link';

export function AI2026BreakthroughsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 NEW ARTICLE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI Breakthroughs 2026: Revolutionary Technologies
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover the most groundbreaking AI technologies of 2026 that are transforming industries and creating unprecedented opportunities for businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2026-breakthroughs"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Read Full Article →
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIManufacturingSuccessBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏭 SUCCESS STORY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              AI Manufacturing Transformation: 85% Efficiency Gain
            </h2>
            <p className="text-xl opacity-90 mb-6">
              See how a global manufacturer achieved 85% efficiency improvement and $15M annual savings through comprehensive AI transformation.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">85%</div>
                <div className="text-sm opacity-75">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">$15M</div>
                <div className="text-sm opacity-75">Annual Savings</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-manufacturing-transformation"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
              >
                Read Case Study →
              </Link>
              <Link
                href="/services/ai-manufacturing-automation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Key Results</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold">90% Reduction in Downtime</div>
                  <div className="text-sm opacity-75">Through predictive maintenance</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold">99.5% Quality Accuracy</div>
                  <div className="text-sm opacity-75">AI-powered defect detection</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold">300% ROI in 6 Months</div>
                  <div className="text-sm opacity-75">Proven return on investment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIInnovationShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔬 INNOVATION SPOTLIGHT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest AI Innovations & Breakthroughs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with cutting-edge AI technologies and revolutionary solutions that are transforming industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Edge Computing AI</h3>
                <p className="text-sm text-gray-500">Real-time intelligence</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Achieve sub-50ms response times with AI processing at the edge of networks. Perfect for autonomous vehicles, IoT devices, and real-time applications.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Published Jan 20, 2026</div>
              <Link
                href="/blog/ai-2026-breakthroughs"
                className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏭</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Manufacturing AI</h3>
                <p className="text-sm text-gray-500">85% efficiency gains</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              See how AI automation achieved 85% process efficiency improvement and $15M annual savings for leading manufacturers.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Success Story</div>
              <Link
                href="/case-studies/ai-manufacturing-transformation"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Autonomous Agents</h3>
                <p className="text-sm text-gray-500">Self-managing systems</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Self-managing AI systems achieving 95% operational efficiency with autonomous decision-making and continuous optimization.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">New Technology</div>
              <Link
                href="/blog/ai-2026-breakthroughs"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All Innovations
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AIRevolutionaryContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔥 REVOLUTIONARY CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The AI Revolution is Here
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover groundbreaking AI technologies, success stories, and implementation guides that are transforming businesses worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-bold mb-2">AI Breakthroughs 2026</h3>
            <p className="text-sm opacity-75 mb-4">Revolutionary technologies shaping the future</p>
            <Link
              href="/blog/ai-2026-breakthroughs"
              className="text-orange-200 hover:text-white font-semibold text-sm"
            >
              Read Article →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🏭</div>
            <h3 className="text-lg font-bold mb-2">Manufacturing Success</h3>
            <p className="text-sm opacity-75 mb-4">85% efficiency gain & $15M savings</p>
            <Link
              href="/case-studies/ai-manufacturing-transformation"
              className="text-orange-200 hover:text-white font-semibold text-sm"
            >
              View Case Study →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="text-lg font-bold mb-2">AI Services</h3>
            <p className="text-sm opacity-75 mb-4">Comprehensive AI solutions</p>
            <Link
              href="/services/ai-manufacturing-automation"
              className="text-orange-200 hover:text-white font-semibold text-sm"
            >
              Explore Services →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-bold mb-2">All Content</h3>
            <p className="text-sm opacity-75 mb-4">Articles, case studies & more</p>
            <Link
              href="/blog"
              className="text-orange-200 hover:text-white font-semibold text-sm"
            >
              View All →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/contact"
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your AI Transformation
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AIFutureTechBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔮 FUTURE TECH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Future of AI is Now
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the next generation of AI technologies that are already transforming businesses today
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Revolutionary AI Technologies</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Quantum-Enhanced AI</h4>
                  <p className="text-gray-300">1000x faster processing for complex optimization problems</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Autonomous Agents</h4>
                  <p className="text-gray-300">Self-managing AI systems with 95% operational efficiency</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Edge Intelligence</h4>
                  <p className="text-gray-300">Sub-10ms response times for real-time applications</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Proven Results</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Manufacturing Efficiency</span>
                <span className="text-2xl font-bold text-green-400">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Annual Savings</span>
                <span className="text-2xl font-bold text-blue-400">$15M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Quality Accuracy</span>
                <span className="text-2xl font-bold text-purple-400">99.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">ROI Timeline</span>
                <span className="text-2xl font-bold text-orange-400">6 months</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <Link
                href="/blog/ai-2026-breakthroughs"
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-600 transition-all"
              >
                Explore AI Breakthroughs →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}