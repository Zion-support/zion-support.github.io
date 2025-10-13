import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Search, Clock, BookOpen, Zap } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  featured: boolean;
  image: string;
  readTime: string;
}

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping business operations and discover how companies are leveraging artificial intelligence for competitive advantage.',
      content: 'Full article content here...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'AI',
      featured: true,
      image: '/images/blog/ai-trends-2024.jpg',
      readTime: '8 min read'
    },
    {
      id: '2',
      title: 'Cybersecurity Best Practices for Remote Teams',
      excerpt: 'Learn essential security measures to protect your remote workforce and maintain data integrity in distributed environments.',
      content: 'Full article content here...',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Security',
      featured: true,
      image: '/images/blog/cybersecurity-remote.jpg',
      readTime: '6 min read'
    },
    {
      id: '3',
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Comprehensive guide to planning and executing successful cloud migrations with minimal downtime and maximum efficiency.',
      content: 'Full article content here...',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      category: 'Cloud',
      featured: false,
      image: '/images/blog/cloud-migration.jpg',
      readTime: '10 min read'
    },
    {
      id: '4',
      title: 'Building Scalable Web Applications with Modern Frameworks',
      excerpt: 'Discover the latest web development frameworks and patterns for creating applications that scale with your business growth.',
      content: 'Full article content here...',
      author: 'Alex Thompson',
      date: '2024-01-01',
      category: 'Development',
      featured: false,
      image: '/images/blog/web-development.jpg',
      readTime: '7 min read'
    },
    {
      id: '5',
      title: 'Digital Transformation: Where to Start',
      excerpt: 'A practical roadmap for businesses looking to embark on their digital transformation journey and modernize their operations.',
      content: 'Full article content here...',
      author: 'Lisa Wang',
      date: '2023-12-28',
      category: 'Business',
      featured: false,
      image: '/images/blog/digital-transformation.jpg',
      readTime: '5 min read'
    },
    {
      id: '6',
      title: 'Machine Learning in Healthcare: Real-World Applications',
      excerpt: 'Explore how machine learning is revolutionizing healthcare delivery and improving patient outcomes through innovative applications.',
      content: 'Full article content here...',
      author: 'Dr. James Wilson',
      date: '2023-12-20',
      category: 'AI',
      featured: false,
      image: '/images/blog/ml-healthcare.jpg',
      readTime: '9 min read'
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Security', 'Development', 'Business'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, technology, and business innovation. Expert articles, case studies, and industry trends from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="AI blog, technology insights, business innovation, artificial intelligence articles, tech trends, digital transformation, cybersecurity, cloud computing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Insights & Innovation
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Stay ahead with expert insights on AI, technology, and business transformation
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map(post => (
                  <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-300 text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400 text-sm">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                          <Calendar className="w-4 h-4 ml-4 mr-2" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
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
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="w-8 h-8 text-purple-400 mr-3" />
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-300 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-xs">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                        <Calendar className="w-3 h-3 ml-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:translate-x-1 transition-transform"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;