import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Search, Filter } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends',
      excerpt: 'Discover how artificial intelligence is transforming business operations and what to expect in 2024.',
      content: 'Artificial intelligence continues to revolutionize the business landscape...',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'AI',
      readTime: '8 min read',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential security measures every small business should implement to protect their digital assets.',
      content: 'In today\'s digital landscape, small businesses are increasingly targeted by cybercriminals...',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: 'Micro SAAS: The New Era of Business Software',
      excerpt: 'Discover how micro SAAS solutions are revolutionizing the way businesses operate and scale.',
      content: 'Micro SAAS applications are changing the game for businesses of all sizes...',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      category: 'Business',
      readTime: '7 min read',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: '5G Technology: Transforming Industries',
      excerpt: 'Explore how 5G networks are enabling new possibilities across various industries.',
      content: '5G technology is not just about faster internet speeds...',
      author: 'David Kim',
      date: '2024-01-01',
      category: 'Technology',
      readTime: '9 min read',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = ['All', 'AI', 'Cybersecurity', 'Business', 'Technology'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <EnhancedSEO
        title="Blog - Zion Tech Group | Latest Technology Insights"
        description="Stay updated with the latest insights on AI, cybersecurity, business technology, and digital transformation from Zion Tech Group experts."
        keywords="technology blog, AI insights, cybersecurity tips, business technology, digital transformation, tech trends"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Technology Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with the latest insights on AI, cybersecurity, business technology, and digital transformation.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
              {(() => {
                const featuredPost = filteredPosts.find(post => post.featured);
                if (!featuredPost) return null;
                
                return (
                  <article className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                            {featuredPost.category}
                          </span>
                          <span className="text-gray-400 text-sm">Featured</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {featuredPost.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{featuredPost.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{featuredPost.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{featuredPost.readTime}</span>
                            </div>
                          </div>
                          <Link
                            to={`/blog/${featuredPost.id}`}
                            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })()}
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 text-center border border-cyan-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-300 mb-6">
                Get the latest technology insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
