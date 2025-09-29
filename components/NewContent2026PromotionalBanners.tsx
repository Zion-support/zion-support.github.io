import React from 'react';
import Link from 'next/link';

export function NewContent2026PromotionalBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-6">
            <span className="w-4 h-4 mr-2">✨</span>
            NEW 2026 CONTENT
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-autonomous-infrastructure-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏗️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Autonomous Infrastructure</h3>
                  <p className="text-sm opacity-75">Self-Managing Systems</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Master autonomous infrastructure with AI-driven self-healing, predictive scaling, 
                and zero-touch operations. Achieve 99.9% uptime and 90% cost reduction.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-75">25 min read</div>
                <div className="text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-hybrid-computing-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Quantum AI Computing</h3>
                  <p className="text-sm opacity-75">Next-Gen Intelligence</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Harness quantum computing for AI breakthroughs with 1000x faster optimization 
                and revolutionary capabilities. Complete guide to quantum-AI hybrid systems.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-75">30 min read</div>
                <div className="text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-transformation-mega-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">$25M Success Story</h3>
                  <p className="text-sm opacity-75">Fortune 500 Case Study</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 
                99% automation, 90% cost reduction, and complete business revolution.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-75">35 min read</div>
                <div className="text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All AI Content
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AIInnovation2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-6">
              <span className="w-4 h-4 mr-2">🚀</span>
              LATEST AI INNOVATIONS 2026
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Cutting-Edge AI Solutions for Enterprise
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Discover revolutionary AI technologies that are transforming businesses worldwide. 
              From autonomous infrastructure to quantum computing, explore the future of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-autonomous-infrastructure-2026"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Infrastructure Guide
              </Link>
              <Link
                href="/blog/ai-quantum-hybrid-computing-2026"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Explore Quantum AI
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-sm opacity-75">Infrastructure Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">1000x</div>
              <div className="text-sm opacity-75">Faster Computing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">$25M</div>
              <div className="text-sm opacity-75">ROI Achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">90%</div>
              <div className="text-sm opacity-75">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SuccessStory2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-6">
            <span className="w-4 h-4 mr-2">📈</span>
            SUCCESS STORY 2026
          </div>
          <h2 className="text-4xl font-bold mb-4">
            $25M ROI: Fortune 500 AI Transformation
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            See how a Fortune 500 manufacturing company achieved unprecedented results with 
            comprehensive AI transformation. 99% automation, 90% cost reduction, and complete business revolution.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Transformation Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Annual ROI:</span>
                  <span className="text-2xl font-bold">$25M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Process Automation:</span>
                  <span className="text-2xl font-bold">99%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Cost Reduction:</span>
                  <span className="text-2xl font-bold">90%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Productivity Gain:</span>
                  <span className="text-2xl font-bold">300%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Zero-touch autonomous operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Predictive maintenance and self-healing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>AI-driven supply chain optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Intelligent customer experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/case-studies/ai-transformation-mega-success-2026"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Read Full Case Study
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AIRevolution2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-6">
            <span className="w-4 h-4 mr-2">🔮</span>
            AI REVOLUTION 2026
          </div>
          <h2 className="text-4xl font-bold mb-4">
            The Future of AI is Here
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the next generation of AI technologies that are revolutionizing 
            how businesses operate, compete, and succeed in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏗️</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Autonomous Infrastructure</h3>
            <p className="text-sm opacity-90 mb-4">
              Self-managing systems with 99.9% uptime and zero-touch operations
            </p>
            <Link
              href="/blog/ai-autonomous-infrastructure-2026"
              className="text-sm font-semibold underline hover:no-underline"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚛️</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Quantum AI Computing</h3>
            <p className="text-sm opacity-90 mb-4">
              1000x faster optimization with quantum-AI hybrid systems
            </p>
            <Link
              href="/blog/ai-quantum-hybrid-computing-2026"
              className="text-sm font-semibold underline hover:no-underline"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Proven Success</h3>
            <p className="text-sm opacity-90 mb-4">
              $25M ROI achieved with comprehensive AI transformation
            </p>
            <Link
              href="/case-studies/ai-transformation-mega-success-2026"
              className="text-sm font-semibold underline hover:no-underline"
            >
              Learn More →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All AI Innovations
          </Link>
        </div>
      </div>
    </section>
  );
}