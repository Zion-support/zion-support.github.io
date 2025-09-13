'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { XMarkIcon, SparklesIcon, BookOpenIcon, DocumentTextIcon, ChartBarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function UltraContentPromotionBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const featuredContent = [
    {
      title: "AI 2025: Revolutionary Breakthroughs",
      description: "Groundbreaking AI innovations reshaping entire industries and unlocking unprecedented possibilities",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      icon: "🚀",
      type: "Article",
      readTime: "12 min read",
      category: "Revolutionary AI",
      badge: "TRENDING"
    },
    {
      title: "$200M Manufacturing Success Story",
      description: "Complete case study: Fortune 500 manufacturer achieves massive cost savings through AI",
      href: "/case-studies/ai-2025-autonomous-manufacturing-revolution",
      icon: "🏭",
      type: "Case Study",
      readTime: "18 min read",
      category: "Success Story",
      badge: "FEATURED"
    },
    {
      title: "AI Autonomous Systems 2025",
      description: "Revolutionary automation solutions delivering 99.9% uptime and 60% cost reduction",
      href: "/services/ai-autonomous-systems-2025",
      icon: "🤖",
      type: "Service",
      readTime: "8 min read",
      category: "AI Solutions",
      badge: "NEW"
    }
  ];

  const stats = [
    { number: "200+", label: "New Articles" },
    { number: "50+", label: "Case Studies" },
    { number: "500+", label: "Pages of Content" },
    { number: "100K+", label: "Downloads" }
  ];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3">
              <SparklesIcon className="h-6 w-6 mr-3 animate-pulse" />
              <span className="text-lg font-bold">🚀 MEGA CONTENT DROP</span>
            </div>
            <div className="hidden md:flex items-center text-sm opacity-90">
              <span>January 28, 2025</span>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🎉 Revolutionary AI Content Just Released!
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-5xl mx-auto leading-relaxed">
            Discover our latest breakthrough content: Revolutionary AI Breakthroughs, $200M Manufacturing Success Stories, 
            and cutting-edge AI Autonomous Systems. Expert insights to accelerate your AI transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all text-lg shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center"
            >
              🎯 Explore All New Content
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/mega-content-showcase"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all text-lg hover:shadow-xl transform hover:scale-105"
            >
              📚 Mega Content Library
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40 hover:shadow-2xl transform hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{content.icon}</div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      content.badge === 'TRENDING' ? 'bg-red-500' :
                      content.badge === 'FEATURED' ? 'bg-yellow-500' :
                      'bg-green-500'
                    } text-white animate-pulse`}>
                      {content.badge}
                    </span>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">NEW</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-sm opacity-90 mb-6 leading-relaxed">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between text-xs opacity-75">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <BookOpenIcon className="h-4 w-4 mr-1" />
                      {content.readTime}
                    </span>
                    <span className="flex items-center">
                      <DocumentTextIcon className="h-4 w-4 mr-1" />
                      {content.type}
                    </span>
                  </div>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full font-medium">
                    {content.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm opacity-90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">🎯 Don't Miss Out on the AI Revolution!</h3>
            <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
              Join thousands of businesses already transforming with our cutting-edge AI solutions. 
              Get instant access to all new content and start your AI journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🚀 Start Your AI Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
              >
                🔍 Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}