'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  image: string;
  slug: string;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming businesses across industries.',
      content: 'Full article content...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '8 min read',
      tags: ['AI', 'Business', 'Technology', 'Future'],
      image: '/blog/ai-business-future.jpg',
      slug: 'future-ai-business-2024'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Modern Enterprises',
      excerpt: 'Essential cybersecurity strategies to protect your business from evolving threats.',
      content: 'Full article content...',
      author: 'Michael Chen',
      date: '2024-01-12',
      category: 'Cybersecurity',
      readTime: '6 min read',
      tags: ['Security', 'Enterprise', 'Best Practices'],
      image: '/blog/cybersecurity-best-practices.jpg',
      slug: 'cybersecurity-best-practices-enterprises'
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Step-by-step guide to successfully migrating your infrastructure to the cloud.',
      content: 'Full article content...',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      category: 'Cloud Computing',
      readTime: '10 min read',
      tags: ['Cloud', 'Migration', 'Infrastructure', 'Guide'],
      image: '/blog/cloud-migration-strategies.jpg',
      slug: 'cloud-migration-strategies-guide'
    },
    {
      id: 4,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'How to leverage data analytics to make informed business decisions.',
      content: 'Full article content...',
      author: 'David Kim',
      date: '2024-01-08',
      category: 'Data Analytics',
      readTime: '7 min read',
      tags: ['Data', 'Analytics', 'Insights', 'Business Intelligence'],
      image: '/blog/data-analytics-insights.jpg',
      slug: 'data-analytics-turning-information-insights'
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing: Benefits and Challenges',
      excerpt: 'Understanding edge computing and its impact on modern technology infrastructure.',
      content: 'Full article content...',
      author: 'Lisa Wang',
      date: '2024-01-05',
      category: 'Edge Computing',
      readTime: '9 min read',
      tags: ['Edge Computing', 'Infrastructure', 'Technology', 'IoT'],
      image: '/blog/edge-computing-rise.jpg',
      slug: 'rise-edge-computing-benefits-challenges'
    },
    {
      id: 6,
      title: 'Digital Transformation: A Roadmap for Success',
      excerpt: 'Comprehensive guide to digital transformation and how to implement it effectively.',
      content: 'Full article content...',
      author: 'James Wilson',
      date: '2024-01-03',
      category: 'Digital Transformation',
      readTime: '12 min read',
      tags: ['Digital Transformation', 'Strategy', 'Implementation', 'Success'],
      image: '/blog/digital-transformation-roadmap.jpg',
      slug: 'digital-transformation-roadmap-success'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cybersecurity', 'Cloud Computing', 'Data Analytics', 'Edge Computing', 'Digital Transformation'];
  const allTags = ['All', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <>
      <Helmet>
        <title>Blog | Zion Tech Group - Latest Technology Insights</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, cybersecurity tips, and digital transformation strategies from our expert team." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity, cloud computing, data analytics, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Technology Blog
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Stay ahead with the latest insights, trends, and best practices in AI, 
                cybersecurity, cloud computing, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Tag Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/placeholder-blog.jpg';
                        }}
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="inline-flex items-center text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest technology insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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