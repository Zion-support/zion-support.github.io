import React from 'react';
import Link from 'next/link';

// Next Generation Enterprise Banner
export function NextGenerationEnterpriseBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🚀 New 2026
              </span>
              <span className="text-sm opacity-90">25 min read</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Next Generation Enterprise 2026
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Master next-generation AI enterprise transformation with autonomous systems, 
              predictive intelligence, and unprecedented ROI. 95% automation, $10M+ savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/blog/ai-next-generation-enterprise-2026"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Complete Guide
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                View Case Studies
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Process Automation</span>
                <span className="font-bold">95%</span>
              </div>
              <div className="flex justify-between">
                <span>Annual ROI</span>
                <span className="font-bold">$10M+</span>
              </div>
              <div className="flex justify-between">
                <span>Zero-Touch Operations</span>
                <span className="font-bold">✓</span>
              </div>
              <div className="flex justify-between">
                <span>Predictive Intelligence</span>
                <span className="font-bold">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Autonomous Business Systems Banner
export function AutonomousBusinessSystemsBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🤖 New 2026
              </span>
              <span className="text-sm opacity-90">28 min read</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Autonomous Business Systems 2026
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Build fully autonomous business systems that operate 24/7 without human intervention. 
              Achieve 99.9% uptime, complete process automation, and $15M+ annual savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/blog/ai-autonomous-business-systems-2026"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Implementation Guide
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">System Capabilities</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>System Uptime</span>
                <span className="font-bold">99.9%</span>
              </div>
              <div className="flex justify-between">
                <span>Annual Savings</span>
                <span className="font-bold">$15M+</span>
              </div>
              <div className="flex justify-between">
                <span>Human Intervention</span>
                <span className="font-bold">Zero</span>
              </div>
              <div className="flex justify-between">
                <span>Self-Healing</span>
                <span className="font-bold">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Global Manufacturing Case Study Banner
export function GlobalManufacturingCaseStudyBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🏭 Featured Case Study
              </span>
              <span className="text-sm opacity-90">Fortune 500</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global Manufacturing AI Transformation
            </h2>
            <p className="text-lg mb-6 opacity-90">
              See how a Fortune 500 manufacturing leader achieved $25M ROI with comprehensive AI transformation. 
              98% automation, 99.9% uptime, and zero-defect operations across 15 facilities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/case-studies/global-manufacturing-ai-transformation-2026"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                View Case Study
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-center"
              >
                Get Assessment
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Transformation Results</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Annual ROI</span>
                <span className="font-bold">$25M</span>
              </div>
              <div className="flex justify-between">
                <span>Process Automation</span>
                <span className="font-bold">98%</span>
              </div>
              <div className="flex justify-between">
                <span>Defect Rate</span>
                <span className="font-bold">0%</span>
              </div>
              <div className="flex justify-between">
                <span>System Uptime</span>
                <span className="font-bold">99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Transformation Success Stories Banner
export function AITransformationSuccessStoriesBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Transformation Success Stories
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Discover how leading enterprises are achieving unprecedented results with AI transformation. 
            Join the revolution and transform your business today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Manufacturing Leader</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>ROI</span>
                <span className="font-bold">$25M</span>
              </div>
              <div className="flex justify-between">
                <span>Automation</span>
                <span className="font-bold">98%</span>
              </div>
              <div className="flex justify-between">
                <span>Defects</span>
                <span className="font-bold">0%</span>
              </div>
            </div>
            <Link
              href="/case-studies/global-manufacturing-ai-transformation-2026"
              className="block mt-4 text-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              View Case Study
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Enterprise Automation</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Savings</span>
                <span className="font-bold">$15M+</span>
              </div>
              <div className="flex justify-between">
                <span>Uptime</span>
                <span className="font-bold">99.9%</span>
              </div>
              <div className="flex justify-between">
                <span>Autonomy</span>
                <span className="font-bold">100%</span>
              </div>
            </div>
            <Link
              href="/blog/ai-autonomous-business-systems-2026"
              className="block mt-4 text-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Read Guide
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Next-Gen Enterprise</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>ROI</span>
                <span className="font-bold">$10M+</span>
              </div>
              <div className="flex justify-between">
                <span>Automation</span>
                <span className="font-bold">95%</span>
              </div>
              <div className="flex justify-between">
                <span>Zero-Touch</span>
                <span className="font-bold">✓</span>
              </div>
            </div>
            <Link
              href="/blog/ai-next-generation-enterprise-2026"
              className="block mt-4 text-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/case-studies"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View All Success Stories
          </Link>
        </div>
      </div>
    </div>
  );
}

// 2026 AI Innovation Showcase Banner
export function AI2026InnovationShowcaseBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🔮 2026 Innovations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cutting-Edge AI Innovations for 2026
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Explore the latest AI technologies and methodologies that are reshaping enterprise operations 
            and delivering unprecedented results across industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-bold mb-2">Autonomous Systems</h3>
            <p className="text-sm opacity-90 mb-4">Self-managing business operations</p>
            <Link
              href="/blog/ai-autonomous-business-systems-2026"
              className="text-cyan-200 hover:text-white font-semibold"
            >
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="text-lg font-bold mb-2">Enterprise AI</h3>
            <p className="text-sm opacity-90 mb-4">Next-generation transformation</p>
            <Link
              href="/blog/ai-next-generation-enterprise-2026"
              className="text-cyan-200 hover:text-white font-semibold"
            >
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🏭</div>
            <h3 className="text-lg font-bold mb-2">Manufacturing AI</h3>
            <p className="text-sm opacity-90 mb-4">Zero-defect operations</p>
            <Link
              href="/case-studies/global-manufacturing-ai-transformation-2026"
              className="text-cyan-200 hover:text-white font-semibold"
            >
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-bold mb-2">Predictive Analytics</h3>
            <p className="text-sm opacity-90 mb-4">Future-ready intelligence</p>
            <Link
              href="/services"
              className="text-cyan-200 hover:text-white font-semibold"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}