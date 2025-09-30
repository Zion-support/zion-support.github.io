import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Success Stories & Case Studies - Zion Tech Group',
  description: 'Explore real-world AI transformation success stories from Fortune 500 companies. See how our clients achieved 300% ROI and unprecedented efficiency gains.',
  keywords: 'AI case studies, AI success stories, enterprise AI transformation, AI ROI, Fortune 500 AI, AI implementation results',
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI Success
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
              {' '}Stories
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Real-world transformations from Fortune 500 companies. Discover how our clients achieved unprecedented results through AI implementation.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Fortune 500 Clients</span>
            <span>•</span>
            <span>Proven Results</span>
            <span>•</span>
            <span>Measurable ROI</span>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🏆 Featured Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real transformations with measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link href="/case-studies/ai-2026-mega-transformation-success-story" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-green-200 hover:border-green-400 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">FORTUNE 500</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-3">
                  $100M Success Story: Fortune 500 Mega Breakthrough
                </h3>
                <p className="text-gray-600 mb-4">
                  How a Fortune 500 manufacturing giant achieved 95% efficiency gains, 300% productivity improvement, 
                  and $100M ROI through our AI 2026 transformation solutions.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$100M</div>
                    <div className="text-xs text-gray-600">ROI in First Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-xs text-gray-600">Efficiency Gains</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Published Jan 25, 2026</div>
                  <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                    Read Case Study →
                  </div>
                </div>
              </div>
            </Link>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏥</span>
                </div>
                <div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">COMING SOON</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Healthcare AI Transformation
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how a major healthcare provider achieved 80% efficiency gains, 50% reduction in diagnostic time, 
                and improved patient outcomes through our AI solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">80%</div>
                  <div className="text-xs text-gray-600">Efficiency Gains</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50%</div>
                  <div className="text-xs text-gray-600">Faster Diagnosis</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Coming Soon</div>
                <div className="text-blue-600 font-semibold">
                  Learn More →
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Proven Results Across All Industries</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
                <div className="text-gray-600 font-semibold">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600 font-semibold">Efficiency Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                <div className="text-gray-600 font-semibold">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600 font-semibold">Projects Delivered</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join the ranks of Fortune 500 companies that have transformed their operations with Zion Tech Group's AI solutions. 
              Let's discuss how we can achieve similar results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}