import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

const BlogPage: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2025',
      excerpt: 'Explore the latest AI trends that are transforming businesses and how companies can leverage these technologies for competitive advantage.',
      author: 'Kleber Silva',
      date: '2025-01-25',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/blog/ai-business-trends.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Micro SaaS: Building Profitable Software Solutions',
      excerpt: 'Learn how to build and scale micro SaaS applications that solve specific business problems and generate recurring revenue.',
      author: 'Sarah Johnson',
      date: '2025-01-22',
      readTime: '6 min read',
      category: 'Micro SaaS',
      image: '/blog/micro-saas-guide.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Discover the essential steps and strategies for successful cloud migration, from planning to execution and optimization.',
      author: 'Michael Chen',
      date: '2025-01-20',
      readTime: '10 min read',
      category: 'Cloud Services',
      image: '/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity in 2025: Protecting Your Digital Assets',
      excerpt: 'Stay ahead of emerging cybersecurity threats and learn the latest strategies to protect your business from cyber attacks.',
      author: 'Emily Rodriguez',
      date: '2025-01-18',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/blog/cybersecurity-2025.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Building Scalable Web Applications with Modern Technologies',
      excerpt: 'Explore the latest web development technologies and frameworks that enable you to build high-performance, scalable applications.',
      author: 'David Kim',
      date: '2025-01-15',
      readTime: '9 min read',
      category: 'Web Development',
      image: '/blog/scalable-web-apps.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Data Analytics: Turning Information into Business Insights',
      excerpt: 'Learn how to implement effective data analytics strategies that drive business growth and informed decision-making.',
      author: 'Lisa Wang',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'Data Analytics',
      image: '/blog/data-analytics.jpg',
      featured: false
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Micro SaaS',
    'Cloud Services',
    'Cybersecurity',
    'Web Development',
    'Data Analytics',
    'IT Services'
  ];

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology. Read our expert articles on AI, cloud services, cybersecurity, and more."
      keywords="technology blog, AI insights, cloud computing, cybersecurity, web development, micro SaaS, tech trends"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Technology Insights & Trends
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Stay ahead of the curve with expert insights on the latest technology trends, 
            best practices, and innovative solutions that drive business success.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-6xl mb-4">🤖</div>
                        <p className="text-lg">AI & Technology</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <Tag className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h3>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                        <Calendar className="w-4 h-4 ml-4 mr-2" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 m-1 rounded-full text-sm font-medium transition-colors ${
                    category === 'All Posts'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">📊</div>
                      <p className="text-sm">{post.category}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Tag className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and get the latest technology insights, trends, and best practices delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;