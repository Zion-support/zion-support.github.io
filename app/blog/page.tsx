import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';

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
  image: string;
}

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends shaping the business landscape and how companies can leverage these technologies for competitive advantage.',
      content: 'Full article content...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Business', 'Technology', 'Future'],
      image: '/images/blog/ai-future.jpg'
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration, including common pitfalls to avoid and optimization techniques.',
      content: 'Full article content...',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'AWS', 'Azure'],
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      id: '3',
      title: 'Cybersecurity in the Age of Remote Work',
      excerpt: 'Discover how to protect your organization from cyber threats in a distributed work environment with practical security measures.',
      content: 'Full article content...',
      author: 'Alex Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Remote Work', 'Best Practices'],
      image: '/images/blog/cybersecurity.jpg'
    },
    {
      id: '4',
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'A comprehensive guide to designing and implementing microservices that can scale with your business growth and technical requirements.',
      content: 'Full article content...',
      author: 'Emily Davis',
      date: '2024-01-08',
      readTime: '15 min read',
      category: 'Software Development',
      tags: ['Microservices', 'Architecture', 'Scalability'],
      image: '/images/blog/microservices.jpg'
    },
    {
      id: '5',
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Learn how to extract meaningful insights from your data using advanced analytics techniques and visualization tools.',
      content: 'Full article content...',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Data Analytics',
      tags: ['Analytics', 'Data Science', 'Insights'],
      image: '/images/blog/data-analytics.jpg'
    },
    {
      id: '6',
      title: 'The Rise of 5G Technology and Its Business Impact',
      excerpt: 'Explore how 5G technology is revolutionizing industries and creating new opportunities for businesses worldwide.',
      content: 'Full article content...',
      author: 'Lisa Wang',
      date: '2024-01-03',
      readTime: '7 min read',
      category: '5G Technology',
      tags: ['5G', 'Technology', 'Innovation', 'Business'],
      image: '/images/blog/5g-technology.jpg'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Software Development', 'Data Analytics', '5G Technology'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & News</title>
        <meta
          name="description"
          content="Stay updated with the latest technology trends, AI insights, cloud computing guides, and cybersecurity best practices from Zion Tech Group experts."
        />
        <meta
          name="keywords"
          content="technology blog, AI insights, cloud computing, cybersecurity, software development, data analytics, 5G technology"
        />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Tag className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Technology Insights</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Blog
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest technology trends, AI insights, and expert advice 
              from our team of technology professionals.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
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

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <Tag className="w-12 h-12 text-cyan-400" />
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-lg mb-4">No articles found matching your criteria.</div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Subscribe to our newsletter and get the latest technology trends, AI insights, 
              and expert advice delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
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