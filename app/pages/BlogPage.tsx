import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'business', name: 'Business' },
    { id: 'technology', name: 'Technology' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in artificial intelligence and how they\'re transforming businesses across industries.',
      content: 'Artificial intelligence continues to revolutionize the business landscape...',
      author: 'Kleber Santos',
      date: '2024-01-15',
      category: 'ai',
      readTime: '5 min read',
      image: '/images/blog/ai-future.jpg',
      tags: ['AI', 'Business', 'Technology', 'Future']
    },
    {
      id: 2,
      title: 'Cloud Security Best Practices: Protecting Your Data in 2024',
      excerpt: 'Learn essential cloud security practices to keep your data safe and compliant with industry standards.',
      content: 'As businesses increasingly migrate to the cloud, security becomes paramount...',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      category: 'security',
      readTime: '7 min read',
      image: '/images/blog/cloud-security.jpg',
      tags: ['Security', 'Cloud', 'Data Protection', 'Compliance']
    },
    {
      id: 3,
      title: 'Micro SaaS: The Future of Software Development',
      excerpt: 'Discover how micro SaaS solutions are changing the software development landscape and creating new opportunities.',
      content: 'Micro SaaS represents a new paradigm in software development...',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'technology',
      readTime: '6 min read',
      image: '/images/blog/micro-saas.jpg',
      tags: ['Micro SaaS', 'Software Development', 'Innovation', 'Business']
    },
    {
      id: 4,
      title: '5G Technology: Transforming Industries and Creating New Possibilities',
      excerpt: 'Explore how 5G technology is revolutionizing various industries and enabling new applications.',
      content: '5G technology promises to transform industries with ultra-low latency...',
      author: 'Emily Rodriguez',
      date: '2024-01-08',
      category: 'technology',
      readTime: '8 min read',
      image: '/images/blog/5g-technology.jpg',
      tags: ['5G', 'Technology', 'Innovation', 'Connectivity']
    },
    {
      id: 5,
      title: 'Digital Transformation: A Complete Guide for Modern Businesses',
      excerpt: 'A comprehensive guide to digital transformation, including strategies, challenges, and best practices.',
      content: 'Digital transformation is no longer optional for businesses...',
      author: 'David Kim',
      date: '2024-01-05',
      category: 'business',
      readTime: '10 min read',
      image: '/images/blog/digital-transformation.jpg',
      tags: ['Digital Transformation', 'Business Strategy', 'Technology', 'Innovation']
    },
    {
      id: 6,
      title: 'Cybersecurity Threats in 2024: What Businesses Need to Know',
      excerpt: 'Stay ahead of emerging cybersecurity threats and learn how to protect your business.',
      content: 'The cybersecurity landscape continues to evolve with new threats...',
      author: 'Lisa Wang',
      date: '2024-01-03',
      category: 'security',
      readTime: '6 min read',
      image: '/images/blog/cybersecurity-threats.jpg',
      tags: ['Cybersecurity', 'Threats', 'Security', 'Business Protection']
    }
  ];

  const featuredPost = blogPosts[0];
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const recentPosts = blogPosts.slice(0, 3);
  const popularTags = ['AI', 'Cloud Computing', 'Security', 'Digital Transformation', '5G', 'Micro SaaS'];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, cloud computing, cybersecurity, digital transformation, technology trends, business technology" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay informed with the latest trends, insights, and best practices in AI, 
              cloud computing, cybersecurity, and digital transformation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Featured Post */}
              {selectedCategory === 'all' && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category.toUpperCase()}
                      </span>
                      <span className="text-blue-100">{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                    <p className="text-xl text-blue-100 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <UserIcon className="w-5 h-5" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CalendarIcon className="w-5 h-5" />
                          <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center"
                      >
                        Read More
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Featured Image</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          {post.category.toUpperCase()}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <UserIcon className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CalendarIcon className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                        >
                          Read More
                          <ArrowRightIcon className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Recent Posts */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">{post.title}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Get the latest insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm"
                    />
                    <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get in Touch
              </Link>
              <Link 
                to="/services" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;