import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import MegaContentDropBanner from '../../components/MegaContentDropBanner';

export default function ContentShowcase() {
  return (
    <>
      <SEO
        title="AI Content Showcase - Complete Library of Resources, Guides & Tools"
        description="Explore our comprehensive AI content library featuring breakthrough guides, exclusive case studies, interactive tools, and implementation resources for 2025."
        keywords="AI content, AI resources, AI guides, AI tools, AI case studies, AI implementation, content library"
        url="/content-showcase"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Content Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                The most comprehensive AI content library ever assembled. From breakthrough guides to interactive tools - 
                everything you need to master AI in 2025 and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/ai-2025-enterprise-automation-revolution"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Start with Latest Guide
                </Link>
                <Link
                  href="/tools/ai-roi-calculator"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
                >
                  Try AI Tools
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mega Content Banner */}
        <MegaContentDropBanner variant="premium" maxItems={8} />

        {/* Featured Content Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Content Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our content organized by category to find exactly what you need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Enterprise AI */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise AI</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive guides for implementing AI in large organizations, including automation, 
                  transformation strategies, and ROI optimization.
                </p>
                <div className="space-y-3">
                  <Link href="/blog/ai-2025-enterprise-automation-revolution" className="block text-blue-600 hover:text-blue-700 font-medium">
                    → AI Enterprise Automation Revolution
                  </Link>
                  <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="block text-blue-600 hover:text-blue-700 font-medium">
                    → $200M Manufacturing Success Story
                  </Link>
                  <Link href="/resources/ai-implementation-master-guide-2026" className="block text-blue-600 hover:text-blue-700 font-medium">
                    → AI Implementation Master Guide
                  </Link>
                </div>
              </div>

              {/* Sustainability & Green Tech */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability & Green Tech</h3>
                <p className="text-gray-600 mb-6">
                  AI solutions for environmental sustainability, including green tech implementation, 
                  carbon reduction strategies, and eco-friendly systems.
                </p>
                <div className="space-y-3">
                  <Link href="/blog/ai-2025-sustainability-green-tech" className="block text-green-600 hover:text-green-700 font-medium">
                    → AI Sustainability & Green Tech Guide
                  </Link>
                  <Link href="/case-studies/ai-sustainability-transformation-2025" className="block text-green-600 hover:text-green-700 font-medium">
                    → Sustainability Transformation Case Study
                  </Link>
                  <Link href="/tools/carbon-footprint-calculator" className="block text-green-600 hover:text-green-700 font-medium">
                    → Carbon Footprint Calculator
                  </Link>
                </div>
              </div>

              {/* AI Tools & Calculators */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Tools & Calculators</h3>
                <p className="text-gray-600 mb-6">
                  Interactive tools and calculators to help you assess, plan, and optimize your AI initiatives 
                  with data-driven insights.
                </p>
                <div className="space-y-3">
                  <Link href="/tools/ai-roi-calculator" className="block text-purple-600 hover:text-purple-700 font-medium">
                    → AI ROI Calculator
                  </Link>
                  <Link href="/tools/ai-readiness-assessment" className="block text-purple-600 hover:text-purple-700 font-medium">
                    → AI Readiness Assessment
                  </Link>
                  <Link href="/tools/ai-training-simulator" className="block text-purple-600 hover:text-purple-700 font-medium">
                    → AI Training Simulator
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Latest AI Content
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get weekly updates on new content, tools, and exclusive insights delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}