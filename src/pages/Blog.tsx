
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search, 
  Filter,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Code,
  Brain
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 25 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 12 },
    { id: 'technology', name: 'Technology', count: 8 },
    { id: 'business', name: 'Business Insights', count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest developments in artificial intelligence and how they\'re reshaping enterprise technology landscapes.',
      content: 'Artificial intelligence continues to evolve at an unprecedented pace, transforming how businesses operate and compete...',
      author: 'Dr. Sarah Chen',
      authorRole: 'CTO',
      authorAvatar: '/images/team/sarah-chen.jpg',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'ai-ml',
      tags: ['AI', 'Enterprise', 'Technology Trends', 'Machine Learning'],
      featured: true,
      image: '/images/blog/ai-enterprise-2024.jpg',
      views: 15420,
      likes: 892
    },
    {
      id: 2,
      title: 'Building Scalable AI Infrastructure: Best Practices for Startups',
      excerpt: 'Learn the essential strategies for building robust and scalable AI infrastructure that grows with your business.',
      content: 'Startups face unique challenges when implementing AI solutions. From limited resources to rapid scaling requirements...',
      author: 'Michael Rodriguez',
      authorRole: 'Head of Engineering',
      authorAvatar: '/images/team/michael-rodriguez.jpg',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      category: 'technology',
      tags: ['AI Infrastructure', 'Startups', 'Scalability', 'Best Practices'],
      featured: true,
      image: '/images/blog/ai-infrastructure-startups.jpg',
      views: 12350,
      likes: 756
    },
    {
      id: 3,
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'Separate fact from fiction in the quantum computing landscape and understand what\'s really possible today.',
      content: 'Quantum computing has captured the imagination of technologists and business leaders alike. But beyond the headlines...',
      author: 'Dr. Kleber Santos',
      authorRole: 'Founder & CEO',
      authorAvatar: '/images/team/kleber-santos.jpg',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      category: 'technology',
      tags: ['Quantum Computing', 'Technology', 'Innovation', 'Research'],
      featured: false,
      image: '/images/blog/quantum-computing-reality.jpg',
      views: 9870,
      likes: 634
    },
    {
      id: 4,
      title: 'The ROI of AI Implementation: Measuring Success in Digital Transformation',
      excerpt: 'Discover how to measure and demonstrate the return on investment for AI initiatives in your organization.',
      content: 'Implementing AI solutions requires significant investment, both in terms of technology and organizational change...',
      author: 'Emily Watson',
      authorRole: 'Head of Design & UX',
      authorAvatar: '/images/team/emily-watson.jpg',
      publishDate: '2024-01-08',
      readTime: '6 min read',
      category: 'business',
      tags: ['ROI', 'Digital Transformation', 'AI Implementation', 'Business Value'],
      featured: false,
      image: '/images/blog/ai-roi-measurement.jpg',
      views: 7650,
      likes: 445
    },
    {
      id: 5,
      title: 'Ethical AI Development: Building Trust in Machine Learning Systems',
      excerpt: 'Explore the critical importance of ethical considerations in AI development and how to implement responsible practices.',
      content: 'As AI systems become more sophisticated and integrated into critical decision-making processes...',
      author: 'David Kim',
      authorRole: 'Head of Security',
      authorAvatar: '/images/team/david-kim.jpg',
      publishDate: '2024-01-05',
      readTime: '9 min read',
      category: 'ai-ml',
      tags: ['Ethics', 'AI Safety', 'Responsible AI', 'Trust'],
      featured: false,
      image: '/images/blog/ethical-ai-development.jpg',
      views: 6540,
      likes: 398
    },
    {
      id: 6,
      title: 'Cloud-Native AI: Leveraging Cloud Infrastructure for Machine Learning',
      excerpt: 'Learn how cloud platforms are revolutionizing AI development and deployment strategies.',
      content: 'The cloud has fundamentally changed how we approach software development and deployment...',
      author: 'Lisa Thompson',
      authorRole: 'Head of Customer Success',
      authorAvatar: '/images/team/lisa-thompson.jpg',
      publishDate: '2024-01-03',
      readTime: '7 min read',
      category: 'technology',
      tags: ['Cloud Computing', 'AI', 'Machine Learning', 'Infrastructure'],
      featured: false,
      image: '/images/blog/cloud-native-ai.jpg',
      views: 5430,
      likes: 321
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Zion Tech <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Insights, analysis, and thought leadership on AI, technology, and digital transformation.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-black/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Featured Articles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and insightful content on cutting-edge technology and AI innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-400 text-sm">Featured Article</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                        {post.category.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.publishDate)}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <TrendingUp className="w-4 h-4" />
                        {post.views.toLocaleString()} views
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-white">{post.author}</p>
                          <p className="text-sm text-gray-400">{post.authorRole}</p>
                        </div>
                      </div>
                      
                      <Link
                        to={`/blog/${post.id}`}
                        className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 group-hover:scale-105"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Latest Articles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights and developments in technology and AI.
            </p>
          </motion.div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-500 text-xs">Article</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                        {post.category.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.publishDate)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-sm text-gray-400">{post.author}</span>
                      </div>
                      
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No articles match your current search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-6 py-2 text-cyan-400 hover:text-white transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, technology, and digital transformation delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold mb-3">What You'll Get</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-cyan-400" />
                  Weekly insights
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-400" />
                  Technical deep-dives
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  AI trends
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Explore Topics</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dive deep into specific areas of technology and AI that interest you most.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 text-center group cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.name.replace('-', ' ').toUpperCase()}</h3>
                <p className="text-gray-400 text-sm mb-3">{category.count} articles</p>
                <div className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Explore Topic →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
