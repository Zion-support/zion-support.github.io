import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
};

export default function HomePage() {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Zion Tech Group
              </Link>
            </div>
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-blue-600">Case Studies</Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="text-yellow-400"> AI-Powered Solutions</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
              and enterprise IT solutions that drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Latest AI Content & Insights
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our latest AI insights, case studies, and success stories.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/blog/ai-enterprise-transformation-2026" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Featured Article</span>
                    <span className="text-gray-500 text-sm">20 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    AI Enterprise Transformation 2026
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master AI enterprise transformation with proven strategies, ROI frameworks, and implementation roadmaps.
                  </p>
                  <div className="text-blue-600 font-semibold">
                    Read Article →
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-autonomous-systems-2026" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">New Article</span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    AI Autonomous Systems 2026
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master autonomous AI systems with 300% ROI strategies and enterprise-ready deployment patterns.
                  </p>
                  <div className="text-blue-600 font-semibold">
                    Read Article →
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/manufacturing-ai-transformation-2026" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Success Story</span>
                    <span className="text-gray-500 text-sm">Manufacturing</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Manufacturing AI Transformation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement.
                  </p>
                  <div className="text-blue-600 font-semibold">
                    View Case Study →
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300">
                Leading provider of AI-powered enterprise solutions and digital transformation services.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-300 hover:text-white">AI Solutions</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-white">Automation</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-white">Digital Transformation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                <li><Link href="/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">
                Get in touch for your AI transformation needs.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}