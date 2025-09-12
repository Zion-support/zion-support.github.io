import React from 'react';
import { Link } from 'react-router-dom';

export const ContentShowcase: React.FC = () => {
  const featuredContent = [
    {
      id: 'quantum-computing-business-applications',
      title: 'Quantum Computing: The Next Frontier in Business Innovation',
      excerpt: 'Explore how quantum computing is revolutionizing industries from finance to healthcare, and discover practical applications that are already delivering real business value.',
      type: 'Blog Post',
      category: 'Quantum Computing',
      readTime: '12 min read',
      date: '2025-01-20',
      icon: '⚛️',
      gradient: 'from-purple-100 to-indigo-100',
      link: '/blog/quantum-computing-business-applications',
    },
    {
      id: 'edge-computing-iot-revolution',
      title: 'Edge Computing and IoT: Revolutionizing Real-Time Business Operations',
      excerpt: 'Discover how edge computing and IoT are transforming industries by enabling real-time data processing, reducing latency, and creating new business opportunities.',
      type: 'Blog Post',
      category: 'Edge Computing & IoT',
      readTime: '10 min read',
      date: '2025-01-18',
      icon: '🌐',
      gradient: 'from-green-100 to-teal-100',
      link: '/blog/edge-computing-iot-revolution',
    },
    {
      id: 'quantum-financial-optimization',
      title: 'Quantum-Powered Financial Portfolio Optimization',
      excerpt: 'Global Investment Bank achieved 35% improvement in portfolio performance and $2.8B additional returns using quantum computing algorithms.',
      type: 'Case Study',
      category: 'Financial Services',
      readTime: '8 min read',
      date: '2025-01-15',
      icon: '💼',
      gradient: 'from-blue-100 to-indigo-100',
      link: '/case-studies',
    },
    {
      id: 'quantum-computing-implementation-guide',
      title: 'Quantum Computing Implementation Guide 2025',
      excerpt: 'Comprehensive 60-page guide covering quantum computing fundamentals, business applications, and step-by-step implementation strategies for enterprises.',
      type: 'Resource',
      category: 'Quantum Computing',
      readTime: 'Download',
      date: '2025-01-12',
      icon: '📊',
      gradient: 'from-purple-100 to-violet-100',
      link: '/resources',
    },
  ];

  const stats = [
    { label: 'New Articles', value: '5', icon: '📝' },
    { label: 'Case Studies', value: '3', icon: '💼' },
    { label: 'Resources', value: '4', icon: '📚' },
    { label: 'Total Downloads', value: '12K+', icon: '⬇️' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay ahead with our newest content covering the latest trends in AI, quantum computing, 
            edge computing, and sustainable technology. Expert insights and practical resources 
            to drive your business forward.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredContent.map((content) => (
            <Link
              key={content.id}
              to={content.link}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`aspect-video bg-gradient-to-br ${content.gradient} flex items-center justify-center`}>
                <div className="text-4xl">{content.icon}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {content.type}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                    {content.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{content.date}</span>
                  <span className="text-blue-600 font-medium group-hover:underline">
                    {content.readTime} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust our insights and resources to drive innovation 
            and achieve remarkable business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Explore All Content
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Latest Insights
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get weekly updates on AI trends, technology insights, and business strategies. 
              Join 15,000+ professionals who trust our content.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};