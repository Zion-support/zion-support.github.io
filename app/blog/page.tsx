import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Filter, Clock, Eye, Heart, Share2, Tag, BookOpen, TrendingUp, Star, MessageCircle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends shaping the business landscape and discover how companies are leveraging artificial intelligence for competitive advantage.",
      content: "Artificial intelligence continues to revolutionize how businesses operate, from automating routine tasks to providing deep insights into customer behavior. In 2024, we're seeing unprecedented adoption of AI technologies across industries...",
      author: "Dr. Sarah Johnson",
      authorRole: "AI Research Director",
      authorImage: "/images/authors/sarah-johnson.jpg",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "Artificial Intelligence",
      tags: ["AI", "Business", "Technology", "Innovation"],
      image: "/images/blog/ai-business-trends.jpg",
      featured: true,
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Work Environments",
      excerpt: "Learn essential cybersecurity measures to protect your remote workforce and maintain data security in distributed work environments.",
      content: "With the rise of remote work, cybersecurity has become more critical than ever. Organizations must implement comprehensive security measures to protect sensitive data and maintain business continuity...",
      author: "Michael Chen",
      authorRole: "Cybersecurity Expert",
      authorImage: "/images/authors/michael-chen.jpg",
      publishDate: "2024-01-12",
      readTime: "6 min read",
      category: "Cybersecurity",
      tags: ["Security", "Remote Work", "Best Practices", "Data Protection"],
      image: "/images/blog/cybersecurity-remote-work.jpg",
      featured: true,
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Discover proven strategies for migrating your infrastructure to the cloud while minimizing risks and maximizing benefits.",
      content: "Cloud migration is a complex process that requires careful planning and execution. This comprehensive guide covers everything you need to know about moving your applications and data to the cloud...",
      author: "Emily Rodriguez",
      authorRole: "Cloud Solutions Architect",
      authorImage: "/images/authors/emily-rodriguez.jpg",
      publishDate: "2024-01-10",
      readTime: "12 min read",
      category: "Cloud Computing",
      tags: ["Cloud", "Migration", "Infrastructure", "Strategy"],
      image: "/images/blog/cloud-migration-guide.jpg",
      featured: false,
      views: 750,
      likes: 45
    },
    {
      id: 4,
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "Explore how 5G technology is revolutionizing various industries and creating new business opportunities in the digital age.",
      content: "5G technology represents a paradigm shift in wireless communications, offering unprecedented speed, low latency, and connectivity. This technology is transforming industries from healthcare to manufacturing...",
      author: "David Kim",
      authorRole: "5G Technology Specialist",
      authorImage: "/images/authors/david-kim.jpg",
      publishDate: "2024-01-08",
      readTime: "10 min read",
      category: "5G Technology",
      tags: ["5G", "Innovation", "Connectivity", "Future Tech"],
      image: "/images/blog/5g-technology-impact.jpg",
      featured: false,
      views: 650,
      likes: 38
    },
    {
      id: 5,
      title: "Micro SAAS: The Future of Software Distribution",
      excerpt: "Learn about the micro SAAS revolution and how small, focused software solutions are changing the way businesses operate.",
      content: "Micro SAAS represents a new approach to software distribution, focusing on specific business needs with lightweight, efficient solutions. This trend is reshaping how companies approach software adoption...",
      author: "Lisa Wang",
      authorRole: "Product Strategy Manager",
      authorImage: "/images/authors/lisa-wang.jpg",
      publishDate: "2024-01-05",
      readTime: "7 min read",
      category: "Micro SAAS",
      tags: ["Micro SAAS", "Software", "Business", "Innovation"],
      image: "/images/blog/micro-saas-future.jpg",
      featured: false,
      views: 520,
      likes: 29
    },
    {
      id: 6,
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt: "Discover how advanced data analytics can transform raw information into actionable business intelligence and strategic insights.",
      content: "In today's data-driven world, the ability to extract meaningful insights from vast amounts of information is crucial for business success. Advanced analytics tools and techniques are enabling organizations to make informed decisions...",
      author: "Robert Taylor",
      authorRole: "Data Analytics Lead",
      authorImage: "/images/authors/robert-taylor.jpg",
      publishDate: "2024-01-03",
      readTime: "9 min read",
      category: "Data Analytics",
      tags: ["Analytics", "Data", "Business Intelligence", "Insights"],
      image: "/images/blog/data-analytics-intelligence.jpg",
      featured: false,
      views: 420,
      likes: 22
    }
  ];

  const categories = [
    "All",
    "Artificial Intelligence",
    "Cybersecurity",
    "Cloud Computing",
    "5G Technology",
    "Micro SAAS",
    "Data Analytics"
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest technology trends, industry insights, and expert analysis from Zion Tech Group's team of technology professionals."
        keywords="technology blog, AI insights, cybersecurity news, cloud computing, 5G technology, micro SAAS, data analytics"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, and cutting-edge 
              technology analysis from our team of professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                to="/contact"
                variant="primary"
                size="lg"
                className="flex items-center space-x-2"
              >
                <span>Subscribe to Newsletter</span>
                <ArrowRight className="w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                to="/demo"
                variant="secondary"
                size="lg"
                className="flex items-center space-x-2"
              >
                <span>View Our Work</span>
                <BookOpen className="w-5 h-5" />
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our most popular and insightful articles covering the latest 
              trends in technology and business innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <FuturisticCard key={post.id} className="group hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-cyan-400" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{post.author}</p>
                        <p className="text-gray-400 text-sm">{post.authorRole}</p>
                      </div>
                    </div>
                    
                    <FuturisticButton
                      to={`/blog/${post.id}`}
                      variant="primary"
                      size="sm"
                      className="flex items-center space-x-1"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </FuturisticButton>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-slate-700/50 hover:bg-cyan-500/20 text-white rounded-lg transition-colors duration-300 border border-white/10 hover:border-cyan-500/30"
              >
                {category}
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our latest insights and analysis on technology trends, 
              business strategies, and industry developments.
            </p>
          </div>
          
          <ResponsiveGrid>
            {recentPosts.map((post) => (
              <FuturisticCard key={post.id} className="group hover:scale-105 transition-transform duration-300">
                <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-cyan-400" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="px-3 py-1 bg-slate-700/50 rounded-full">{post.category}</span>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{post.author}</p>
                        <p className="text-gray-400 text-xs">{new Date(post.publishDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    <FuturisticButton
                      to={`/blog/${post.id}`}
                      variant="primary"
                      size="sm"
                    >
                      Read More
                    </FuturisticButton>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">12</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest technology insights, 
              industry trends, and expert analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <FuturisticButton
                variant="primary"
                size="lg"
                className="flex items-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-5 h-5" />
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default BlogPage;