import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, StarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';

export default function UltraContentPromotionBanner() {
  const featuredContent = [
    {
      title: "Advanced AI Architecture Patterns 2025",
      description: "Master microservices, event-driven design, and distributed AI systems",
      href: "/blog/ai-2025-advanced-ai-architecture",
      icon: "🏗️",
      category: "AI Architecture",
      readTime: "25 min",
      featured: true
    },
    {
      title: "AI Cybersecurity Revolution 2025",
      description: "Protect against next-gen threats with advanced AI security",
      href: "/blog/ai-2025-cybersecurity-revolution",
      icon: "🛡️",
      category: "AI Security",
      readTime: "22 min",
      featured: true
    },
    {
      title: "$200M Manufacturing Success Case Study",
      description: "How Fortune 500 achieved massive savings with AI autonomous systems",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      icon: "💰",
      category: "Case Study",
      readTime: "18 min",
      featured: true
    },
    {
      title: "Quantum Computing Breakthrough 2025",
      description: "Discover quantum AI and the future of computational intelligence",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      icon: "⚛️",
      category: "Quantum AI",
      readTime: "28 min",
      featured: true
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-pulse"></div>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-white opacity-10 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
            <StarIcon className="h-5 w-5 text-yellow-300 mr-2" />
            <span className="text-sm font-bold text-white">🚀 MEGA CONTENT DROP - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI Content Just Dropped!
          </h1>
          
          <p className="text-xl md:text-2xl text-indigo-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our biggest content update yet: Advanced AI Architecture, Cybersecurity Defense, 
            Quantum Computing Breakthroughs, Manufacturing Success Stories, and comprehensive implementation guides. 
            Everything you need to succeed with AI in 2025.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">25+</div>
              <div className="text-indigo-200 text-sm">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">8</div>
              <div className="text-indigo-200 text-sm">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-indigo-200 text-sm">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-indigo-200 text-sm">Downloads</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🎯 Explore All New Content
              <ArrowRightIcon className="inline-block ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/resources/ai-implementation-master-guide-2026"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-indigo-600 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              📚 Download Master Guide
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {content.icon}
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  {content.featured && (
                    <StarIcon className="h-4 w-4 text-yellow-300" />
                  )}
                  <span className="text-xs font-medium text-yellow-200 bg-yellow-400 bg-opacity-20 px-2 py-1 rounded-full">
                    {content.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-200 transition-colors line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-sm text-indigo-200 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-indigo-300">
                  <div className="flex items-center">
                    <ClockIcon className="h-3 w-3 mr-1" />
                    {content.readTime}
                  </div>
                  <div className="flex items-center group-hover:text-white transition-colors">
                    Read More
                    <ArrowRightIcon className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Content Preview */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Plus 20+ More Articles, Case Studies & Resources
            </h3>
            <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
              From AI implementation guides to real-world success stories, our comprehensive content library 
              has everything you need to accelerate your AI transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white">AI Automation</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white">Cybersecurity</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white">Case Studies</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white">Free Resources</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white">Implementation Guides</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}