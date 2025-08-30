import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  User, 
  Eye, 
  Heart, 
  Share2,
  TrendingUp,
  Brain,
  Cloud,
  Shield,
  Lightbulb,
  Rocket,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: TrendingUp, count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'innovation', name: 'Innovation', icon: Lightbulb, count: 3 },
    { id: 'transformation', name: 'Digital Transformation', icon: Rocket, count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: 'December 15, 2024',
      readTime: '8 min read',
      image: '/images/blog/ai-future-2024.jpg',
      featured: true,
      views: 12450,
      likes: 342
    },
    {
      id: 2,
      title: 'Zero Trust Security: Why Traditional Security Models Are Failing',
      excerpt: 'Learn about the Zero Trust security framework and how it\'s becoming essential in today\'s threat landscape.',
      category: 'security',
      author: 'Michael Rodriguez',
      date: 'December 12, 2024',
      readTime: '6 min read',
      image: '/images/blog/zero-trust-security.jpg',
      featured: true,
      views: 8920,
      likes: 156
    },
    {
      id: 3,
      title: 'Cloud-Native Development: Best Practices for Modern Applications',
      excerpt: 'Explore the principles and practices of cloud-native development for scalable and resilient applications.',
      category: 'cloud',
      author: 'Jennifer Kim',
      date: 'December 10, 2024',
      readTime: '10 min read',
      image: '/images/blog/cloud-native-dev.jpg',
      featured: true,
      views: 15670,
      likes: 289
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Machine Learning in Healthcare: Revolutionizing Patient Care',
      excerpt: 'How AI and ML are transforming healthcare delivery and improving patient outcomes.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: 'December 8, 2024',
      readTime: '7 min read',
      image: '/images/blog/ml-healthcare.jpg',
      views: 6780,
      likes: 123
    },
    {
      id: 5,
      title: 'DevOps Automation: Streamlining Your Development Pipeline',
      excerpt: 'Practical strategies for implementing DevOps automation to accelerate your development process.',
      category: 'cloud',
      author: 'Jennifer Kim',
      date: 'December 5, 2024',
      readTime: '9 min read',
      image: '/images/blog/devops-automation.jpg',
      views: 5430,
      likes: 98
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: Processing Data Closer to Users',
      excerpt: 'Understanding edge computing and its impact on modern technology infrastructure.',
      category: 'innovation',
      author: 'Alex Thompson',
      date: 'December 3, 2024',
      readTime: '5 min read',
      image: '/images/blog/edge-computing.jpg',
      views: 4320,
      likes: 76
    },
    {
      id: 7,
      title: 'Cybersecurity Compliance: Navigating Regulatory Requirements',
      excerpt: 'A comprehensive guide to meeting cybersecurity compliance standards in various industries.',
      category: 'security',
      author: 'Michael Rodriguez',
      date: 'November 30, 2024',
      readTime: '11 min read',
      image: '/images/blog/cybersecurity-compliance.jpg',
      views: 7890,
      likes: 145
    },
    {
      id: 8,
      title: 'Digital Transformation Strategies for Enterprise Success',
      excerpt: 'Key strategies and best practices for successful digital transformation in large organizations.',
      category: 'transformation',
      author: 'Dr. Emily Watson',
      date: 'November 28, 2024',
      readTime: '12 min read',
      image: '/images/blog/digital-transformation.jpg',
      views: 6540,
      likes: 112
    }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];

  const filteredPosts = selectedCategory === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);

  const searchFilteredPosts = filteredPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : TrendingUp;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
    <>
      <SEO 
        title="Blog - Zion Tech Group - AI, Cloud & Technology Insights"
        description="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and digital transformation from Zion Tech Group's technology experts."
        keywords="AI blog, cloud computing, cybersecurity, digital transformation, technology insights, Zion Tech Group blog"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-6">
                <BookOpen className="w-5 h-5 text-zion-purple mr-2" />
                <span className="text-zion-purple font-medium">Technology Insights</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Blog
              </h1>
              
              <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto leading-relaxed mb-8">
                Stay ahead of the curve with expert insights on AI, cloud computing, cybersecurity, 
                and digital transformation from our technology experts.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan-light" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-zion-cyan-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-purple text-white shadow-lg'
                      : 'bg-white/10 text-zion-cyan-light hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Our most popular and insightful articles on cutting-edge technology topics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 rounded-t-xl flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="w-16 h-16 text-zion-purple mx-auto mb-4" />
                        <p className="text-zion-cyan-light text-sm">Featured Image</p>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-zion-purple/20 border border-zion-purple/30">
                          <span className="text-zion-purple text-sm font-medium">
                            {getCategoryName(post.category)}
                          </span>
                        </div>
                        <span className="text-zion-cyan-light text-sm">Featured</span>
                      </div>
                      
                      <CardTitle className="text-xl font-bold text-white group-hover:text-zion-purple transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                      
                      <CardDescription className="text-zion-cyan-light leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-zion-cyan-light mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-zion-cyan-light">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Recent Articles
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Stay updated with our latest insights and analysis on emerging technology trends.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchFilteredPosts.slice(3).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-t-xl flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="w-12 h-12 text-zion-cyan mx-auto mb-2" />
                        <p className="text-zion-cyan-light text-xs">Article Image</p>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-zion-cyan/20 border border-zion-cyan/30">
                          <span className="text-zion-cyan text-sm font-medium">
                            {getCategoryName(post.category)}
                          </span>
                        </div>
                      </div>
                      
                      <CardTitle className="text-lg font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                      
                      <CardDescription className="text-zion-cyan-light leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-zion-cyan-light mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-zion-cyan-light">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {searchFilteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <BookOpen className="w-16 h-16 text-zion-cyan-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-zion-cyan-light">
                  Try adjusting your search terms or category filter.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
                Get the latest technology insights and industry updates delivered directly to your inbox. 
                Join thousands of technology professionals who trust our content.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-zion-cyan-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                />
                <Button className="bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-sm text-zion-cyan-light mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
