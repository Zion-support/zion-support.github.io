import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function BlogPage() {
  const featuredPost = {
    title: 'The Future of AI in Business: Trends to Watch in 2024',
    excerpt: 'Discover the latest AI trends that are reshaping how businesses operate, from generative AI to autonomous systems.',
    author: 'Sarah Johnson',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    slug: 'future-of-ai-in-business-2024'
  };

  const blogPosts = [
    {
      title: '5G Implementation: Transforming Industries with Ultra-Fast Connectivity',
      excerpt: 'How 5G technology is revolutionizing healthcare, manufacturing, and smart cities.',
      author: 'Mike Chen',
      date: 'December 12, 2024',
      readTime: '6 min read',
      category: '5G & IoT',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
      slug: '5g-implementation-transforming-industries'
    },
    {
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for a successful cloud migration project.',
      author: 'Emily Davis',
      date: 'December 10, 2024',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
      slug: 'cloud-migration-best-practices-guide'
    },
    {
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Understanding how AI is both creating new security challenges and providing innovative solutions.',
      author: 'John Smith',
      date: 'December 8, 2024',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop',
      slug: 'cybersecurity-age-of-ai-threats-solutions'
    },
    {
      title: 'Digital Transformation: A Step-by-Step Implementation Guide',
      excerpt: 'Practical advice for businesses looking to modernize their operations and processes.',
      author: 'Lisa Rodriguez',
      date: 'December 5, 2024',
      readTime: '9 min read',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
      slug: 'digital-transformation-step-by-step-guide'
    },
    {
      title: 'Micro SaaS: Building Profitable AI-Powered Tools',
      excerpt: 'How to create and scale micro SaaS applications that solve specific business problems.',
      author: 'David Kim',
      date: 'December 3, 2024',
      readTime: '5 min read',
      category: 'Micro SaaS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      slug: 'micro-saas-building-profitable-ai-tools'
    },
    {
      title: 'Data Analytics: Turning Information into Business Intelligence',
      excerpt: 'Strategies for leveraging data analytics to drive better business decisions and outcomes.',
      author: 'Maria Garcia',
      date: 'December 1, 2024',
      readTime: '6 min read',
      category: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      slug: 'data-analytics-turning-information-into-intelligence'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Cloud Computing',
    'Cybersecurity',
    'Digital Transformation',
    '5G & IoT',
    'Micro SaaS',
    'Data Analytics'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT services, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, IT trends, cloud computing, cybersecurity, digital transformation" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Technology Insights & News
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, IT services, and emerging technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-gray-400 mb-6">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-400 mb-4">
                    <User className="w-3 h-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="w-3 h-3 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest technology insights and industry news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}