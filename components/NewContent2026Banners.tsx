import React from 'react';
import Link from 'next/link';

export function Latest2026ContentBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            🚀 Latest AI Innovations: January 2026
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our newest comprehensive guides on autonomous cloud operations, 
            fintech transformation, and retail automation breakthroughs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link 
            href="/blog/ai-autonomous-cloud-ops-2026" 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3">☁️</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              AI Autonomous Cloud Operations
            </h3>
            <p className="text-sm opacity-90">
              Self-healing infrastructure with 99.9% uptime and 90% cost reduction
            </p>
            <div className="mt-3 text-xs opacity-75">
              18 min read • NEW 2026
            </div>
          </Link>

          <Link 
            href="/blog/ai-fintech-transformation-2026" 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              AI FinTech Transformation
            </h3>
            <p className="text-sm opacity-90">
              95% automation, $5M+ savings, and digital banking revolution
            </p>
            <div className="mt-3 text-xs opacity-75">
              22 min read • NEW 2026
            </div>
          </Link>

          <Link 
            href="/case-studies/ai-retail-automation-2026" 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3">🏪</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              AI Retail Automation
            </h3>
            <p className="text-sm opacity-90">
              $8M ROI case study with 98% automation and 300% productivity
            </p>
            <div className="mt-3 text-xs opacity-75">
              15 min read • Fortune 500
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link 
            href="/blog" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Explore All New Content →
          </Link>
        </div>
      </div>
    </div>
  );
}

export function AIAutonomousCloudOpsBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              ☁️ AI Autonomous Cloud Operations 2026
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Transform your cloud infrastructure with self-healing systems that achieve 99.9% uptime, 
              90% cost reduction, and zero-touch operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-autonomous-cloud-ops-2026"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Full Guide
              </Link>
              <Link
                href="/services/ai-autonomous-cloud-ops"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>✅</span>
                <span>99.9% uptime guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span>
                <span>90% operational cost reduction</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span>
                <span>Zero-touch incident response</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span>
                <span>Predictive scaling & optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AIFinTechTransformationBanner() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              💰 AI FinTech Transformation 2026
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Revolutionize your financial services with AI-driven solutions achieving 95% automation, 
              $5M+ annual savings, and superior customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-fintech-transformation-2026"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Complete Guide
              </Link>
              <Link
                href="/services/ai-fintech-solutions"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                View FinTech Solutions
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Transformation Results</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>✅</span>
                <span>95% process automation</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span>
                <span>$5M+ annual cost savings</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span>
                <span>80% faster loan processing</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span>
                <span>99.9% fraud detection accuracy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AIRetailAutomationBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              🏪 AI Retail Automation Success Story
            </h2>
            <p className="text-lg opacity-90 mb-6">
              See how a Fortune 500 retailer achieved $8M ROI with 98% automation, 300% productivity gains, 
              and complete operational transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-retail-automation-2026"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Case Study
              </Link>
              <Link
                href="/services/ai-retail-automation"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Explore Retail Solutions
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Success Metrics</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>✅</span>
                <span>$8M annual ROI achieved</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span>
                <span>98% process automation</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span>
                <span>300% productivity increase</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✅</span>
                <span>80% reduction in stockouts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}