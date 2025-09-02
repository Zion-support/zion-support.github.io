import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, User, ArrowRight, Search, Filter, Tag, Clock, Eye } from 'lucide-react';
import Link from 'next/link';

const BlogPage: NextPage = () => {
  const featuredPost = {
    title: 'The Future of AI in Business: Transforming Operations with Intelligent Automation',
    excerpt: 'Discover how artificial intelligence is revolutionizing business operations and creating new opportunities for growth and efficiency.',
    author: 'Kleber Silva',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Technology',
    image: '/blog/ai-future.jpg',
    slug: 'future-ai-business-automation'
  };

  const blogPosts = [
    {
      title: 'Cloud Migration Strategies: A Complete Guide for Enterprise',
      excerpt: 'Learn the best practices for migrating your infrastructure to the cloud with minimal disruption.',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Cloud Computing',
      image: '/blog/cloud-migration.jpg',
      slug: 'cloud-migration-strategies-guide'
    },
    {
      title: 'Cybersecurity Trends 2024: Protecting Your Digital Assets',
      excerpt: 'Stay ahead of emerging threats with our comprehensive overview of cybersecurity trends and best practices.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/blog/cybersecurity-trends.jpg',
      slug: 'cybersecurity-trends-2024-protection'
    },
    {
      title: 'Micro SaaS Development: Building Scalable Solutions',
      excerpt: 'Explore the world of micro SaaS and learn how to build focused, profitable software solutions.',
      author: 'Emily Rodriguez',
      date: '2024-01-08',
      readTime: '5 min read',
      category: 'Development',
      image: '/blog/micro-saas.jpg',
      slug: 'micro-saas-development-scalable-solutions'
    },
    {
      title: 'Digital Transformation: A Roadmap for Success',
      excerpt: 'Navigate your digital transformation journey with our proven roadmap and implementation strategies.',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Digital Transformation',
      image: '/blog/digital-transformation.jpg',
      slug: 'digital-transformation-roadmap-success'
    },
    {
      title: 'Data Analytics Best Practices for Business Intelligence',
      excerpt: 'Unlock the power of your data with proven analytics strategies and implementation techniques.',
      author: 'Lisa Wang',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'Data Analytics',
      image: '/blog/data-analytics.jpg',
      slug: 'data-analytics-best-practices-business-intelligence'
    },
    {
      title: 'DevOps Culture: Building High-Performance Teams',
      excerpt: 'Learn how to foster a DevOps culture that drives innovation and accelerates delivery.',
      author: 'Alex Thompson',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'DevOps',
      image: '/blog/devops-culture.jpg',
      slug: 'devops-culture-high-performance-teams'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Cloud Computing',
    'Cybersecurity',
    'Development',
    'Digital Transformation',
    'Data Analytics',
    'DevOps'
  ];

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Stay informed with the latest trends, insights, and best practices in technology and business transformation
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Article</h2>
            <p className="text-xl text-gray-600">Our latest insights and analysis</p>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-zion-cyan text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">{featuredPost.title}</h3>
                <p className="text-xl text-gray-600 mb-8">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{featuredPost.date}</span>
                  </div>
                </div>
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center bg-zion-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Eye className="w-16 h-16 mx-auto mb-4" />
                  <p>Featured Article Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-white text-gray-600 hover:bg-zion-cyan hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Eye className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Article Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-zion-cyan font-medium mt-4 hover:text-zion-cyan/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights, trends, and best practices in technology
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-zion-cyan px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;