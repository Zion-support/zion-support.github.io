import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Search, Clock, BookOpen, Zap } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping industries and discover how businesses can leverage artificial intelligence for competitive advantage.',
      content: 'Artificial intelligence continues to evolve at an unprecedented pace, transforming how businesses operate and compete. In 2024, we\'re seeing several key trends emerge that will shape the future of AI in business...',
      author: 'Dr. Sarah Chen',
      authorRole: 'AI Research Director',
      authorAvatar: '/images/authors/sarah-chen.jpg',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI', 'Machine Learning', 'Business Intelligence', 'Future Tech'],
      image: '/images/blog/ai-business-trends.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Remote Work Environments',
      excerpt: 'Learn essential security measures to protect your remote workforce and maintain data integrity in distributed work environments.',
      content: 'With remote work becoming the new norm, organizations face unprecedented cybersecurity challenges. This comprehensive guide covers the essential security measures every business should implement...',
      author: 'Michael Rodriguez',
      authorRole: 'Cybersecurity Expert',
      authorAvatar: '/images/authors/michael-rodriguez.jpg',
      publishDate: '2024-01-12',
      readTime: '6 min read',
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'Remote Work', 'Data Protection', 'Best Practices'],
      image: '/images/blog/remote-security.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies: A Complete Guide for Enterprises',
      excerpt: 'Discover proven strategies for successful cloud migration and learn how to avoid common pitfalls that can derail your digital transformation.',
      content: 'Cloud migration is a critical step in digital transformation, but it requires careful planning and execution. This guide provides a comprehensive framework for successful cloud adoption...',
      author: 'Jennifer Liu',
      authorRole: 'Cloud Solutions Architect',
      authorAvatar: '/images/authors/jennifer-liu.jpg',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      category: 'cloud',
      tags: ['Cloud Computing', 'Migration', 'Digital Transformation', 'Enterprise'],
      image: '/images/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Building Scalable Web Applications with Modern JavaScript',
      excerpt: 'Learn the latest techniques for creating high-performance, scalable web applications using modern JavaScript frameworks and tools.',
      content: 'Modern web development requires a deep understanding of scalability principles and performance optimization. This comprehensive guide covers everything from architecture design to deployment strategies...',
      author: 'David Kim',
      authorRole: 'Senior Full-Stack Developer',
      authorAvatar: '/images/authors/david-kim.jpg',
      publishDate: '2024-01-08',
      readTime: '12 min read',
      category: 'development',
      tags: ['JavaScript', 'Web Development', 'Scalability', 'Performance'],
      image: '/images/blog/web-development.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing: Transforming Data Processing',
      excerpt: 'Explore how edge computing is revolutionizing data processing and enabling real-time applications across industries.',
      content: 'Edge computing represents a paradigm shift in how we process and analyze data. By bringing computation closer to data sources, organizations can achieve unprecedented performance and efficiency...',
      author: 'Dr. Alex Thompson',
      authorRole: 'Edge Computing Specialist',
      authorAvatar: '/images/authors/alex-thompson.jpg',
      publishDate: '2024-01-05',
      readTime: '7 min read',
      category: 'cloud',
      tags: ['Edge Computing', 'Data Processing', 'IoT', 'Real-time Analytics'],
      image: '/images/blog/edge-computing.jpg',
      featured: true
    },
    {
      id: 6,
      title: 'Machine Learning Model Deployment: From Development to Production',
      excerpt: 'Master the art of deploying machine learning models in production environments with this comprehensive deployment guide.',
      content: 'Deploying machine learning models to production is one of the most challenging aspects of ML engineering. This guide covers everything from model packaging to monitoring and maintenance...',
      author: 'Dr. Maria Garcia',
      authorRole: 'ML Engineering Lead',
      authorAvatar: '/images/authors/maria-garcia.jpg',
      publishDate: '2024-01-03',
      readTime: '9 min read',
      category: 'ai',
      tags: ['Machine Learning', 'Deployment', 'MLOps', 'Production'],
      image: '/images/blog/ml-deployment.jpg',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Blog - Technology Insights and Industry News | Zion Tech Group"
        description="Stay updated with the latest technology trends, AI insights, cybersecurity best practices, and industry news from Zion Tech Group's expert team."
        keywords="technology blog, AI insights, cybersecurity news, cloud computing, web development, tech trends, industry analysis"
        canonical="https://ziontechgroup.com/blog"
        author="Zion Tech Group"
        section="Blog"
        tags={["Technology", "AI", "Cybersecurity", "Cloud Computing", "Web Development"]}
        readingTime={5}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Technology Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Our Blog
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Stay ahead of the curve with expert insights, industry trends, and cutting-edge technology discussions 
            from our team of specialists.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-cyan-400'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <FuturisticCard key={post.id} className="group hover:scale-105 transition-transform duration-300">
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <FuturisticButton
                      href={`/blog/${post.id}`}
                      variant="outline"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="w-full"
                    >
                      Read More
                    </FuturisticButton>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <FuturisticCard key={post.id} className="group hover:scale-105 transition-transform duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <FuturisticButton
                      href={`/blog/${post.id}`}
                      variant="outline"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                      className="w-full"
                    >
                      Read More
                    </FuturisticButton>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </ResponsiveContainer>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest technology trends, AI insights, and industry news delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <FuturisticButton
              href="#"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Subscribe
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
