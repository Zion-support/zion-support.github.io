import Link from 'next/link';
import React from 'react';

// AI Advanced Automation 2026 Banner
export function AIAdvancedAutomationBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Latest AI Innovations 2026
          </h2>
          <p className="text-xl text-indigo-100 mb-6">
            Discover breakthrough AI technologies that are transforming enterprises worldwide
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Link href="/blog/ai-enterprise-automation-2026" className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-all">
            <h3 className="font-semibold mb-2">AI Enterprise Automation 2026</h3>
            <p className="text-sm text-indigo-100">95% process efficiency, $5M+ savings</p>
          </Link>
          <Link href="/blog/ai-quantum-computing-2026" className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-all">
            <h3 className="font-semibold mb-2">AI Quantum Computing 2026</h3>
            <p className="text-sm text-indigo-100">1000x faster optimization</p>
          </Link>
          <Link href="/blog/ai-sustainability-green-tech-2026" className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-all">
            <h3 className="font-semibold mb-2">AI Sustainability & Green Tech</h3>
            <p className="text-sm text-indigo-100">80% energy reduction, carbon-neutral</p>
          </Link>
        </div>
        <div className="text-center">
          <Link
            href="/blog"
            className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold inline-block transition-colors"
          >
            Explore All 2026 Content →
          </Link>
        </div>
      </div>
    </div>
  );
}

// AI Enterprise Automation Banner
export function AIEnterpriseAutomationBanner() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Enterprise Automation 2026
            </h2>
            <p className="text-xl text-green-100 mb-6">
              Transform your enterprise with 95% process efficiency and $5M+ annual savings through comprehensive AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-enterprise-automation-2026"
                className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Read Complete Guide
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Get Implementation Help
              </Link>
            </div>
          </div>
          <div className="bg-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
            <ul className="space-y-2 text-green-100">
              <li>• 95% process automation efficiency</li>
              <li>• $5M+ annual cost savings</li>
              <li>• Zero-touch operations</li>
              <li>• 300% productivity gains</li>
              <li>• Complete implementation roadmap</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Quantum Computing Banner
export function AIQuantumComputingBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Quantum Computing 2026
            </h2>
            <p className="text-xl text-purple-100 mb-6">
              Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-quantum-computing-2026"
                className="bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Learn About Quantum AI
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Get Quantum AI Consultation
              </Link>
            </div>
          </div>
          <div className="bg-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Revolutionary Capabilities</h3>
            <ul className="space-y-2 text-purple-100">
              <li>• 1000x faster optimization</li>
              <li>• Quantum machine learning models</li>
              <li>• Quantum-enhanced neural networks</li>
              <li>• Breakthrough quantum cryptography</li>
              <li>• Practical implementation roadmap</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Sustainability Banner
export function AISustainabilityBanner() {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Sustainability & Green Tech 2026
            </h2>
            <p className="text-xl text-emerald-100 mb-6">
              Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-sustainability-green-tech-2026"
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Read Green AI Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Get Green AI Consultation
              </Link>
            </div>
          </div>
          <div className="bg-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Sustainability Impact</h3>
            <ul className="space-y-2 text-emerald-100">
              <li>• 80% energy reduction</li>
              <li>• Carbon-neutral operations</li>
              <li>• $2M+ annual savings</li>
              <li>• 100% renewable energy</li>
              <li>• Complete implementation roadmap</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Case Studies Success Banner
export function CaseStudiesSuccessBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🏆 Proven Success Stories
          </h2>
          <p className="text-xl text-orange-100 mb-6">
            See how Fortune 500 companies achieved remarkable results with our AI solutions
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-all">
            <h3 className="font-semibold mb-2">$25M ROI Case Study</h3>
            <p className="text-sm text-orange-100">Fortune 500: 99.9% uptime, 90% cost reduction</p>
          </Link>
          <Link href="/case-studies/ai-retail-automation-2026" className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-all">
            <h3 className="font-semibold mb-2">$8M ROI Retail Success</h3>
            <p className="text-sm text-orange-100">98% automation, 300% productivity gains</p>
          </Link>
          <Link href="/case-studies/ai-enterprise-transformation-success-2026" className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-all">
            <h3 className="font-semibold mb-2">$10M Enterprise Transformation</h3>
            <p className="text-sm text-orange-100">95% automation, 300% productivity</p>
          </Link>
        </div>
        <div className="text-center">
          <Link
            href="/case-studies"
            className="bg-white text-orange-700 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold inline-block transition-colors"
          >
            View All Success Stories →
          </Link>
        </div>
      </div>
    </div>
  );
}

// AI ROI Calculator Banner
export function AIROICalculatorBanner() {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calculate Your AI ROI
            </h2>
            <p className="text-xl text-cyan-100 mb-6">
              Discover the potential return on investment for AI transformation in your organization. Get personalized insights and recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/ai-roi-calculator"
                className="bg-white text-cyan-600 hover:bg-cyan-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Try ROI Calculator
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
          <div className="bg-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">ROI Calculator Features</h3>
            <ul className="space-y-2 text-cyan-100">
              <li>• Industry-specific calculations</li>
              <li>• Customizable parameters</li>
              <li>• Detailed cost breakdown</li>
              <li>• Timeline projections</li>
              <li>• Implementation recommendations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive Content Banner
export function InteractiveContentBanner() {
  return (
    <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎯 Interactive AI Tools & Resources
          </h2>
          <p className="text-xl text-pink-100 mb-6">
            Explore our interactive tools, calculators, and resources to understand AI's potential for your business
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Link href="/ai-roi-calculator" className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-all text-center">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-semibold mb-2">ROI Calculator</h3>
            <p className="text-sm text-pink-100">Calculate AI investment returns</p>
          </Link>
          <Link href="/ai-readiness-assessment" className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-all text-center">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold mb-2">Readiness Assessment</h3>
            <p className="text-sm text-pink-100">Evaluate your AI readiness</p>
          </Link>
          <Link href="/ai-use-case-finder" className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-all text-center">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold mb-2">Use Case Finder</h3>
            <p className="text-sm text-pink-100">Discover AI opportunities</p>
          </Link>
          <Link href="/ai-implementation-roadmap" className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-all text-center">
            <div className="text-2xl mb-2">🗺️</div>
            <h3 className="font-semibold mb-2">Implementation Roadmap</h3>
            <p className="text-sm text-pink-100">Plan your AI journey</p>
          </Link>
        </div>
        <div className="text-center">
          <Link
            href="/tools"
            className="bg-white text-pink-700 hover:bg-pink-50 px-6 py-3 rounded-lg font-semibold inline-block transition-colors"
          >
            Explore All Tools →
          </Link>
        </div>
      </div>
    </div>
  );
}

// Newsletter Signup Banner
export function NewsletterSignupBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Ahead with AI Insights
        </h2>
        <p className="text-xl text-indigo-100 mb-6">
          Get the latest AI trends, case studies, and implementation guides delivered to your inbox weekly.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-indigo-200 mt-2">
            Join 10,000+ AI professionals. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}