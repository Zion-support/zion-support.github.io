import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Star, Users, Clock, CheckCircle, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface ContentShowcaseProps {
  className?: string;
}

interface ContentItem {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  views: number;
  rating: number;
  image: string;
  featured: boolean;
  tags: string[];
}

export default function ContentShowcase({ className = '' }: ContentShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems: ContentItem[] = [
    {
      id: 1,
      title: "AI-Powered Business Transformation: A Complete Guide",
      description: "Discover how leading enterprises are leveraging AI to achieve 300% ROI, reduce costs by 70%, and increase efficiency by 90%. Learn practical implementation strategies and real-world case studies.",
      category: "AI Solutions",
      readTime: "12 min",
      views: 15420,
      rating: 4.9,
      image: "/api/placeholder/400/250",
      featured: true,
      tags: ["AI", "Business Transformation", "ROI", "Case Studies"]
    },
    {
      id: 2,
      title: "Quantum Computing: The Future of Enterprise Computing",
      description: "Explore how quantum computing is revolutionizing industries and what it means for your business. Get insights into quantum algorithms and their practical applications.",
      category: "Quantum Computing",
      readTime: "8 min",
      views: 8930,
      rating: 4.8,
      image: "/api/placeholder/400/250",
      featured: true,
      tags: ["Quantum Computing", "Future Tech", "Enterprise", "Innovation"]
    },
    {
      id: 3,
      title: "Cybersecurity in the AI Era: Advanced Threat Protection",
      description: "Learn about the latest cybersecurity threats and how AI-powered solutions can protect your organization. Comprehensive guide to modern security practices.",
      category: "Cybersecurity",
      readTime: "15 min",
      views: 12350,
      rating: 4.7,
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["Cybersecurity", "AI Security", "Threat Protection", "Best Practices"]
    },
    {
      id: 4,
      title: "Building Scalable Micro-SaaS Solutions",
      description: "Step-by-step guide to creating and scaling micro-SaaS applications. Learn from successful case studies and avoid common pitfalls.",
      category: "Micro-SaaS",
      readTime: "10 min",
      views: 6780,
      rating: 4.6,
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["Micro-SaaS", "Startup", "Scaling", "Development"]
    },
    {
      id: 5,
      title: "Data Analytics and Business Intelligence: Complete Guide",
      description: "Transform your data into actionable insights. Learn advanced analytics techniques and tools for better business decision-making.",
      category: "Data Analytics",
      readTime: "14 min",
      views: 9870,
      rating: 4.8,
      image: "/api/placeholder/400/250",
      featured: true,
      tags: ["Data Analytics", "BI", "Insights", "Decision Making"]
    },
    {
      id: 6,
      title: "Cloud Infrastructure Optimization Strategies",
      description: "Maximize your cloud investment with proven optimization strategies. Reduce costs while improving performance and reliability.",
      category: "Cloud Services",
      readTime: "11 min",
      views: 11200,
      rating: 4.7,
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["Cloud", "Optimization", "Cost Reduction", "Performance"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'AI Solutions', name: 'AI Solutions', count: contentItems.filter(item => item.category === 'AI Solutions').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: contentItems.filter(item => item.category === 'Quantum Computing').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: contentItems.filter(item => item.category === 'Cybersecurity').length },
    { id: 'Micro-SaaS', name: 'Micro-SaaS', count: contentItems.filter(item => item.category === 'Micro-SaaS').length },
    { id: 'Data Analytics', name: 'Data Analytics', count: contentItems.filter(item => item.category === 'Data Analytics').length },
    { id: 'Cloud Services', name: 'Cloud Services', count: contentItems.filter(item => item.category === 'Cloud Services').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const featuredItems = contentItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <div className={`bg-gradient-to-br from-slate-900 via-purple-900/10 to-blue-900/10 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Featured Content
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Insights & Resources
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              for Modern Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest trends, strategies, and insights in AI, quantum computing, 
            cybersecurity, and digital transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Featured Content Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Star className="w-6 h-6 mr-3 text-yellow-400" />
            Featured Articles
          </h3>
          
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {featuredItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                        {/* Content */}
                        <div className="space-y-6">
                          <div className="flex items-center space-x-4">
                            <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium">
                              {item.category}
                            </span>
                            <div className="flex items-center space-x-2 text-gray-400">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{item.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                              <Users className="w-4 h-4" />
                              <span className="text-sm">{formatNumber(item.views)} views</span>
                            </div>
                          </div>

                          <h4 className="text-3xl font-bold text-white leading-tight">
                            {item.title}
                          </h4>

                          <p className="text-lg text-gray-300 leading-relaxed">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < Math.floor(item.rating)
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-600'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-gray-300 text-sm">{item.rating}</span>
                            </div>

                            <button className="cyber-button bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transform transition-all duration-200">
                              Read Article
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                          </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                          <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1),transparent_70%)]" />
                            <div className="relative z-10 text-center">
                              <Play className="w-16 h-16 text-white/80 mx-auto mb-4" />
                              <div className="text-white/60 text-sm font-medium">Watch Demo</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {featuredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-purple-400 w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Regular Content Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
            Latest Articles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularItems.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-700/50 to-purple-900/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1),transparent_70%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white/60 group-hover:text-white/80 transition-colors" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-purple-600/80 text-white rounded text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{formatNumber(item.views)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-slate-700/50 hover:bg-slate-600/50 text-white py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center group">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="cyber-button bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transform transition-all duration-200">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}