import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
};

const HomePage = React.memo(function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                Zion Tech Group
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600 transition-colors">Blog</Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-indigo-600 transition-colors">Case Studies</Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-indigo-600 block mt-2">
                AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
              and enterprise IT solutions that drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Latest AI Content & Insights
              </h2>
              <p className="text-lg text-gray-600">
                Discover our latest AI insights, case studies, and success stories.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/blog/ai-enterprise-transformation-2026" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured Article
                    </span>
                    <span className="text-gray-500 text-sm">20 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    AI Enterprise Transformation 2026
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master AI enterprise transformation with proven strategies, ROI frameworks, and implementation roadmaps.
                  </p>
                  <div className="text-indigo-600 font-medium group-hover:text-indigo-700">
                    Read Article →
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-autonomous-systems-2026" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      New Article
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    AI Autonomous Systems 2026
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master autonomous AI systems with 300% ROI strategies and enterprise-ready deployment patterns.
                  </p>
                  <div className="text-indigo-600 font-medium group-hover:text-indigo-700">
                    Read Article →
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/manufacturing-ai-transformation-2026" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Success Story
                    </span>
                    <span className="text-gray-500 text-sm">Manufacturing</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    Manufacturing AI Transformation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement.
                  </p>
                  <div className="text-indigo-600 font-medium group-hover:text-indigo-700">
                    View Case Study →
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300">
                Leading provider of AI-powered enterprise solutions and digital transformation services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">AI Solutions</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Automation</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Digital Transformation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">
                Get in touch for your AI transformation needs.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2026 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default HomePage;