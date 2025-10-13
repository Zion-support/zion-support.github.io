import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Tag,
  Clock,
  Eye,
  ThumbsUp
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends shaping the business landscape and how companies can leverage these technologies for competitive advantage.',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      readTime: '5 min read',
      views: 1250,
      likes: 89,
      tags: ['AI', 'Business', 'Technology'],
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: 2,
      title: 'Micro SAAS Solutions: The New Era of Business Software',
      excerpt: 'Discover how micro SAAS solutions are revolutionizing the way businesses operate and scale their operations.',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      readTime: '4 min read',
      views: 980,
      likes: 67,
      tags: ['Micro SAAS', 'Software', 'Business'],
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: 3,
      title: '5G Technology: Transforming Industries and Creating New Opportunities',
      excerpt: 'Learn about the impact of 5G technology on various industries and the opportunities it presents for businesses.',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      readTime: '6 min read',
      views: 1100,
      likes: 78,
      tags: ['5G', 'Technology', 'Innovation'],
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices for Modern Businesses',
      excerpt: 'Essential cybersecurity strategies and best practices to protect your business from evolving threats.',
      author: 'Zion Tech Group',
      date: '2024-01-01',
      readTime: '7 min read',
      views: 1450,
      likes: 95,
      tags: ['Cybersecurity', 'Security', 'Business'],
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 5,
      title: 'Cloud Computing: The Foundation of Digital Transformation',
      excerpt: 'Understanding the role of cloud computing in digital transformation and how to choose the right cloud strategy.',
      author: 'Zion Tech Group',
      date: '2023-12-28',
      readTime: '5 min read',
      views: 890,
      likes: 56,
      tags: ['Cloud Computing', 'Digital Transformation', 'Technology'],
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 6,
      title: 'Data Analytics: Turning Information into Business Intelligence',
      excerpt: 'How to leverage data analytics to gain insights and make informed business decisions.',
      author: 'Zion Tech Group',
      date: '2023-12-25',
      readTime: '6 min read',
      views: 1200,
      likes: 72,
      tags: ['Data Analytics', 'Business Intelligence', 'Data'],
      image: '/api/placeholder/600/300',
      featured: false
    }
  ];

  const categories = [
    { name: 'AI & Machine Learning', count: 12, color: 'from-blue-500 to-cyan-500' },
    { name: 'Micro SAAS', count: 8, color: 'from-purple-500 to-pink-500' },
    { name: '5G Technology', count: 6, color: 'from-orange-500 to-red-500' },
    { name: 'Cybersecurity', count: 10, color: 'from-red-500 to-pink-500' },
    { name: 'Cloud Computing', count: 7, color: 'from-green-500 to-emerald-500' },
    { name: 'Data Analytics', count: 9, color: 'from-indigo-500 to-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Latest Technology Insights"
        description="Stay updated with the latest technology trends, AI insights, and business solutions from Zion Tech Group's expert team."
        keywords="technology blog, AI insights, business technology, micro saas, 5G technology, cybersecurity"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Tag className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Latest Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest technology trends, AI insights, and business solutions from our expert team.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and insightful articles on technology and business innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article
                key={post.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl text-cyan-400/50">📝</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-400">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {post.likes}
                      </div>
                      
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete collection of technology insights and business solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-4xl text-cyan-400/50">📝</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find articles by topic and stay focused on what matters most to your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Tag className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {category.count} articles
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Subscribe to our newsletter and never miss the latest technology insights and business solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
