import Link from 'next/link';

export const metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Zion Tech Group
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">Case Studies</Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                {' '}AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
              and enterprise IT solutions that drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
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

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Latest AI Content & Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our latest AI insights, case studies, and success stories.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/blog/ai-enterprise-transformation-2026" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Featured Article
                    </span>
                    <span className="text-sm text-gray-500">20 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    AI Enterprise Transformation 2026
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master AI enterprise transformation with proven strategies, ROI frameworks, and implementation roadmaps.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Read Article →
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-autonomous-systems-2026" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                      New Article
                    </span>
                    <span className="text-sm text-gray-500">18 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    AI Autonomous Systems 2026
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master autonomous AI systems with 300% ROI strategies and enterprise-ready deployment patterns.
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold">
                    Read Article →
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/manufacturing-ai-transformation-2026" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Success Story
                    </span>
                    <span className="text-sm text-gray-500">Manufacturing</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    Manufacturing AI Transformation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement.
                  </p>
                  <div className="flex items-center text-green-600 font-semibold">
                    View Case Study →
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400">
                Leading provider of AI-powered enterprise solutions and digital transformation services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white">AI Solutions</Link></li>
                <li><Link href="/services" className="hover:text-white">Automation</Link></li>
                <li><Link href="/services" className="hover:text-white">Digital Transformation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Get in touch for your AI transformation needs.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}