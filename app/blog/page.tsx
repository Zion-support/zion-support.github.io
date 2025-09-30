import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Innovation Blog - Zion Tech Group',
  description: 'Stay updated with the latest AI innovations, breakthroughs, and insights from Zion Tech Group. Discover cutting-edge technologies transforming enterprises.',
  keywords: 'AI blog, AI innovations, AI breakthroughs, enterprise AI, AI insights, AI technology trends',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI Innovation
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              {' '}Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover the latest AI breakthroughs, insights, and revolutionary technologies that are transforming enterprises worldwide.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Latest Updates</span>
            <span>•</span>
            <span>AI Technology</span>
            <span>•</span>
            <span>Enterprise Solutions</span>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🚀 Featured Articles
            </h2>
            <p className="text-lg text-gray-600">
              Our most popular and impactful AI innovation content
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link href="/blog/ai-2026-revolutionary-breakthrough" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-red-200 hover:border-red-400 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-3">
                  AI 2026 Revolutionary Breakthrough
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the revolutionary AI breakthroughs of 2026 that are transforming enterprise operations. 
                  From autonomous AI systems to quantum-enhanced computing, achieving 300% ROI.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Published Jan 25, 2026</div>
                  <div className="text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                    Read Full Article →
                  </div>
                </div>
              </div>
            </Link>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">COMING SOON</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Quantum AI: The Next Frontier
              </h3>
              <p className="text-gray-600 mb-4">
                Explore how quantum-enhanced AI is solving impossible optimization problems in seconds, 
                delivering 500x faster results and transforming computational capabilities.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Coming Soon</div>
                <div className="text-purple-600 font-semibold">
                  Learn More →
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-600 mb-6">
              Don't just read about AI innovations - implement them in your organization. 
              Contact Zion Tech Group for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
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