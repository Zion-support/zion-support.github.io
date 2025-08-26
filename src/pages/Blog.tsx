
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  Eye,
  BookOpen
} from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: 25 },
    { id: 'ai', name: 'AI & Machine Learning', count: 8 },
    { id: 'quantum', name: 'Quantum Computing', count: 5 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6 },
    { id: 'cloud', name: 'Cloud & DevOps', count: 4 },
    { id: 'business', name: 'Business & Strategy', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI: Autonomous Business Operations in 2025',
      excerpt: 'Explore how autonomous AI systems are revolutionizing business operations and what this means for the future of work.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      views: '2.4k',
      tags: ['AI', 'Automation', 'Business', 'Future'],
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers to Enterprise Adoption',
      excerpt: 'Understanding the practical applications of quantum computing and how businesses can start preparing for the quantum revolution.',
      category: 'quantum',
      author: 'Dr. James Kim',
      date: '2025-01-12',
      readTime: '12 min read',
      views: '1.8k',
      tags: ['Quantum Computing', 'Enterprise', 'Technology', 'Innovation'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Zero-Trust Security: The New Standard for Enterprise Protection',
      excerpt: 'Why zero-trust security architecture is becoming essential for modern enterprises and how to implement it effectively.',
      category: 'cybersecurity',
      author: 'Michael Rodriguez',
      date: '2025-01-10',
      readTime: '10 min read',
      views: '3.1k',
      tags: ['Cybersecurity', 'Zero-Trust', 'Enterprise', 'Security'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'DevOps Transformation: From Theory to Practice',
      excerpt: 'Real-world strategies for implementing DevOps practices and achieving faster, more reliable software delivery.',
      category: 'cloud',
      author: 'Emily Watson',
      date: '2025-01-08',
      readTime: '15 min read',
      views: '2.7k',
      tags: ['DevOps', 'Cloud', 'Automation', 'Software Development'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'AI-Powered Decision Making: Transforming Business Intelligence',
      excerpt: 'How artificial intelligence is enhancing business intelligence and enabling data-driven decision making at scale.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-05',
      readTime: '9 min read',
      views: '1.9k',
      tags: ['AI', 'Business Intelligence', 'Data', 'Decision Making'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Bringing Intelligence Closer to Data',
      excerpt: 'Exploring the benefits of edge computing and how it\'s reshaping the future of IoT and real-time applications.',
      category: 'cloud',
      author: 'David Chen',
      date: '2025-01-03',
      readTime: '11 min read',
      views: '1.6k',
      tags: ['Edge Computing', 'IoT', 'Cloud', 'Real-time'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 7,
      title: 'Blockchain in Enterprise: Beyond Cryptocurrency',
      excerpt: 'Practical applications of blockchain technology in enterprise environments and real-world use cases.',
      category: 'business',
      author: 'Alex Thompson',
      date: '2025-01-01',
      readTime: '13 min read',
      views: '2.2k',
      tags: ['Blockchain', 'Enterprise', 'Innovation', 'Technology'],
      featured: false,
      image: '/api/placeholder/400/250'
    },
    {
      id: 8,
      title: 'Machine Learning in Healthcare: Improving Patient Outcomes',
      excerpt: 'How machine learning is transforming healthcare delivery and improving patient care and outcomes.',
      category: 'ai',
      author: 'Dr. Lisa Park',
      date: '2024-12-28',
      readTime: '14 min read',
      views: '3.5k',
      tags: ['AI', 'Healthcare', 'Machine Learning', 'Patient Care'],
      featured: false,
      image: '/api/placeholder/400/250'
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = selectedCategory === 'all' 
    ? regularPosts 
    : regularPosts.filter(post => post.category === selectedCategory);

  const searchFilteredPosts = filteredPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Insights, analysis, and thought leadership on the latest trends in technology, 
            AI, and digital transformation.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Article</h2>
              <p className="text-gray-300">Our latest insights and analysis</p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm rounded-full">
                      Featured
                    </span>
                    <span className="text-gray-400 text-sm">{featuredPost.category.toUpperCase()}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(featuredPost.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-2" />
                      {featuredPost.views} views
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-24 w-24 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-gray-300">Stay updated with our latest insights and analysis</p>
          </div>
          
          {searchFilteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchFilteredPosts.map((post) => (
                <article key={post.id} className="bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-white/10 text-blue-400 text-xs rounded-full">
                        {post.category.toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-gray-400">
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-white/5 text-gray-300 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No articles found matching your search criteria.</p>
              <p className="text-gray-400 mt-2">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest insights and analysis delivered to your inbox. 
            Never miss an important technology trend or business insight.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Have a Story to Share?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for guest contributors and industry experts to share their insights. 
            Join our community of thought leaders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Submit an Article
            </Link>
            <Link
              to="/about"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
