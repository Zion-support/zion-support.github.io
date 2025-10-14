import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, User, Calendar, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'ai', name: 'AI & Machine Learning', count: 5 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 3 },
    { id: 'cloud', name: 'Cloud Computing', count: 2 },
    { id: 'development', name: 'Development', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends',
      excerpt: 'Explore the latest AI trends that are transforming businesses across industries.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'ai',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      tags: ['AI', 'Business', 'Trends']
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Learn essential cybersecurity practices to protect your business from evolving threats.',
      author: 'Michael Chen',
      date: '2024-01-12',
      category: 'cybersecurity',
      readTime: '7 min read',
      image: '/api/placeholder/400/250',
      tags: ['Security', 'Best Practices', '2024']
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Everything you need to know about migrating your infrastructure to the cloud.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      category: 'cloud',
      readTime: '8 min read',
      image: '/api/placeholder/400/250',
      tags: ['Cloud', 'Migration', 'Infrastructure']
    },
    {
      id: 4,
      title: 'Building Scalable Web Applications with React',
      excerpt: 'Best practices for creating maintainable and scalable React applications.',
      author: 'David Kim',
      date: '2024-01-08',
      category: 'development',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
      tags: ['React', 'Web Development', 'Scalability']
    },
    {
      id: 5,
      title: 'Machine Learning in Healthcare: Real-World Applications',
      excerpt: 'Discover how ML is revolutionizing healthcare and improving patient outcomes.',
      author: 'Dr. Lisa Wang',
      date: '2024-01-05',
      category: 'ai',
      readTime: '9 min read',
      image: '/api/placeholder/400/250',
      tags: ['Machine Learning', 'Healthcare', 'Applications']
    },
    {
      id: 6,
      title: 'Zero Trust Security Architecture: Implementation Guide',
      excerpt: 'A comprehensive guide to implementing zero trust security in your organization.',
      author: 'Alex Thompson',
      date: '2024-01-03',
      category: 'cybersecurity',
      readTime: '10 min read',
      image: '/api/placeholder/400/250',
      tags: ['Zero Trust', 'Security', 'Architecture']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog - AI & IT Insights | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and web development from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, cybersecurity, cloud computing, web development, technology trends, IT news" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, cybersecurity, cloud computing, and web development.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400/50">📝</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full flex items-center"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
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