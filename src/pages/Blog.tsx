
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
  BookOpen,
  Brain,
  Rocket,
  Shield,
  Cloud,
  Cpu,
  Database
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'innovation', name: 'Innovation', icon: Rocket, count: 3 },
    { id: 'tech', name: 'Technology', icon: Cpu, count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
      excerpt: "Explore the latest developments in artificial intelligence and how they're reshaping enterprise technology landscapes...",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      views: "2.4k",
      category: "ai",
      tags: ["AI", "Enterprise", "Trends", "2024"],
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs: What Businesses Need to Know",
      excerpt: "Recent advances in quantum computing are opening new possibilities for solving complex business problems...",
      author: "Marcus Rodriguez",
      date: "2024-01-12",
      readTime: "12 min read",
      views: "1.8k",
      category: "innovation",
      tags: ["Quantum Computing", "Innovation", "Technology"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Cloud Security Best Practices for 2024",
      excerpt: "As cloud adoption continues to grow, security becomes paramount. Learn the essential practices...",
      author: "Alex Thompson",
      date: "2024-01-10",
      readTime: "6 min read",
      views: "3.1k",
      category: "security",
      tags: ["Cloud Security", "Best Practices", "2024"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "DevOps Automation: Streamlining Your Development Pipeline",
      excerpt: "Discover how automation can transform your development workflow and improve deployment efficiency...",
      author: "Lisa Wang",
      date: "2024-01-08",
      readTime: "10 min read",
      views: "2.2k",
      category: "cloud",
      tags: ["DevOps", "Automation", "CI/CD"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Data Privacy in the Age of AI: A Comprehensive Guide",
      excerpt: "Understanding the intersection of artificial intelligence and data privacy regulations...",
      author: "David Kim",
      date: "2024-01-05",
      readTime: "15 min read",
      views: "1.9k",
      category: "ai",
      tags: ["Data Privacy", "AI", "Compliance", "GDPR"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Edge Computing: The Next Frontier in IoT",
      excerpt: "How edge computing is revolutionizing Internet of Things applications and real-time processing...",
      author: "Emma Wilson",
      date: "2024-01-03",
      readTime: "9 min read",
      views: "1.6k",
      category: "tech",
      tags: ["Edge Computing", "IoT", "Real-time Processing"],
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
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
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Zion Tech Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Insights, trends, and expert analysis on AI, cloud computing, cybersecurity, 
            and the latest technology innovations shaping the future of business.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.filter(post => post.featured).length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Article</h2>
            {filteredPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">{post.category.toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-gray-700/50 flex items-center justify-center">
                    <div className="text-gray-500 text-center p-8">
                      <div className="w-32 h-32 bg-gray-600 rounded-lg mx-auto mb-4"></div>
                      <p>Featured Image</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Latest Articles
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {post.category.toUpperCase()}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest insights and technology trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

