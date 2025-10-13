import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, User, ArrowRight, Filter } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends to Watch in 2024",
      excerpt: "Artificial Intelligence continues to revolutionize how businesses operate, from automating routine tasks to providing deep insights through advanced analytics. In 2024, we're seeing unprecedented adoption of AI technologies across all sectors...",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      image: "/images/blog/ai-business-trends.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Work Environments",
      excerpt: "Essential security measures to protect your organization's data and systems in remote work settings.",
      author: "Michael Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "security",
      image: "/images/blog/cybersecurity-remote-work.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Step-by-step guide to migrating your business to the cloud safely and efficiently.",
      author: "Emily Johnson",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "cloud",
      image: "/images/blog/cloud-migration-guide.jpg",
      featured: false
    },
    {
      id: 4,
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "How 5G networks are revolutionizing connectivity and enabling new business models across various industries.",
      author: "David Kim",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "5g",
      image: "/images/blog/5g-technology-impact.jpg",
      featured: true
    },
    {
      id: 5,
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt: "Learn how to leverage data analytics to make informed business decisions and drive growth.",
      author: "Lisa Wang",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "analytics",
      image: "/images/blog/data-analytics-guide.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Micro SAAS Solutions: The Future of Business Software",
      excerpt: "Discover how micro SAAS solutions are changing the way businesses approach software and technology.",
      author: "Alex Thompson",
      date: "2023-12-25",
      readTime: "5 min read",
      category: "saas",
      image: "/images/blog/micro-saas-future.jpg",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: '5g', name: '5G Technology' },
    { id: 'analytics', name: 'Data Analytics' },
    { id: 'saas', name: 'Micro SAAS' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest technology trends, industry insights, and expert analysis from Zion Tech Group's blog."
        keywords="technology blog, AI insights, cybersecurity, cloud computing, 5G technology, data analytics, micro SAAS"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Technology Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay ahead with the latest technology trends, industry insights, and expert analysis from our team of technology professionals.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none min-w-[200px]"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-slate-900 text-white">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured Posts */}
          {searchTerm === '' && selectedCategory === 'all' && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Featured Articles</h2>
              <ResponsiveGrid className="gap-8">
                {featuredPosts.map((post) => (
                  <FuturisticCard key={post.id} className="group hover:scale-105 transition-transform duration-300">
                    <div className="p-6">
                      <div className="mb-4">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <FuturisticButton
                        href={`/blog/${post.id}`}
                        variant="outline"
                        size="sm"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Read More
                      </FuturisticButton>
                    </div>
                  </FuturisticCard>
                ))}
              </ResponsiveGrid>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              {searchTerm || selectedCategory !== 'all' ? 'Search Results' : 'All Articles'}
            </h2>
            <ResponsiveGrid className="gap-8">
              {filteredPosts.map((post) => (
                <FuturisticCard key={post.id} className="group hover:scale-105 transition-transform duration-300">
                  <div className="p-6">
                    <div className="mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <FuturisticButton
                      href={`/blog/${post.id}`}
                      variant="outline"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Read More
                    </FuturisticButton>
                  </div>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default BlogPage;
