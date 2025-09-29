import React from 'react';
import Link from 'next/link';

export function NewContent2026ShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">✨</span>
            NEW 2026 CONTENT
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Autonomous Infrastructure</h3>
                <p className="text-sm opacity-80">Self-managing systems</p>
              </div>
            </div>
            <p className="text-white/90 mb-4">
              Transform your enterprise infrastructure with AI-powered autonomous systems that 
              self-heal, self-optimize, and deliver 99.9% uptime with 90% cost reduction.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-75">25 min read</div>
              <Link
                href="/blog/ai-autonomous-infrastructure-2026"
                className="text-white font-semibold hover:text-yellow-200 transition-colors"
              >
                Read Guide →
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Quantum Computing</h3>
                <p className="text-sm opacity-80">Next-gen intelligence</p>
              </div>
            </div>
            <p className="text-white/90 mb-4">
              Explore the revolutionary potential of AI quantum hybrid computing with 1000x faster 
              optimization, breakthrough algorithms, and unprecedented computational power.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-75">30 min read</div>
              <Link
                href="/blog/ai-quantum-hybrid-computing-2026"
                className="text-white font-semibold hover:text-yellow-200 transition-colors"
              >
                Read Guide →
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Zero Trust Security</h3>
                <p className="text-sm opacity-80">Enterprise protection</p>
              </div>
            </div>
            <p className="text-white/90 mb-4">
              Master AI-powered zero trust security with 99.9% threat detection, autonomous response, 
              and comprehensive enterprise protection frameworks.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-75">28 min read</div>
              <Link
                href="/blog/ai-zero-trust-security-2026"
                className="text-white font-semibold hover:text-yellow-200 transition-colors"
              >
                Read Guide →
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Foundation Models</h3>
                <p className="text-sm opacity-80">Enterprise implementation</p>
              </div>
            </div>
            <p className="text-white/90 mb-4">
              Master the implementation of AI foundation models in enterprise environments with 
              comprehensive strategies, cost optimization, and deployment frameworks for maximum ROI.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-75">35 min read</div>
              <Link
                href="/blog/ai-foundation-models-2026"
                className="text-white font-semibold hover:text-yellow-200 transition-colors"
              >
                Read Playbook →
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Sustainability</h3>
                <p className="text-sm opacity-80">$10M ROI case study</p>
              </div>
            </div>
            <p className="text-white/90 mb-4">
              See how a Fortune 500 company achieved carbon neutrality and $10M ROI with 
              comprehensive AI sustainability transformation and green technology.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-75">Case Study</div>
              <Link
                href="/case-studies/ai-sustainability-transformation-2026"
                className="text-white font-semibold hover:text-yellow-200 transition-colors"
              >
                View Success Story →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Explore All AI Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewContent2026ShowcaseBanner;