import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Clock, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  Play,
  BookOpen,
  Zap,
  Shield,
  Cloud,
  BarChart3
} from 'lucide-react';

const EnhancedContentCarousel2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
<<<<<<< HEAD
  const [isAutoPlay, setIsAutoPlay] = useState(true);
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

  const contentItems = [
    {
      id: 1,
<<<<<<< HEAD
      type: 'blog',
      title: "AI-Powered Business Automation: The 2025 Revolution",
      excerpt: "Discover how AI automation is transforming business operations and creating unprecedented efficiency gains.",
      author: "Michael Chen",
      readTime: "8 min read",
      category: "Business Automation",
      image: "/images/blog/ai-business-automation-2025.jpg",
      slug: "ai-powered-business-automation-2025-revolution",
      featured: true,
      stats: { views: "12.5K", likes: "892", comments: "156" },
      tags: ["AI Automation", "Business Process", "Efficiency"],
      icon: Zap,
      color: "from-blue-500 to-purple-600"
=======
      title: 'Next-Gen AI Consciousness',
      description: 'Experience truly conscious artificial intelligence that thinks, feels, and evolves beyond human comprehension',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/NextGenAIConsciousness2025',
      features: ['Self-aware AI systems', 'Emotional intelligence', 'Quantum consciousness', 'Transcendent learning']
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
    },
    {
      id: 2,
      type: 'service',
      title: "Cybersecurity Solutions",
      subtitle: "Protect your digital assets with enterprise-grade security",
      description: "Comprehensive security solutions including assessment, implementation, and 24/7 monitoring.",
      features: ["Security Assessment", "Implementation", "24/7 Monitoring"],
      price: "Starting at $8,000",
      image: "/images/services/cybersecurity-solutions.jpg",
      slug: "cybersecurity-solutions",
      featured: true,
      stats: { clients: "500+", success: "99%", uptime: "99.9%" },
      tags: ["Security", "Enterprise", "Monitoring"],
      icon: Shield,
      color: "from-red-500 to-orange-600"
    },
    {
      id: 3,
      type: 'blog',
      title: "Edge Computing Revolution: Bringing Intelligence to the Edge",
      excerpt: "Explore how edge computing is enabling real-time processing and transforming industries worldwide.",
      author: "Dr. Lisa Wang",
      readTime: "10 min read",
      category: "Edge Computing",
      image: "/images/blog/edge-computing-revolution-2025.jpg",
      slug: "edge-computing-revolution-bringing-intelligence-edge",
      featured: true,
      stats: { views: "8.7K", likes: "634", comments: "89" },
      tags: ["Edge Computing", "Real-time", "IoT"],
      icon: Cloud,
      color: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      type: 'service',
      title: "Data Analytics Solutions",
      subtitle: "Unlock insights from your data with advanced analytics",
      description: "Transform your data into actionable insights with our comprehensive analytics solutions.",
      features: ["Data Strategy", "Analytics Dashboard", "Predictive Analytics"],
      price: "Starting at $12,000",
      image: "/images/services/data-analytics-solutions.jpg",
      slug: "data-analytics-solutions",
      featured: true,
      stats: { clients: "300+", insights: "1M+", accuracy: "95%" },
      tags: ["Analytics", "Data Science", "Insights"],
      icon: BarChart3,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
<<<<<<< HEAD
      type: 'blog',
      title: "Sustainable Technology: Building a Greener Future",
      excerpt: "Learn how technology companies are leading the charge in environmental sustainability and green innovation.",
      author: "Dr. Emma Thompson",
      readTime: "12 min read",
      category: "Sustainability",
      image: "/images/blog/sustainable-technology-greener-future.jpg",
      slug: "sustainable-technology-building-greener-future",
      featured: true,
      stats: { views: "15.2K", likes: "1.2K", comments: "234" },
      tags: ["Sustainability", "Green Tech", "Environment"],
      icon: Award,
      color: "from-green-500 to-emerald-600"
=======
      title: 'Revolutionary Tech Showcase',
      description: 'Explore cutting-edge technologies that will shape the future of humanity',
      icon: '🚀',
      gradient: 'from-violet-600 to-purple-600',
      link: '/pages/RevolutionaryTechShowcase2025',
      features: ['Emerging technologies', 'Innovation labs', 'Research partnerships', 'Future predictions']
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
<<<<<<< HEAD

  const currentItem = contentItems[currentSlide];
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Featured Content</span>
            <Star className="w-4 h-4 text-yellow-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Latest Innovations
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge solutions, expert insights, and revolutionary technologies 
            that are shaping the future of business and technology.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
<<<<<<< HEAD
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
                    {/* Content Section */}
                    <div className="p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color}`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                            {item.type === 'blog' ? 'Article' : 'Service'}
                          </span>
                          {item.featured && (
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                          {item.title}
                        </h3>
                        
                        {item.subtitle && (
                          <p className="text-xl text-gray-600 mb-4 font-medium">
                            {item.subtitle}
                          </p>
                        )}
                        
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          {item.excerpt || item.description}
                        </p>
                      </div>

                      {/* Meta Information */}
                      <div className="space-y-4 mb-8">
                        {item.type === 'blog' && (
                          <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span>By {item.author}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {item.readTime}
                            </span>
                            <span>{item.category}</span>
                          </div>
                        )}
                        
                        {item.type === 'service' && (
                          <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span className="font-semibold text-lg text-gray-900">{item.price}</span>
                            <span>Enterprise Solutions</span>
                          </div>
                        )}

                        {/* Stats */}
                        <div className="flex items-center gap-6">
                          {Object.entries(item.stats).map(([key, value]) => (
                            <div key={key} className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-gray-400" />
                              <span className="text-sm font-semibold text-gray-700">{value}</span>
                              <span className="text-xs text-gray-500 capitalize">{key}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to={item.type === 'blog' ? `/blog/${item.slug}` : `/services/${item.slug}`}
                          className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${item.color} text-white hover:shadow-lg`}
                        >
                          {item.type === 'blog' ? (
                            <>
                              <BookOpen className="w-5 h-5" />
                              Read Article
                            </>
                          ) : (
                            <>
                              <ArrowRight className="w-5 h-5" />
                              Learn More
                            </>
                          )}
                        </Link>
                        
                        <button
                          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-full font-semibold transition-all duration-300 hover:bg-gray-50"
                        >
                          <Play className="w-5 h-5" />
                          Watch Demo
                        </button>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/40"></div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/images/placeholder-content.jpg';
                        }}
                      />
                      <div className="absolute bottom-6 right-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <item.icon className="w-8 h-8 text-gray-700" />
                        </div>
                      </div>
                    </div>
=======
          {/* Main Content Display */}
          <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content Info */}
              <div className="space-y-6">
                <div className="text-8xl mb-4">{contentItems[currentSlide].icon}</div>
                <h3 className="text-4xl font-bold mb-4">
                  {contentItems[currentSlide].title}
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                  {contentItems[currentSlide].description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {contentItems[currentSlide].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 bg-gradient-to-r ${contentItems[currentSlide].gradient} rounded-full flex items-center justify-center text-sm font-bold`}>
                        ✓
                      </div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a 
                    href={contentItems[currentSlide].link}
                    className={`bg-gradient-to-r ${contentItems[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center`}
                  >
                    Explore Technology →
                  </a>
                  <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Visual Demo Area */}
              <div className="bg-gradient-to-br from-gray-700/50 to-purple-700/50 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-6 animate-pulse">
                    {contentItems[currentSlide].icon}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
                  </div>
                </div>
<<<<<<< HEAD
=======
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50"
            >
              <span className="text-2xl">‹</span>
            </button>
            
            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAutoPlay 
                  ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${isAutoPlay ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
              {isAutoPlay ? 'Auto-play On' : 'Auto-play Off'}
            </button>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Discover how our innovative solutions can drive your success. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/ultimate-services-showcase-2025"
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 inline-flex items-center gap-2"
              >
                View All Services
                <Award className="w-5 h-5" />
              </Link>
            </div>
=======
        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-5 gap-4 mt-12">
          {contentItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                index === currentSlide
                  ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg scale-105`
                  : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-sm font-semibold text-center">{item.title}</div>
            </button>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Available Demos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-gray-300">Possibilities</div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
          </div>
        </div>
      </div>
    </div>
  );
};
<<<<<<< HEAD

export default EnhancedContentCarousel2025;
=======
export default EnhancedContentCarousel2025;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
