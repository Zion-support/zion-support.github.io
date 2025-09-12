import React from 'react';
import Link from 'next/link';

export default function NewContentShowcase2026() {
  const newContent = [
    {
      type: 'blog',
      title: 'AI 2026: The Future of Artificial Intelligence',
      description: 'Explore the revolutionary AI trends and technologies that will shape 2026, from quantum AI to neural interfaces.',
      href: '/blog/ai-2026-future-trends',
      image: '🧠',
      category: 'AI Trends',
      readTime: '15 min read',
      featured: true
    },
    {
      type: 'case-study',
      title: 'AI Transformation: Global Retail Giant Achieves 300% ROI',
      description: 'How a Fortune 500 retail company achieved massive ROI through strategic AI implementation.',
      href: '/case-studies/ai-transformation-global-retail-giant-2026',
      image: '📊',
      category: 'Success Story',
      readTime: '12 min read',
      featured: true
    },
    {
      type: 'webinar',
      title: 'AI Implementation Strategies 2026: Masterclass',
      description: 'Join our exclusive webinar on AI implementation strategies with industry experts.',
      href: '/webinars/ai-implementation-strategies-2026',
      image: '🎓',
      category: 'Masterclass',
      readTime: '90 min',
      featured: true
    },
    {
      type: 'blog',
      title: 'Quantum AI Revolution: What to Expect in 2026',
      description: 'Deep dive into quantum-enhanced machine learning and its practical applications.',
      href: '/blog/quantum-ai-revolution-2026',
      image: '⚛️',
      category: 'Quantum AI',
      readTime: '18 min read',
      featured: false
    },
    {
      type: 'case-study',
      title: 'Neural Interface Healthcare Breakthrough 2026',
      description: 'Revolutionary brain-computer interface implementation in healthcare settings.',
      href: '/case-studies/neural-interface-healthcare-breakthrough-2026',
      image: '🏥',
      category: 'Healthcare AI',
      readTime: '14 min read',
      featured: false
    },
    {
      type: 'webinar',
      title: 'Autonomous Systems Masterclass 2026',
      description: 'Learn about the future of autonomous systems and their business applications.',
      href: '/webinars/autonomous-systems-masterclass-2026',
      image: '🤖',
      category: 'Autonomous Systems',
      readTime: '75 min',
      featured: false
    }
  ];

  const featuredContent = newContent.filter(item => item.featured);
  const otherContent = newContent.filter(item => !item.featured);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 New Content: AI 2026 Edition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights, case studies, and strategies that will define the future of AI in 2026
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            ⭐ Featured Content
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{item.image}</div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                    <Link 
                      href={item.href}
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                    >
                      {item.type === 'webinar' ? 'Join Now →' : 'Read More →'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Content */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            📚 More New Content
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherContent.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">{item.image}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500">{item.readTime}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <Link 
                      href={item.href}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      {item.type === 'webinar' ? 'Join Webinar →' : 'Read More →'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with AI 2026
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get the latest AI insights, case studies, and implementation strategies delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore All Content
              </Link>
              <Link 
                href="/webinars"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Webinars
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}