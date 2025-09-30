import React from 'react';
import Link from 'next/link';

export default function ContentShowcase() {
  const featuredContent = [
    {
      id: 'ai-trends-2026',
      title: 'AI 2026 Neural Superintelligence: The Next Frontier',
      excerpt: 'Explore revolutionary AI systems that surpass human intelligence, delivering 1000x performance gains.',
      category: 'Breakthrough Technology',
      readTime: '18 min read',
      image: '🧠',
      color: 'indigo',
      href: '/blog/ai-2026-neural-superintelligence'
    },
    {
      id: 'autonomous-systems-2026',
      title: 'AI 2026 Enterprise Autonomous Systems',
      excerpt: 'Discover how autonomous AI systems are revolutionizing enterprise operations with 400% efficiency gains.',
      category: 'Revolutionary Technology',
      readTime: '15 min read',
      image: '🤖',
      color: 'purple',
      href: '/blog/ai-2026-enterprise-autonomous-systems'
    },
    {
      id: 'neural-success-story',
      title: '$500M Revenue Success: Neural Superintelligence Case Study',
      excerpt: 'See how a Fortune 500 company achieved $500M additional revenue through neural superintelligence.',
      category: 'Success Story',
      readTime: '12 min read',
      image: '💰',
      color: 'green',
      href: '/case-studies/neural-superintelligence-mega-success-2026'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Featured Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest insights, breakthroughs, and success stories that are transforming enterprise operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-indigo-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    item.color === 'indigo' ? 'bg-indigo-100' :
                    item.color === 'purple' ? 'bg-purple-100' :
                    'bg-green-100'
                  }`}>
                    <span className="text-2xl">{item.image}</span>
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${
                      item.color === 'indigo' ? 'text-indigo-600' :
                      item.color === 'purple' ? 'text-purple-600' :
                      'text-green-600'
                    }`}>
                      {item.category}
                    </div>
                    <div className="text-sm text-gray-500">{item.readTime}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                    {item.category === 'Success Story' ? 'Read Case Study →' : 'Read Article →'}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All Content
          </Link>
        </div>
      </div>
    </section>
  );
}