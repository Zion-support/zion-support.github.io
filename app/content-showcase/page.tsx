import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';

// Import content showcase components
import UltimateContentShowcase2025 from '../../components/UltimateContentShowcase2025';
import InteractiveContentDiscovery2025 from '../../components/InteractiveContentDiscovery2025';
import AITrends2025PromotionalBanner from '../../components/AITrends2025PromotionalBanner';

export const metadata = {
  title: 'Content Showcase - AI & Technology Solutions | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI content featuring breakthrough technologies, real-world case studies, and implementation guides with proven ROI results.',
  keywords: ['AI content', 'technology solutions', 'case studies', 'implementation guides', 'ROI', 'content showcase'],
};

export default function ContentShowcasePage() {
  return (
    <ErrorBoundary>
      <SEO
        title="Content Showcase - AI & Technology Solutions"
        description="Explore our comprehensive collection of AI content featuring breakthrough technologies, real-world case studies, and implementation guides with proven ROI results."
        keywords="AI content, technology solutions, case studies, implementation guides, ROI, content showcase"
        url="/content-showcase"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Content Showcase
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover breakthrough AI content featuring proven ROI results, 
              real-world case studies, and implementation guides from industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#content-grid"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Content
              </Link>
              <Link
                href="/consultation"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* AI Trends Banner */}
        <AITrends2025PromotionalBanner />

        {/* Content Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Content Impact Statistics
              </h2>
              <p className="text-xl text-gray-600">
                Our content has helped companies achieve unprecedented results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">50,000%</div>
                <div className="text-gray-600">Max ROI Achieved</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">$1T+</div>
                <div className="text-gray-600">Total Savings Generated</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Fortune 500 Clients</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Content Discovery */}
        <InteractiveContentDiscovery2025 />

        {/* Ultimate Content Showcase */}
        <UltimateContentShowcase2025 />

        {/* Content Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Content Categories
              </h2>
              <p className="text-xl text-gray-600">
                Explore our content organized by category and technology focus
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-8 text-white">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4">AI Revolution</h3>
                <p className="text-blue-100 mb-6">
                  Revolutionary AI technologies transforming businesses with proven ROI results
                </p>
                <Link
                  href="/content?category=ai-revolution"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore AI Content
                </Link>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
                <p className="text-emerald-100 mb-6">
                  Next-generation quantum technologies delivering unprecedented business results
                </p>
                <Link
                  href="/content?category=quantum-computing"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Quantum Content
                </Link>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold mb-4">Neural Networks</h3>
                <p className="text-red-100 mb-6">
                  Advanced neural architectures revolutionizing business intelligence and automation
                </p>
                <Link
                  href="/content?category=neural-networks"
                  className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Neural Content
                </Link>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4">Business Intelligence</h3>
                <p className="text-purple-100 mb-6">
                  Data-driven insights and analytics transforming business decision-making
                </p>
                <Link
                  href="/content?category=business-intelligence"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore BI Content
                </Link>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-8 text-white">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold mb-4">Digital Transformation</h3>
                <p className="text-rose-100 mb-6">
                  Complete digital transformation strategies with proven implementation frameworks
                </p>
                <Link
                  href="/content?category=digital-transformation"
                  className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore DT Content
                </Link>
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Autonomous Systems</h3>
                <p className="text-blue-100 mb-6">
                  Self-managing systems and autonomous business operations with massive ROI
                </p>
                <Link
                  href="/content?category=autonomous-systems"
                  className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Autonomous Content
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of companies already achieving massive ROI with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}