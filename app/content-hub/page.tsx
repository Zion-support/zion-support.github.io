import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Content Hub - AI Insights, Case Studies & Resources | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI insights, case studies, whitepapers, and resources. Stay ahead with the latest in AI technology and enterprise transformation.',
  keywords: 'AI content hub, AI resources, AI insights, case studies, whitepapers, AI trends, enterprise AI',
  openGraph: {
    title: 'Content Hub - AI Insights, Case Studies & Resources',
    description: 'Explore our comprehensive collection of AI insights, case studies, whitepapers, and resources.',
    type: 'website',
    url: 'https://ziontechgroup.com/content-hub',
    images: [
      {
        url: '/content-hub-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group Content Hub',
      },
    ],
  },
};

export default function ContentHubPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              New Content Hub
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Content Hub: Your Gateway to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {' '}Enterprise Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of AI insights, case studies, whitepapers, 
              and resources. Stay ahead with the latest in AI technology and enterprise transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link href="/blog/ai-revolution-2026-next-frontier" className="group">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-red-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured Article
                  </span>
                  <span className="text-sm text-gray-500">25 min read</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  AI Revolution 2026: The Next Frontier
                </h3>
                <p className="text-gray-600 mb-6">
                  Discover autonomous AI agents, neural interfaces, and predictive intelligence systems 
                  achieving 300% productivity gains and revolutionizing enterprise operations.
                </p>
                <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/blog/quantum-ai-breakthrough-2026" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-purple-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Breakthrough
                  </span>
                  <span className="text-sm text-gray-500">25 min read</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  Quantum AI Breakthrough 2026
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore quantum-enhanced AI delivering 500x faster results and revolutionizing 
                  computational capabilities across enterprise operations.
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/case-studies/global-manufacturing-ai-transformation" className="group">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">15 min read</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  Manufacturing AI Transformation
                </h3>
                <p className="text-gray-600 mb-6">
                  See how a Fortune 500 manufacturer achieved $50M annual savings and 95% efficiency 
                  improvements through comprehensive AI transformation across 47 countries.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  View Case Study →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore by Category</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* AI Trends & Predictions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Trends & Predictions</h3>
              <p className="text-gray-600 mb-6">
                Stay ahead with the latest AI trends, predictions, and future outlook for enterprise technology.
              </p>
              <div className="space-y-3">
                <Link href="/blog/ai-trends-2026-predictions" className="block text-blue-600 hover:text-blue-700 font-semibold">
                  AI Trends 2026 Predictions →
                </Link>
                <Link href="/blog/ai-revolution-2026-next-frontier" className="block text-blue-600 hover:text-blue-700 font-semibold">
                  AI Revolution 2026 →
                </Link>
                <Link href="/blog/ai-2026-mega-trends" className="block text-blue-600 hover:text-blue-700 font-semibold">
                  AI 2026 Mega Trends →
                </Link>
              </div>
            </div>

            {/* Case Studies */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Success Stories</h3>
              <p className="text-gray-600 mb-6">
                Real-world case studies showcasing how organizations achieve remarkable results with AI transformation.
              </p>
              <div className="space-y-3">
                <Link href="/case-studies/global-manufacturing-ai-transformation" className="block text-green-600 hover:text-green-700 font-semibold">
                  Manufacturing Transformation →
                </Link>
                <Link href="/case-studies/fintech-ai-transformation" className="block text-green-600 hover:text-green-700 font-semibold">
                  FinTech AI Success →
                </Link>
                <Link href="/case-studies/healthcare-ai-implementation" className="block text-green-600 hover:text-green-700 font-semibold">
                  Healthcare AI Case Study →
                </Link>
              </div>
            </div>

            {/* Technical Deep Dives */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Deep Dives</h3>
              <p className="text-gray-600 mb-6">
                In-depth technical articles covering quantum AI, neural interfaces, and advanced AI technologies.
              </p>
              <div className="space-y-3">
                <Link href="/blog/quantum-ai-breakthrough-2026" className="block text-purple-600 hover:text-purple-700 font-semibold">
                  Quantum AI Breakthrough →
                </Link>
                <Link href="/blog/ai-neural-interfaces-2026" className="block text-purple-600 hover:text-purple-700 font-semibold">
                  Neural Interfaces 2026 →
                </Link>
                <Link href="/blog/ai-autonomous-systems-2026" className="block text-purple-600 hover:text-purple-700 font-semibold">
                  Autonomous AI Systems →
                </Link>
              </div>
            </div>

            {/* Implementation Guides */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation Guides</h3>
              <p className="text-gray-600 mb-6">
                Practical guides and blueprints for implementing AI solutions in your organization.
              </p>
              <div className="space-y-3">
                <Link href="/blog/ai-enterprise-transformation-guide" className="block text-orange-600 hover:text-orange-700 font-semibold">
                  Enterprise AI Guide →
                </Link>
                <Link href="/blog/ai-implementation-best-practices" className="block text-orange-600 hover:text-orange-700 font-semibold">
                  Best Practices →
                </Link>
                <Link href="/blog/ai-roi-optimization" className="block text-orange-600 hover:text-orange-700 font-semibold">
                  ROI Optimization →
                </Link>
              </div>
            </div>

            {/* Industry Insights */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Insights</h3>
              <p className="text-gray-600 mb-6">
                Industry-specific AI insights and transformation strategies for various sectors.
              </p>
              <div className="space-y-3">
                <Link href="/blog/ai-manufacturing-2026" className="block text-indigo-600 hover:text-indigo-700 font-semibold">
                  Manufacturing AI →
                </Link>
                <Link href="/blog/ai-finance-transformation" className="block text-indigo-600 hover:text-indigo-700 font-semibold">
                  Finance AI →
                </Link>
                <Link href="/blog/ai-healthcare-revolution" className="block text-indigo-600 hover:text-indigo-700 font-semibold">
                  Healthcare AI →
                </Link>
              </div>
            </div>

            {/* Resources & Tools */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resources & Tools</h3>
              <p className="text-gray-600 mb-6">
                Downloadable resources, calculators, and tools to help with your AI transformation journey.
              </p>
              <div className="space-y-3">
                <Link href="/tools/ai-roi-calculator" className="block text-teal-600 hover:text-teal-700 font-semibold">
                  AI ROI Calculator →
                </Link>
                <Link href="/resources/ai-implementation-checklist" className="block text-teal-600 hover:text-teal-700 font-semibold">
                  Implementation Checklist →
                </Link>
                <Link href="/resources/ai-whitepapers" className="block text-teal-600 hover:text-teal-700 font-semibold">
                  AI Whitepapers →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Content</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2026-enterprise-automation" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">20 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Enterprise Automation 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how autonomous AI systems are revolutionizing enterprise operations with 400% ROI.
                </p>
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-supply-chain-optimization" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Case Study
                  </span>
                  <span className="text-sm text-gray-500">12 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Supply Chain AI Optimization
                </h3>
                <p className="text-gray-600 mb-4">
                  See how AI optimization reduced supply chain costs by 60% and improved delivery times.
                </p>
                <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  View Case Study →
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-multimodal-integration-2026" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Technical
                  </span>
                  <span className="text-sm text-gray-500">18 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Multimodal AI Integration 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to integrate text, image, and voice AI systems for enhanced user experiences.
                </p>
                <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated with AI Insights</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest AI trends, case studies, and insights delivered to your inbox weekly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Join 10,000+ professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our AI solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Explore Our Services
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}