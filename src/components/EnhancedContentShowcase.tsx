import React, { useState, useEffect } from 'react';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentSlides = [
    {
      id: 1,
      title: "Advanced Tech Solutions 2026",
      description: "Experience the next generation of technology solutions that are reshaping industries and creating unprecedented opportunities.",
      image: "🚀",
      gradient: "from-blue-600 to-purple-600",
      link: "/pages/AdvancedTechSolutions2026",
      features: ["AI-Powered Automation", "Quantum Computing", "Neural Interfaces", "Edge AI Computing"]
    },
    {
      id: 2,
      title: "Innovation Showcase 2026",
      description: "Discover the most revolutionary innovations that are reshaping our world and creating unprecedented opportunities for the future.",
      image: "🌟",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/InnovationShowcase2026",
      features: ["Synthetic Intelligence", "Quantum-Neural Fusion", "Neural Interface Revolution", "Advanced Quantum Computing"]
    },
    {
      id: 3,
      title: "AI Innovation Hub 2026",
      description: "The ultimate destination for artificial intelligence innovation, where cutting-edge AI technologies meet real-world applications.",
      image: "🧠",
      gradient: "from-blue-600 to-indigo-600",
      link: "/pages/AIInnovationHub2026",
      features: ["Machine Learning Platform", "NLP & Language Models", "Computer Vision", "Autonomous AI Agents"]
    },
    {
      id: 4,
      title: "Comprehensive Tech Insights 2026",
      description: "Deep insights into the latest technology trends, innovations, and their impact on businesses and society.",
      image: "📊",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/ComprehensiveTechInsights2026",
      features: ["Technology Trends", "Market Analysis", "Future Predictions", "Industry Insights"]
    },
    {
      id: 5,
      title: "Revolutionary Tech Blog 2026",
      description: "In-depth analysis and insights into the most revolutionary technologies that are changing our world.",
      image: "📚",
      gradient: "from-green-600 to-teal-600",
      link: "/pages/RevolutionaryTechBlog2026",
      features: ["Expert Analysis", "Trend Insights", "Future Predictions", "Technology Reviews"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 mb-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-4 animate-pulse">
            🌟 NEW CONTENT 2026 • REVOLUTIONARY TECHNOLOGIES
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Enhanced Content Showcase</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest revolutionary content featuring cutting-edge technologies and breakthrough innovations
          </p>
        </div>

        {/* Main Content Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Content Slide */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-6xl">{currentContent.image}</span>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Featured Content</div>
                    <h3 className="text-3xl font-bold text-gray-900">{currentContent.title}</h3>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {currentContent.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {currentContent.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={currentContent.link}
                    className={`bg-gradient-to-r ${currentContent.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                  >
                    Explore Content →
                  </a>
                  <a
                    href="#contact"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${currentContent.gradient} rounded-2xl p-8 text-white text-center`}>
                  <div className="text-8xl mb-4">{currentContent.image}</div>
                  <h4 className="text-2xl font-bold mb-4">{currentContent.title}</h4>
                  <div className="space-y-2">
                    {currentContent.features.map((feature, index) => (
                      <div key={index} className="text-white/80 text-sm">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {contentSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Quick Access to All Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {contentSlides.map((slide, index) => (
              <a
                key={slide.id}
                href={slide.link}
                className={`p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <div className="text-3xl mb-2">{slide.image}</div>
                <div className="text-sm font-semibold">{slide.title.split(' ')[0]}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-sm text-gray-600">New Content Pages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Technology Solutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">Use Cases Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Content Access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;