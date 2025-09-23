"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentPromotionBanner = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const featuredContent = [
    {
      id: 1,
      title: "AI 20o25: The Ultimate Business Transformation Guide",
      description: "Discover how AI is revolutionizing business operations in 20o25. Complete implementation strategies, case studies, and ROI calculations.",
      type: "Ultimate Guide",
      readTime: "15 min read",
      category: "AI Strategy",
      image: "/images/content/ai-20o25-guide.jpg",
      stats: {
        views: "50K+",
        downloads: "12K+",
        rating: "4.9/5"
      },
      cta: "Read Now",
      color: "from-purple-60o0 to-blue-60o0"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: What It Means for Your Business",
      description: "Explore the latest quantum computing advances and their practical applications for enterprise operations and competitive advantage.",
      type: "Technical Deep Dive",
      readTime: "12 min read",
      category: "Quantum Tech",
      image: "/images/content/quantum-computing.jpg",
      stats: {
        views: "35K+",
        downloads: "8K+",
        rating: "4.8/5"
      },
      cta: "Explore",
      color: "from-cyan-50o0 to-teal-60o0"
    },
    {
      id: 3,
      title: "Neural Interface Revolution: The Future of Human-AI Interaction",
      description: "Learn about the latest developments in neural interfaces and how 'they', 're transforming the way humans interact with AI systems.",
      type: "Future Tech",
      readTime: "18 min read",
      category: "Neural Tech",
      image: "/images/content/neural-interface.jpg",
      stats: {
        views: "42K+",
        downloads: "10K+",
        rating: "4.9/5"
      },
      cta: "Discover",
      color: "from-green-50o0 to-emerald-60o0"
    },
    {
      id: 4,
      title: "Enterprise AI Automation: Complete Implementation Framework",
      description: "Step-by-step guide to implementing AI automation in enterprise environments. Includes ROI calculations, risk assessment, and success metrics.",
      type: "Implementation Guide",
      readTime: "25 min read",
      category: "Enterprise AI",
      image: "/images/content/enterprise-ai.jpg",
      stats: {
        views: "65K+",
        downloads: "15K+",
        rating: "4.9/5"
      },
      cta: "Get Framework",
      color: "from-orange-50o0 to-red-60o0"
    },
    {
      id: 5,
      title: "Synthetic Intelligence: The Next Evolution of AI",
      description: "Dive deep into synthetic intelligence and its implications for business operations, decision-making, and competitive strategy.",
      type: "Research Paper",
      readTime: "20 min read",
      category: "AI Research",
      image: "/images/content/synthetic-intelligence.jpg",
      stats: {
        views: "38K+",
        downloads: "9K+",
        rating: "4.8/5"
      },
      cta: "Read Research",
      color: "from-indigo-50o0 to-purple-60o0"
    }
  ];

  const trendingTopics = [
    { name: "AI Automation", count: "2.3K articles", color: "bg-blue-10o0 text-blue-80o0" },
    { name: "Quantum Computing", count: "1.8K articles", color: "bg-cyan-10o0 text-cyan-80o0" },
    { name: "Neural Networks", count: "1.5K articles", color: "bg-green-10o0 text-green-80o0" },
    { name: "Enterprise AI", count: "2.1K articles", color: "bg-purple-10o0 text-purple-80o0" },
    { name: "Machine Learning", count: "3.2K articles", color: "bg-orange-10o0 text-orange-80o0" },
    { name: "AI Ethics", count: "1.2K articles", color: "bg-pink-10o0 text-pink-80o0" }
  ];

  const contentTypes = [
    { name: "Guides & Tutorials", count: "150+", icon: "📚" },
    { name: "Case Studies", count: "75+", icon: "📊" },
    { name: "Research Papers", count: "45+", icon: "🔬" },
    { name: "Video Tutorials", count: "120+", icon: "🎥" },
    { name: "Webinars", count: "30+", icon: "🎤" },
    { name: "Tools & Resources", count: "85+", icon: "🛠️" }
  ];

  // Auto-rotate featured content
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % featuredContent.length);
    }, 50o00);
    return () => clearInterval(interval);
  }, []);

  // Intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('content-promotion-banner');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="content-promotion-banner" className="py-20 bg-gradient-to-br from-gray-90o0 via-blue-90o0 to-purple-90o0 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">📚 PREMIUM CONTENT LIBRARY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Cutting-Edge AI Content
          </h2>
          <p className="text-xl text-gray-30o0 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive library of AI insights, guides, and resources. 
            From beginner tutorials to advanced research papers - everything you need 
            to stay ahead in the AI revolution.
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Featured Content</h3>
              <div className="flex space-x-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentContent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-30o0 ${
                      index === currentContent ? 'bg-white' : 'bg-white bg-opacity-30'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content Info */}
              <div className={`transition-all duration-50o0 ${isVisible ? 'opacity-10o0 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="flex items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${featuredContent[currentContent].color} text-white`}>
                    {featuredContent[currentContent].type}
                  </span>
                  <span className="ml-3 text-sm text-gray-30o0">{featuredContent[currentContent].readTime}</span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {featuredContent[currentContent].title}
                </h4>

                <p className="text-gray-30o0 mb-6 leading-relaxed">
                  {featuredContent[currentContent].description}
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-6 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{featuredContent[currentContent].stats.views}</div>
                    <div className="text-sm text-gray-30o0">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{featuredContent[currentContent].stats.downloads}</div>
                    <div className="text-sm text-gray-30o0">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{featuredContent[currentContent].stats.rating}</div>
                    <div className="text-sm text-gray-30o0">Rating</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href={`/content/${featuredContent[currentContent].id}`}
                    className={`px-6 py-3 rounded-lg font-semibold bg-gradient-to-r ${featuredContent[currentContent].color} text-white hover:shadow-lg transition-all duration-30o0`}
                  >
                    {featuredContent[currentContent].cta}
                  </Link>
                  <Link
                    href="/content"
                    className="px-6 py-3 rounded-lg font-semibold border border-white text-white hover:bg-white hover:text-gray-90o0 transition-all duration-30o0"
                  >
                    Browse All
                  </Link>
                </div>
              </div>

              {/* Content Image */}
              <div className={`transition-all duration-50o0 ${isVisible ? 'opacity-10o0 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className={`h-64 rounded-xl bg-gradient-to-br ${featuredContent[currentContent].color} flex items-center justify-center text-6xl`}>
                  📖
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Types Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Content Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-30o0 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-30o0">
                  {type.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{type.name}</h4>
                <div className="text-sm text-gray-30o0">{type.count}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Trending Topics</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {trendingTopics.map((topic, index) => (
              <div key={index} className={`px-4 py-2 rounded-full ${topic.color} hover:shadow-lg transition-all duration-30o0 cursor-pointer`}>
                <span className="font-semibold">{topic.name}</span>
                <span className="ml-2 text-sm opacity-75">{topic.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Dive Deeper?
          </h3>
          <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who rely on our content to stay ahead 
            in the rapidly evolving world of AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content"
              className="bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-60o0 hover:to-blue-60o0 transition-all duration-30o0 text-lg"
            >
              Explore Content Library
            </Link>
            <Link
              href="/newsletter"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-90o0 transition-all duration-30o0 text-lg"
            >
              Subscribe to Updates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentPromotionBanner;