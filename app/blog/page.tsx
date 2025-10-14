import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends shaping the business landscape and how companies can leverage these technologies for competitive advantage.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      excerpt: "Learn essential cybersecurity strategies to protect your organization from evolving threats in the digital age.",
      author: "Security Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Discover proven strategies for successful cloud migration and how to avoid common pitfalls during the transition.",
      author: "Cloud Solutions Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Cloud Computing",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "Understand how 5G technology is revolutionizing various industries and creating new business opportunities.",
      author: "5G Solutions Team",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "5G Technology",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Micro SAAS Solutions: Building Scalable Business Applications",
      excerpt: "Learn how micro SAAS solutions can help businesses scale efficiently while maintaining cost-effectiveness.",
      author: "Product Team",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Micro SAAS",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt: "Discover how advanced data analytics can transform raw data into actionable business insights.",
      author: "Analytics Team",
      date: "2023-12-25",
      readTime: "6 min read",
      category: "Data Analytics",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "AI & Technology",
    "Cybersecurity",
    "Cloud Computing",
    "5G Technology",
    "Micro SAAS",
    "Data Analytics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, cybersecurity articles, cloud computing trends, 5G technology, micro SAAS" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Tag className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Technology Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Our Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends 
            from our expert team at Zion Tech Group.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <FuturisticCard key={post.id} className="group hover:scale-105 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-medium">{post.category}</span>
                      <FuturisticButton
                        href={`/blog/${post.id}`}
                        variant="outline"
                        size="sm"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Read More
                      </FuturisticButton>
                    </div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <FuturisticCard key={post.id} className="group hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="text-purple-400 font-medium">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <FuturisticButton
                    href={`/blog/${post.id}`}
                    variant="outline"
                    size="sm"
                    className="w-full mt-4"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Read Article
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights on AI, technology, and business innovation.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <FuturisticButton
                  href="#"
                  variant="primary"
                  size="lg"
                >
                  Subscribe
                </FuturisticButton>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default Blog;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:gap-2 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center">
            <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest tech insights and industry updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
