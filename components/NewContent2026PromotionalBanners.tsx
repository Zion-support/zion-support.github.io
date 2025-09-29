import React from 'react';
import Link from 'next/link';

export function AIAutonomousInfrastructureBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="text-blue-100 text-sm">Infrastructure</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">
              AI Autonomous Infrastructure 2026
            </h3>
            <p className="text-blue-100 mb-4">
              Master self-managing systems with 99.9% uptime, 90% cost reduction, and zero-touch operations.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-xs text-blue-100">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">90%</div>
                <div className="text-xs text-blue-100">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Zero-Touch</div>
                <div className="text-xs text-blue-100">Operations</div>
              </div>
            </div>
            <Link
              href="/blog/ai-autonomous-infrastructure-2026"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Complete Guide →
            </Link>
          </div>
          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
            <span className="text-4xl">🤖</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIQuantumComputingBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center order-2 md:order-1">
            <span className="text-4xl">⚡</span>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="text-purple-100 text-sm">Quantum AI</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">
              AI Quantum Hybrid Computing 2026
            </h3>
            <p className="text-purple-100 mb-4">
              Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold">1000x</div>
                <div className="text-xs text-purple-100">Faster</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs text-purple-100">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">$50M+</div>
                <div className="text-xs text-purple-100">Market</div>
              </div>
            </div>
            <Link
              href="/blog/ai-quantum-hybrid-computing-2026"
              className="inline-block bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Quantum AI →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AITransformationSuccessBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-green-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW CASE STUDY
              </span>
              <span className="text-green-100 text-sm">Fortune 500</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">
              AI Transformation Mega Success 2026
            </h3>
            <p className="text-green-100 mb-4">
              See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 
              99% automation, 90% cost reduction, complete business revolution.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold">$25M</div>
                <div className="text-xs text-green-100">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-xs text-green-100">Automation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">300%</div>
                <div className="text-xs text-green-100">Productivity</div>
              </div>
            </div>
            <Link
              href="/case-studies/ai-transformation-mega-success-2026"
              className="inline-block bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Success Story →
            </Link>
          </div>
          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
            <span className="text-4xl">🏆</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIZeroTrustSecurityBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-red-600 to-orange-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center order-2 md:order-1">
            <span className="text-4xl">🛡️</span>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="text-red-100 text-sm">Security</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">
              AI Zero Trust Security 2026
            </h3>
            <p className="text-red-100 mb-4">
              Implement zero-trust security architecture with AI-powered threat detection and automated response.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold">99.7%</div>
                <div className="text-xs text-red-100">Threat Detection</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Zero</div>
                <div className="text-xs text-red-100">Trust Model</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs text-red-100">Protection</div>
              </div>
            </div>
            <Link
              href="/blog/ai-zero-trust-security-2026"
              className="inline-block bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn Security →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIFoundationModelsBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="text-indigo-100 text-sm">Foundation Models</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">
              AI Foundation Models Playbook 2026
            </h3>
            <p className="text-indigo-100 mb-4">
              Master foundation model selection, deployment, and optimization for enterprise AI applications.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs text-indigo-100">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">70%</div>
                <div className="text-xs text-indigo-100">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10x</div>
                <div className="text-xs text-indigo-100">Faster Deploy</div>
              </div>
            </div>
            <Link
              href="/blog/ai-foundation-models-2026"
              className="inline-block bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Playbook →
            </Link>
          </div>
          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
            <span className="text-4xl">🧠</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LatestContent2026Banner() {
  return (
    <section className="py-12 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
            🔥 LATEST 2026 CONTENT
          </span>
        </div>
        <h3 className="text-3xl font-bold mb-4">
          Stay Ahead with Revolutionary AI Content
        </h3>
        <p className="text-xl text-teal-100 mb-6 max-w-3xl mx-auto">
          Discover the latest AI innovations, transformation guides, and success stories 
          that are reshaping businesses in 2026
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Explore All Content
          </Link>
          <Link
            href="/case-studies"
            className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
          >
            View Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}