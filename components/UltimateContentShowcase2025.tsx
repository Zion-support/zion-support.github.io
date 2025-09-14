import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const featuredContent = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Automation Revolution',
      description: 'Transform your business with cutting-edge AI automation solutions achieving unprecedented ROI.',
      image: '🤖',
      category: 'AI Automation',
      readTime: '8 min read',
      featured: true,
      url: '/ai-2025-ultimate-automation-revolution',
      stats: '50,000% ROI'
    },
    {
      id: 2,
      title: 'Quantum Computing Business Breakthrough',
      description: 'Revolutionary quantum computing applications transforming enterprise operations.',
      image: '⚛️',
      category: 'Quantum Computing',
      readTime: '12 min read',
      featured: true,
      url: '/quantum-computing-business-breakthrough',
      stats: '15,000% ROI'
    },
    {
      id: 3,
      title: 'Neural Interface Revolution 2025',
      description: 'Next-generation neural interfaces revolutionizing human-computer interaction.',
      image: '🧠',
      category: 'Neural Interfaces',
      readTime: '10 min read',
      featured: true,
      url: '/neural-interface-revolution-2025',
      stats: '25,000% ROI'
    },
    {
      id: 4,
      title: 'Fortune 500 AI Transformation',
      description: 'Exclusive case study: How Fortune 500 companies achieved massive ROI with AI.',
      image: '📈',
      category: 'Case Study',
      readTime: '6 min read',
      featured: true,
      url: '/fortune-500-ai-transformation',
      stats: '30,000% ROI'
    },
    {
      id: 5,
      title: 'Autonomous Business Operations',
      description: 'Complete guide to implementing autonomous systems for business transformation.',
      image: '🏢',
      category: 'Enterprise Solutions',
      readTime: '15 min read',
      featured: false,
      url: '/autonomous-business-operations',
      stats: '20,000% ROI'
    },
    {
      id: 6,
      title: 'Edge Computing Revolution',
      description: 'Revolutionary edge computing solutions for real-time business intelligence.',
      image: '⚡',
      category: 'Edge Computing',
      readTime: '9 min read',
      featured: false,
      url: '/edge-computing-revolution',
      stats: '18,000% ROI'
    }
  ];

  const categories = [
    { name: 'AI Automation', count: 45, icon: '🤖' },
    { name: 'Quantum Computing', count: 23, icon: '⚛️' },
    { name: 'Neural Interfaces', count: 18, icon: '🧠' },
    { name: 'Case Studies', count: 67, icon: '📈' },
    { name: 'Enterprise Solutions', count: 34, icon: '🏢' },
    { name: 'Edge Computing', count: 12, icon: '⚡' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🌟 ULTIMATE CONTENT SHOWCASE 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary Content Library
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive collection of AI solutions, breakthrough technologies, 
            and success stories that are transforming businesses worldwide. Join thousands 
            of companies achieving unprecedented ROI.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Breakthrough Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 ${
                  item.featured ? 'border-purple-500' : 'border-gray-200'
                }`}
              >
                {item.featured && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-t-xl text-center">
                    ⭐ FEATURED BREAKTHROUGH
                  </div>
                )}
                <div className="p-6">
                  <div className="text-4xl mb-4">{item.image}</div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">
                      {item.stats}
                    </span>
                    <Link
                      href={item.url}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore by Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/content/${category.name.toLowerCase().replace(' ', '-')}`}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:from-purple-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-purple-200"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{category.name}</h4>
                <p className="text-sm text-gray-600">{category.count} articles</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 text-white mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Content Impact Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2M+</div>
              <div className="text-gray-300">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-300">Reader Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50K%</div>
              <div className="text-gray-300">Average ROI Achieved</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of companies that have already achieved breakthrough results 
            with our AI solutions and content insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Get Custom Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;