import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

export default function Blog() {
  const categories = [
    'All', 'AI & Machine Learning', 'Cybersecurity', 'Cloud Computing', 
    'Mobile Development', 'Web Development', 'Data Science', 'IoT', 'Blockchain'
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2025 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      category: 'AI & Machine Learning',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tags: ['AI', 'Enterprise', 'Trends', '2025']
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Remote Work Environments',
      excerpt: 'Essential security measures to protect your business data when employees work from anywhere.',
      author: 'Marcus Rodriguez',
      date: '2025-01-12',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      tags: ['Security', 'Remote Work', 'Best Practices']
    },
    {
      id: 3,
      title: 'Building Scalable Cloud Infrastructure with Modern DevOps',
      excerpt: 'Learn the principles and tools needed to create robust, scalable cloud solutions for growing businesses.',
      author: 'Alex Thompson',
      date: '2025-01-10',
      category: 'Cloud Computing',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      tags: ['Cloud', 'DevOps', 'Infrastructure', 'Scalability']
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Mobile App Development: Native vs Cross-Platform Solutions',
      excerpt: 'Comparing the pros and cons of different mobile development approaches for your next project.',
      author: 'Jennifer Kim',
      date: '2025-01-08',
      category: 'Mobile Development',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Data Science in Healthcare: Improving Patient Outcomes',
      excerpt: 'How machine learning and data analytics are revolutionizing healthcare delivery and patient care.',
      author: 'Dr. Michael Chang',
      date: '2025-01-05',
      category: 'Data Science',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing in IoT Applications',
      excerpt: 'Exploring how edge computing is enabling real-time processing for Internet of Things devices.',
      author: 'Lisa Wang',
      date: '2025-01-03',
      category: 'IoT',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Blog
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Insights, trends, and expert perspectives on the latest in technology, AI, and digital innovation
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, topics, or authors..."
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-white text-zion-blue rounded-md font-medium hover:bg-white/90 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-cyan hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-zion-blue-dark/50 rounded-lg border border-zion-cyan/20 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-cyan text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-zion-blue-dark/50 rounded-lg border border-zion-cyan/20 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-cyan text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium text-sm"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Latest Tech Insights
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get our latest articles, industry insights, and technology trends delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-zion-blue placeholder-zion-blue/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-zion-blue rounded-lg font-medium hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
