import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedContentSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      id: 1,
      type: 'Case Study',
      title: 'AI-Powered Digital Transformation: How TechCorp Increased Efficiency by 300%',
      description: 'Discover how our AI solutions revolutionized TechCorp\'s operations, resulting in unprecedented efficiency gains and cost savings.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
      category: 'Artificial Intelligence',
      readTime: '8 min read',
      featured: true,
      stats: { efficiency: '300%', costSavings: '$2.5M', satisfaction: '98%' }
    },
    {
      id: 2,
      type: 'Blog Post',
      title: 'The Future of Blockchain: Revolutionary Applications in 2025',
      description: 'Explore cutting-edge blockchain innovations that are reshaping industries and creating new opportunities for businesses worldwide.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop',
      category: 'Blockchain',
      readTime: '6 min read',
      featured: true
    },
    {
      id: 3,
      type: 'Whitepaper',
      title: 'Quantum Computing: The Next Frontier in Technology',
      description: 'Our comprehensive analysis of quantum computing\'s potential impact on cybersecurity, drug discovery, and financial modeling.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop',
      category: 'Quantum Computing',
      readTime: '12 min read',
      featured: true
    }
  ];

  const latestBlogs = [
    {
      id: 4,
      title: '5 AI Trends That Will Define 2025',
      excerpt: 'From autonomous systems to ethical AI, discover the trends shaping the future.',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      slug: 'ai-trends-2025',
      category: 'AI'
    },
    {
      id: 5,
      title: 'Cybersecurity Best Practices for Modern Enterprises',
      excerpt: 'Protect your business with these essential cybersecurity strategies and tools.',
      author: 'Michael Chen',
      date: '2025-01-12',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      slug: 'cybersecurity-best-practices',
      category: 'Security'
    },
    {
      id: 6,
      title: 'Cloud Migration: A Complete Guide for Businesses',
      excerpt: 'Everything you need to know about migrating to the cloud successfully.',
      author: 'Emily Rodriguez',
      date: '2025-01-10',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
      slug: 'cloud-migration-guide',
      category: 'Cloud'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>Latest Insights</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Discover Our Latest
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Content</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with cutting-edge insights, case studies, and industry analysis from our team of experts.
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="mb-16">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative h-96 lg:h-[500px]">
              {featuredContent.map((content, index) => (
                <div
                  key={content.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative h-full">
                    <img
                      src={content.image}
                      alt={content.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                      <div className="max-w-4xl">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                            {content.type}
                          </span>
                          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                            {content.category}
                          </span>
                          <span className="text-white/80 text-sm">{content.readTime}</span>
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4 line-clamp-2">
                          {content.title}
                        </h3>
                        
                        <p className="text-lg lg:text-xl text-white/90 mb-6 line-clamp-3">
                          {content.description}
                        </p>
                        
                        {content.stats && (
                          <div className="grid grid-cols-3 gap-6 mb-6">
                            <div className="text-center">
                              <div className="text-2xl lg:text-3xl font-bold text-blue-400">{content.stats.efficiency}</div>
                              <div className="text-sm text-white/80">Efficiency Increase</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl lg:text-3xl font-bold text-green-400">{content.stats.costSavings}</div>
                              <div className="text-sm text-white/80">Cost Savings</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl lg:text-3xl font-bold text-purple-400">{content.stats.satisfaction}</div>
                              <div className="text-sm text-white/80">Client Satisfaction</div>
                            </div>
                          </div>
                        )}
                        
                        <Link
                          to={`/content/${content.id}`}
                          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                        >
                          <span>Read Full Story</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Latest Blog Posts */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Latest Blog Posts
            </h3>
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link to={`/blog/${blog.slug}`} className="hover:text-blue-600 transition-colors">
                      {blog.title}
                    </Link>
                  </h4>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{blog.author}</span>
                      </div>
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <Award className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Updated with Our Latest Insights
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Get exclusive access to our latest research, case studies, and industry insights delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-white/70 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContentSection;