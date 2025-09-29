import React from 'react';
import Link from 'next/link';

export function NewContent2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              🚀 New 2026 Content Available!
            </h3>
            <p className="text-lg opacity-90 mb-4 md:mb-0">
              Discover cutting-edge AI guides, case studies, and implementation strategies for 2026
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/ai-autonomous-operations-2026"
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              AI Autonomous Operations
            </Link>
            <Link
              href="/blog/ai-finops-advanced-2026"
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              AI FinOps Advanced
            </Link>
            <Link
              href="/blog/ai-platform-architecture-2026"
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Platform Architecture
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AutonomousOperationsBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                New 2026 Guide
              </span>
              <span className="text-sm opacity-90">25 min read</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              AI Autonomous Operations 2026
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Master autonomous AI operations with zero-touch infrastructure management, 
              predictive maintenance, and self-healing systems. Achieve 99.9% uptime and 80% cost reduction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-autonomous-operations-2026"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Read Complete Guide
              </Link>
              <Link
                href="/case-studies/ai-autonomous-operations-success-2026"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                View Success Story
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-xl font-bold mb-4">Key Benefits</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <div className="font-semibold">Zero-Touch Operations</div>
                  <div className="text-sm opacity-90">Complete automation of routine tasks</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <div className="font-semibold">Predictive Maintenance</div>
                  <div className="text-sm opacity-90">AI-driven failure prediction</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <div className="font-semibold">80% Cost Reduction</div>
                  <div className="text-sm opacity-90">Dynamic resource optimization</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="font-semibold">Self-Healing Systems</div>
                  <div className="text-sm opacity-90">Automatic issue resolution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FinOpsAdvancedBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Advanced 2026
              </span>
              <span className="text-sm opacity-90">20 min read</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              AI FinOps Advanced 2026
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Master advanced AI FinOps with predictive cost optimization, automated financial reporting, 
              and intelligent resource allocation. Achieve 60% cost reduction and 95% accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-finops-advanced-2026"
                className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Read Advanced Guide
              </Link>
              <Link
                href="/services/ai-finops-automation"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Explore FinOps Services
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-xl font-bold mb-4">Advanced Capabilities</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <div className="font-semibold">Predictive Cost Optimization</div>
                  <div className="text-sm opacity-90">AI-driven cost forecasting</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <div>
                  <div className="font-semibold">Automated Reporting</div>
                  <div className="text-sm opacity-90">Complete financial automation</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <div className="font-semibold">Intelligent Allocation</div>
                  <div className="text-sm opacity-90">AI-powered resource optimization</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <div className="font-semibold">Real-time Analytics</div>
                  <div className="text-sm opacity-90">Continuous financial insights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlatformArchitectureBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Architecture Guide
              </span>
              <span className="text-sm opacity-90">30 min read</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              AI Platform Architecture 2026
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Design and implement enterprise-scale AI platforms with microservices, edge computing, 
              and autonomous scaling. Achieve 99.9% uptime and 10x performance improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-platform-architecture-2026"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Read Architecture Guide
              </Link>
              <Link
                href="/services/ai-platform-architecture"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Get Architecture Consultation
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-xl font-bold mb-4">Platform Components</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <div className="font-semibold">Microservices Architecture</div>
                  <div className="text-sm opacity-90">Scalable, decoupled services</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="font-semibold">Edge Computing</div>
                  <div className="text-sm opacity-90">Low-latency AI inference</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <div>
                  <div className="font-semibold">Autonomous Scaling</div>
                  <div className="text-sm opacity-90">AI-driven resource allocation</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <div className="font-semibold">Security-First Design</div>
                  <div className="text-sm opacity-90">End-to-end security</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AutonomousOperationsSuccessBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Success Story
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Fortune 500
              </span>
              <span className="text-sm opacity-90">15 min read</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              $15M ROI with AI Autonomous Operations
            </h3>
            <p className="text-lg opacity-90 mb-6">
              See how a Fortune 500 manufacturing company achieved $15M ROI with AI autonomous operations. 
              99.9% uptime, 85% cost reduction, and zero-touch infrastructure management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-autonomous-operations-success-2026"
                className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                View Case Study
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Get Your ROI Assessment
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-xl font-bold mb-4">Proven Results</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">$15M</div>
                <div className="text-sm opacity-90">Total ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm opacity-90">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-90">Process Automation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NewContentShowcaseBanner2026() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎉 New 2026 Content Library
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Explore our comprehensive collection of cutting-edge AI guides, case studies, and implementation strategies for 2026
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/blog/ai-autonomous-operations-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-200">
                AI Autonomous Operations
              </h3>
              <p className="text-sm opacity-90">
                Complete guide to zero-touch infrastructure management with 99.9% uptime
              </p>
            </div>
          </Link>
          
          <Link href="/blog/ai-finops-advanced-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-200">
                AI FinOps Advanced
              </h3>
              <p className="text-sm opacity-90">
                Master financial operations automation with 60% cost reduction
              </p>
            </div>
          </Link>
          
          <Link href="/blog/ai-platform-architecture-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-200">
                Platform Architecture
              </h3>
              <p className="text-sm opacity-90">
                Enterprise-scale AI infrastructure with 10x performance improvement
              </p>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
          >
            Explore All 2026 Content →
          </Link>
        </div>
      </div>
    </div>
  );
}