import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';
import Link from 'next/link';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2025',
      excerpt: 'Explore the latest AI trends shaping the business landscape and how companies can prepare for the future of artificial intelligence.',
      author: 'Zion Tech Team',
      date: 'January 25, 2025',
      category: 'AI & Technology',
      readTime: '5 min read',
      image: '/blog/ai-future-business.jpg'
    },
    {
      id: 2,
      title: 'Digital Transformation: A Complete Guide for Modern Businesses',
      excerpt: 'Learn how to successfully navigate digital transformation and modernize your business operations for the digital age.',
      author: 'Sarah Johnson',
      date: 'January 22, 2025',
      category: 'Digital Transformation',
      readTime: '8 min read',
      image: '/blog/digital-transformation-guide.jpg'
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: Avoiding Common Pitfalls',
      excerpt: 'Discover the essential strategies and best practices for successful cloud migration without disrupting your business operations.',
      author: 'Mike Chen',
      date: 'January 20, 2025',
      category: 'Cloud Computing',
      readTime: '6 min read',
      image: '/blog/cloud-migration-best-practices.jpg'
    },
    {
      id: 4,
      title: 'Cybersecurity in 2025: Protecting Your Business from Emerging Threats',
      excerpt: 'Stay ahead of cyber threats with our comprehensive guide to modern cybersecurity practices and emerging security technologies.',
      author: 'Alex Rodriguez',
      date: 'January 18, 2025',
      category: 'Cybersecurity',
      readTime: '7 min read',
      image: '/blog/cybersecurity-2025.jpg'
    },
    {
      id: 5,
      title: 'Building Scalable Microservices Architecture: A Developer\'s Guide',
      excerpt: 'Learn how to design and implement microservices architecture that can scale with your business growth and technical requirements.',
      author: 'David Kim',
      date: 'January 15, 2025',
      category: 'Software Development',
      readTime: '10 min read',
      image: '/blog/microservices-architecture.jpg'
    },
    {
      id: 6,
      title: 'The Rise of Quantum Computing: What It Means for Your Business',
      excerpt: 'Explore the potential impact of quantum computing on various industries and how businesses can prepare for this revolutionary technology.',
      author: 'Dr. Lisa Wang',
      date: 'January 12, 2025',
      category: 'Quantum Computing',
      readTime: '9 min read',
      image: '/blog/quantum-computing-rise.jpg'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Digital Transformation',
    'Cloud Computing',
    'Cybersecurity',
    'Software Development',
    'Quantum Computing',
    'Business Strategy'
  ];

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights on technology, AI, digital transformation, and business innovation from Zion Tech Group experts."
      keywords="technology blog, AI insights, digital transformation, cloud computing, cybersecurity, business technology"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Technology Insights
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Stay ahead of the curve with expert insights on the latest technology trends, 
            AI developments, and digital transformation strategies.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
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

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Featured Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
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
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and never miss the latest technology insights and industry updates.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;