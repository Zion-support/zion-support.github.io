import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Clock, TrendingUp, Users, Award } from 'lucide-react';
const ContentAdvertisingBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const featuredContent = [
    {
      id: 1,
      title: "AI-Powered Business Automation: The 2025 Revolution",
      excerpt: "Discover how AI automation is transforming business operations and creating unprecedented efficiency gains.",
      category: "Business Automation",
      readTime: "8 min read",
      author: "Michael Chen",
      image: "/images/blog/ai-business-automation-2025.jpg",
      slug: "ai-powered-business-automation-2025-revolution",
      badge: "Trending",
      stats: { views: "12.5K", likes: "892" }
    },
    {
      id: 2,
      title: "Edge Computing Revolution: Bringing Intelligence to the Edge",
      excerpt: "Explore how edge computing is enabling real-time processing and transforming industries worldwide.",
      category: "Edge Computing",
      readTime: "10 min read",
      author: "Dr. Lisa Wang",
      image: "/images/blog/edge-computing-revolution-2025.jpg",
      slug: "edge-computing-revolution-bringing-intelligence-edge",
      badge: "New",
      stats: { views: "8.7K", likes: "634" }
    },
    {
      id: 3,
      title: "Sustainable Technology: Building a Greener Future",
      excerpt: "Learn how technology companies are leading the charge in environmental sustainability and green innovation.",
      category: "Sustainability",
      readTime: "12 min read",
      author: "Dr. Emma Thompson",
      image: "/images/blog/sustainable-technology-greener-future.jpg",
      slug: "sustainable-technology-building-greener-future",
      badge: "Featured",
      stats: { views: "15.2K", likes: "1.2K" }
    },
    {
      id: 4,
      title: "The Future of Work: AI-Enhanced Human Collaboration",
      excerpt: "Discover how AI is augmenting human capabilities and creating new opportunities for collaboration.",
      category: "Future of Work",
      readTime: "9 min read",
      author: "Dr. James Rodriguez",
      image: "/images/blog/future-work-ai-human-collaboration.jpg",
      slug: "future-work-ai-enhanced-human-collaboration",
      badge: "Popular",
      stats: { views: "9.8K", likes: "756" }
    }
  ];
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Trending': return 'bg-red-500 text-white';
      case 'New': return 'bg-green-500 text-white';
      case 'Featured': return 'bg-purple-500 text-white';
      case 'Popular': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };
  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-indigo-600/30"></div>
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-indigo-400/20 rounded-full animate-bounce"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium">Featured Content</span>
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Discover the Future of Technology
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Explore cutting-edge insights, revolutionary breakthroughs, and expert analysis 
            that's shaping tomorrow's digital landscape.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-300" />
              <span className="text-lg font-semibold">50K+</span>
              <span className="text-blue-200">Readers</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-300" />
              <span className="text-lg font-semibold">100+</span>
              <span className="text-blue-200">Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-300" />
              <span className="text-lg font-semibold">Daily</span>
              <span className="text-blue-200">Updates</span>
            </div>
          </div>
        </div>
        {/* Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredContent.map((content, index) => (
                <div key={content.id} className="w-full flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Content Info */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(content.badge)}`}>
                            {content.badge}
                          </span>
                          <span className="text-blue-200 text-sm">{content.category}</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                          {content.title}
                        </h3>
                        <p className="text-lg text-blue-100 leading-relaxed">
                          {content.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-blue-200">
                          <span>By {content.author}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {content.readTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-300" />
                            <span className="text-sm">{content.stats.views} views</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm">{content.stats.likes} likes</span>
                          </div>
                        </div>
                        <Link
                          to={`/blog/${content.slug}`}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                          Read Article
                          <ChevronRight className="w-5 h-5" />
                        </Link>
                      </div>
                      {/* Content Image */}
                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl overflow-hidden">
                          <img
                            src={content.image}
                            alt={content.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = '/images/placeholder-blog.jpg';
                            }}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Ahead of the Curve
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Get exclusive access to the latest technology insights, expert analysis, 
              and breakthrough innovations delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore All Articles
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};


export default ContentAdvertisingBanner;
