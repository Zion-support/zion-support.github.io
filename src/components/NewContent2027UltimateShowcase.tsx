"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NewContent2027UltimateShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentItems = [
    {
      title: "AI 2027: The Next Frontier - Ultimate Technology Revolution",
      description: "Discover the groundbreaking AI technologies that will reshape industries and deliver unprecedented business transformation.",
      link: "/ai-2027-next-frontier-ultimate-revolution",
      badge: "BREAKTHROUGH 2027",
      color: "from-purple-600 via-blue-600 to-indigo-600",
      icon: "🚀",
      stats: "25,000% ROI",
      category: "AI Innovation",
      readingTime: "30 min read",
      featured: true
    },
    {
      title: "Quantum Computing Revolution 2027: Enterprise Implementation Guide",
      description: "Complete roadmap for implementing quantum computing solutions in enterprise environments with proven ROI strategies.",
      link: "/quantum-computing-enterprise-implementation-2027",
      badge: "QUANTUM REVOLUTION",
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      icon: "⚛️",
      stats: "18,000% ROI",
      category: "Quantum Computing",
      readingTime: "35 min read",
      featured: true
    },
    {
      title: "Neural Interface Technology: The Future of Human-AI Collaboration",
      description: "Explore cutting-edge neural interface technologies that enable seamless brain-computer interaction for enhanced productivity.",
      link: "/neural-interface-technology-2027",
      badge: "NEURAL BREAKTHROUGH",
      color: "from-pink-500 via-rose-500 to-red-500",
      icon: "🧠",
      stats: "12,000% ROI",
      category: "Neural Technology",
      readingTime: "28 min read",
      featured: false
    },
    {
      title: "Autonomous Business Ecosystems: Self-Managing Enterprise Systems",
      description: "Learn how autonomous AI systems can manage entire business ecosystems with minimal human intervention.",
      link: "/autonomous-business-ecosystems-2027",
      badge: "AUTONOMOUS SYSTEMS",
      color: "from-orange-500 via-amber-500 to-yellow-500",
      icon: "🤖",
      stats: "22,000% ROI",
      category: "Autonomous AI",
      readingTime: "32 min read",
      featured: true
    },
    {
      title: "Synthetic Intelligence: Beyond Traditional AI Limitations",
      description: "Discover synthetic intelligence technologies that transcend current AI capabilities and create truly intelligent systems.",
      link: "/synthetic-intelligence-2027",
      badge: "SYNTHETIC INTELLIGENCE",
      color: "from-violet-500 via-purple-500 to-indigo-500",
      icon: "🌟",
      stats: "30,000% ROI",
      category: "Synthetic AI",
      readingTime: "40 min read",
      featured: true
    },
    {
      title: "Edge Computing Revolution: Distributed Intelligence Networks",
      description: "Comprehensive guide to implementing edge computing solutions for real-time AI processing and decision-making.",
      link: "/edge-computing-revolution-2027",
      badge: "EDGE COMPUTING",
      color: "from-green-500 via-lime-500 to-yellow-500",
      icon: "⚡",
      stats: "15,000% ROI",
      category: "Edge Computing",
      readingTime: "25 min read",
      featured: false
    }
  ];

  const featuredItems = contentItems.filter(item => item.featured);

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Main Banner */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🌟 NEW CONTENT 2027 - ULTIMATE SHOWCASE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              The Future is Here
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI technologies, quantum computing breakthroughs, and neural interface innovations 
              that will transform your business in 2027 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#featured-content"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Featured Content
              </a>
              <a
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                View All Resources
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Carousel */}
      <section id="featured-content" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Content 2027</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most revolutionary content that will shape the future of technology and business.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredItems.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-3">
                            <span className="text-3xl">{item.icon}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.color} text-white`}>
                              {item.badge}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600">{item.stats}</div>
                            <div className="text-sm text-gray-500">{item.readingTime}</div>
                          </div>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                              {item.category}
                            </span>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <span>⭐ Featured</span>
                              <span>•</span>
                              <span>🔥 Trending</span>
                            </div>
                          </div>
                          <a
                            href={item.link}
                            className={`px-6 py-3 bg-gradient-to-r ${item.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                          >
                            Read More →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 space-x-2">
              {featuredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Content Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Content Library 2027</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive library of cutting-edge technology content and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${item.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-green-600">{item.stats}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.color} text-white`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500">{item.readingTime}</span>
                    </div>
                    {item.featured && (
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-medium">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  
                  <a
                    href={item.link}
                    className={`mt-4 block w-full text-center px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Explore Content
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already leveraging our revolutionary AI technologies and content insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Browse All Resources
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewContent2027UltimateShowcase;