import React from 'react';
import Link from 'next/link';
import NewContentShowcase2026 from '../../components/NewContentShowcase2026';
import InteractiveContentWidget2026 from '../../components/InteractiveContentWidget2026';
import NewContent2026PromotionBanner from '../../components/NewContent2026PromotionBanner';

export const metadata = {
  title: 'Content Hub 2026 - AI Insights, Quantum Computing & Neural Interfaces',
  description: 'Discover the latest content covering AI automation, quantum computing breakthroughs, neural interface technology, and emerging innovations shaping the future.',
  keywords: 'AI content, quantum computing, neural interfaces, automation, technology insights 2026',
};

const ContentHub2026: React.FC = () => {
  const trendingTopics = [
    { name: 'AI Automation', count: 15, trend: 'up' },
    { name: 'Quantum Computing', count: 12, trend: 'up' },
    { name: 'Neural Interfaces', count: 8, trend: 'up' },
    { name: 'Edge AI', count: 10, trend: 'up' },
    { name: 'Sustainable AI', count: 6, trend: 'up' },
    { name: 'Customer Experience AI', count: 9, trend: 'up' }
  ];

  const upcomingContent = [
    {
      title: 'AI Ethics and Governance Framework 2026',
      releaseDate: '2026-01-22',
      preview: 'Comprehensive guide to implementing ethical AI practices in enterprise environments.',
      category: 'AI Ethics'
    },
    {
      title: 'Quantum Machine Learning Applications',
      releaseDate: '2026-01-25',
      preview: 'How quantum algorithms are revolutionizing machine learning capabilities.',
      category: 'Quantum ML'
    },
    {
      title: 'Neural Interface Safety Protocols',
      releaseDate: '2026-01-28',
      preview: 'Best practices for safe implementation of neural interface technologies.',
      category: 'Safety'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            🚀 Content Hub 2026
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Your Gateway to Revolutionary AI Insights, Quantum Breakthroughs, 
            and Neural Interface Technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#latest-content"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              📖 Explore Content
            </Link>
            <Link 
              href="#content-widget"
              className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white border-opacity-30 hover:bg-opacity-30 transform hover:scale-105 transition-all duration-300"
            >
              🔍 Interactive Discovery
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Published Articles</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">100K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">2026</div>
              <div className="text-gray-600">Future Ready</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🔥 Trending Topics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingTopics.map((topic, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{topic.name}</h3>
                  <div className="flex items-center text-green-600">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Trending</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{topic.count} Articles</div>
                <Link 
                  href={`/content/category/${topic.name.toLowerCase().replace(' ', '-')}`}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                >
                  Explore {topic.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Content Widget */}
      <div id="content-widget" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🔍 Interactive Content Discovery
          </h2>
          <div className="max-w-4xl mx-auto">
            <InteractiveContentWidget2026 />
          </div>
        </div>
      </div>

      {/* Latest Content Showcase */}
      <div id="latest-content" className="py-16 px-4">
        <NewContentShowcase2026 />
      </div>

      {/* Upcoming Content */}
      <div className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            📅 Coming Soon
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingContent.map((content, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {content.category}
                  </span>
                  <span className="text-sm text-gray-500">{content.releaseDate}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{content.title}</h3>
                <p className="text-gray-600 mb-4">{content.preview}</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                  Get Notified
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            📧 Stay Ahead of the Curve
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get exclusive access to our latest content, early releases, and expert insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            Join 10,000+ professionals getting our weekly insights
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Content Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/content/ai-automation" className="hover:text-blue-400 transition-colors">AI Automation</Link></li>
                <li><Link href="/content/quantum-computing" className="hover:text-blue-400 transition-colors">Quantum Computing</Link></li>
                <li><Link href="/content/neural-interfaces" className="hover:text-blue-400 transition-colors">Neural Interfaces</Link></li>
                <li><Link href="/content/edge-ai" className="hover:text-blue-400 transition-colors">Edge AI</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guides" className="hover:text-blue-400 transition-colors">Guides & Tutorials</Link></li>
                <li><Link href="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
                <li><Link href="/research" className="hover:text-blue-400 transition-colors">Research Papers</Link></li>
                <li><Link href="/tools" className="hover:text-blue-400 transition-colors">AI Tools</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/forum" className="hover:text-blue-400 transition-colors">Discussion Forum</Link></li>
                <li><Link href="/events" className="hover:text-blue-400 transition-colors">Events & Webinars</Link></li>
                <li><Link href="/newsletter" className="hover:text-blue-400 transition-colors">Newsletter</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHub2026;