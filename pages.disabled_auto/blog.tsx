import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are transforming businesses and how companies can leverage these technologies for competitive advantage.',
      author: 'Zion Tech Group Team',
      date: '2024-01-15',
      category: 'AI & Technology',
      readTime: '5 min read',
      image: '/blog/ai-future.jpg'
    },
    {
      id: 2,
      title: 'Micro SaaS: Building Scalable Solutions for Modern Businesses',
      excerpt: 'Learn how micro SaaS solutions are revolutionizing the software industry and why they represent the future of business applications.',
      author: 'Development Team',
      date: '2024-01-10',
      category: 'Micro SaaS',
      readTime: '7 min read',
      image: '/blog/micro-saas.jpg'
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Discover the essential steps and considerations for successful cloud migration, from planning to execution and optimization.',
      author: 'Cloud Solutions Team',
      date: '2024-01-05',
      category: 'Cloud Computing',
      readTime: '8 min read',
      image: '/blog/cloud-migration.jpg'
    },
    {
      id: 4,
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Stay ahead of emerging cybersecurity threats and learn about the latest protection strategies for your business.',
      author: 'Security Team',
      date: '2024-01-01',
      category: 'Security',
      readTime: '6 min read',
      image: '/blog/cybersecurity.jpg'
    },
    {
      id: 5,
      title: 'Digital Transformation: Success Stories and Lessons Learned',
      excerpt: 'Real-world case studies of successful digital transformations and the key factors that contributed to their success.',
      author: 'Consulting Team',
      date: '2023-12-28',
      category: 'Digital Transformation',
      readTime: '9 min read',
      image: '/blog/digital-transformation.jpg'
    },
    {
      id: 6,
      title: 'API-First Architecture: Building Scalable Systems',
      excerpt: 'Learn how API-first architecture can help you build more flexible, scalable, and maintainable software systems.',
      author: 'Architecture Team',
      date: '2023-12-20',
      category: 'Software Architecture',
      readTime: '6 min read',
      image: '/blog/api-architecture.jpg'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Micro SaaS',
    'Cloud Computing',
    'Security',
    'Digital Transformation',
    'Software Architecture'
  ];

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology from Zion Tech Group's expert team."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Stay ahead of the curve with expert insights, industry trends, and best practices from our technology experts.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Tag className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-600 font-medium">{blogPosts[0].category}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link 
                  href={`/blog/${blogPosts[0].id}`}
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
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
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights and updates from our technology experts.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;