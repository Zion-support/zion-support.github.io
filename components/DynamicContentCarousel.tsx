import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const DynamicContentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredContent = [
    {
      title: "AI Advanced Automation 2025: Next-Generation Business Process Automation",
      description: "Discover the latest advances in AI-powered business process automation for 2025. Learn about intelligent workflows, autonomous decision-making, and enterprise automation strategies that deliver 300%+ ROI.",
      href: "/blog/ai-2025-advanced-automation",
      icon: "🤖",
      category: "AI Innovation",
      readTime: "22 min read",
      isNew: true,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "AI Cybersecurity Threats 2025: Protecting Against Advanced AI-Powered Attacks",
      description: "Comprehensive analysis of AI-powered cybersecurity threats in 2025. Learn about adversarial AI, deepfake attacks, automated exploits, and defense strategies to protect your organization.",
      href: "/blog/ai-2025-cybersecurity-threats",
      icon: "🛡️",
      category: "Cybersecurity",
      readTime: "28 min read",
      isNew: true,
      gradient: "from-red-500 to-orange-600"
    },
    {
      title: "AI Multimodal Applications 2025: The Future of Cross-Modal Intelligence",
      description: "Explore the revolutionary world of AI multimodal applications in 2025. Learn about vision-language models, audio-visual AI, and cross-modal intelligence transforming industries.",
      href: "/blog/ai-2025-multimodal-applications",
      icon: "🎭",
      category: "AI Innovation",
      readTime: "24 min read",
      isNew: true,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "$12M Healthcare Success: AI Diagnosis Case Study 2025",
      description: "Discover how a major healthcare system achieved 95% diagnostic accuracy and $12M in annual savings through AI-powered medical imaging and diagnosis automation.",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      icon: "🏥",
      category: "Case Study",
      readTime: "Case Study",
      isNew: true,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide for 2025. Step-by-step instructions, templates, checklists, and best practices for successful AI deployment.",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: "📚",
      category: "Free Resource",
      readTime: "200+ Pages",
      isNew: true,
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredContent.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredContent.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = featuredContent[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 FEATURED CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest AI & Tech Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our latest articles, case studies, and resources covering the most 
            important trends in AI, automation, and business transformation.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <div 
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <Link href={currentItem.href} className="block group">
              <div className={`bg-gradient-to-r ${currentItem.gradient} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative p-12 md:p-16">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {currentItem.icon}
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <span className="bg-white bg-opacity-20 rounded-full px-4 py-1 text-sm font-medium">
                          {currentItem.category}
                        </span>
                        {currentItem.isNew && (
                          <span className="bg-yellow-400 text-yellow-900 rounded-full px-4 py-1 text-sm font-medium">
                            NEW
                          </span>
                        )}
                        <span className="text-white text-opacity-80 text-sm">
                          {currentItem.readTime}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:underline">
                        {currentItem.title}
                      </h3>
                      <p className="text-xl text-white text-opacity-90 mb-6 leading-relaxed">
                        {currentItem.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <span className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                          Read Full Article →
                        </span>
                        <span className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors">
                          View All Content
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Featured Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.slice(0, 3).map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`bg-gradient-to-r ${item.gradient} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{item.icon}</div>
                      {item.isNew && (
                        <span className="bg-yellow-400 text-yellow-900 rounded-full px-3 py-1 text-xs font-medium">
                          NEW
                        </span>
                      )}
                    </div>
                    <div className="text-sm opacity-90 mb-2">{item.category}</div>
                    <h4 className="text-lg font-semibold mb-2 group-hover:underline">
                      {item.title}
                    </h4>
                    <div className="text-sm opacity-75">{item.readTime}</div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description.substring(0, 120)}...
                    </p>
                    <div className="mt-4 text-blue-600 font-medium group-hover:underline">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            href="/content-showcase"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg shadow-lg"
          >
            View All Content
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentCarousel;