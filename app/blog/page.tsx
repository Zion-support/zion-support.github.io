'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and creating new opportunities for growth.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Innovation'],
      featured: true,
      image: '/images/blog/ai-enterprise.jpg'
    },
    {
      id: '2',
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential security measures every organization should implement to protect against evolving cyber threats.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Best Practices', '2024'],
      featured: true,
      image: '/images/blog/cybersecurity.jpg'
    },
    {
      id: '3',
      title: 'Cloud Migration Strategies That Work',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud without disrupting operations.',
      content: 'Full article content...',
      author: 'Jennifer Liu',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'Strategy'],
      featured: false,
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      id: '4',
      title: 'DevOps Culture: Building Better Software Faster',
      excerpt: 'How implementing DevOps practices can accelerate development cycles and improve software quality.',
      content: 'Full article content...',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '8 min read',
      category: 'DevOps',
      tags: ['DevOps', 'Culture', 'Software Development'],
      featured: false,
      image: '/images/blog/devops-culture.jpg'
    },
    {
      id: '5',
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Leveraging data analytics to make informed business decisions and drive growth.',
      content: 'Full article content...',
      author: 'Lisa Wang',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Data Analytics',
      tags: ['Analytics', 'Data', 'Insights'],
      featured: false,
      image: '/images/blog/data-analytics.jpg'
    },
    {
      id: '6',
      title: 'IoT Security: Protecting Connected Devices',
      excerpt: 'Critical security considerations for Internet of Things implementations in enterprise environments.',
      content: 'Full article content...',
      author: 'Robert Johnson',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'IoT',
      tags: ['IoT', 'Security', 'Connected Devices'],
      featured: false,
      image: '/images/blog/iot-security.jpg'
    }
  ];

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, blogPosts]);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog - Zion Tech Group | Latest Insights & Technology News</title>
        <meta name="description" content="Stay updated with the latest insights, technology trends, and industry news from Zion Tech Group's expert team." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity, cloud computing, DevOps, data analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology Insights & News
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Stay ahead with expert insights, industry trends, and cutting-edge technology discussions
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, tags, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold">{post.title.charAt(0)}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                      <Clock className="w-4 h-4 ml-4 mr-1" />
                      {post.readTime}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {selectedCategory === 'all' ? 'All Articles' : `${selectedCategory} Articles`}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold">{post.title.charAt(0)}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                      <Clock className="w-4 h-4 ml-4 mr-1" />
                      {post.readTime}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get the latest technology insights and industry news delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-r-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;