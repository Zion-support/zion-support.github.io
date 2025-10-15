import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Search, Filter, BookOpen } from 'lucide-react';const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', count: 8 },
    { id: 'saas', name: 'Micro SAAS', count: 6 },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 5 },
    { id: 'mobile', name: 'Mobile Development', count: 3 },
    { id: 'business', name: 'Business Insights', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      content: 'Artificial Intelligence continues to revolutionize business operations across industries. In 2024, we\'re seeing unprecedented adoption of AI technologies...',
      author: 'Kleber Santos',
      authorRole: 'CEO & AI Expert',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI', 'Business', 'Technology', 'Future'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Micro SAAS Applications: A Complete Guide',
      excerpt: 'Learn how to build and scale micro SAAS applications that can grow with your business needs.',
      content: 'Micro SAAS applications are becoming the preferred choice for businesses looking to solve specific problems...',
      author: 'Sarah Johnson',
      authorRole: 'CTO',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      category: 'saas',
      tags: ['SAAS', 'Development', 'Scalability', 'Architecture'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Security Best Practices for Enterprise Applications',
      excerpt: 'Essential security measures every enterprise should implement when migrating to the cloud.',
      content: 'Cloud security is a critical concern for enterprises moving their applications and data to cloud platforms...',
      author: 'Michael Chen',
      authorRole: 'Security Expert',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      category: 'cloud',
      tags: ['Security', 'Cloud', 'Enterprise', 'Best Practices'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Mobile-First Design: Creating Apps That Users Love',
      excerpt: 'Discover the principles of mobile-first design and how to create engaging mobile experiences.',
      content: 'Mobile-first design isn\'t just a trend—it\'s a necessity in today\'s mobile-dominated world...',
      author: 'Emily Rodriguez',
      authorRole: 'UX Designer',
      publishDate: '2024-01-08',
      readTime: '6 min read',
      category: 'mobile',
      tags: ['Mobile', 'UX', 'Design', 'User Experience'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'The ROI of AI Implementation: Measuring Success in Business',
      excerpt: 'How to measure and maximize the return on investment when implementing AI solutions.',
      content: 'Implementing AI solutions can be a significant investment, but the returns can be substantial...',
      author: 'David Kim',
      authorRole: 'Business Analyst',
      publishDate: '2024-01-05',
      readTime: '9 min read',
      category: 'business',
      tags: ['ROI', 'AI', 'Business', 'Analytics'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Data Analytics: Turning Raw Data into Business Insights',
      excerpt: 'Learn how to transform your data into actionable insights that drive business growth.',
      content: 'Data is the new oil, but only if you know how to refine it into valuable insights...',
      author: 'Lisa Wang',
      authorRole: 'Data Scientist',
      publishDate: '2024-01-03',
      readTime: '11 min read',
      category: 'ai',
      tags: ['Data', 'Analytics', 'Insights', 'Business Intelligence'],
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (<>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="blog, _AI insights, _IT trends, _technology news, _micro SAAS, _cloud computing, mobile development" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Tech
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights on AI, _IT solutions, and emerging technologies. 
              Learn from our team of industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                Subscribe to Updates
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (<button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Article</h2>
              <p className="text-xl text-gray-300">Our latest insights and expert analysis</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium mr-4">
                      {categories.find(cat => cat.id === featuredPost.category)?.name}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-medium">{featuredPost.author}</div>
                        <div className="text-gray-400 text-sm">{featuredPost.authorRole}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="bg-slate-600 text-gray-300 px-3 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of expert insights and industry analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="group bg-slate-700/50 hover:bg-slate-700/70 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                {/* Post Image */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs font-medium">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-xs">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">{post.author}</div>
                        <div className="text-gray-400 text-xs">{post.authorRole}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-slate-600 text-gray-300 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {regularPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Get the latest insights and updates delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
              />
              <button className="bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3 rounded-r-lg transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;